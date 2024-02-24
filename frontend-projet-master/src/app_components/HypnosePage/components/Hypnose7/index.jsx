import React from 'react';


const Hypnose7 = () => {
  return (
    <div style={{ marginRight: '28rem' }} className="max-w-6xl mx-auto my-5">
      <h2 className="text-2xl font-semibold mb-6 text-black">
      Traditional Japanese medicine, Kinesiology, Energetic practices ...
      </h2>
     

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/medecine.PNG" alt="Ostéopathie" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2">Traditional Japanese medicine</h3>
          <p>
          Traditional Japanese Medicine (TMJ), called Shinkyu and little known to Westerners, comes from Traditional Chinese Medicine....
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/kine.jpg" alt="Chiropraxie" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2">Kinesiology</h3>
          <p>
          Kinesiology uses muscle testing to identify imbalances and disorders in the person...
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/pratiques eergiques.PNG" alt="Hypnose" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2">Energetic practices</h3>
          <p>
          Energy practices bring together a set of techniques that aim to influence, balance or harmonize an individual's vital energy.....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Reiki</li>
            <li>Sound therapy</li>
          </ul>
        </div>
      </div>
      
    </div>
    
  );
};

export default Hypnose7;
