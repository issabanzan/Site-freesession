import React from 'react';

const Whoarewe = () => {
  return (
    <div className={`lg:mr-[20rem] max-w-7xl mx-auto`}>
      <h1 className="text-2xl text-black font-semibold font-serif mt-6 mb-4">
        Who are we ?
      </h1>
      <p className="text-black font-semibold font-serif mb-4">
      Freesession is a whole team whose aim is to help you take better care of your health thanks to alternative medicine.
      </p>
      <p className="text-black font-semibold font-serif mb-4">
      Freesession is a free platform that allows you to find a practitioner in alternative medicine, to book an appointment and to leave an opinion.
      </p>
      <p className="text-black font-semibold font-serif mb-8">
      Alternative medicines are a real complement to conventional medicine to be and stay in great shape over the long term, 
      we are convinced of this. Our mission is to help you find the right practitioner for you, and to help you take care of your health in a more natural way.
      </p>
      
      <h2 className="text-black font-semibold font-serif mb-4">
          Our values
      </h2>
      <ul className="list-disc pl-5 text-gray-700 text-base space-y-2">
        <li>
          <span className="font-semibold font-serif">Service :</span> Your well-being is our reason for being. We put all our energy and creativity into offering you new solutions.
        </li>
        <li>
          <span className="font-semibold font-serif">Requirement :</span> Your health is the most precious thing you have, the rigor we put into our work lives up to this requirement.
          </li>
        <li>
          <span className="font-semibold font-serif">Kindness :</span> Alternative medicine puts humans at the heart of their attention, and so do we. We put kindness into our approach to serve you better.
        </li>
        
      </ul>

      <h1 className="text-2xl text-black font-semibold font-serif mt-6 mb-4">
        The freesession team
      </h1>
      <p className="text-black font-semibold font-serif">
        The team is made up of enthusiasts who are passionate about alternative medicine.
      </p>
    </div>
  );
};

export default Whoarewe;
