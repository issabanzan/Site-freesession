import React from 'react';


const Hypnose3 = () => {
  return (
    <div style={{ marginRight: '23rem' }} className="max-w-6xl mx-auto my-5">
      <h2 className="text-2xl font-semibold mb-6 text-black">
      Shiatsu, Reflexology, Psychotherapy ...
      </h2>
     

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="shiatsu">
          <img src="/src/assets/shiatsu.jpg" alt="Ostéopathie" className="w-full h-50 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black">Shiatsu</h3>
          <p>
          Shiatsu is a manual practice from Japan which aims to maintain health and the proper internal functioning of the body.....
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="reflexology">
          <img src="/src/assets/Réflexologie.png" alt="Chiropraxie" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-black">Reflexology</h3>
          </a>
          <p>
          Chiropractic is based on a global conception of the functioning of the body and the relationships existing between the spinal column...
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="psychotherapy">
          <img src="/src/assets/Psycho.jpg" alt="Hypnose" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black">Psychotherapy</h3>
          <p>
          Psychotherapy is support intended to help individuals overcome emotional, psychological or behavioral difficulties....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Transactional Analysis</li>
            <li>Gestalt</li>
            <li>Art therapy</li>
            <li>Sex therapy</li>
            <li>Transgenerational analysis</li>
            <li>Somatotherapy</li>
            <li>Psychopedagogy</li>
            <li>Couples therapy</li>
            <li>Family therapy</li>
            <li>Psychoanalysis</li>
            <li>psychogenealogy</li>
          </ul>


        </div>
      </div>
      
    </div>
    
  );
};

export default Hypnose3;
