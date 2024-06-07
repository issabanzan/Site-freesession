

import { TransportOptions } from 'nodemailer'; 

export const smtpConfig: TransportOptions = {
  host: process.env.BREVOHOST , 
  port: process.env.BREVOPORT, 
  secure: false,
  auth: {
    user: process.env.BREVOUSER,
    pass: process.env.BREVOPASSWORD, 
  },
};
