import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importation du module axios pour effectuer des requêtes HTTP
import PropTypes from 'prop-types'; // Importation du module prop-types pour valider les props
import moment from 'moment-timezone'; // Importation du module moment-timezone pour gérer les dates et heures
import { useNavigate } from 'react-router-dom'; // Importation du module useNavigate pour la navigation

const Profile = () => { // Définition du composant Profile
    const [active, setActive] = useState('profile'); // Définition de l'état active pour gérer l'onglet actif
    const [userData, setUserData] = useState({ // Définition de l'état userData pour stocker les données de l'utilisateur
        Lastname: '', // Initialisation des champs avec des valeurs par défaut
        Firstname: '',
        Mail: '',
        Mobile: ''
    });
    // Définition de l'état appointments pour stocker les rendez-vous de l'utilisateur
    const [appointments, setAppointments] = useState([]); 
    const navigate = useNavigate();

    useEffect(() => { // Ajout de useEffect pour exécuter une action lors du chargement du composant
        const acuityUserId = JSON.parse(localStorage.getItem('acuityUserId'));/* Récupération de l'ID utilisateur
        à partir du stockage local */

        if (acuityUserId) {// Vérification de la présence de l'ID utilisateur

            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/${acuityUserId}`)/*Récupérer les données de l'utilisateur connecté
            à partir de son ID Acuity pour pré-remplir le formulaire */

            .then(response => {
                setUserData({ // Mise à jour de l'état userData avec les données de l'utilisateur
                    Lastname: response.data.last_name || '', // Pré-remplissage des champs avec les données de l'utilisateur
                    Firstname: response.data.first_name || '',
                    Mail: response.data.email || '',
                    Mobile: response.data.phone || ''
                });
            })
            .catch(error => { // Gestion des erreurs
                console.error('Error fetching user data:', error);
            });
        }
    }, []);

    useEffect(() => { 
      // Récupération de l'ID utilisateur à partir du stockage local
        const acuityUserId = JSON.parse(localStorage.getItem('acuityUserId')); 
        if (acuityUserId) { // Vérification de la présence de l'ID utilisateur

           //Récupérer les rendez-vous de l'utilisateur connecté à partir de son ID Acuity
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/appointments/user/${acuityUserId}`)
            .then(response => { // Mise à jour de l'état appointments avec les rendez-vous de l'utilisateur
                setAppointments(response.data);
            })
            .catch(error => {
                console.error('Erreur lors du traitement:', error);
            });
        }
    }, []);

    const handleLogout = () => {
        console.log('Déconnecter');
        navigate('/'); // Redirection vers la page d'accueil
    };

    return ( // Affichage de la page
        <div className="max-w-9xl bg-slate-100">
            <div className="bg-slate-100 rounded-lg mt-1 shadow-lg left-0 right-0 z-50">
                <nav className="flex justify-center items-center p-4 border-b">
                    <div className="flex space-x-4">
                        <button
                            className={`text-sm font-semibold ${active === 'profile' ? 'text-[#333C4E]' : 'text-[#3BAFBC]'}`} 
                            onClick={() => setActive('profile')}
                        >
                            My profile
                        </button>
                        <button
                            className={`text-sm font-semibold ${active === 'appointments' ? 'text-[#333C4E]' : 'text-[#3BAFBC]'}`}
                            onClick={() => setActive('appointments')}
                        >
                            My appointments
                        </button>
                    </div>
                    <div className="absolute right-4">
                        <button
                            className="rounded-full border border-gray-300 px-4 py-1 text-sm font-semibold text-black hover:bg-gray-100"
                            onClick={handleLogout}
                        >
                            Log out
                        </button>
                    </div>
                </nav>
            </div>
            <div className="pt-16 flex justify-center">
                {/*Affichage de la page de profil}*/}
                {active === 'profile' && <ProfilePage userData={userData} setUserData={setUserData} />} 

                {/*Affichage de la page de rendez-vous}*/}
                {active === 'appointments' && <Appointments appointments={appointments} />}
            </div>
        </div>
    );
};

