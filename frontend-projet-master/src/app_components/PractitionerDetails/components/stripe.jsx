import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isCardReady, setIsCardReady] = useState(false);
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
  });

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (!stripe || !elements || !isCardReady) {
      console.log('Stripe.js or CardElement has not loaded yet.');
      return;
    }

  
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log('[error]', error);
      alert('Erreur de paiement: ' + error.message);
      return;
    }

    console.log('PaymentMethod', paymentMethod);
    
    try {
        const {id} = paymentMethod
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/payment`, {
        amount: 9900, // ton commence par swikly tu verras vas y monrte
        id:id,
      });

      console.log('Payment response', response.data);
      alert('Paiement réussi!');
    } catch (error) {
      console.error('Erreur de paiement:', error);
      alert('Échec du paiement!');
    }
  };

  
  useEffect(() => {
    if (elements) {
      const cardElement = elements.getElement(CardElement);
      if (cardElement) {
        cardElement.on('ready', () => {
          setIsCardReady(true);
        });
      }
    }
  }, [elements, setIsCardReady]);
  

  return (
    <div className="max-w-md mx-auto bg-white p-8 border border-gray-200 mt-10 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700 text-center">Règlement de la consultation (99,00 €)</h2>
      <p className="text-gray-600 text-center mb-4">Votre paiement est entièrement sécurisé</p>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-bold text-gray-500">Nom</label>
            <input
              type="text"
              name="lastName"
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              placeholder="Doe"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block mb-1 font-bold text-gray-500">Prénom</label>
            <input
              type="text"
              name="firstName"
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              placeholder="John"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block mb-1 font-bold text-gray-500">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded p-2 outline-none focus:shadow-outline"
            placeholder="john.doe@example.com"
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-4">
          <label className="block mb-1 font-bold text-gray-500">Téléphone</label>
          <input
            type="tel"
            name="phone"
            className="w-full border rounded p-2 outline-none focus:shadow-outline"
            placeholder="+33 6 12 34 56 78"
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-4">
          <label className="block mb-1 font-bold text-gray-500">Numéro de carte</label>
          <input
            type="text"
            name="cardNumber"
            className="w-full border rounded p-2 outline-none focus:shadow-outline"
            placeholder="1234 1234 1234 1234"
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block mb-1 font-bold text-gray-500">Date d'expiration</label>
            <input
              type="text"
              name="expiryDate"
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              placeholder="MM / AA"
              onChange={handleInputChange}
              />
              </div>
              <div className="col-span-2">
              <label className="block mb-1 font-bold text-gray-500">CVC</label>
              <input
                         type="text"
                         name="cvc"
                         className="w-full border rounded p-2 outline-none focus:shadow-outline"
                         placeholder="CVC"
                         onChange={handleInputChange}
                       />
              </div>
              </div>
              <div className="mt-4">
              <label className="block mb-1 font-bold text-gray-500">Pays</label>
              <select
                       name="country"
                       className="w-full border rounded p-2 outline-none focus:shadow-outline"
                       onChange={handleInputChange}
                     >
              <option value="France">France</option>
              {/* Add more country options here */}
              </select>
              </div>
              <button
                     type="submit"
                     className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                   >
              Payer
              </button>
              </form>
              </div>
              );
              };
              
              export default PaymentForm;
