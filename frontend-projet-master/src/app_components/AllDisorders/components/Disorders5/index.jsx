import React from 'react';


const Disorders5 = () => {
  return (
    <div style={{ marginRight: '23rem' }} className="max-w-6xl mx-auto my-5">
      <h2 className="text-2xl font-semibold mb-6 text-black">
      Pain, Joint pain, Become a mother
      </h2>
     
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/douleur.png" alt="Ostéopathie" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-black">Pain</h3>
          <p>
          Pain is a public health issue. In France, studies carried out by Inserm estimate that pain is the cause of two thirds of medical consultations.....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Pain and muscles</li>
            <li> Sciatica</li>
            

          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/articulaire.png" alt="Chiropraxie" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-black">Joint pain</h3>
          <p>
          the Joint pain affects millions of French people. This name brings together a set of disorders linked to the dysfunction of muscles, joints, bones and tendons. Joint pain is common and can be disabling (osteoarthritis, osteoporosis, lower back pain, etc.).....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Arthrose</li>
            

          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/mam.png" alt="Hypnose" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-black">Become a mother</h3>
          <p>
          In 2018, nearly 760,000 children were born in France. In vitro fertilization (IVF) allows parents to carry out assisted reproduction. Alternative medicine can support pregnant women during their pregnancy and help them prepare for childbirth....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>PMA support (Medically Assisted Reproduction)</li>
            <li>Preparation for childbirth</li>

          </ul>
        </div>
      </div>
      
    </div>
    
  );
};

export default Disorders5;
