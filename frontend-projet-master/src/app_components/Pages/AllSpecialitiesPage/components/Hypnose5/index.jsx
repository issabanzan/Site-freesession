import React from 'react';


const Hypnose5 = () => {
  return (
    <div className={`lg:mr-[20rem] max-w-7xl mx-auto mt-10`}>
      <h2 className="text-2xl font-semibold mb-6 text-black font-serif">
      Nutrition, Life Coaching, Psychologist ...
      </h2>
     
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="nutrition">
          <img src="/src/assets/Nutrition.jpg" alt="nutrition" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Nutrition</h3>
          <p className="mb-4 font-semibold font-serif">
          Nutrition is the set of processes that our body puts in place to nourish itself. These are mechanical and chemical processes, but also psycho-emotional and even energetic...
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>the Micronutrition</li>
            <li>Psychonutrition</li>
            <li>Dietetic</li>
            <li>Chrononutrition</li>

          </ul>
        </div>

        
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="lifeCoaching">
          <img src="/src/assets/coaching.jpg" alt="lifeCoaching" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Life Coaching</h3>
          <p className="mb-4 font-semibold font-serif">
          Today, the term coaching is used in different ways. Very popular in recent years, life coaching offers personalized and global support to individuals wishing to make changes in their lives....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Professional coaching</li>
          </ul>
        </div>

       
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="psychologist">
          <img src="/src/assets/psychologue.jpg" alt="psychologist" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Psychologist</h3>
          <p className="mb-4 font-semibold font-serif">
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
