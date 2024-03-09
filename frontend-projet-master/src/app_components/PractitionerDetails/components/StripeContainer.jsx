import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'; // Assurez-vous que le chemin est correct

const PUBLIC_KEY = "pk_test_51OpWOiHlI297KVjoi6m5YmhWdpB6s5c7XQU9QU5Bpq0vkkFmXBJGdOvLaxs27IYCKJOHpQnebD3KjcWB4fQP3ICF00glcWOUck";
const stripePromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default StripeContainer;
