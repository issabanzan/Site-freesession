/* eslint-disable react-refresh/only-export-components */
import { useParams } from 'react-router-dom';
// import de useEffect depuis react useEffect est un Hook qui permet d'effectuer des effets de bord dans les composants fonctionnels
import { useEffect } from 'react';
// import de PresentationHeader depuis le dossier components dans le dossier PractitionerDetails 
import PresentationHeader from './components/PresentationHeader';
import { useState } from 'react';
import Header from '../../shared/components/Header';
import NavigationLinks from './components/NavigationLinks';
import DetailsCard from './components/DetailsCard';
import { AlignLeft, Clock } from 'react-feather';
import usePractitionerService from '../../app_hooks/usePractitionerService';
import { PractitionerProvider } from '../../app_contexts/Practitioner';
import Loading from '../Loading/Loading';
import { Heart, Home } from 'react-feather'; // import de Heart et Home depuis react-feather pour les icônes
import Calendar from 'react-calendar'; // import de Calendar depuis react-calendar pour afficher un calendrier 
import 'react-calendar/dist/Calendar.css'; // import du fichier css de react-calendar pour styliser le calendrier 
import axios from 'axios'; // import d'axios depuis axios pour effectuer des requêtes HTTP
import StripeContainer from './components/StripeContainer';

