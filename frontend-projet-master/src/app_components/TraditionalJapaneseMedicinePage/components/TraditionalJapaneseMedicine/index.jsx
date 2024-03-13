import React from 'react';

const TraditionalJapaneseMedicine = () => {
  return (
    <div className={`lg:mr-[20rem] max-w-7xl mx-auto mt-10`}>
      <h1 className="text-3xl font-bold mb-4 text-black font-semibold font-serif">Traditional Japanese Medicine</h1>
      <p className="mb-4 font-semibold font-serif">
      Traditional Japanese Medicine (TMJ), called Shinkyu and little known to Westerners, comes from Traditional Chinese Medicine.
      However, its practice does not stop at a replication of Chinese medicine. 
      If Traditional Japanese Medicine had its origins there several millennia ago, it has developed and evolved over the centuries, 
      combining effective manual techniques, such as Shiatsu, acupuncture or traditional Amma massage, with real approach to health prevention.
      </p>
      <img
        src="/src/assets/japenese.jpeg" 
        alt="TraditionalJapaneseMedicine"
        className="mb-4 w-full h-[450px]"
      />
      <h2 className="text-2xl text-black font-semibold font-serif mb-3">the principles of Traditional Japanese Medicine</h2>
      
      
      <p className="mb-4 font-semibold font-serif">
       This form of therapy aims to stimulate the body's natural healing forces, without harmful side reactions.
       Too often ignored, traditional Japanese medicine can help relieve many disorders.
       Traditional Japanese Medicine contributes to the proper restoration of the body's functions.
       Thanks to its different methods, MTJ helps regulate imbalances.
       Traditional Japanese Medicine preventively stimulates the body's natural healing forces, 
       rebalances the body and can also be used as a curative complement when there are treatments in allopathic medicine. 
       It is a holistic medicine which is based on the circulation of energy in the body, and on the Taoist vision of the world. 
       Its objective is to maintain and strengthen health, and therefore strengthen the body's ability to heal itself.
      </p>
      
    </div>
  );
};

export default TraditionalJapaneseMedicine;
