/* eslint-disable react-refresh/only-export-components */
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import PresentationHeader from './components/PresentationHeader';
import { useState } from 'react';
import Header from '../../shared/components/Header';
import NavigationLinks from './components/NavigationLinks';
import DetailsCard from './components/DetailsCard';
import { AlignLeft, Clock } from 'react-feather';
import usePractitionerService from '../../app_hooks/usePractitionerService';
import { PractitionerProvider } from '../../app_contexts/Practitioner';
import Loading from '../Loading/Loading';
import { Heart, Home } from 'react-feather';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import StripeContainer from './components/StripeContainer';

const PraticionerDetails = () => {
  const [selectedAppointmentType, setSelectedAppointmentType] = useState('');
  const [appointmentTypes, setAppointmentTypes] = useState([]);
  const [calendars, setCalendars] = useState([]);
  const [selectedCalendar, setSelectedCalendar] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPhoneError('');
    setPasswordError('');

    if (!firstName || firstName.length < 2) {
      setFirstNameError('The firstName must contain at least 2 characters');
      isValid = false;
    }


    if (!lastName || lastName.length < 2) {
      setLastNameError('The name must contain at least 2 characters');
      isValid = false;
    }


    if (!email || !Emailvalidate(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    }
    if (!phone) {
      setPhoneError('Please enter your phone number');
      isValid = false;
    }
    if (!password || !Passwordvalidate(password)) {
      setPasswordError('The password must be at least 8 characters long, include letters, numbers and special characters.');
      isValid = false;
    }

    if (!isValid) {

      return;
    }

    const formatDate = (date) => {
      if (!(date instanceof Date)) return '';

      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');


      const day = date.getDate().toString().padStart(2, '0');

      return `${year}-${month}-${day}`;
    };
    const formattedDate = formatDate(selectedDate);
    console.log('Formatdate', formattedDate);
    const timeParts = selectedTime.split(':');
    const appointmentDate = new Date(selectedDate);
    appointmentDate.setHours(parseInt(timeParts[0]), parseInt(timeParts[1]), 0, 0);

    const formattedTime = appointmentDate.toISOString().split('T')[1].substring(0, 5);

    try {
      const formattedDate = selectedDate ? formatDate(selectedDate) : '';
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/book-appointment`, {
        firstName,
        lastName,
        email,
        phone,
        password,
        appointmentTypeID: selectedAppointmentType,
        calendar: selectedCalendar,
        date: formattedDate,
        time: formattedTime,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setShowInput(false);
      setSelectedDate(null);
      setSelectedTime(null);
    } catch (error) {
      console.error(error);
    }
  };

  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const handleDateChange = (date) => {

    console.log(date)
    setSelectedDate(date);
    fetchAvailableTimes(date);
  };


  const fetchAppointmentTypes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/appointment-types/all`);

      const specificAppointmentType = response.data.filter(appointmentType => appointmentType.id === parseInt(import.meta.env.VITE_FREE_RDV_BOOKING_APPOINTMENT_TYPE_ID)); // Filtrer les types de rendez-vous pour obtenir le type de rendez-vous spécifique
      setAppointmentTypes(specificAppointmentType);

      if (specificAppointmentType.length > 0) {
        setSelectedAppointmentType(specificAppointmentType[0].id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAppointmentTypeChange = (e) => {
    const appointmentTypeId = e.target.value;

    setSelectedAppointmentType(appointmentTypeId);
  };

  useEffect(() => {
    console.log(`Le type de rendez-vous sélectionné est: ${selectedAppointmentType}`);
  }, [selectedAppointmentType]);

  const Passwordvalidate = (password) => {

    const hasValidLength = password.length >= 8;

    const hasUpperCase = /[A-Z]/.test(password);

    const hasLowerCase = /[a-z]/.test(password);

    const hasNumbers = /\d/.test(password);

    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return hasValidLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars;
  };

  const Emailvalidate = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };


  const fetchCalendars = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/calendars/all`);
      const filteredData = response.data.calendars.map(calendar => ({
        id: calendar.id,
        name: calendar.name,
        appointmentTypes: calendar.appointmentTypes
      }));
      setCalendars(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAppointmentTypes();
    fetchCalendars();
  }, []);

  const fetchAvailableDates = async () => {
    const appointmentTypeID = `${import.meta.env.VITE_FREE_RDV_BOOKING_APPOINTMENT_TYPE_ID}`;
    const selectedCalendarID = selectedCalendar;
    const currentYear = new Date().getFullYear();
    let allAvailableSlots = [];

    try {

      const promises = Array.from({ length: 12 }, (_, index) => {
        const month = index + 1;
        const monthFormatted = `${currentYear}-${month.toString().padStart(2, '0')}`;

        return axios.get(`${import.meta.env.VITE_BACKEND_URL}/fetch_appointment_dates`, {
          params: {
            appointmentTypeID,
            month: monthFormatted,
            calendarID: selectedCalendarID,
          }
        }).then(response => response.data.map(dateObj => {
          const dateUTC = new Date(dateObj.date);
          return new Date(dateUTC.getTime() + dateUTC.getTimezoneOffset() * 60000);
        }));
      });

      const results = await Promise.all(promises);

      allAvailableSlots = results.flat();

      setAvailableSlots(allAvailableSlots);
    } catch (error) {
      console.error('Erreur lors de la récupération des dates disponibles :', error);
      setAvailableSlots([]);
    }
  };

  useEffect(() => {
    if (selectedCalendar) {
      fetchAvailableDates();
    }
  }, [selectedAppointmentType, selectedCalendar]);

  const fetchAvailableTimes = async (date) => {
    const parisDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
      .toISOString()
      .replace(/T.*$/, '');
    console.log('parisDate', parisDate)

    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/fetch_appointment_times`, {
        params: {
          appointmentTypeID: selectedAppointmentType,
          calendarID: selectedCalendar,
          date: parisDate,
        },
      });

      const timesInParis = response.data.map((timeSlot) => {
        let dateTime = new Date(timeSlot.time);
        let timeString = dateTime.toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Europe/Paris'
        });
        return { ...timeSlot, time: timeString };
      });
      setAvailableTimes(timesInParis);
    } catch (error) {
      console.error('Error fetching available times:', error);
      setAvailableTimes([]);
    }
  };

  const service = usePractitionerService();

  const [practitioner, setPractitioner] = useState(undefined);

  useEffect(() => {
    const get = async () => {
      const resovedPractitioner = await service.getPractionerDetails(id);
      setPractitioner(resovedPractitioner);
    };

    get();
  }, [service, id]);

  const [showInput, setShowInput] = useState(false);

  return (
    practitioner === undefined ? <Loading /> :
      <div className='bg-slate-100 h-screen w-screen overflow-y-auto'>
        <Header />
        <PresentationHeader practitioner={practitioner} />
        <NavigationLinks />
        <section className='flex flex-col sm:flex-row gap-4 py-4 mx-auto max-w-7xl'>
          <div className="flex flex-col gap-3 w-full">
            <DetailsCard id="#presentation" icon={<AlignLeft className='w-4 h-4 text-cyan-600' />} title="Présentation">
              <p className="text-slate-600 text-sm mb-2 inter">{practitioner.description}</p>
            </DetailsCard>

            <DetailsCard id="#openings_hours" icon={<Clock className='w-4 h-4 text-cyan-600' />} title="Horaires & contact">
              <div className='grid grid-cols-2 gap-8'>

                <div>
                  <h5 className="text-slate-700 font-bold text-sm mb-2">Hours</h5>
                  <p className="text-slate-600 text-sm mb-2 inter">{practitioner.openingHours}</p>
                </div>

                <div>
                  <h5 className="text-slate-700 font-bold text-sm mb-2">Contact</h5>
                  <p className="text-slate-600 text-sm mb-2 inter">{practitioner.contact}</p>
                </div>
              </div>
            </DetailsCard>
            <DetailsCard id="#specialites" icon={<AlignLeft className='w-4 h-4 text-cyan-600' />} title="Specialties">
              <div className='grid grid-cols-2 gap-8'>
                <div>
                  <h5 className="text-slate-700 font-bold text-sm mb-2">Specialist</h5>
                  <p className="text-slate-600 text-sm mb-2 inter">{practitioner.specialist.specialities[0]},
                    {practitioner.specialist.specialities[1]}, {practitioner.specialist.specialities[2]}</p>

                </div>
                <div className='ml-50'>
                  <h5 className="text-slate-700 font-bold text-sm mb-2">Languages</h5>
                  <p className="text-slate-600 text-sm mb-2 inter">{practitioner.languages[0]}, {practitioner.languages[1]}</p>
                </div>
              </div>
            </DetailsCard>
          </div>

          <DetailsCard title="In summary ">
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <Heart className="w-4 h-4 text-cyan-600 mr-2" />
                <p className="text-slate-600 text-sm mb-2 inter">Accepts new patients on  Free session</p>
              </div>

              <div className="flex items-center">
                <Home className="w-4 h-4 text-cyan-600 mr-2" />
                <p className="text-slate-600 text-sm mb-2 inter">Au Millenium<br />390 Avenue des Abrivados, 34400 Lunel</p>
              </div>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowInput(!showInput)}>
                Book an Appointment</button>

              {showInput && appointmentTypes.length > 0 && (
                <select
                  id="appointmentType"
                  value={selectedAppointmentType}
                  onChange={(e) => handleAppointmentTypeChange(e.target.value)}
                  required
                >
                  <option value="" disabled>Choose appointment type</option>
                  {appointmentTypes.map((type) => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              )}

              {selectedAppointmentType && showInput && (

                <select id="calendar"
                  value={selectedCalendar}
                  onChange={(e) => setSelectedCalendar(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="" disabled>Choose calendar</option>
                  {
                    calendars.map((calendar) => (
                      <option key={calendar.id} value={calendar.id}>
                        {calendar.name}
                      </option>
                    ))
                  }
                </select>
              )}

              {showInput && selectedCalendar && (
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    tileDisabled={({ date, view }) =>
                      view === 'month' && !availableSlots.some(availableDate =>
                        availableDate.toISOString().slice(0, 10) === date.toISOString().slice(0, 10))
                    }
                    className="react-calendar"
                  />
                  {selectedDate && availableTimes.length > 0 && (
                    <div className="flex flex-col bg-white shadow rounded-md overflow-hidden">
                      <div className="overflow-y-auto" style={{ maxHeight: '200px' }}>

                        {availableTimes.map((timeSlot, index) => {
                          return (
                            <label key={index} className="flex items-center border-b last:border-b-0 px-4 py-2 cursor-pointer">
                              <input
                                type="radio"
                                name="time"
                                value={timeSlot.time}
                                className="form-radio text-blue-600"
                                onChange={() => setSelectedTime(timeSlot.time)}
                              />

                              <span className="ml-2 text-sm text-gray-700">{timeSlot.time}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}

                </div>
              )}

              {selectedTime && ( // Afficher le formulaire de prise de rendez-vous si une heure est sélectionnée 
                <div className="mt-4">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name *</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={`border-gray-500 border-solid border-2 ${firstNameError ? 'input-error' : ''}`}
                      />
                      {firstNameError && <p className="text-red-500 text-xs italic">{firstNameError}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name *</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={`border-gray-500 border-solid border-2 $lastNameError ? 'input-error' : ''}`}
                      />
                      {lastNameError && <p className="text-red-500 text-xs italic">{lastNameError}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`border-gray-500 border-solid border-2 $emailError ? 'input-error' : ''}`}
                      />
                      {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone *</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`border-gray-500 border-solid border-2 $ phoneError ? 'input-error' : ''}`}
                      />
                      {phoneError && <p className="text-red-500 text-xs italic">{phoneError}</p>}
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password *</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`border-gray-500 border-solid border-2 $passwordError ? 'input-error' : ''}`}
                        required
                      />
                      {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}
                    </div>
                    <button className="bg-[#3BAFBC] text-white font-bold py-2 px-4 rounded mb-2"
                      onClick={() => setShowPaymentForm(true)}>
                      Additional sessions beyond 30 min: $50 before take appointment.
                    </button>
                    {showPaymentForm && <StripeContainer />}
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent bg-blue-500 w-full text-white"
                      onClick={handleSubmit}
                    >
                      Take Appointment
                    </button>
                  </div>
                </div>
              )}

            </div>
          </DetailsCard>
        </section>
      </div>
  );
};

export default function index() {
  return <PractitionerProvider>
    <PraticionerDetails />
  </PractitionerProvider>
}
