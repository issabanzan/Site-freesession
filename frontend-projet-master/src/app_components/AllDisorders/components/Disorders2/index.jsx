import React from 'react';


const Disorders2 = () => {
  return (
    <div style={{ marginRight: '23rem' }} className="max-w-6xl mx-auto my-5">
      <h2 className="text-2xl font-semibold mb-6 text-black font-serif">
      Allergies/intolerance, back pain, fatigue and sleep
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="allergie">
          <img src="/src/assets/allergie.jpg" alt="Ostéopathie" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">Allergies/intolerance</h3>
           <p className="mb-4 font-semibold font-serif">
           The human body is continually confronted with external disruptors (microbes, bacteria, viruses, etc.). We are talking about allergic disorders....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Respiratory tract disorders</li>
            <li>Lactose intolerance</li>
            </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="backpain">
          <img src="/src/assets/dos.jpg" alt="Chiropraxie" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">back pain</h3>
          <p className="mb-4 font-semibold font-serif">
          Sciatica, herniated disc, low back pain, back pain… Back pain is an extremely common public health problem all over the world....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Pain and lower back</li>
            <li>Pain,neck and cervical</li>

 
          </ul>

        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-md p-4">
          <a href="fatigueandsleep">
          <img src="/src/assets/fatigue-i.jpg" alt="Hypnose" className="w-full h-48 object-cover rounded-md mb-4" />
          </a>
          <h3 className="text-lg font-semibold mb-2 text-black font-serif">fatigue and sleep</h3>
          <p className="mb-4 font-semibold font-serif">
          Sleep disorders are defined as difficulty sleeping restoratively. A person is insomniac when their daily life is affected by lack of sleep, this results in disabling phenomena such as drowsiness or attention problems....
          </p>
          <ul className="list-disc list-inside mt-4 text-black">
            <li>Fatigue</li>
            <li>Insomnia</li>
          </ul>
    

        </div>
      </div>
      
    </div>
    
  );
};

export default Disorders2;
