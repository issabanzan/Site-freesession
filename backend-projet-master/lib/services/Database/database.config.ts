export interface DatabaseConfiguration {
  user: string;
  password: string;
  server: string;
  database: string;
}

const db_config: DatabaseConfiguration = { 
  user: "root",
  password: "Banzan9771",
  server: "projet_mysql",
  database: "clients",
};

export default db_config;
