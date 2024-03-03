import React from 'react';


const Disorders3 = () => {
  return (
    <div style={{ marginRight: '23rem' }} className="max-w-6xl mx-auto my-5">
      <h2 className="text-2xl font-semibold mb-6 text-black font-serif">
      Parent and child, Losing weight, Addiction
      </h2>
     

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/famille.jpg" alt="Ostéopathie" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Parent and child</h3>
          <p className="mb-4 font-semibold font-serif">
          Alternative medicines are particularly recommended for pregnant women, babies and children since they help relieve certain disorders naturally and avoid the use of medications, which are often discouraged or even prohibited in the event of pregnancy......
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/lose.jpg" alt="Chiropraxie" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Losing weight</h3>
          <p className="mb-4 font-semibold font-serif">
          the Since the 1990s, the average weight of French people has continued to increase. Snacking, sedentary lifestyle, excessive portions, irregular meals, a large number of habits are responsible for our extra pounds....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>obesity</li>
           
          </ul>

        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <img src="/src/assets/addiction.jpg" alt="Hypnose" className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Addiction</h3>
          <p className="mb-4 font-semibold font-serif">
          Addiction is defined as the dependence or enslavement of an individual to an object or activity. We speak of addiction when the subject has grasped the habit of use (more or less frequent) of this element and remains unable to detach this habit from his daily life.....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
         
          </ul>


        </div>
      </div>
      
    </div>
    
  );
};

export default Disorders3;
