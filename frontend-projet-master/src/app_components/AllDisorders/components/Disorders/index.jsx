import React from 'react';


const disorders = () => {
  return (
    <div className="mt-8 mx-auto max-w-7xl sm:pl-0 lg:mr-[240px]">
      <h2 className="text-2xl font-semibold mb-6 text-black font-serif">
      Get healthy and improve your well-being ...
      </h2>
      <p className="mb-4 font-semibold font-serif">
      the Alternative medicine helps you get healthy and feel good. They have proven themselves in many areas, and we have deciphered for you the subjects on which they can particularly help you. If you would like to know more about the principles of alternative medicine,.
      </p>
      <p className="mb-10 flex items-center">
      
      Consult your doctor first before using complementary practices.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="headache">
          <img src="/src/assets/tete.jpg" alt="Ostéopathie" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Headache</h3>
          <p className="mb-4 font-semibold font-serif">
          Headache is a feeling of pain or discomfort felt in the head. There are several types of headaches, with various causes.....
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="stress">
          <img src="/src/assets/stress.jpg" alt="Chiropraxie" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">stress, anxiety, and phobia</h3>
          <p className="mb-4 font-semibold font-serif">
          More than half of medical consultations in Western societies are due to stress, which is the cause of significant consumption of medications, but also of alcohol or psychotropic drugs....
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="stomachaches">
          <img src="/src/assets/ventre.jpg" alt="Hypnose" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">stomach aches</h3>
          <p className="mb-4 font-semibold font-serif">
          Constipation, diarrhea, gastroesophageal disorders... The variety of stomach ache makes it a rather complex disorder. It can be caused by multiple reasons and is characterized by pain in the abdomen....
          </p>
        </div>
      </div>
      
    </div>
    
  );
};

export default disorders;