const PraticionerDetails = () => {
  /* Déclaration de selectedAppointmentType avec la fonction useState
   qui retourne un tableau avec deux éléments, le premier élément est la valeur initiale 
   de selectedAppointmentType, le deuxième élément est une fonction pour mettre à jour la valeur de selectedAppointmentType*/
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
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { id } = useParams();

  const handleSubmit = async (e) => { // Fonction pour gérer la soumission du formulaire de prise de rendez-vous
    e.preventDefault();
    let isValid = true; // Initialiser isValid à true pour valider les champs du formulaire
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPhoneError('');
    setPasswordError('');

    if (!firstName || firstName.length < 2) { // Vérifier si le prénom est vide ou s'il contient moins de 2 caractères
      setFirstNameError('The firstName must contain at least 2 characters');
      isValid = false;
    }


    if (!lastName || lastName.length < 2) { // Vérifier si le nom est vide ou s'il contient moins de 2 caractères
      setLastNameError('The name must contain at least 2 characters');
      isValid = false;
    }


    if (!email || !Emailvalidate(email)) { // Vérifier si l'email est vide ou s'il est invalide
      setEmailError('Please enter a valid email');
      isValid = false;
    }
    if (!phone) { // Vérifier si le téléphone est vide
      setPhoneError('Please enter your phone number');
      isValid = false;
    }
    if (!password || !Passwordvalidate(password)) { // Vérifier si le mot de passe est vide ou s'il est invalide
      setPasswordError('The password must be at least 8 characters long, include letters, numbers and special characters.');
      isValid = false;
    }

    if (!isValid) { // Vérifier si le formulaire est valide

      return;
    }

    const formatDate = (date) => { /// Fonction pour formater la date au format YYYY-MM-DD
      if (!(date instanceof Date)) return ''; // Vérifier si la date est une instance de Date

      const year = date.getFullYear(); // Récupérer l'année      
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); /* Récupérer le mois en ajoutant 1 pour obtenir le mois actuel
       et en utilisant padStart pour ajouter un 0 si le mois est inférieur à 10*/

      const day = date.getDate().toString().padStart(2, '0');

      return `${year}-${month}-${day}`; // Retourner la date formatée au format YYYY-MM-DD
    };
    const formattedDate = formatDate(selectedDate); // Appel de la fonction formatDate pour formater la date sélectionnée en format YYYY-MM-DD
    console.log('Formatdate', formattedDate);
    // Supposons que selectedTime est l'heure choisie par l'utilisateur, par exemple "13:00"
// Et que selectedDate est la date choisie par l'utilisateur
const timeParts = selectedTime.split(':');
const appointmentDate = new Date(selectedDate);
appointmentDate.setHours(parseInt(timeParts[0]), parseInt(timeParts[1]), 0, 0);

// Formattez l'heure pour l'envoyer
const formattedTime = appointmentDate.toISOString().split('T')[1].substring(0, 5);

// Utilisez `formattedTime` pour envoyer l'heure dans votre requête



    // Si tout est valide, procéder avec la logique de soumission
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
      // Réinitialiser les champs et fermer le formulaire après la soumission réussie
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setShowInput(false);
      setSelectedDate(null);
      setSelectedTime(null);
      setShowPaymentForm(false);
      setPaymentSuccess(true);
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

  const handlePaymentSuccess = () => {
    setShowPaymentForm(false);
    setPaymentSuccess(true);
    setFirstName('');
    setLastName('');
    setEmail('');
  };
  


  const fetchAppointmentTypes = async () => { // Fonction pour récupérer les types de rendez-vous
    try { // Utilisation de try...catch pour gérer les erreurs

      // Utilisation de axios pour effectuer une requête GET (/appointment-types/all)
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/appointment-types/all`);

      const specificAppointmentType = response.data.filter(appointmentType => appointmentType.id === parseInt(import.meta.env.VITE_FREE_RDV_BOOKING_APPOINTMENT_TYPE_ID)); // Filtrer les types de rendez-vous pour obtenir le type de rendez-vous spécifique
      setAppointmentTypes(specificAppointmentType); // Mettre à jour le state avec le type de rendez-vous spécifique

      if (specificAppointmentType.length > 0) { // Si le type de rendez-vous spécifique existe
        setSelectedAppointmentType(specificAppointmentType[0].id); // Mettre à jour le state avec l'ID du type de rendez-vous spécifique
      }
    } catch (error) { // Gérer les erreurs avec catch en cas d'échec de la requête
      console.error(error); // Afficher l'erreur dans la console
    }
  };

  const handleAppointmentTypeChange = (e) => { // Fonction pour gérer le changement de type de rendez-vous
    const appointmentTypeId = e.target.value; // Récupérer la valeur de l'option sélectionnée

    setSelectedAppointmentType(appointmentTypeId); // Mettre à jour le state avec l'ID du type de rendez-vous sélectionné
  };

  useEffect(() => { // Utilisation de useEffect pour afficher le type de rendez-vous sélectionné 
    console.log(`Le type de rendez-vous sélectionné est: ${selectedAppointmentType}`);
  }, [selectedAppointmentType]); /* Utilisation de [selectedAppointmentType] comme dépendance pour exécuter le code à chaque changement
   de selectedAppointmentType*/

  const Passwordvalidate = (password) => {  // Fonction pour valider le mot de passe

    const hasValidLength = password.length >= 8; // Vérifier la longueur minimale de 8 caractères

    const hasUpperCase = /[A-Z]/.test(password); // Vérifier si le mot de passe contient des majuscules

    const hasLowerCase = /[a-z]/.test(password); // Vérifie si le mot de passe contient des minuscules

    const hasNumbers = /\d/.test(password); // Vérifier si le mot de passe contient des chiffres

    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password); // Vérifier si le mot de passe contient des caractères spéciaux

    // Le mot de passe est valide seulement si tous les critères sont respectés 
    return hasValidLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars;
  };

  const Emailvalidate = (email) => {
    // Expression régulière simple pour la validation d'email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };


  const fetchCalendars = async () => { // Fonction pour récupérer les calendriers
    try { // Utilisation de try...catch pour gérer les erreurs

      // Utilisation de axios pour effectuer une requête GET (/calendars/all)
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/calendars/all`);
      const filteredData = response.data.calendars.map(calendar => ({ // Filtrer les données pour obtenir uniquement les propriétés nécessaires
        id: calendar.id, // ID du calendrier
        name: calendar.name, // Nom du calendrier
        appointmentTypes: calendar.appointmentTypes // Types de rendez-vous disponibles pour le calendrier
      }));
      setCalendars(filteredData); // Mettre à jour le state avec les calendriers filtrés
    } catch (error) { // Gérer les erreurs avec catch en cas d'échec de la requête
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAppointmentTypes(); // Appel de la fonction fetchAppointmentTypes pour récupérer les types de rendez-vous
    fetchCalendars(); // Appel de la fonction fetchCalendars pour récupérer les calendriers
  }, []); // Utilisation de [] comme dépendance pour exécuter le code une seule fois au montage du composant
  // en gros fetchcacalendars sert à récupérer les calendriers et fetchAppointmentTypes sert à récupérer les types de rendez-vous




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



  // Fonction pour récupérer les horaires disponibles pour le type de rendez-vous, le calendrier et la date sélectionnés
  const fetchAvailableTimes = async (date) => {
    const parisDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
      .toISOString() // Convertir la date en chaîne ISO par exemple 2022-02-19T00:00:00.000Z
      .replace(/T.*$/, ''); // Remplacer tout ce qui suit 'T' par une chaîne vide par exemple 2022-02-19
    console.log('parisDate', parisDate) // Afficher la date formatée pour le fuseau horaire de Paris

    try { // Utilisation de try...catch pour gérer les erreurs

      // Utilisation de axios pour effectuer une requête GET (/fetch_appointment_times)
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/fetch_appointment_times`, {
        params: {
          appointmentTypeID: selectedAppointmentType, // ID du type de rendez-vous
          calendarID: selectedCalendar, // ID du calendrier
          date: parisDate, // j'utilise la date formatée pour le fuseau horaire de Paris
        },
      });
      // Conversion des horaires en format HH:mm
      const timesInParis = response.data.map((timeSlot) => { // Mapper les horaires pour obtenir un tableau d'horaires
        // Création d'une date JavaScript avec la date et l'heure
        let dateTime = new Date(timeSlot.time);
        // Les horaires locales (GMT+1 pour Paris)
        let timeString = dateTime.toLocaleTimeString('fr-FR', { // Convertir l'heure en chaîne de caractères au format HH:mm
          hour: '2-digit', // 2 chiffres pour l'heure
          minute: '2-digit', // 2 chiffres pour les minutes
          timeZone: 'Europe/Paris' // Fuseau horaire de Paris
        });
        return { ...timeSlot, time: timeString }; // Retourner un objet avec l'heure formatée
      });
      setAvailableTimes(timesInParis); // Mettre à jour le state avec les horaires disponibles pour le fuseau horaire de Paris
    } catch (error) {
      console.error('Error fetching available times:', error);
      setAvailableTimes([]);
    }
  };

  /* récupérer les détails du praticien avec l'ID spécifié details du praticien comme par exemple la description, 
  les horaires, les spécialités, les langues, etc */
  const service = usePractitionerService();

  /*Déclaration de practitioner avec la fonction useState qui retourne un tableau avec deux éléments, 
  le premier élément est la valeur initiale de practitioner,
  le deuxième élément est une fonction pour mettre à jour la valeur de practitioner */
  const [practitioner, setPractitioner] = useState(undefined);

  useEffect(() => { // Utilisation de useEffect pour appeler getPractionerDetails lorsque le composant est monté
    const get = async () => { // Utilisation de async...await pour gérer les requêtes asynchrones
      const resovedPractitioner = await service.getPractionerDetails(id);// Récupérer les détails du praticien avec l'ID spécifié
      setPractitioner(resovedPractitioner);
    };

    get();
  }, [service, id]); // Utilisation de [service, id] comme dépendance pour exécuter le code à chaque changement de service ou id

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

              {showInput && appointmentTypes.length > 0 && ( /*afficher le formulaire de prise de rendez-vous
               si showInput est vrai et s'il y a des types de rendez-vous disponibles */
                <select // Utilisation de select pour afficher une liste déroulante des types de rendez-vous
                  id="appointmentType" // ID de l'élément select
                  value={selectedAppointmentType} // Valeur de l'élément select
                  onChange={(e) => handleAppointmentTypeChange(e.target.value)} // Gérer le changement de type de rendez-vous
                  required // Champ obligatoire
                >
                  <option value="" disabled>Choose appointment type</option>
                  {appointmentTypes.map((type) => ( // Mapper les types de rendez-vous pour obtenir une option pour chaque type
                    <option key={type.id} value={type.id}>{type.name}</option> // Afficher le nom du type de rendez-vous
                  ))}
                </select>
              )}


              {selectedAppointmentType && showInput && (

                <select id="calendar" // Utilisation de select pour afficher une liste déroulante des calendriers
                  value={selectedCalendar} // Valeur de l'élément select
                  onChange={(e) => setSelectedCalendar(e.target.value)}  // Gérer le changement de calendrier
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required // Champ obligatoire
                >
                  <option value="" disabled>Choose calendar</option>
                  {
                    calendars.map((calendar) => ( // Mapper les calendriers pour obtenir une option pour chaque calendrier
                      <option key={calendar.id} value={calendar.id}>
                        {calendar.name}
                      </option> // Afficher le nom du calendrier
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
                  {selectedDate && availableTimes.length > 0 && ( // Afficher les horaires disponibles si une date est sélectionnée
                    <div className="flex flex-col bg-white shadow rounded-md overflow-hidden">
                      <div className="overflow-y-auto" style={{ maxHeight: '200px' }}> {/*Afficher les horaires disponibles
                        dans un groupe de boutons radio*/}

                        {availableTimes.map((timeSlot, index) => { // Mapper les horaires pour obtenir un bouton radio pour chaque horaire
                          //timeSlot.time au format HH:mm
                          return (
                            <label key={index} className="flex items-center border-b last:border-b-0 px-4 py-2 cursor-pointer">
                              <input // Utilisation de input pour afficher un bouton radio pour chaque horaire
                                type="radio" // Type de l'élément input
                                name="time" // Nom de l'élément input
                                value={timeSlot.time} // Valeur de l'élément input
                                className="form-radio text-blue-600" // Ajouter la classe form-radio pour styliser le bouton radio
                                onChange={() => setSelectedTime(timeSlot.time)} // Gérer le changement de l'heure sélectionnée
                              />
                              <span className="ml-2 text-sm text-gray-700">{timeSlot.time}</span> {/*Afficher l'heure*/}
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
                        {!paymentSuccess && (
                        <button className="bg-[#3BAFBC] text-white font-bold py-2 px-4 rounded mb-2"
                          onClick={() => setShowPaymentForm(true)}>
                          Additional sessions beyond 30 min: $50 before take appointment.
                        </button>
                      )}

                    {showPaymentForm && <StripeContainer onPaymentSuccess={handlePaymentSuccess} />}

                    {/* Conditional rendering for the payment success message */}
                    {paymentSuccess && (
                      <div className="text-center p-4 mb-4 bg-green-100 text-black">
                        Payment has been successfully processed to take your appointment.
                      </div>
                    )}
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
