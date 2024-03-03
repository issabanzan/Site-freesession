import React from 'react';


const Disorders4 = () => {
  return (
    <div style={{ marginRight: '23rem' }} className="max-w-6xl mx-auto my-5">
      <h2 className="text-2xl font-semibold mb-6 text-black font-serif">
      behavioral problems, Stop smoking, Well-being and personal development ...
      </h2>
     

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/comportement.jpg" alt="Ostéopathie" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">behavioral problems</h3>
          <p className="mb-4 font-semibold font-serif">
          The term disorder comes from the Greek “tủrbê” which means “disorder” as for the term behavior, it comes from the Latin “comporto” which means “to behave”. Behavioral disorder is therefore a disorder in an individual's way of being and acting....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Compulsive eating</li>
            <li>Restrictive diet</li>
            <li>Attention and concentration</li>
            <li>TOCS</li>
    
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/fume.jpg" alt="Chiropraxie" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Stop smoking</h3>
          <p className="mb-4 font-semibold font-serif">
          Tobacco dependence is a real public health problem: it kills 5 million people per year....
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/bien.jpg" alt="Hypnose" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Well-being and personal development</h3>
          <p>
          32% of French people are in the dark about their well-being and do not know what to do to get better....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Personal development</li>
            <li>Healthy eating</li>
            
    
          </ul>
          
        </div>
      </div>
      
    </div>
    
  );
};

export default Disorders4;
