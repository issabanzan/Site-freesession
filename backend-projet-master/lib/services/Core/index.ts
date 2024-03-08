/*fichier core.ts qui contient la classe Core qui est une classe de base pour les services de l'application backend
 qui contient des méthodes pour gérer les erreurs, les succès et les requêtes réseau*/

import axios from "axios"; // import le module axios pour les requêtes HTTP 
import { Request } from "express"; // import le type Request depuis le module express pour les requêtes HTTP 

class Core { 
  constructor() {} // constructeur de la classe Core

  public logError(error: any) { // méthode logError qui affiche un message d'erreur dans la console 
    return console.log(`Une erreur est survenue : ${error}`);
  }

  public logSuccess(message: string) { // méthode logSuccess qui affiche un message de succès dans la console
    return console.log(`[SUCCESS] ${message}`); 
  }
  // méthode network qui envoie une requête HTTP avec la méthode, l'URL, les en-têtes et les données spécifiées
  protected network = async ( 
    method: "GET" | "POST" | "PUT" | "DELETE", // méthode HTTP
    url: string,
    headers: any = {
      "Content-Type": "application/json",
    },
    data: any = {} // données de la requête
  ): Promise<Response> => {
    const response = await axios({
      method,
      url,
      headers,
      data,
    });

    if (response.status !== 200) { // si le statut de la réponse n'est pas 200, lance une erreur
      throw new Error(response.statusText); // lance une erreur avec le message de statut de la réponse
    }

    return response.data;
  };

  public get = async <T>(url: string, headers = {}): Promise<T> => { // méthode get qui envoie une requête GET
    return (await this.network("GET", url, headers)) as unknown as T;
  };

  public post = async <T>(url: string, headers = {}, data: any): Promise<T> => { // méthode post qui envoie une requête POST
    return (await this.network("POST", url, headers, data)) as unknown as T;
  };

  public getQueryParams = ( // méthode getQueryParams qui récupère les paramètres de la requête
    request: Request, // requête HTTP
    key: string, // clé du paramètre
    isRequired = true // si le paramètre est requis ou non
  ): string | undefined => {
    const value = request.query[key];

    if (!value && isRequired) { // si le paramètre est requis et n'est pas défini, lance une erreur
      throw new Error(`Query param ${key} is missing`);
    }

    if (!value && !isRequired) { // si le paramètre n'est pas requis et n'est pas défini, retourne undefined
      return undefined;
    }

    return `${value}`;
  };
}

export default Core;
