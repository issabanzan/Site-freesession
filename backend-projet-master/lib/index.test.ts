import { ContactService } from '../../backend-projet-master/lib/services/Contact/contact.service';
import { ContactForm } from '../../backend-projet-master/lib/services/Contact/contact.interface';
import nodemailer from 'nodemailer';

jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockResolvedValue(true),
  }),
}));

describe('ContactService', () => {
  let contactService: ContactService;
  const contactForm: ContactForm = {
    name: 'John Doe',
    email: 'issabanzan.konate@yahoo.fr',
    message: 'Hello world',
  };

  beforeEach(() => {
    contactService = new ContactService();
  });

  it('envoie un mail de contact et une confirmation', async () => {
    await contactService.sendMail(contactForm);

    expect(nodemailer.createTransport().sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        from: contactForm.email,
        to: 'support@institutadios.com',
        subject: expect.stringContaining(contactForm.name),
        text: expect.stringContaining(contactForm.message),
      }),
    );

    expect(nodemailer.createTransport().sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        from: 'support@institutadios.com',
        to: contactForm.email,
        subject: 'Confirmation of receipt - Book free sessions with practitioners',
        text: expect.stringContaining(contactForm.name),
      }),
    );
  });

  it('gère les erreurs lors de l\'envoi d\'un mail', async () => {
    nodemailer.createTransport().sendMail.mockRejectedValueOnce(new Error('Erreur d\'envoi'));

    await expect(contactService.sendMail(contactForm)).rejects.toThrow('Erreur d\'envoi');
  });

  it('envoie un email de réinitialisation du mot de passe', async () => {
    const email = 'user@example.com';
    const token = 'reset-token';

    await contactService.sendResetEmail(email, token);

    expect(nodemailer.createTransport().sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        from: 'support@institutadios.com',
        to: email,
        subject: 'Resetting your password',
        html: expect.stringContaining(token),
      }),
    );
  });


});
