import React from 'react';

const Ayurveda = () => {
  return (
    <div className={`lg:mr-[20rem] max-w-7xl mx-auto mt-10`}>
      <h1 className="text-3xl font-bold mb-4 text-black font-semibold font-serif">Ayurveda</h1>
      <p className="mb-4 font-semibold font-serif">
         Ayurveda is a traditional Indian medicine whose fundamental notions are those of a permanent balance to be maintained in order
         to be in full health and the development of our self-healing capacities, in harmony with our environment.
      </p>
      <img
        src="/src/assets/ayurveda2.jpeg" 
        alt="Ayurveda"
        className="mb-4 w-full h-[450px]"
      />
      <h2 className="text-2xl text-black font-semibold font-serif mb-3">Ayurveda: How does it work?</h2>
      
      <p className="mb-4 font-semibold font-serif">
      Ayurveda is a complete process, still used mainly in India and Sri Lanka. 
      It draws its sources from founding concepts, very divergent from those of Western medicine. 
      He considers that Man is linked to his environment.
      Indeed, as in Traditional Chinese Medicine, Ayurveda takes into account the five fundamental elements : ether, air, fire, earth and water.
      These elements represent the concept of space, movement, flow, heat or even solidity. 
      The combination of these five states of matter constitutes three “doshas” (humors or vital energies): dosha vata (air), dosha pitta (fire) and dosha kapha (water). 
      These doshas are responsible for psychic and physical functioning. Each individual is made up of a combination of these three doshas. 
      In Ayurveda, we are interested in the appearance of an imbalance of these “doshas”. Relieving a pathology would therefore involve restoring their balance.
      </p>
     

      <p className="mb-4 font-semibold font-serif">
      According to Ayurvedic thought, the functioning of our body is the same as that of the world and nature.
      Both medicine and philosophy, Ayurveda is based on the concept that we are all born with our own constitution reflecting our personal state of balance
      which we call “Prakriti”. The latter can become unbalanced and cause harm.
      Regaining this state of balance and optimal health, its vital energy potential, 
      requires a complete Ayurvedic assessment to take stock of the birth constitution and imbalances and to opt for personalized techniques aimed at restoring the harmony. 
      This includes lifestyle advice, dietary advice, meditation exercises, breathing exercises, yoga, massages, etc.
      </p>
      
      
    </div>
  );
};

export default Ayurveda;
