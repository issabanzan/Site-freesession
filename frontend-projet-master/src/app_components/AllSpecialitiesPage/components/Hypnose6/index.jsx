import React from 'react';


const Hypnose6 = () => {
  return (
    <div className="mt-8 mx-auto max-w-7xl sm:pl-0 lg:mr-[240px]">
      <h2 className="text-2xl font-semibold mb-6 text-black font-serif">
      Brief therapies, auriculotherapy, Yoga ...
      </h2>
    

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="briefTherapies">
          <img src="/src/assets/breve.png" alt="briefTherapies" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Brief therapies</h3>
          <p className="mb-4 font-semibold font-serif">
          The goal of brief therapies is to manage suffering and eliminate symptoms quickly and effectively. Brief therapies focus more on how a problem will be resolved rather than on the causes of the problem....
          </p>

          <ul className="list-disc list-inside mt-4 text-black">
            <li>EMDR</li>
            <li>EFT (Emotional Freedom Technique)</li>
            <li>PNL</li>
            <li>Emotional Regulation - TIPI</li>
            <li>Thérapie comportementale et cognitive (TCC)</li>
            <li>Eye Movements</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="auriculotherapy">
          <img src="/src/assets/auriculo.png" alt="auriculotherapy" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">auriculotherapy</h3>
          <p className="mb-4 font-semibold font-serif">
          Auriculotherapy stimulates energy points on different locations in the outer ear. This stimulation can be carried out by different means...
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="yoga">
          <img src="/src/assets/yoga.jpg" alt="yoga" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Yoga</h3>
          <p className="mb-4 font-semibold font-serif">
          These practices combine gymnastics techniques that are both gentle and energetic. Yoga, Tai Chi and Qi Gong have almost similar effects, it is their practices and their movements that differ....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Yoga</li>
            <li>Qi Gong</li>
            <li>Tai Chi</li>
            <li>Feldenkrais method</li>


          </ul>
        </div>
      </div>
      
    </div>
    
  );
};

export default Hypnose6;
