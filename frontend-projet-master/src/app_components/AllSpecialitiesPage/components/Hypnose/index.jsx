import React from 'react';


const Hypnose = () => {
  return (
    <div className={`lg:mr-[20rem] max-w-7xl mx-auto mt-10`}>
      <h2 className="text-2xl font-semibold font-serif mb-6 text-black">
      Osteopathy, Chiropraxie, Hypnosis ...
      </h2>
      <p className="mb-4 font-serif">
      Alternative medicines are diverse and varied and can be useful in many situations. We have summarized here the characteristics of the best known and recognized practices. To you to discover them! If you would like to know more about the principles of alternative medicine
      </p>
      <p className="mb-4 font-semibold font-serif">
      
      Consult your doctor first before using complementary practices.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="bg-white shadow-md rounded-md p-4">
        <a href="Osteopathy">
          <img src="/src/assets/osteopathie-i.jpg" alt="Osteopathy" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Osteopathy</h3>
          <p className="mb-4 font-semibold font-serif">
          Osteopathy is a manual practice which aims to restore movement to tissues, organs and joints....
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-md p-4">
        <a href="chiropraxie">
          <img src="/src/assets/chiropraxie-i.jpg" alt="Chiropraxie" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Chiropraxie</h3>
          <p className="mb-4 font-semibold font-serif">
          Chiropractic is based on a global conception of the functioning of the body and the relationships existing between the spinal column...
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-md p-4">
        <a href="hypnosis">
          <img src="/src/assets/hypnose-i.jpg" alt="hypnosis" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Hypnosis</h3>
          <p className="mb-4 font-semibold font-serif">
          The principle of hypnosis is to access an altered state of consciousness to revisit reality and the way you perceive it....
          </p >
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Humanist Hypnosis</li>
            <li>Ericksonian Hypnosis</li>
            <li>Spiritual Hypnosis</li>
          </ul>
        </div>
      </div>
      
    </div>
    
  );
};

export default Hypnose;
