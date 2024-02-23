import { useState } from 'react';
import axios from 'axios';

const PaiementComponent = () => {
  const [paymentUrl, setPaymentUrl] = useState('');
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  const createSwiklyPayment = async () => {
    try {
      const formData = new FormData();
      formData.append('first_name', 'BIche');
      formData.append('last_name', 'BIche');
      formData.append('client_email', 'bibee@swikly.com');
      formData.append('swik_description', 'Teste Swikly payment creation');
      formData.append('swik_amount', '150');
      formData.append('swik_type', 'deposit');
      formData.append('swik_end_day', '2');
      formData.append('swik_end_month', '3');
      formData.append('swik_end_year', '2024');
      formData.append('email', 'true');
      formData.append('sms', 'true');
      formData.append('swik_lang', 'FR');
      formData.append('phone_number', '+33768636902');
      formData.append('swik_start_day', '19');
      formData.append('swik_start_month', '2');
      formData.append('swik_start_year', '2024');
      formData.append('redirect_url', 'https://google.com/');

      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1_0/newSwik`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data) {
        setPaymentUrl(response.data.acceptUrl);
        console.log('Paiement Swikly créé :', response.data);
      }
    } catch (error) {
      console.error('Erreur lors de la création du paiement Swikly :', error);
    } finally {
      setIsPaymentLoading(false); // Termine le chargement
    }
  };

  return (
    <div>
      <h1>Paiement avec Swikly</h1>
      <button onClick={createSwiklyPayment} disabled={isPaymentLoading}>
        {isPaymentLoading ? 'Chargement...' : 'Effectuer le paiement'}
      </button>
      {paymentUrl && (
        <iframe 
          src={paymentUrl} 
          width="100%" 
          height="600" 
          frameBorder="0" 
          title="Paiement Swikly"
          allowFullScreen>
            Chargement du paiement...
        </iframe>
      )}
    </div>
  );
};

export default PaiementComponent;