import React from 'react';

const Shiatsu = () => {
  return (
    <div style={{ marginRight: '16rem' }}  className="max-w-7xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4 text-black font-semibold font-serif">Shiatsu</h1>
      <p className="mb-4 font-semibold font-serif">
          Shiatsu is a manual practice from Japan which aims to maintain health and the proper internal functioning of the body.
      </p>
      <img
        src="/src/assets/shiatsu.jpg" 
        alt="auriculo"
        className="mb-4 w-full h-[510px]"
      />
      <h2 className="text-2xl text-black font-semibold font-serif mb-3">Shiatsu: How does it work?</h2>
      
      
      <p className="mb-4 font-semibold font-serif">
          Shiatsu is closely linked to the concept of vital energy or “qi”, from traditional Chinese medicine.
          According to the ancient Chinese, an imbalance in vital energy will cause an imbalance in the body or mind,
          which will promote the appearance of physical or psychological symptoms. Vital energy can therefore be in excess or deficiency in the body, which is what this practice will correct.
      </p>
     

      <p className="mb-4 font-semibold font-serif">
        Shiatsu is also based on the idea that the human body accumulates tensions which will have a negative influence on the physical state (pain and various disorders)
        and emotional state (stress, insomnia, etc.) of the person if they are not eliminated. In order to evacuate them,
        the therapist will carry out pressure and manipulations which will stimulate the individual's vital energy.
        These are carried out on specific acupuncture points chosen by the therapist, stimulating the energy meridians throughout the body: back, neck, arms, but also face, hands, feet, etc.
      </p>

      <h1 className="text-2xl text-black font-semibold font-serif mb-3">Shiatsu: What is it for?</h1>
      <p className="mb-4 font-semibold font-serif">
          On a physical level, Shiatsu causes an effect of relaxation and well-being close to classic massage.
          The pressure and manipulations will relax the muscles, ease tension and stimulate the immune system.
          Improving the circulation of energy in the body will lead to better blood circulation and better breathing.
      </p>

      <p className="mb-4 font-semibold font-serif">
          Shiatsu not only acts on physical tensions, but also on a psychological level. Indeed, it will allow the individual to relax the mind and fight against stress and anxiety thanks to its very relaxing effect. Shiatsu therefore has a therapeutic purpose, but also a preventative one since it is used to eliminate tensions before they become harmful.
          Do-in is also a practice originating from Japan which turns towards a form of self-massage which includes a sequence of frictions, pressures going from top to bottom and from the center to the outside, covering the entire body. Depending on the person consulting, finger pressure can be concentrated on the hands, face or feet, in an approach close to reflexology.
      </p>
      
      
    </div>
  );
};

export default Shiatsu;
