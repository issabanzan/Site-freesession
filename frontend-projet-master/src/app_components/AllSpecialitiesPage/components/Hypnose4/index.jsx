import React from 'react';


const Hypnose4 = () => {
  return (
    <div className={`lg:mr-[20rem] max-w-7xl mx-auto mt-10`}>
      <h2 className="text-2xl font-semibold mb-6 text-black font-serif">
      Sophrology, Meditation, Ayurveda ...
      </h2>
     

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
       
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="sophrology">
          <img src="/src/assets/sophrology.jpg" alt="sophrology" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Sophrology</h3>
          <p className="mb-4 font-semibold font-serif">
          Sophrology is a psycho-corporal practice that promotes a good balance between body, mind and emotions. It combines relaxation, breathing and positive visualization techniques...
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Sophroanalysis</li>
            <li>Cardiac coherence</li>
          </ul>
        </div>

        
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="meditation">
          <img src="/src/assets/Meditation.jpg" alt="meditation" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Meditation</h3>
          <p className="mb-4 font-semibold font-serif">
          Meditation is a psycho-corporeal practice accessible to everyone which consists of focusing attention on one's thoughts and sensations. It also represents an effective ally in the field...
          </p>
        </div>

        
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="ayurveda">
          <img src="/src/assets/ayurved2.jpg" alt="ayurveda" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black">Ayurveda</h3>
          <p className="mb-4 font-semibold font-serif">
          Ayurveda is a traditional Indian medicine whose fundamental notions are those of a permanent balance to be maintained in order to be in full health and the development of our abilities....
          </p>
          
        </div>
      </div>
      
    </div>
    
  );
};

export default Hypnose4;
