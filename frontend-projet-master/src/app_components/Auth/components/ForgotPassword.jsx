import React, { useState } from 'react';
import axios from 'axios';
import Layout from "../../Layout";

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://api.freesession.net/api/request-password-reset', { email });
      setMessage(response.data.message);
    } catch (error) {
      console.log('Erreur lors de la demande de réinitialisation du mot de passe', error);
      setMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen bg-[#225886] px-2 sm:px-4 md:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-black">Réinitialiser le mot de passe</h2>
          <form onSubmit={handleSubmit} className="text-center">
            <input 
              className="w-full text-black px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="Entrez votre email"
            />
            <button 
              className="w-full px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              type="submit"
            >
              Envoyer
            </button>
          </form>
          {message && <p className="text-black mt-2">{message}</p>}
        </div>
      </div>
    </Layout>
  );
}

export default ForgotPassword;
