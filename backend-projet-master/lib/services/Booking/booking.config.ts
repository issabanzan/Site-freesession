import "dotenv/config"; // import dotenv package pour charger les variables d'environnement du fichier .env
import type { AcuityConfiguration } from "./interfaces"; // import le type AcuityConfiguration depuis le fichier interfaces.ts


// constante acuityConfiguration de type AcuityConfiguration qui contient les informations de connexion à l'API Acuity
const acuityConfiguration: AcuityConfiguration = { 
  user: process.env.ACUITY_USER_ID || "user",
  password: process.env.ACUITY_API_KEY || "password",
  endpoint: // l'URL de base de l'API Acuity, si la variable d'environnement ACUITY_BASE_URL n'est pas définie, on utilise la valeur par défaut "https://acuityscheduling.com/api/v1"
    process.env.ACUITY_BASE_URL || "https://acuityscheduling.com/api/v1",
  defaultAppointmentTypeID: // l'ID du type de rendez-vous par défaut, si la variable d'environnement FREE_RDV_BOOKING_APPOINTMENT_TYPE_ID n'est pas définie, on utilise la valeur par défaut 0
    Number(process.env.FREE_RDV_BOOKING_APPOINTMENT_TYPE_ID) || 0,
};

export { acuityConfiguration };
