import React from 'react';

const Osteopathy = () => {
  return (
    <div className={`lg:mr-[20rem] max-w-7xl mx-auto`}>
      <h1 className="text-3xl font-bold mb-4 text-black font-semibold font-serif">Osteopathy</h1>
      <p className="mb-4 font-semibold font-serif">
      Osteopathy is a manual practice that aims to restore movement to tissues, organs and joints. 
      Osteopathy is a complementary therapy used in particular for back and joint pain, but it relieves all types of pain. 
      It is a holistic approach and unconventional medicine.
      </p>
      <img
        src="/src/assets/osteopathie-i.jpg" 
        alt="Osteopathy"
        className="mb-4 w-full h-[450px]"
      />
      <h2 className="text-2xl text-black font-semibold font-serif mb-3">Definitions of osteopathy</h2>
      
      
      <p className="mb-4 font-semibold font-serif">
      There are different definitions of osteopathic practice depending on the organizations and legislation.
      For the World Health Organization (WHO), “osteopathy (also called osteopathic medicine) is based on the use of manual contact for diagnosis and treatment. 
      It takes into account the relationships between body, mind, reason, health and illness. 
      It places emphasis on the structural and functional integrity of the body and the body's intrinsic tendency to self-heal. »
      According to French regulations, this is a systemic approach which makes it possible to act on functional disorders and their symptoms. 
      After an assessment, the osteopath carries out mobilizations and manipulations to take care of the dysfunctions.
      </p>

      <h1 className="text-2xl text-black font-semibold font-serif mb-3">Origin and history of osteopathy</h1>
      <p className="mb-4 font-semibold font-serif">
      Osteopathy is a manual practice that was founded and developed in the 19th century by Andrew Taylor Still. 
      The latter practiced medicine and surgery during the Civil War (1861-1865), which allowed him to acquire important knowledge of human anatomy.
      Thanks to this knowledge, he established the principles of osteopathy in 1874. 
      Faced with the success of the discipline, he created the American School of Osteopathy, the first school of osteopathy, in Kirskville, in 1892.
      </p>

      <p className="mb-4 font-semibold font-serif">
      They are the first students of the school who will develop osteopathy in Europe. 
      Thus, in 1917, John Martin Littlejohn founded the British School of Osteopathy in London. 
      In France, the practice appeared in the 1950s with the creation of the French Society of Osteopathy by Dr. Lavezzarri. 
      The first school was opened in Paris in 1950 by Paul Gény, a student of the British School of Osteopathy. 
      In 1953, the Syndicat de Médecine Manuelle Ostéopathie de France (SMMOF) was founded to fight against the practice of osteopathy by people who did not hold a medical diploma.
      The evolution of the development of the practice has led to new legislation: only doctors can practice osteopathy. 
      This decision changed in March 2002, when France legalized the practice of osteopathy.
      </p>


    </div>
  );
};

export default Osteopathy;
