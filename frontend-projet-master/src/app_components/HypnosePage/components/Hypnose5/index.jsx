import React from 'react';


const Hypnose5 = () => {
  return (
    <div style={{ marginRight: '28rem' }} className="max-w-6xl mx-auto my-5">
      <h2 className="text-2xl font-semibold mb-6 text-black">
      Nutrition, Life Coaching, Psychologist ...
      </h2>
     
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/Nutritions.jpg" alt="Ostéopathie" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2">Nutrition</h3>
          <p>
          Nutrition is the set of processes that our body puts in place to nourish itself. These are mechanical and chemical processes, but also psycho-emotional and even energetic...
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>the Micronutrition</li>
            <li>Psychonutrition</li>
            <li>Dietetic</li>
            <li>Chrononutrition</li>

          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/coaching.JPEG" alt="Chiropraxie" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2">Life Coaching</h3>
          <p>
          Today, the term coaching is used in different ways. Very popular in recent years, life coaching offers personalized and global support to individuals wishing to make changes in their lives....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Professional coaching</li>
            

          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/pyychologie.JPEG" alt="Hypnose" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2">Psychologist</h3>
          <p>
          Psychology is the study of ideas about psychological cases, behaviors and intellectual processes. It is a science which aims to distinguish and understand the organization...
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Psychoanalysis</li>
            <li>psychogenealogy</li>

          </ul>
        </div>
      </div>
      
    </div>
    
  );
};

export default Hypnose5;
