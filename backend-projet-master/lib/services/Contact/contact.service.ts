import { ContactForm } from './contact.interface';
import * as nodemailer from 'nodemailer';
import { smtpConfig } from './contact.config';

export class ContactService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport(smtpConfig);
  }

  async sendMail(contactForm: ContactForm): Promise<void> {
    const mail = {
      from: contactForm.email,
      to: 'support@institutadios.com',
      subject: `Freesession request - ${contactForm.name}`,
      text: `Name: ${contactForm.name}\nEmail: ${contactForm.email}\nMessage: ${contactForm.message}`,
    };
    
    const mailSender = {
      from: 'support@institutadios.com',
      to: contactForm.email,
      subject: 'Confirmation of receipt - Book free sessions with practitioners',
      text: 'Hello ${contactForm.name},\n\nWe have received your message and thank you for contacting us. A member of our team will process your request and respond to you as soon as possible.\n\nSincerely,\nThe Book free sessions with practitioners',
  };

 
  await this.transporter.sendMail(mail);

  
  await this.transporter.sendMail(mailSender);
}

async sendResetEmail(email: string, token: string): Promise<void> {
  const resetLink = `http://localhost:3000/reset-password?token=${token}`;
  const mail = {
    from: 'support@institutadios.com',
    to: email,
    subject: 'Resetting your password',
    html: '<p>To reset your password, please click on this link: <a href="${resetLink}">${resetLink}</a></p>',
  };

  await this.transporter.sendMail(mail);
}
}


