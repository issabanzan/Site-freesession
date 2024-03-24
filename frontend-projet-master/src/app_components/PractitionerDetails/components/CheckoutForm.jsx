import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'; 
import axios from 'axios';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  // Ajoutez des états pour le message de succès et d'erreur
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPaymentSuccess(''); // Réinitialiser le message de succès
    setPaymentError(''); // Réinitialiser le message d'erreur

    if (!stripe || !elements) {
      return;
    }

    setPaymentSuccess(null); // Réinitialisez les messages avant de soumettre
    setPaymentError(null);

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError('Erreur de paiement'); // Mettre à jour l'état d'erreur
      console.log('erreur', error);
    } else {
      console.log('methode de paiement', paymentMethod);
      const response = await axios.post("https://api.freesession.net/api/payment", {
        payment_method_id: paymentMethod.id,
        amount: 100,
        name,
        surname,
        email,
      });

      if (response.data.message === 'Payment successful') {
        setPaymentSuccess('Payment successful'); // Mettre à jour l'état de succès
        console.log('Payment successful');
      } else {
        setPaymentError('Failed payment'); // Mettre à jour l'état d'erreur
        console.log('Failed payment');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Last name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="First name" value={surname} onChange={(e) => setSurname(e.target.value)} />
      <input type="email" placeholder="mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <CardElement />
      <button type="submit" disabled={!stripe}>To Pay</button>
      {paymentSuccess && <div style={{color: 'green'}}>{paymentSuccess}</div>}
      {paymentError && <div style={{color: 'red'}}>{paymentError}</div>}
    </form>
  );
};

export default CheckoutForm;
