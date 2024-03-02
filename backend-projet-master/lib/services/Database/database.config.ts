export interface DatabaseConfiguration { // export de l'interface DatabaseConfiguration qui contient les informations de connexion à la base de données
  user: string;
  password: string;
  server: string;
  database: string;
}

const db_config: DatabaseConfiguration = { // constante db_config de type DatabaseConfiguration qui contient les informations de connexion à la base de données
  user: "",
  password: "",
  server: "projet_mysql",
  database: "clients",
};

export default db_config;
