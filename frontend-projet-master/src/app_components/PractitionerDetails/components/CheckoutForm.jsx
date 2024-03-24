import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Assurez-vous d'avoir importé PropTypes
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'; 
import axios from 'axios';

const CheckoutForm = ({ onPaymentSuccess }) => { 
  const stripe = useStripe();
  const elements = useElements();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('erreur', error);
    } else {
      console.log('methode de paiement', paymentMethod);
      const response = await axios.post("https://api.freesession.net/api/payment", {
        payment_method_id: paymentMethod.id,
        amount: 100, // Ajustez le montant selon votre besoin
        name,
        surname,
        email,
      });

      if (response.data.message === 'paiement reussi') {
        console.log('Paiement réussi');
        onPaymentSuccess();
      } else {
        console.log('Paiement échoué');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Prénom" value={surname} onChange={(e) => setSurname(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <CardElement />
      <button type="submit" disabled={!stripe}>Payer</button>
    </form>
  );
};

CheckoutForm.propTypes = {
  onPaymentSuccess: PropTypes.func.isRequired,
};

export default CheckoutForm;
