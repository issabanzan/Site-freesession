import { Request, Response } from "express";// pour pouvoir utiliser les types Request et Response
import Core from "../Core";// pour pouvoir utiliser les méthodes de la classe Core
import { acuityConfiguration } from "./booking.config";
import { AcuityAppointmentDate, AcuityAppointmentTime, AcuityAppointmentType, AcuityCalendar } from "./interfaces"; 
import axios, { AxiosError } from "axios"; 
import Database from "../Database"; //pour pouvoir utiliser les méthodes de la classe Database
import bcrypt from 'bcrypt';


class Booking extends Core { // la classe Booking étend la classe Core ça veut dire que la classe Booking hérite de la classe Core
  constructor() {// un constructeur est une méthode qui est appelée automatiquement lorsqu'une instance de la classe est créée
    super(); // super() appelle le constructeur de la classe parente (Core) et permet d'accéder aux méthodes de la classe parente
  }

  private getBookingAuthorizationHeader = () => { //private parceque cette méthode ne sera utilisée que dans cette classe
    const encodedCredentials = btoa( // btoa() est une fonction javascript qui permet de convertir une chaine de caractères en base64
      `${acuityConfiguration.user}:${acuityConfiguration.password}`
    ); // on encode le user et le password en base64 pour pouvoir les utiliser dans l'entête de la requête http 

    return { // on retourne un objet qui contient l'entête de la requête http
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

   public getAllAppointmentTypes = async (): Promise<AcuityAppointmentType[]> => { //public parceque cette méthode sera utilisée à l'extérieur de cette classe
    try {
      const header = this.getBookingAuthorizationHeader(); // on récupère l'entête de la requête http de type Basic Authentification pour pouvoir accéder à l'API Acuity

      const response = await this.get<AcuityAppointmentType[]>( // on envoie une requête http de type GET à l'API Acuity pour récupérer la liste des types de rendez-vous
        `${acuityConfiguration.endpoint}/appointment-types`, // on envoie une requête http de type GET à l'API Acuity pour récupérer la liste des types de rendez-vous
        header
      );

      return response;
    } catch (error) {
      this.logError(error);
    }
  };


  public getCalendarsIdsFromAppointmentTypeId = async (request: Request, res: Response) => {
    try {
      const appointmentTypeID = this.getQueryParams( // je récupère l'ID du type de rendez-vous à partir des paramètres de la requête http 
        request,
        "appointmentTypeID", // le nom du paramètre de la requête http qui contient l'ID du type de rendez-vous
        false
      );

      const resolvedAppointmentTypeID = Number(
        appointmentTypeID ?? acuityConfiguration.defaultAppointmentTypeID
      ); // je convertis l'ID du type de rendez-vous en nombre entier et je stocke la valeur dans la variable resolvedAppointmentTypeID

      const appointmentTypes = await this.getAllAppointmentTypes(); // cosnt appointmentTypes contient la liste des types de rendez-vous

      const appointmentTypeFound = this.getAppointmentTypeFromId(
        resolvedAppointmentTypeID,
        appointmentTypes
      ); 

      if (!appointmentTypeFound) { // si le type de rendez-vous n'est pas trouvé on retourne une erreur
        throw new Error(
          `No appointment type found for id : ${appointmentTypeID}`
        );
      }

      const { calendarIDs } = appointmentTypeFound; // appoitmentTypeFound contient les IDs des calendriers

      const calendars = await this.getAllCalendars(); // la liste des calendriers

      const calendarsFound = this.getCalendarFromIds(calendarIDs, calendars); //liste des calendriers trouvés à partir de leurs IDs

      if (calendarsFound.length === 0) { // si aucun calendrier n'est trouvé on retourne une erreur
        throw new Error(
          `No calendars found for the appointment type : ${resolvedAppointmentTypeID}`
        );
      }

      return res.status(200).send({ //res status 200 pour dire que la requête a réussi et on envoie la liste des calendriers trouvés
        isSuccess: true, // un booléen qui indique si la requête a réussi ou non
        calendars: calendarsFound, // ca  caleendars contient la liste des calendriers trouvés
      });
    } catch (error: unknown) { // si une erreur est levée on entre dans le bloc catch et on récupère l'erreur dans la variable error
      return res.status(500).send({ //res status 500 pour dire que la requête a échoué
        isSucess: false, // un booléen qui indique si la requête a réussi ou non
        calendars: [], //calendars contient un tableau vide car aucun calendrier n'est trouvé
        error, // error contient l'erreur levée
      });
    }
  }; 

  private getAppointmentTypeFromId = ( // cette méthode permet de récupérer le type de rendez-vous à partir de l'ID du type de rendez-vous
    appointmentTypeIdToFind: number, 
    appointmentTypes: AcuityAppointmentType[] // la liste des types de rendez-vous
  ): AcuityAppointmentType | undefined => { // cette méthode retourne un objet de type AcuityAppointmentType ou undefined
    return appointmentTypes.find( // retourne le premier élément du tableau qui est trouvé
      (appointmentType) => appointmentType.id === appointmentTypeIdToFind // appointmentType.id  est égal à appointmentTypeIdToFind ()
    );
  }; // en gros cette méthode permet de récupérer le type de rendez-vous à partir de l'ID du type de rendez-vous

  private getCalendarFromIds = (calendarsIdsToFinds: number[], calendars: AcuityCalendar[]): AcuityCalendar[] | undefined => { 
    return calendars.filter((calendar) => // on utilise la méthode filter() pour chercher les calendriers à partir de leurs IDs
      calendarsIdsToFinds.includes(calendar.id) // je compare les IDs des calendriers avec les IDs des calendriers à chercher
    );
  }; // getCalendarFromIds() retourne un tableau qui contient les calendriers trouvés à partir de leurs IDs






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


  public createAppointment = async (req: Request, res: Response): Promise<void> => { // cette méthode permet de créer un rendez-vous
    try {
      const { firstName, lastName, email, date, time, appointmentTypeID, calendar, phone, password } = req.body;


      if (!firstName || !lastName || !email || !date || !time || !appointmentTypeID || !calendar || !phone || !password) {
        res.status(400).json({ message: 'les champs manquent' }); // si un ou plusieurs champs manquent on retourne un message d'erreur
        return;
      }
      


      const dateTime = new Date(`${date}T${time}`).toISOString(); // je convertis la date et l'heure en format ISO 8601


      const postData = { // je stocke les données du rendez-vous dans la variable postData
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


      const apiResponse = await axios.post( // j'envoie une requête http de type POST à l'API Acuity pour créer un rendez-vous
        `${acuityConfiguration.endpoint}/appointments`, 
        postData,
        { headers: header }
      );

      console.log("apiResponse :");
      console.log(apiResponse);
      const acuityUserId = apiResponse.data.id; // je récupère l'ID du client à partir de la réponse de l'API Acuity
      console.log(acuityUserId); // j'affiche l'ID du client dans la console



      const db = new Database(); // je crée une instance de la classe Database
      await db.createUser(acuityUserId, firstName, lastName, email, phone, password); // j'ajoute le client dans la base de données
      await db.createAppointement(acuityUserId, appointmentTypeID, calendar, date, time); // j'ajoute le rendez-vous dans la base de données




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
      const postData = { // je stocke les données du client dans la variable postData
        firstName,
        lastName,
        email,
        phone,
      };
  
      const header = this.getBookingAuthorizationHeader();
  
      const url = `${process.env.ACUITY_BASE_URL}/appointments/${acuityUserId}`; 
  
      const response = await axios.put(url, postData, { headers: header }); 
  
      console.log('Client lis a jour dans acuity aevc sucees:', response.data); // j'affiche la réponse de l'API Acuity dans la console
      return response.data;  // je retourne la réponse de l'API Acuity
    } catch (error) { // si une erreur est levée on entre dans le bloc catch et on récupère l'erreur dans la variable error
      console.error('Erreur de mis de jour', error); // j'affiche l'erreur dans la console
      throw error; // je relance l'erreur pour qu'elle soit gérée dans le bloc catch de la méthode appelante
    }
  };
  

  public rescheduleAppointment = async (req: Request, res: Response): Promise<void> => {
    const { id, newDate, newTime } = req.body;

    if (!id || !newDate || !newTime) { // si un ou plusieurs champs manquent on retourne un message d'erreur
      res.status(400).json({ message: 'des champs manquent' });
      return; 
    
    }

    try { // si une erreur est levée on entre dans le bloc catch et on récupère l'erreur dans la variable error
      const dateTime = new Date(`${newDate}T${newTime}`).toISOString(); // je convertis la date et l'heure en format ISO 8601

      const url = `${acuityConfiguration.endpoint}/appointments/${id}/reschedule`;

      const postData = { // je stocke les données du rendez-vous dans la variable postData date et heure
        datetime: dateTime
      };

      const header = this.getBookingAuthorizationHeader();

      const response = await axios.put(url, postData, { headers: header }); // j'envoie une requête http de type PUT à l'API Acuity pour modifier le rendez-vous

      
      const acuityUserId = response.data.user.id;// je récupère l'ID du client à partir de la réponse de l'API Acuity
 
      console.log(acuityUserId); // j'affiche l'ID du client dans la console

      const db = new Database(); // je crée une instance de la classe Database
      await db.updateAppointment(newDate, newTime, acuityUserId); // j'ajoute le rendez-vous dans la base de données

      res.status(200).json({ message: 'rendez vous reprogrammer avec succes' }); // je retourne un message de succès
    } catch (error) { // si une erreur est levée on entre dans le bloc catch et on récupère l'erreur dans la variable error
      this.logError(error); // j'affiche l'erreur dans la console
      if (axios.isAxiosError(error) && error.response) {  
        res.status(error.response.status).json(error.response.data);
        return; 
      
      }
      res.status(500).json({ message: 'erreur du serveur' });
    }
};



public loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body; // Le mot de passe fourni par l'utilisateur lors de la connexion.
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

    // Afficher le mot de passe fourni (en clair) et le préfixe du hash du mot de passe stocké pour débogage
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
    } catch (error) { // si une erreur est levée on entre dans le bloc catch et on récupère l'erreur dans la variable error
      if (axios.isAxiosError(error)) { // si l'erreur est de type AxiosError on entre dans le bloc if
        const axiosError = error as AxiosError; // on convertit la variable error en AxiosError et on la stocke dans la variable axiosError
        if (axiosError.response) { // si la propriété response de axiosError est définie on entre dans le bloc if
          res.status(400).json(axiosError.response.data); // en cas d'erreur on retourne le message d'erreur 400
        }
      } else { //sinon on entre dans le bloc else pour gérer les autres types d'erreurs
        res.status(400).json({ message: error.message }); // en cas d'erreur on retourne le message d'erreur 400
      }
    }
  }; 

  
}



export default Booking;
