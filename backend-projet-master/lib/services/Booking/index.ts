import { Request, Response} from "express";
import Core from "../Core";
import { acuityConfiguration } from "./booking.config";
import { AcuityAppointmentDate, AcuityAppointmentTime, AcuityAppointmentType, AcuityCalendar } from "./interfaces"; 
import axios, { AxiosError } from "axios"; 
import Database from "../Database"; 
import bcrypt from 'bcrypt';

class Booking extends Core { 
  constructor() {
    super(); 
  }

  private getBookingAuthorizationHeader = () => { 
    const encodedCredentials = btoa(
      `${acuityConfiguration.user}:${acuityConfiguration.password}`
    );  

    return { 
      Authorization: `Basic ${encodedCredentials}`,
    };
  };

  private getAllCalendars = async (): Promise<AcuityCalendar[]> => {  
    try {
      const header = this.getBookingAuthorizationHeader();
      const response = await this.get<AcuityCalendar[]>( 
        `${acuityConfiguration.endpoint}/calendars`, 
        header 
      );

      return response;
    } catch (error) {
      this.logError(error);
    }
  };

   public getAllAppointmentTypes = async (): Promise<AcuityAppointmentType[]> => { 
    try {
      const header = this.getBookingAuthorizationHeader();

      const response = await this.get<AcuityAppointmentType[]>( 
        `${acuityConfiguration.endpoint}/appointment-types`, 
        header
      );

      return response;
    } catch (error) {
      this.logError(error);
    }
  };

  public getCalendarsIdsFromAppointmentTypeId = async (request: Request, res: Response) => {
    try {
      const appointmentTypeID = this.getQueryParams( 
        request,
        "appointmentTypeID", 
        false
      );

      const resolvedAppointmentTypeID = Number(
        appointmentTypeID ?? acuityConfiguration.defaultAppointmentTypeID
      ); 

      const appointmentTypes = await this.getAllAppointmentTypes(); 

      const appointmentTypeFound = this.getAppointmentTypeFromId(
        resolvedAppointmentTypeID,
        appointmentTypes
      ); 

      if (!appointmentTypeFound) { 
        throw new Error(
          `No appointment type found for id : ${appointmentTypeID}`
        );
      }

      const { calendarIDs } = appointmentTypeFound;

      const calendars = await this.getAllCalendars(); 

      const calendarsFound = this.getCalendarFromIds(calendarIDs, calendars); 

      if (calendarsFound.length === 0) { 
        throw new Error(
          `No calendars found for the appointment type : ${resolvedAppointmentTypeID}`
        );
      }

      return res.status(200).send({
        isSuccess: true,
        calendars: calendarsFound, 
      });
    } catch (error: unknown) {
      return res.status(500).send({
        isSucess: false, 
        calendars: [],
        error,
      });
    }
  }; 

  private getAppointmentTypeFromId = ( 
    appointmentTypeIdToFind: number, 
    appointmentTypes: AcuityAppointmentType[] 
  ): AcuityAppointmentType | undefined => { 
    return appointmentTypes.find( 
      (appointmentType) => appointmentType.id === appointmentTypeIdToFind 
    );
  }; 

  private getCalendarFromIds = (calendarsIdsToFinds: number[], calendars: AcuityCalendar[]): AcuityCalendar[] | undefined => { 
    return calendars.filter((calendar) => 
      calendarsIdsToFinds.includes(calendar.id) 
    );
  }; 

  public createClient = async (req: Request, res: Response): Promise<void> => {
    try {
      const { firstName, lastName, email, phone } = req.body;

      const postData = {
        firstName,
        lastName,
        email,
        phone,
      };

      const header = this.getBookingAuthorizationHeader();

      const response = await axios.post(
        `${acuityConfiguration.endpoint}/clients`,
        postData,
        { headers: header }
      );

      res.status(200).json(response.data);
    } catch (error) {

    }
  };


  public createAppointment = async (req: Request, res: Response): Promise<void> => { 
    try {
      const { firstName, lastName, email, date, time, appointmentTypeID, calendar, phone, password } = req.body;


      if (!firstName || !lastName || !email || !date || !time || !appointmentTypeID || !calendar || !phone || !password) {
        res.status(400).json({ message: 'les champs manquent' }); 
        return;
      }
      
      const dateTime = new Date(`${date}T${time}`).toISOString(); 
      const postData = { 
        firstName,
        lastName,
        email,
        phone,
        datetime: dateTime,
        appointmentTypeID,
        calendar, 
        password,
      };

      const header = this.getBookingAuthorizationHeader();


      const apiResponse = await axios.post( 
        `${acuityConfiguration.endpoint}/appointments`, 
        postData,
        { headers: header }
      );

      console.log("apiResponse :");
      console.log(apiResponse);
      const acuityUserId = apiResponse.data.id; 
      console.log(acuityUserId);



      const db = new Database(); 
      await db.createUser(acuityUserId, firstName, lastName, email, phone, password); 
      await db.createAppointement(acuityUserId, appointmentTypeID, calendar, date, time); 




      res.status(200).json({ message: 'le rendez vous et utilisteur créer avec succès ', appointmentData: apiResponse.data });

    } catch (error) {
      console.error('erreurs lors de la creation du rendez vous:', error);


      if (!res.headersSent) {
        if (axios.isAxiosError(error)) {
          res.status(error.response?.status || 500).json(error.response?.data || { message: " erreur." });
        } else {
          res.status(500).json({ message: error.message });
        }
      }

    }
  };

