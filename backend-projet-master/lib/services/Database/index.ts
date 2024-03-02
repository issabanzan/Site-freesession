import mysql from "mysql";
import db_config from "./database.config"; // importe les informations de connexion à la base de données depuis le fichier database.config.ts

class Database { // classe Database qui contient les méthodes pour interagir avec la base de données
  private connection: mysql.Connection; // propriété connection de type mysql.Connection pour stocker la connexion à la base de données

  constructor() { // constructeur de la classe Database un constructeur est une méthode spéciale qui est appelée lors de la création d'une nouvelle instance de la classe
    this.connection = mysql.createConnection({ // crée une connexion à la base de données
      host: db_config.server, // l'hôte de la base de données
      user: db_config.user, // l'utilisateur de la base de données
      password: db_config.password, // le mot de passe de la base de données
      database: db_config.database, // le nom de la base de données
    });

    this.connection.connect((err) => { // établit la connexion à la base de données et gère les erreurs
      if (err) { // si une erreur s'est produite lors de la connexion à la base de données 
        console.error("Impossible de se connecter à la base de données", err); // affiche un message d'erreur dans la console
        process.exit(1);  // arrête le processus Node.js avec un code d'erreur
      }
    });
  }

  public query(sql: string, params: any[] = []): Promise<any> { // méthode query qui exécute une requête SQL sur la base de données
    return new Promise((resolve, reject) => { // retourne une promesse qui résout ou rejette avec les résultats de la requête
      this.connection.query(sql, params, (err, results) => { // exécute la requête SQL avec les paramètres fournis
        if (err) {// si une erreur s'est produite lors de l'exécution de la requête SQL
          reject(err); // rejette la promesse avec l'erreur
        } else { // sinon 
          resolve(results); // résout la promesse avec les résultats de la requête
        }
      });
    });
  }

  private validatePhoneNumber(phone: string): boolean { // méthode privée validatePhoneNumber qui vérifie si un numéro de téléphone est valide

    return /^\+?(\d{1,3}[ -]?)?(\(?\d+\)?[ -]?)*\d+$/.test(phone); // retourne true si le numéro de téléphone est valide, sinon false
  }

  public async createUser(acuityUserId: number, firstName: string,
                         lastName: string, email: string, phone: string, password: string): Promise<number> {

    if (!this.validatePhoneNumber(phone)) {// si le numéro de téléphone n'est pas valide
      throw new Error("Numéro de téléphone invalide. Seuls les chiffres sont autorisés."); // lance une erreur avec un message
    }

    const sql = `INSERT INTO users (user_id, first_name, last_name, email, phone, password_hash) VALUES (?, ?, ?, ?, ?, ?)`;// requête SQL pour insérer un nouvel utilisateur dans la base de données
    const params = [acuityUserId, firstName, lastName, email, phone, password]; // paramètres de la requête SQL 

    const result = await this.query(sql, params); // exécute la requête SQL avec les paramètres fournis et attend les résultats
    return result.insertId; // retourne l'ID de l'utilisateur inséré dans la base de données 
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

  async findUserById(acuityUserId) {
    const sql = 'SELECT * FROM users WHERE user_id = ?';
    const results = await this.query(sql, [acuityUserId]);
    if (results.length > 0) {
      return results[0];
    } else {
      return null;
    }
  }

// upadate un utilisateur dans la base de données 
  private validatePhoneNumbers(phone: string): boolean {
    return /^\+?(\d{1,3}[ -]?)?(\(?\d+\)?[ -]?)*\d+$/.test(phone);
  }

  public async updateUser(acuityUserId: number, firstName: string, lastName: string, email: string, phone: string): Promise<void> {
    // Here you call the private method internally
    if (!this.validatePhoneNumbers(phone)) {
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

    const formattedTime = `${time}:00`;


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
