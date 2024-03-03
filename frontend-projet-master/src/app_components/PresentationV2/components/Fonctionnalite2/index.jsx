import React from 'react';

const Fonctionnalite2 = () => {
  return (
    <div className="max-w-7xl mx-auto my-5 mt-10">
      <div className="flex items-start justify-between">
        
        <div className="space-y-4">
          <h2 className="inter text-3xl font-bold text-black mt-3 leading-tight tracking-tighter">
          Our practitioners <br />support you to act <br />for your well-being.
          </h2>
          <button
  onClick={() => window.location.href='/AllDisorders'}
  className="bg-[#225886] hover:bg-[#3BAFBC] text-white font-bold py-2 px-4 rounded-full leading-tight tracking-tighter text-2xl"
>
All disorders
</button>
        </div>
       
        <div className="flex overflow-x-auto space-x-1">
          
          <div className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center flex-shrink-0">
          <a href="/stopsmoking" className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center flex-shrink-0">
            <img src="/src/assets/ventre.jpg" alt="peau" className="w-51 h-40 object-cover rounded-md" />
            </a>
            <p className="font-bold mt-2 leading-tight tracking-tighter inter text-2xl text-black">Stop smoking</p>
           
          </div>
          
          <div className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center flex-shrink-0">
          <a href="/fatigueandsleep" className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center flex-shrink-0">
            <img src="/src/assets/fatigue-i.jpg" alt="fatigue" className="w-50 h-40 object-cover rounded-md" />
            </a>
            <p className="font-bold mt-2 leading-tight tracking-tighter inter text-2xl text-black">fatigue and sleep</p>
           
          </div>
          
          <div className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center flex-shrink-0">
          <a href="/allergie" className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center flex-shrink-0">
            <img src="/src/assets/allergie.jpg" alt="Énergétique Traditionnelle Chinoise" className="w-50 h-40 object-cover rounded-md" />
            </a>
            <p className="font-bold mt-2 leading-tight tracking-tighter inter text-2xl text-black">Allergies, intolerance</p>
            
          </div>
          
            
        </div>
      </div>
    </div>
  );
};

export default Fonctionnalite2;
