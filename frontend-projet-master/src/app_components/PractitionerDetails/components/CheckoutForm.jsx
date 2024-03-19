import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'; 
import axios from 'axios';

const CheckoutForm = () => { 
  const stripe = useStripe(); // stripe est un objet qui contient les méthodes de paiement
  const elements = useElements(); // elements est un objet qui contient les éléments de paiement

  
  const [name, setName] = useState(''); 
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) { // Vérification de la présence de stripe et elements
      return;
    }

    const cardElement = elements.getElement(CardElement); // Récupération de l'élément de carte
    const { error, paymentMethod } = await stripe.createPaymentMethod({ // Création de la méthode de paiement
      type: 'card', // Type de paiement
      card: cardElement, // Élément de carte
    });

    if (error) {
      console.log('erreur', error);
    } else {
      console.log('methode de paiement', paymentMethod);
      const response = await axios.post("https://api.freesession.net/api/payment", {
        payment_method_id: paymentMethod.id,
        amount: 100, // Montant du paiement
        name, // Nom de l'utilisateur
        surname, //  Prénom de l'utilisateur
        email, // Email de l'utilisateur
      });

      if (response.data.message === 'paiement reussi') { // Vérification de la réponse 
        console.log('Paiement réussi');
      } else {
        console.log('Paiement échoué');
      }
    }
  };

  return ( // Retourne le formulaire de paiement
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Prénom" value={surname} onChange={(e) => setSurname(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <CardElement />
      <button type="submit" disabled={!stripe}>Payer</button>
    </form>
  );
};

export default CheckoutForm;
