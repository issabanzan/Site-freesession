import mysql from "mysql";
import db_config from "./database.config"; // import les informations de connexion à la base de données
import bcrypt from 'bcrypt'; // importe le module bcrypt pour hacher les mots de passe

class Database {// class database qui contient les methodes pour la connexion à la base de données et les requetes sql
  private connection: mysql.Connection; // créer une connexion à la base de données avec les informations de connexion

  constructor() { // constructeur de la classe Database un constructeur est une méthode qui est appelée automatiquement lors de la création d'une instance de classe 
    this.connection = mysql.createConnection({ // createConnection est une méthode de la classe mysql qui permet de créer une connexion à la base de données
      host: db_config.server, // host est le nom du serveur de la base de données
      user: db_config.user,// user est le nom de l'utilisateur de la base de données
      password: db_config.password, // password est le mot de passe de l'utilisateur de la base de données
      database: db_config.database, // database est le nom de la base de données
    });

    this.connection.connect((err) => { // etablir une connexion à la base de données aet gere les erreurs de connexion
      if (err) { // si une erreur est survenue lors de la connexion à la base de données 
        console.error("Impossible de se connecter à la base de données", err); // affiche un message d'erreur dans la console
        process.exit(1); // termine le processus avec un code d'erreur
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

  private validatePhoneNumber(phone: string): boolean { // methode pour valider le numéro de téléphone

    return /^\+?(\d{1,3}[ -]?)?(\(?\d+\)?[ -]?)*\d+$/.test(phone); // expression régulière pour valider le numéro de téléphone
  }

  public async createUser(acuityUserId: number, firstName: string, lastName: string, email: string, phone: string, password: string): Promise<number> { // methode pour créer un utilisateur dans ma base de données avec les informations suivantes : id de l'utilisateur, prénom, nom, email, numéro de téléphone, mot de passe
    if (!this.validatePhoneNumber(phone)) { // Vérifier si le numéro de téléphone est valide en utilisant une expression régulière
      throw new Error("Numéro de téléphone invalide. Seuls les chiffres sont autorisés.");
    }
   
    // Hacher le mot de passe
    const saltRounds = 10; // Le nombre de tours de hachage
    const hashedPassword = await bcrypt.hash(password, saltRounds); // hacher le mot de passe avec bcrypt et le nombre de tours de hachage
  
    const sql = `INSERT INTO users (user_id, first_name, last_name, email, phone, password_hash) VALUES (?, ?, ?, ?, ?, ?)`; // isertion des données dans la table users contenant les colonnes user_id, first_name, last_name, email, phone, password_hash
    const params = [acuityUserId, firstName, lastName, email, phone, hashedPassword]; // Utiliser hashedPassword au lieu de password
  
    const result = await this.query(sql, params);
    return result.insertId;
  }
  

  public findUserByEmail(email: string): Promise<any> { // methode pour rechercher un utilisateur par email dans ma base de données pour se connecter
    return new Promise((resolve, reject) => {
      const sql = 'SELECT user_id, password_hash FROM users WHERE email = ?'; // selectionner l'id de l'utilisateur et le mot de passe haché de la table users où l'email est égal à l'email fourni
      this.connection.query(sql, [email], (err, results) => { // executer la requete sql et traiter les résultats
        if (err) { // si une erreur est survenue lors de la recherche de l'utilisateur
          console.error('Erreur lors de la recherche de l’utilisateur:', err); // affiche un message d'erreur dans la console
          reject(err); // rejeter la promesse avec l'erreur
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
    // Hacher le nouveau mot de passe avant de le stocker
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
  
    const sql = `UPDATE users SET password_hash = ? WHERE email = ?`;
    await this.query(sql, [hashedPassword, email]);
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
    
    // Vérifiez que des résultats ont été retournés
    if (results.length === 0) {
      return false; // Aucun token valide trouvé
    }
    
    // Maintenant, nous avons au moins un résultat, vérifiez que le token correspond à l'utilisateur
    const user = await this.findUserByEmail(email);
    
    // Vérifiez que l'utilisateur existe et que le user_id correspond
    if (!user || user.user_id !== results[0].user_id) {
      return false; // Soit l'utilisateur n'existe pas, soit le token ne correspond pas à cet utilisateur
    }
    
    return true; // Le token est valide et correspond à l'utilisateur
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






  public createAppointement(acuityUserId: Number, appointment_type_id: Number, calendar_id: Number, date: string, time: string) { // enregistrer un rendez-vous dans ma base de données avec les informations suivantes : id de l'utilisateur, id du type de rendez-vous, id du calendrier, date et heure du rendez-vous

    const formattedTime = `${time}:00`; // Ajoute les secondes à l'heure pour obtenir un format de date complet (HH:MM:SS)


    const sql = `INSERT INTO appointments (user_id, appointment_type_id, calendar_id, date, time) VALUES (?, ?, ?, ?, ?)`; // isertion des données dans la table appointments contenant les colonnes user_id, appointment_type_id, calendar_id, date, time


    const params = [acuityUserId, appointment_type_id, calendar_id, date, formattedTime]; // params est un tableau qui contient les valeurs des colonnes de la table appointments


    this.query(sql, params) // this.query est une méthode de la classe Database qui permet d'executer une requete sql
      .then(results => { // .then est une méthode qui permet de traiter les résultats de la requete sql
        console.log(`Resultat createAppointement :\n${results}`); // affiche les résultats de la requete sql dans la console
      }).catch(err => { // .catch est une méthode qui permet de traiter les erreurs de la requete sql
        console.log(`Une erreur s'est produite pour createAppointement\n${err}`); // affiche un message d'erreur dans la console
      });
  }

}

export default Database;
