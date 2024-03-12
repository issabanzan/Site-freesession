import React from 'react';

const Fatigueandsleep = () => {
  return (
    <div className={`lg:mr-[20rem] max-w-7xl mx-auto`}>
      <h1 className="text-3xl font-bold mb-4 text-black font-semibold font-serif">Fatigue and sleep</h1>
      <p className="mb-4 font-semibold font-serif">
      Sleep disorders are defined as difficulty sleeping restoratively. 
      A person is insomniac when their daily life is affected by lack of sleep, 
      this results in disabling phenomena such as drowsiness or attention problems
      </p>
      <img
        src="/src/assets/fatigue-i.jpg" 
        alt="Fatigueandsleep"
        className="mb-4 w-full h-[460px]"
      />
      <h2 className="text-2xl text-black font-semibold font-serif mb-3">Fatigue and sleep disorders in a few words</h2>
      
      <p className="mb-4 font-semibold font-serif">
      Chronic fatigue and sleep disorders have distinct causes and direct consequences on public health.
      It is estimated that 8% of the population suffers from excessive daytime sleepiness. 
      For example, one in three road deaths is linked to falling asleep at the wheel. 
      The causes of this falling asleep can be linked to lack of sleep or difficulty sleeping, but also have other causes.
      </p>
     

      <p className="mb-4 font-semibold font-serif">
      In 2009, 20 to 30% of the French population reported experiencing sleep disorders, including 15-20% moderate sleep loss and 9-10% severe sleep absence. 
      Note, 18.3% of the population consumes anxiolytics or sleeping pills, half of which regularly.
      Myalgic encephalomyelitis or chronic fatigue syndrome, 
      which is considered a neurological disease, 
      is characterized by persistent and unexplained fatigue which lasts despite the efforts of the affected person.
      </p>

      <h1 className="text-2xl text-black font-semibold font-serif mb-3">Recommended complementary practices</h1>
      <p className="mb-4 font-semibold font-serif">
      Sophrology: the relaxation and breathing methods offered by sophrology help fight sleep disorders and chronic fatigue.
      <br />Biofeedback: the practice of biofeedback would help alleviate chronic sleep disorders.    
      </p>

      <p className="mb-4 font-semibold font-serif">
      Feldenkrais method: we learn to relax the deep muscles, which provides a feeling of relaxation and security conducive to sleep. 
      Micro-movements can be proposed, particularly in the neck and jaw area, which would have the effect of promoting sleep.
      <br />Yoga: studies have shown very positive results of yoga on the quality of sleep and sometimes the duration of sleep and the time it takes to fall asleep.
      </p>
      <p className="mb-4 font-semibold font-serif">
      Phytotherapy: melatonin helps regulate wake and sleep cycles, reducing the time needed to fall asleep.
       St. John's Wort, German Chamomile, Hops, Lavender, Lemon Balm, Valerian, have more or less pronounced effects on disorders and lack of sleep. 
       Ask your naturopath for advice.
      <br/>Music therapy: soft music helps improve the quality of sleep and the duration of falling asleep.
      </p>

      <p className="mb-4 font-semibold font-serif">
        Aromatherapy: aromatherapy would have a beneficial effect on the short-term reduction of stress, a factor in sleep disorders.
      <br />Hypnosis: this practice would allow you to find and act on the unconscious causes that prevent you from falling asleep.
      </p>
      
    </div>
  );
};

export default Fatigueandsleep;
