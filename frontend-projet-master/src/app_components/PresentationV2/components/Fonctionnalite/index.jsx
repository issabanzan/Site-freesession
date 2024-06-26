import React from 'react';

const Fonctionnalite = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-start justify-between">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-black leading-tight tracking-tighter">
            Discover <br />the complementary<br /> practice specialties
          </h2>
          <button
            onClick={() => window.location.href = '/AllSpecialities'}
            className="bg-[#225886] hover:bg-[#3BAFBC] text-white font-bold py-2 px-4 rounded-full leading-tight tracking-tighter text-2xl"
          >
            All specialties
          </button>
        </div>
        <div className="flex overflow-x-auto space-x-1">
          <a href="/chiporaxie" className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center flex-shrink-0">
            <img src="/src/assets/chiropraxie-i.jpg" alt="chiropraxie" className="w-60 h-40 object-cover rounded-md" />
            <p className="font-bold mt-2 text-black leading-tight tracking-tighter inter text-2xl">Chiropraxie</p>
            <p className="mt-1">recommended by 81%<br /> of our users</p>
          </a>
          <a href="/hypnosis" className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center flex-shrink-0">
            <img src="/src/assets/hypnose-i.jpg" alt="hypnosis" className="w-60 h-40 object-cover rounded-md" />
            <p className="font-bold mt-2 leading-tight tracking-tighter inter text-2xl text-black">Hypnosis</p>
            <p className="mt-1">recommended by 81% <br /> of our users</p>
          </a>
          <a href="/meditation" className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center flex-shrink-0">
            <img src="/src/assets/Meditation.jpg" alt="meditation" className="w-50 h-40 object-cover rounded-md" />
            <p className="font-bold mt-2 leading-tight tracking-tighter inter text-2xl text-black">Meditation</p>
            <p className="mt-1">recommended by 81% <br /> of our users</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fonctionnalite;
