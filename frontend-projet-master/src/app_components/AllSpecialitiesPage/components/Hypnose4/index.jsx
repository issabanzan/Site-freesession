import React from 'react';


const Hypnose4 = () => {
  return (
    <div style={{ marginRight: '23rem' }} className="max-w-6xl mx-auto my-5">
      <h2 className="text-2xl font-semibold mb-6 text-black">
      Sophrology, Meditation, Ayurveda ...
      </h2>
     

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="sophrology">
          <img src="/src/assets/sophroloie.png" alt="sophrology" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black">Sophrology</h3>
          <p>
          Sophrology is a psycho-corporal practice that promotes a good balance between body, mind and emotions. It combines relaxation, breathing and positive visualization techniques...
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Sophroanalysis</li>
            <li>Cardiac coherence</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="meditation">
          <img src="/src/assets/Meditation.jpg" alt="meditation" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black">Meditation</h3>
          <p>
          Meditation is a psycho-corporeal practice accessible to everyone which consists of focusing attention on one's thoughts and sensations. It also represents an effective ally in the field...
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="ayurveda">
          <img src="/src/assets/ayurvedaimage.png" alt="ayurveda" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black">Ayurveda</h3>
          <p>
          Ayurveda is a traditional Indian medicine whose fundamental notions are those of a permanent balance to be maintained in order to be in full health and the development of our abilities....
          </p>
          
        </div>
      </div>
      
    </div>
    
  );
};

export default Hypnose4;
