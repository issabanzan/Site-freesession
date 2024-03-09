// Importations nécessaires de React, Stripe et axios pour les requêtes HTTP
import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

// Définition du composant CheckoutForm
const CheckoutForm = () => {
  // Utilisation des hooks fournis par Stripe pour accéder à l'instance de Stripe et aux éléments du formulaire
  const stripe = useStripe();
  const elements = useElements();

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (event) => {
    // Empêcher le comportement par défaut du formulaire (rechargement de la page)
    event.preventDefault();

    // Vérifier si Stripe est chargé et prêt
    if (!stripe || !elements) {
      // Si Stripe.js n'est pas encore chargé, ne rien faire
      return;
    }

    // Récupérer l'élément CardElement et créer une méthode de paiement
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    // Gérer les erreurs éventuelles lors de la création de la méthode de paiement
    if (error) {
      console.log('[error]', error);
    } else {
      // Si la création est réussie, utiliser l'ID de la méthode de paiement pour effectuer un paiement côté serveur
      console.log('[PaymentMethod]', paymentMethod);
      const response = await axios.post("http://localhost:4000/api/payment", {
  payment_method_id: paymentMethod.id,
  amount: 100, // Ajoutez l'amount ici, 2000 centimes = 20 euros
});


      // Gérer la réponse de votre serveur (succès ou échec du paiement)
      if (response.data.success) {
        console.log('Paiement réussi');
        // Traitement en cas de succès du paiement
      } else {
        console.log('Paiement échoué');
        // Traitement en cas d'échec du paiement
      }
    }
  };

  // Rendu du formulaire avec CardElement pour saisir les informations de la carte, et un bouton pour soumettre
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Payer
      </button>
    </form>
  );
};

// Exportation par défaut du composant CheckoutForm pour l'utiliser ailleurs dans l'application
export default CheckoutForm;
