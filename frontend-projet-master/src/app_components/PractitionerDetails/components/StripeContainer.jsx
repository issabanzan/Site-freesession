import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'; // Assurez-vous que le chemin est correct

const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY); // stripePromise est égal à loadStripe avec la clé public
const stripePromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default StripeContainer;
