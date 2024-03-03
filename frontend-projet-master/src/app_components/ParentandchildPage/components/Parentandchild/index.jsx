import React from 'react';

const Parentandchild = () => {
  return (
    <div style={{ marginRight: '16rem' }}  className="max-w-7xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4 text-black font-semibold font-serif">Parent and child</h1>
      <p className="mb-4 font-semibold font-serif">
      Alternative medicines are particularly recommended for pregnant women, 
      babies and children since they help relieve certain disorders naturally and avoid the use of medications, 
      which are often discouraged or even prohibited in the event of pregnancy.
      </p>
      <img
        src="/src/assets/famille.jpg" 
        alt="auriculo"
        className="mb-4 w-full h-[460px]"
      />
      <h2 className="text-2xl text-black font-semibold font-serif mb-3">Why use alternative medicine when you are pregnant?</h2>
      
      <p className="mb-4 font-semibold font-serif">
          Pregnancy and the arrival of a child are often the cause of physiological and psychological upheavals that alternative medicine can support, 
          rebalance or prevent. For pregnant women, we often notice weight gain, a great feeling of fatigue, pain, stress, anxiety and emotional disorders.
          For the baby, childbirth is a trauma which can generate tension and functional disorders causing certain disorders such as sleep disorders,
          stiff neck, behavioral disorders, gastroesophageal reflux, etc.
      </p>
     

      <p className="mb-4 font-semibold font-serif">
          Complementary practices will be able to support baby and mother in these major stages of change and upheaval. 
          For example, meditation, sophrology and hypnosis can alleviate stress and anxiety linked to childbirth, osteopathy can resolve functional disorders in babies and alleviate pain in pregnant women.
      </p>

      <h1 className="text-2xl text-black font-semibold font-serif mb-3">How to deal with baby blues?</h1>
      <p className="mb-4 font-semibold font-serif">
          The arrival of the baby can also be accompanied by anxiety disorders, or even postnatal depression. 
          More commonly known as “baby blues”, postnatal depression should be the subject of a consultation with your doctor, 
          who will direct you towards appropriate treatment.
          In addition, alternative medicines can help mom to soothe stress and anxiety, optimize sleep, find optimal nutrition, etc. 
          They can also help improve the bond between the baby and his mother, particularly with yoga. postnatal and baby massage.
      </p>

      <h2 className="text-2xl text-black font-semibold mb-3">Techniques also interesting for children</h2>

      <p className="mb-4 font-semibold font-serif">
          Hypnosis may be more effective in children because they are more receptive to suggestibility than adults. 
          This practice would help them sleep better, calm anxiety and bedwetting, etc.
          <br />Art therapy and the creative process it offers would allow the child to express their creativity and emotions more easily.
      </p>

      <p className="mb-4 font-semibold font-serif">
          Osteopathy would be useful for children prone to asthma, it would help reduce the frequency and intensity of attacks. 
          <br />It would also prove very useful in cases of sprains, headaches, sinusitis, ear infections and postural problems.
      </p>

      <h2 className="text-2xl text-black font-semibold mb-3">Which complementary practice should you turn to during pregnancy?</h2>

      <p className="mb-4 font-semibold font-serif">
      Osteopathy: Osteopathy helps soothe the pain caused by weight gain through a natural rebalancing of the body's line of gravity. 
      It is also indicated to calm tensions and functional disorders that may appear in the baby following childbirth.
      <br />Hypnosis: This practice is indicated to soothe chronic and acute pain, as well as to relieve stress. 
      Prenatal hypnosis helps pregnant women manage and prepare for childbirth.
      </p>


      <p className="mb-4 font-semibold font-serif">
      Massage: Baby massage would reduce stress and also accelerate brain maturation and strengthen the immune system.
      Meditation: Pregnancy and childbirth can generate stress, meditation is a natural technique that allows you to learn to manage your stress.
      Yoga: Prenatal yoga allows for better body maintenance and preparation of the body and mind for childbirth. 
      As for postnatal yoga, it allows mom to take care of herself and strengthen the bond with baby.
      </p>

      
      
    </div>
  );
};

export default Parentandchild;
