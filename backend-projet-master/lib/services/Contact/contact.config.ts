// fichier contact.config.ts qui contient la configuration de l'envoi de mail

import { TransportOptions } from 'nodemailer'; // import le type TransportOptions depuis le module node nodemailer

export const smtpConfig: TransportOptions = {
  host: process.env.BREVOHOST , // l'adresse du serveur SMTP de l'envoi de mail
  port: process.env.BREVOPORT, // le port du serveur SMTP
  secure: false, // si le serveur SMTP utilise SSL ou non
  auth: { // les informations d'authentification pour le serveur SMTP
    user: process.env.BREVOUSER,
    pass: process.env.BREVOPASSWORD, 
  },
};
