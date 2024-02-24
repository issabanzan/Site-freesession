import React from 'react';


const Hypnose = () => {
  return (
    <div style={{ marginRight: '28rem' }} className="max-w-6xl mx-auto my-5 mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-black">
      Osteopathy, hypnosis, sophrology ...
      </h2>
      <p className="mb-4">
      Alternative medicines are diverse and varied and can be useful in many situations. We have summarized here the characteristics of the best known and recognized practices. To you to discover them! If you would like to know more about the principles of alternative medicine
      </p>
      <p className="mb-10 flex items-center">
      
      Consult your doctor first before using complementary practices.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/osteopathie.PNG" alt="Ostéopathie" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2">Osteopathy</h3>
          <p>
          Osteopathy is a manual practice which aims to restore movement to tissues, organs and joints....
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/chiropraxie.PNG" alt="Chiropraxie" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2">hypnosis</h3>
          <p>
          Chiropractic is based on a global conception of the functioning of the body and the relationships existing between the spinal column...
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/hypnosepicture.PNG" alt="Hypnose" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2">sophrology</h3>
          <p>
          The principle of hypnosis is to access an altered state of consciousness to revisit reality and the way you perceive it....
          </p>
          <ul className="list-disc list-inside mt-4">
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
