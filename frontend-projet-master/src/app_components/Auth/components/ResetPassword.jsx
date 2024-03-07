import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Layout from "../../Layout";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const location = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams(location.search);
    const token = params.get('token'); // Extract the token from URL

    try {
      await axios.post('https://api.freesession.netapi/request-password-reset', { token, newPassword });
      setMessage('Votre mot de passe a été réinitialisé avec succès.');
    } catch (error) {
      console.error('Erreur lors de la réinitialisation du mot de passe:', error);
      setMessage('Erreur lors de la réinitialisation du mot de passe.');
    }
  }

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen bg-[#225886]">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-black">Réinitialiser le mot de passe</h2>
          <form onSubmit={handleSubmit} className="text-center">
            <label className="block mb-4 text-black">
              Nouveau mot de passe:
              <input
  type="password"
  value={newPassword}
  placeholder="Entrez votre nouveau mot de passe"
  onChange={(e) => setNewPassword(e.target.value)}
  className="border-black border-solid border-2 rounded-md px-3 py-2 mt-1 w-full focus:ring-0"
  required
/>

            </label>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
              Réinitialiser le mot de passe
            </button>
          </form>
          {message && <p className="text-black mt-4">{message}</p>}
        </div>
      </div>
    </Layout>
  );
}

export default ResetPassword;