  public updateClientInAcuity = async (acuityUserId: number, firstName: string, lastName: string, email: string, phone: string): Promise<void> => {
    try {
      const postData = { 
        firstName,
        lastName,
        email,
        phone,
      };
  
      const header = this.getBookingAuthorizationHeader();
  
      const url = `${process.env.ACUITY_BASE_URL}/appointments/${acuityUserId}`; 
  
      const response = await axios.put(url, postData, { headers: header }); 
  
      console.log('Client lis a jour dans acuity aevc sucees:', response.data); 
      return response.data;  
    } catch (error) {
      console.error('Erreur de mis de jour', error); 
      throw error;
    }
  };
  

  public rescheduleAppointment = async (req: Request, res: Response): Promise<void> => {
    const { id, newDate, newTime } = req.body;

    if (!id || !newDate || !newTime) { 
      res.status(400).json({ message: 'des champs manquent' });
      return; 
    
    }

    try { 
      const dateTime = new Date(`${newDate}T${newTime}`).toISOString(); 

      const url = `${acuityConfiguration.endpoint}/appointments/${id}/reschedule`;

      const postData = { 
        datetime: dateTime
      };

      const header = this.getBookingAuthorizationHeader();

      const response = await axios.put(url, postData, { headers: header }); 

      
      const acuityUserId = response.data.user.id;
 
      console.log(acuityUserId); 

      const db = new Database();
      await db.updateAppointment(newDate, newTime, acuityUserId); 

      res.status(200).json({ message: 'rendez vous reprogrammer avec succes' }); 
    } catch (error) {
      this.logError(error); 
      if (axios.isAxiosError(error) && error.response) {  
        res.status(error.response.status).json(error.response.data);
        return; 
      
      }
      res.status(500).json({ message: 'erreur du serveur' });
    }
};


public loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body; 
  if (!email || !password) {
    res.status(400).json({ message: 'Email and password are required.' });
    return;
  }
  
  try {
    const db = new Database();
    const user = await db.findUserByEmail(email);
    if (!user) {
      res.status(401).json({ message: 'Invalid login credentials.' });
      return;
    }

    
    console.log("Mot de passe fourni (en clair):", password);
    console.log("Préfixe du hash du mot de passe stocké:", user.password_hash.substring(0, 7));

    const isMatch = await bcrypt.compare(password, user.password_hash);
    console.log("Résultat de la comparaison:", isMatch ? "Correspondance" : "Pas de correspondance");

    if (!isMatch) {
      console.log("Les mots de passe ne correspondent pas.");
      res.status(401).json({ message: 'Invalid login credentials.' });
      return;
    }
    
    console.log("Les mots de passe correspondent.");
    res.status(200).json({ message: 'Authentication successful', acuityUserId: user.user_id });
  } catch (error) {
    console.error('Error during the login process:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

public fetchAppointmentDates = async (req: Request, res: Response): Promise<void> => { // 
    try {
      const { appointmentTypeID, month, calendarID } = req.query;

      const header = this.getBookingAuthorizationHeader(); //

      const response = await this.get<AcuityAppointmentDate[]>(
        `${acuityConfiguration.endpoint}/availability/dates?appointmentTypeID=${Number(appointmentTypeID)}&month=${String(month)}&calendarID=${Number(calendarID)}&timezone=Europe/Paris`,
        header
      );

      res.json(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          res.status(400).json(axiosError.response.data);
        }
      } else {
        res.status(400).json({ message: error.message });
      }
    }
  };

  public fetchAppointmentTimes = async (req: Request, res: Response): Promise<void> => {
    try {
      const { appointmentTypeID, calendarID, date } = req.query;

      const header = this.getBookingAuthorizationHeader();

      const response = await this.get<AcuityAppointmentTime[]>(
        `${acuityConfiguration.endpoint}/availability/times?appointmentTypeID=${Number(appointmentTypeID)}
        &date=${String(date)}&calendarID=${Number(calendarID)}&timezone=Europe/Paris`,
        header
      );

      res.json(response);
    } catch (error) { 
      if (axios.isAxiosError(error)) { 
        const axiosError = error as AxiosError; 
        if (axiosError.response) { 
          res.status(400).json(axiosError.response.data); 
        }
      } else { 
        res.status(400).json({ message: error.message }); 
      }
    }
  }; 

  
}



export default Booking;
