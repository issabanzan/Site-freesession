import React from 'react';

const Pain = () => {
  return (
    <div className="mt-8 mx-auto max-w-7xl sm:pl-0 lg:mr-[240px]">
      <h1 className="text-3xl font-bold mb-4 text-black font-semibold font-serif">Pain</h1>
      <p className="mb-4 font-semibold font-serif">
      Pain is a public health issue. In France, studies carried out by Inserm estimate that pain is the cause of two thirds of medical consultations. 
      Pain is a subjective and complex phenomenon that can be felt physically and emotionally. 
      Pain is constructed by two main factors: perception and sensation. 30% of the population suffers from persistent pain lasting more than three months. 
      Exposure to pain increases with age.
      </p>
      <img
        src="/src/assets/douleur.jpg" 
        alt="Pain"
        className="mb-4 w-full h-[460px]"
      />
      <h2 className="text-2xl text-black font-semibold font-serif mb-3">What is pain?</h2>
      
      
      <p className="mb-4 font-semibold font-serif">
      The human body is made up of more than nearly 100 billion neurons. 
      Nerves are present throughout the body (surface of the skin, in muscles, joints). 
      These are electrical signals that propagate information to the brain. 
      Pain is directly linked to the nerves, which explains the high frequency of different pains.
      The International Association for the Study of Pain defines pain as “an unpleasant sensation and emotional experience in response to, or described in terms of, actual or potential tissue damage.”
      </p>
     

      <p className="mb-4 font-semibold font-serif">
          Pain is a complex sensation that appears on a sensory and emotional level. 
          It is an unpleasant and subjective sensation that comes from the disruption of nerves during muscle tissue damage. 
          Pain acts as an alarm signal about an imbalance in the body, an injury or a pathology.
      </p>

      <h1 className="text-2xl text-black font-semibold font-serif mb-3">Types of pain</h1>
      <p className="mb-4 font-semibold font-serif">
          There are several main types of pain.
          <br />Acute pain: We speak of acute pain or inflammatory pain when it only appears for a short time and is caused by a specific factor (illness, medication, operation, burn, etc.). 
          It is also said to be linked to a sudden injury to the tissue, inflammatory trauma 
          or distention of a viscera. Acute pain is associated with various manifestations: tachycardia, sweating, 
          increased blood pressure, anxiety, etc.
      </p>

      <p className="mb-4 font-semibold font-serif">
          Procedural pain: When pain is caused in response to a dressing, treatment or blood test, 
          it is called procedural pain. 
          Its management is a frequent concern for any health professional and has an influence on the quality of care.
      </p>
      
      
    </div>
  );
};

export default Pain;
