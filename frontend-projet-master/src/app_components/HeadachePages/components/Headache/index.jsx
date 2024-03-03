import React from 'react';

const Headache = () => {
  return (
    <div style={{ marginRight: '16rem' }}  className="max-w-7xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4 text-black font-semibold font-serif">Headache</h1>
      <p className="mb-4 font-semibold font-serif">
        Headache is a feeling of pain or discomfort felt in the head. There are several types of headaches, with various causes.
      </p>
      <img
        src="/src/assets/tete.jpg" 
        alt="auriculo"
        className="mb-4 w-full h-[450px]"
      />
      <h2 className="text-2xl text-black font-semibold font-serif mb-3">The different types of headaches</h2>
      
      
      <p className="mb-4 font-semibold font-serif">
      Headaches can be triggered by many factors such as stress, fatigue, dehydration, hormonal changes,
      certain foods or drinks, changes in the weather, muscle tension, infections, etc. 
      If you suffer from frequent or severe headaches, we invite you to consult a doctor who can make a diagnosis and offer you appropriate treatment.
      There are different types of headaches:
      </p>
     

      <p className="mb-4 font-semibold font-serif">
         Tension headaches: These are the most common headaches. 
         They manifest as mild to moderate pain. They are often described as a feeling of pressure or tension.
      </p>

      <p className="mb-4 font-semibold font-serif">
      Migraines: Migraines are intense, throbbing headaches. This pain is often accompanied by sensitivity to light, sounds or smells. 
      And sometimes nausea and vomiting. They can last from a few hours to several days.

      </p>

      <p className="mb-4 font-semibold font-serif">
          Sinus headaches: These occur when the sinuses, the cavities around the nose and eyes, become inflamed or infected.
           Sinus headaches are often felt as a dull, constant pain in the forehead, nose, or cheek area.
      </p>

      <p className="mb-4 font-semibold font-serif">
          Cluster headaches: These are extremely painful headaches that occur in cycles, often over several weeks or months. 
          They are characterized by intense, shooting pain, usually on the side of a single temple.
      </p>

      <h1 className="text-2xl text-black font-semibold font-serif mb-3">Complementary practices that can help you with headaches</h1>
      <p className="mb-4 font-semibold font-serif">
          Naturopathy and herbal medicine: Butterbur (Petasites officinalis), chewable feverfew,
          5-HTP intake (which increases serotonin levels) are among the recommendations of the American Neuropsychiatry Guidelines 
          for the prevention of migraine and headaches. head. A naturopath will be able to advise you on the plants best suited to your situation.
      </p>

      <p className="mb-4 font-semibold font-serif">
          Osteopathy, Chiropractic: Manipulations and mobilizations can prove effective in relieving certain cases of headaches,
          particularly those related to the neck.
      </p>
      <p className="mb-4 font-semibold font-serif">
          Sophrology: When migraine is linked to stress and anxiety (frequent sources), sophrology helps to support headaches, 
          in particular through mental imagery and relaxation practices.
      </p>
    </div>
  );
};

export default Headache;