const ProfilePage = ({ userData, setUserData }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };


    // Réinitialiser les champs après la sauvegarde des données de l'utilisateur dans la base de données
    const resetFields = () => { 
        setUserData({ //  Réinitialiser les champs avec des valeurs par défaut
            Lastname: '',
            Firstname: '',
            Mail: '',
            Mobile: ''
        });
    };

    const handleSubmit = async (e) => { // Gestion de la soumission du formulaire
        e.preventDefault();
        // Récupération de l'ID utilisateur à partir du stockage local
        const acuityUserId = JSON.parse(localStorage.getItem('acuityUserId'));
        
        try { // Envoi des données de l'utilisateur à l'API pour la mise à jour

           // Envoi des données de l'utilisateur à l'API pour la mise à jour
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/user/${acuityUserId}`, { 
                Lastname: userData.Lastname,
                Firstname: userData.Firstname,
                Mail: userData.Mail,
                Mobile: userData.Mobile
            });
            console.log('Mise à jour réussie:', response.data);
            setUserData({ ...userData });
            resetFields(); // Réinitialiser les champs après la sauvegarde
        } catch (error) {
            console.error('Erreur lors de la mise à jour:', error);
        }
    };

            return (
              <form onSubmit={handleSubmit}>
                  <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
                      <h1 className="text-2xl font-bold text-gray-800 mb-8">My profile</h1>
                      <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Lastname</label>
                        <input name="Lastname" 
                        type="text" value={userData.Lastname} onChange={handleInputChange}
                         className="text-black mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Firstname</label>
                        <input name="Firstname" type="text" value={userData.Firstname} onChange={handleInputChange}
                         className="text-black mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none" />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Mail</label>
                        <input name="Mail" type="email" value={userData.Mail} onChange={handleInputChange} 
                        className="text-black mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none" />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Mobile</label>
                        <input name="Mobile" type="tel" value={userData.Mobile} onChange={handleInputChange} 
                        className="text-black mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button 
                    className="px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#3BAFBC] hover:bg-[#3BAFBC] ">
                        Save
                    </button>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  This data is confidential and intended for practitioners
                </p>
            </div>
        </form>
    );
};

ProfilePage.propTypes = { // Validation des props
    userData: PropTypes.shape({ // Validation de la forme de l'objet userData
        Lastname: PropTypes.string,
        Firstname: PropTypes.string,
        Mail: PropTypes.string,
        Mobile: PropTypes.string
    }),
    setUserData: PropTypes.func.isRequired
};



const Appointments = ({ appointments }) => { // affichage des rendez-vous


  // Définition de l'état newDate pour stocker la nouvelle date
  const [newDate, setNewDate] = useState(''); 

  // Définition de l'état newTime pour stocker la nouvelle heure
  const [newTime, setNewTime] = useState('');

  // Définition de l'état selectedAppointment pour stocker le rendez-vous sélectionné
  const [selectedAppointment, setSelectedAppointment] = useState(null);
 

  const handleDateChange = (e) => { // gestion de la modification de la date
    setNewDate(e.target.value);
  };

  const handleTimeChange = (e) => { // gestion de la modification de l'heure
    setNewTime(e.target.value);
  };

  const handleAppointmentSelection = (appointment) => { // gestion de la sélection d'un rendez-vous
    setSelectedAppointment(appointment); // Mise à jour de l'état selectedAppointment avec le rendez-vous sélectionné
    setNewDate(appointment.date); // Mise à jour de l'état newDate avec la date du rendez-vous sélectionné
    setNewTime(appointment.time); // Mise à jour de l'état newTime avec l'heure du rendez-vous sélectionné
  };
  const formatTime = (timeString) => {
    // Cette fonction prend une chaîne d'heure au format "HH:mm"
    // et la convertit en heure locale en utilisant le fuseau horaire de Paris
    const time = moment(timeString, 'HH:mm').tz('Europe/Paris');
    return time.format('HH:mm');
  };
  

  const rescheduleAppointment = async () => {
    const acuityUserId = JSON.parse(localStorage.getItem('acuityUserId')); 
    if (selectedAppointment) {
      // Créer un objet moment avec la date et l'heure sélectionnées
      const newDateTime = moment.tz(`${newDate} ${newTime}`, 'Europe/Paris');
      try {
        const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/appointments/${acuityUserId}/reschedule`, {
          // Envoyer la date et l'heure en format ISO ou un format standardisé
          newDate: newDateTime.format(),
          // Ici, vous pouvez choisir de ne pas envoyer l'heure séparément si elle est incluse dans newDate
        });
        console.log('Rendez-vous reprogrammé avec succès:', response.data);
        window.location.reload();
      } catch (error) {
        console.error('Erreur lors de la reprogrammation du rendez-vous:', error);
      }
    }
  };
  

  const cancelAppointment = async () => { // annuler un rendez-vous
    const acuityUserId = JSON.parse(localStorage.getItem('acuityUserId'));
    
    if (window.confirm('Êtes-vous sûr de vouloir annuler ce rendez-vous ?')) {
      try {
        await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/appointments/${acuityUserId}/cancel`);
        alert('Rendez-vous annulé avec succès.');
        setNewDate('');
        setNewTime('');
        setAppointments(appointments.filter(appointment => appointment.id !== acuityUserId));
        window.location.reload(); // Actualiser la page
      } catch (error) {
        console.error('Erreur lors de l’annulation du rendez-vous:', error);
        alert('Erreur lors de l’annulation du rendez-vous.');
      }
    }
  };
  
   
  const formatDate = (dateString) => { // formater la date en format français
     const date = new Date(dateString); 
     return date.toLocaleDateString('fr-FR', { 
       day: '2-digit',
       month: '2-digit',
       year: 'numeric'
     });
   };
 
   const formatTime = (timeString) => { // formater l'heure en format français
    const time = moment(timeString, 'HH:mm').tz('Europe/Paris');
    return time.format('HH:mm');
  };
  
  if (!appointments || appointments.length === 0) { // affichage des rendez-vous
    return <p>No appointments.</p>;
  }

  return ( // affichage des rendez-vous
    <div className="flex justify-start -mx-2">
      <div className="w-full md:w-1/3 px-2 mb-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="mb-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-[#333C4E] mb-2">My appointments</h2>
              <div className="border-t border-blue-200 pt-2">
                <p className="text-sm text-black">
                  {formatDate(appointment.date)} à {formatTime(appointment.time)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="w-full md:w-1/3 px-2 mb-4">
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-bold text-[#333C4E] mb-2">Reschedule</h2>
        <div className="border-t border-blue-200 pt-2">
          <select
            className="mb-4 w-full text-black"
            onChange={(e) => handleAppointmentSelection(JSON.parse(e.target.value))}
            value={selectedAppointment ? JSON.stringify(selectedAppointment) : ''}
          >
            <option value=''>Select an appointment</option>
            {appointments.map((appointment) => (
              <option key={appointment.id} value={JSON.stringify(appointment)}>
                {formatDate(appointment.date)} à {formatTime(appointment.time)}
              </option>
            ))}
          </select>
          {selectedAppointment && (
            <>
              <input type="date" value={newDate} onChange={handleDateChange} className="mb-4 w-full text-black"/>
              <input type="time" value={newTime} onChange={handleTimeChange} className="mb-4 w-full text-black"/>
              <button
                className="bg-[#3BAFBC] text-black rounded px-2 py-1"
                onClick={rescheduleAppointment}
              >
                Confirm the change
              </button>
            </>
          )}
        </div>
      </div>
            </div>

           
            <div className="flex flex-wrap justify-start -mx-2">
            {appointments.map((appointment) => (
            <div key={appointment.id} className="w-full md:w-5/1 px-2 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="text-lg font-bold text-[#333C4E] mb-2">Appointments</h2>
                <p className="text-sm text-black">Date : {formatDate(appointment.date)} à {formatTime(appointment.time)}</p>
                <button
                  className="mt-1 bg-[#3BAFBC] text-white rounded px-1"
                  onClick={() => cancelAppointment(appointment.id)}
                >
                  Cancel
                </button>

        </div>
      </div>
    ))}

                
            </div>
    </div>
  );
  
};
 // Validation des props
Appointments.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.shape({ // Validation de la forme de l'objet appointments
    id: PropTypes.number.isRequired, // Validation de l'ID du rendez-vous
    date: PropTypes.string.isRequired, // Validation de la date du rendez-vous
   
  })).isRequired // Validation de la présence des rendez-vous
};


export default Profile;