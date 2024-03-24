import React from 'react';
import PropTypes from 'prop-types'; // Importez PropTypes
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'; // Assurez-vous que le chemin est correct

const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY); // stripePromise est égal à loadStripe avec la clé public

const StripeContainer = ({ onPaymentSuccess }) => { 
    return (
        <Elements stripe={stripePromise}> 
            <CheckoutForm onPaymentSuccess={onPaymentSuccess} />
        </Elements>
    );
};

// Ajout de la validation PropTypes
StripeContainer.propTypes = {
  onPaymentSuccess: PropTypes.func.isRequired,
};

export default StripeContainer;
