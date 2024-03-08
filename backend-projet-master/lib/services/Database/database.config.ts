
export interface DatabaseConfiguration { 
  user: string;
  password: string;
  server: string;
  database: string;
}

const db_config: DatabaseConfiguration = {  
  user: process.env.USERDATABASE, 
  password: process.env.PASSWORDDATABASE,
  server: process.env.SERVERDATABASE,
  database: process.env.DATABASENAME,
};

export default db_config;
