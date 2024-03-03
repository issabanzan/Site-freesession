import React from 'react';


const Hypnose2 = () => {
  return (
    <div style={{ marginRight: '23rem' }} className="max-w-6xl mx-auto my-5">
      <h2 className="text-2xl font-semibold mb-6 text-black">
      Naturopathy, Traditional Chinese energetics, Massage...
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="naturopathy">
          <img src="/src/assets/Naturopathie-i.jpg" alt="naturopathy" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black">Naturopathy</h3>
           <p>
           Naturopathy's mission is to prevent and maintain the body's balance through the use of natural techniques and the establishment of a lifestyle....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Aromatherapy</li>
            <li>Phytotherapy</li>
            <li>Bach flowers</li>
            <li>Phytembryotherapy</li>
            <li>Oligotherapy</li>
          
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="energetique">
          <img src="/src/assets/energique.png" alt="energetique" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black">Traditional Chinese energetics</h3>
          <p>
          L'Energétique Traditionnelle Chinoise (ETC) ou médecine traditionnelle chinoise (MTC) est une pratique complète et éprouvée depuis des millénaires, basé sur l’énergie vitale - le « Qi » - omniprésent...
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Acupuncture traditionnelle</li>
            <li>Tui Na</li>
            <li>Pharmacopée (phytothérapie chinoise)</li>
            <li>Acupression</li>
          </ul>

        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="massage">
          <img src="/src/assets/Massage-i.jpg" alt="massage" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black">Massage</h3>
          <p>
          Used for a millennium as a method of healthy and attractive body care, massage is recognized worldwide for its benefits and has been integrated into many health systems...
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Chi Nei Tsang</li>
            <li>Tui Na</li>
            <li>Sound therapy</li>
            
          </ul>
    

        </div>
      </div>
      
    </div>
    
  );
};

export default Hypnose2;
