import React from 'react';


const Hypnose7 = () => {
  return (
    <div className="mt-8 mx-auto max-w-7xl sm:pl-0 lg:mr-[240px]">
      <h2 className="text-2xl font-semibold mb-6 text-black font-serif">
      Traditional Japanese medicine, Kinesiology, Energetic practices ...
      </h2>
     

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="traditionalJapaneseMedicine">
          <img src="/src/assets/medecine.png" alt="traditionalJapaneseMedicine" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Traditional Japanese medicine</h3>
          <p className="mb-4 font-semibold font-serif">
          Traditional Japanese Medicine (TMJ), called Shinkyu and little known to Westerners, comes from Traditional Chinese Medicine....
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="kinesiology">
          <img src="/src/assets/kine.jpg" alt="kinesiology" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Kinesiology</h3>
          <p className="mb-4 font-semibold font-serif">
          Kinesiology uses muscle testing to identify imbalances and disorders in the person...
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="energeticPractices">
          <img src="/src/assets/pratiques eergiques.png" alt="Hypnose" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Energetic practices</h3>
          <p className="mb-4 font-semibold font-serif">
          Energy practices bring together a set of techniques that aim to influence, balance or harmonize an individual's vital energy.....
          </p >
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
