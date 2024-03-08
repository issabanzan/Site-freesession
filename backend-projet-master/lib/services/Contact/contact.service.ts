// fichier contact.service.ts qui contient le service pour l'envoi de mail

import { ContactForm } from './contact.interface'; // import l'interface ContactForm depuis le fichier contact.interface.ts
import * as nodemailer from 'nodemailer'; // import le module nodemailer pour envoyer des mails
import { smtpConfig } from './contact.config'; // import la configuration de l'envoi de mail depuis le fichier contact.config.ts

export class ContactService {
  private transporter: nodemailer.Transporter; // propriété transporter de type nodemailer.Transporter pour envoyer des mails

  constructor() {
    this.transporter = nodemailer.createTransport(smtpConfig); // un nouveau transporter avec la configuration smtpConfig
  }

  // méthode sendMail qui envoie un mail avec les informations du formulaire de contact
  async sendMail(contactForm: ContactForm): Promise<void> { 
    const mail = {
      from: contactForm.email,
      to: 'contact@freesession.net.',
      subject: `Freesession request - ${contactForm.name}`,
      text: `Name: ${contactForm.name}\nEmail: ${contactForm.email}\nMessage: ${contactForm.message}`,
    };
    
    const mailSender = { // mail de confirmation de réception
      from: 'contact@freesession.net',
      to: contactForm.email,
      subject: 'Confirmation of receipt - Book free sessions with practitioners',
      text: 'Hello ${contactForm.name},\n\nWe have received your message and thank you for contacting us. A member of our team will process your request and respond to you as soon as possible.\n\nSincerely,\nThe Book free sessions with practitioners',
  };

 
  await this.transporter.sendMail(mail); 

  
  await this.transporter.sendMail(mailSender); 
}

// méthode sendResetEmail qui envoie un mail pour réinitialiser le mot de passe de l'utilisateur avec un lien de réinitialisation
async sendResetEmail(email: string, token: string): Promise<void> {
  const resetLink = `http://localhost:3000/reset-password?token=${token}`; 
  const mail = { 
    from: 'contact@freesession.net',
    to: email,
    subject: 'Resetting your password',
    html: '<p>To reset your password, please click on this link: <a href="${resetLink}">${resetLink}</a></p>',
  };

  await this.transporter.sendMail(mail);
}
}


