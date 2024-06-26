import React from 'react';


const Disorders5 = () => {
  return (
    <div className={`lg:mr-[20rem] max-w-7xl mx-auto`}>
      <h2 className="text-2xl font-semibold mb-6 text-black font-serif">
      Pain, Joint pain, Become a mother
      </h2>
     
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="pain">
          <img src="/src/assets/douleur.jpg" alt="pain" className="w-full h-30 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black">Pain</h3>
          <p className="mb-4 font-semibold font-serif">
          Pain is a public health issue. In France, studies carried out by Inserm estimate that pain is the cause of two thirds of medical consultations.....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Pain and muscles</li>
            <li> Sciatica</li>
            

          </ul>
        </div>

        
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="jointpain">
          <img src="/src/assets/articulaire.jpg" alt="Jointpain" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Joint pain</h3>
          <p className="mb-4 font-semibold font-serif">
          the Joint pain affects millions of French people. This name brings together a set of disorders linked to the dysfunction of muscles, joints, bones and tendons. Joint pain is common and can be disabling (osteoarthritis, osteoporosis, lower back pain, etc.).....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Arthrose</li>
            

          </ul>
        </div>

        
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="becomeamother">
          <img src="/src/assets/mam.jpg" alt="becomeamother" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Become a mother</h3>
          <p className="mb-4 font-semibold font-serif">
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
