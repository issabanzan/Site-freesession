import mysql from "mysql";
import db_config from "./database.config"; 
import bcrypt from 'bcrypt'; 

class Database {
  private connection: mysql.Connection; 

  constructor() { 
    this.connection = mysql.createConnection({ 
      host: db_config.server,
      user: db_config.user,
      password: db_config.password,
      database: db_config.database, 
    });

    this.connection.connect((err) => { 
      if (err) { 
        console.error("Impossible de se connecter à la base de données", err); 
        process.exit(1); 
      }
    });
  }

  public query(sql: string, params: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, params, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  private PhoneNumber(phone: string): boolean { 

    return /^\+?(\d{1,3}[ -]?)?(\(?\d+\)?[ -]?)*\d+$/.test(phone); 
  }

  public async createUser(acuityUserId: number, firstName: string, lastName: string, email: string, phone: string, password: string): Promise<number> { // methode pour créer un utilisateur dans ma base de données avec les informations suivantes : id de l'utilisateur, prénom, nom, email, numéro de téléphone, mot de passe
    if (!this.PhoneNumber(phone)) { 
      throw new Error("Numéro de téléphone invalide. Seuls les chiffres sont autorisés.");
    }
   
   
    const saltRounds = 10; 
    const encryptedPassword = await bcrypt.hash(password, saltRounds); 
  
    const sql = `INSERT INTO users (user_id, first_name, last_name, email, phone, password_hash) VALUES (?, ?, ?, ?, ?, ?)`; 
    const params = [acuityUserId, firstName, lastName, email, phone, encryptedPassword]; 
  
    const result = await this.query(sql, params);
    return result.insertId;
  }
  

  public findUserByEmail(email: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT user_id, password_hash FROM users WHERE email = ?';
      this.connection.query(sql, [email], (err, results) => {
        if (err) {
          console.error('Erreur lors de la recherche de l’utilisateur:', err);
          reject(err);
        } else if (results.length > 0) {
          console.log('Utilisateur trouvé:', results[0]);
          resolve(results[0]);
          const user_id = results[0].user_id;
          console.log('user id : ', user_id);
          return user_id;
        } else {
          resolve(null);
        }
      });
    });
  }

  public async updateUserPassword(email: string, newPassword: string): Promise<void> { 
  
    const saltRounds = 10;
    const encryptedPassword = await bcrypt.hash(newPassword, saltRounds); 
  
    const sql = `UPDATE users SET password_hash = ? WHERE email = ?`;
    await this.query(sql, [encryptedPassword, email]);
  }
  
  
  public async savePasswordResetToken(email: string, token: string, expirationDate: Date): Promise<void> {
    const user = await this.findUserByEmail(email);
    if (!user) throw new Error("Utilisateur non trouvé"); 
  
    const sql = `INSERT INTO password_reset_tokens (user_id, token, expires_at) VALUES (?, ?, ?)`;
    await this.query(sql, [user.user_id, token, expirationDate]);
  }

  public async verifyPasswordResetToken(email: string, token: string): Promise<boolean> {
    const sql = `SELECT * FROM password_reset_tokens WHERE token = ? AND expires_at > NOW()`;
    const results = await this.query(sql, [token]); 
    
    if (results.length === 0) {
      return false; 
    }
    
    const user = await this.findUserByEmail(email);
    
    if (!user || user.user_id !== results[0].user_id) {
      return false; 
    }
    
    return true; 
  }
  
  
  public async deletePasswordResetToken(token: string): Promise<void> {
    const sql = `DELETE FROM password_reset_tokens WHERE token = ?`;
    await this.query(sql, [token]);
  }
  async findUserById(acuityUserId) {
    const sql = 'SELECT * FROM users WHERE user_id = ?';
    const results = await this.query(sql, [acuityUserId]);
    if (results.length > 0) {
      return results[0];
    } else {
      return null;
    }
  }


  private PhoneNumbers(phone: string): boolean {
    return /^\+?(\d{1,3}[ -]?)?(\(?\d+\)?[ -]?)*\d+$/.test(phone);
  }

  public async updateUser(acuityUserId: number, firstName: string, lastName: string, email: string, phone: string): Promise<void> {
    
    if (!this.PhoneNumbers(phone)) {
      throw new Error("Numéro de téléphone invalide."); 
    }

    
    const sql = `UPDATE users SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE user_id = ?`;
    const params = [firstName, lastName, email, phone, acuityUserId];
    await this.query(sql, params);
  }

  public async getAppointmentsByUserId(acuityUserId: number): Promise<any[]> { 
    const sql = 'SELECT * FROM appointments WHERE user_id = ? ORDER BY date ASC, time ASC';
    const results = await this.query(sql, [acuityUserId]);
    return results; 
  }

  public updateAppointment(newDate: string, newTime: string, acuityUserId: string): Promise<void> { 
    const formattedTime = newTime.length === 5 ? `${newTime}:00` : newTime;
    const sql = `UPDATE appointments SET date = ?, time = ? WHERE user_id = ?`;
    return this.query(sql, [newDate, formattedTime, acuityUserId]);
}

async cancelAppointment(id) {
  try {
    const sql = 'DELETE FROM appointments WHERE user_id = ?';
    await this.query(sql, [id]);
    console.log('Rendez-vous annulé avec succès.');
  } catch (error) {
    console.error('Erreur lors de l’annulation du rendez-vous:', error);
    throw error;
  }
}


public createAppointement(acuityUserId: Number, appointment_type_id: Number, calendar_id: Number, date: string, time: string) {
  const timeParts = time.split(":");
  let appointmentTime = new Date(date);
  appointmentTime.setHours(parseInt(timeParts[0]), parseInt(timeParts[1]), 0);

  appointmentTime.setHours(appointmentTime.getHours() + 1); 

  const formattedTime = `${appointmentTime.getHours()}:${appointmentTime.getMinutes()}:00`;

  const sql = `INSERT INTO appointments (user_id, appointment_type_id, calendar_id, date, time) VALUES (?, ?, ?, ?, ?)`;

  const params = [acuityUserId, appointment_type_id, calendar_id, date, formattedTime];

  this.query(sql, params)
      .then(results => {
          console.log(`Resultat createAppointement :\n${results}`);
      }).catch(err => {
          console.log(`Une erreur s'est produite pour createAppointement\n${err}`);
      });
}

}

export default Database;
