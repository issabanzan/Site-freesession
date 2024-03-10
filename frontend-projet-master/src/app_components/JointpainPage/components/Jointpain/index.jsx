import React from 'react';

const Jointpain = () => {
  return (
    <div className="mt-8 mx-auto max-w-7xl sm:pl-0 lg:mr-[240px]">
      <h1 className="text-3xl font-bold mb-4 text-black font-semibold font-serif">Jointpain</h1>
      <p className="mb-4 font-semibold font-serif">
          Joint pain affects millions of French people. 
          This name brings together a set of disorders linked to the dysfunction of muscles, joints, bones and tendons. 
          Joint pain is common and can be disabling (osteoarthritis, osteoporosis, lower back pain, etc.).
      </p>
      <img
        src="/src/assets/articulaire.jpg" 
        alt="Jointpain"
        className="mb-4 w-full h-[460px]"
      />
      <h2 className="text-2xl text-black font-semibold font-serif mb-3">What is joint pain?</h2>
      
      <p className="mb-4 font-semibold font-serif">
          The term “joint pain” is primarily used to describe several rheumatic conditions. 
          These are characterized by pain, swelling and joint stiffness, most often disturbing. 
          As soon as it appears, joint pain has repercussions on daily life. Contrary to general opinion, joint pain affects all ages. 
          Indeed, according to an IFOP survey, a third of 18-25 year olds suffer from joint-related pain.
      </p>
      <h1 className="text-2xl text-black font-semibold font-serif mb-3">The main types of joint pain</h1>
      <p className="mb-4 font-semibold font-serif">
          Arthritis corresponds to different conditions characterized by pain in the joints, ligaments, tendons or bones. 
          Arthritis generally appears following trauma, infections or natural wear and tear. 
          The disorder also arises following an autoimmune disease (dysfunction of the immune system).
      </p>

      <p className="mb-4 font-semibold font-serif">
      This is the most common form of joint pain. Osteoarthritis is single joint when it affects only one joint. 
      We speak of oligoarticular osteoarthritis when it affects a limited number of joints. 
      The most common osteoarthritis is that of the hip (coxarthrosis), the knee (gonarthrosis), 
      the spine (discarthrosis, vertebral osteoarthritis), the root of the thumb (rhyzarthrosis of the thumb) 
      and the distal interphalangeal joints of the fingers (knots).
      Arthritis and osteoarthritis should not be confused. The first is inflammation of the joints with intense pain that is difficult to relieve. 
      The second is relieved by rest and regular activity. Osteoarthritis pain occurs during the day, while arthritis pain occurs at night.
      </p>
      


      <h2 className="text-2xl text-black font-semibold mb-3">Complementary practices recommended to combat osteoarthritis and pain</h2>

      <p className="mb-4 font-semibold font-serif">
          Alternative medicine can help to better manage pain and maintain flexibility, 
          while limiting inflammation which is the source of joint weakening.
      </p>

      <p className="mb-4 font-semibold font-serif">
      Traditional Chinese energetics: it would help limit the progression of the disease and reduce the intensity of pain. The use of cupping or moxibustion (heat activation of burned plants) helps relieve pain.
    <br />Naturopathy: many plants and food supplements can help reduce pain thanks to their analgesic properties. Ask your naturopath for advice.
      </p>
      <p className="mb-4 font-semibold font-serif">
      Ayurveda: Through its global approach, its dietary principles and the plants of the Indian pharmacopoeia, 
      Ayurveda helps reduce inflammation in the body, support pain linked to osteoarthritis and limit its progression.
      <br />Feldenkrais method: Through gentle mobility between the joint surfaces, 
      this practice invites us to explore micromovements guided by our proprioception, at the level of the different joints. 
      This allows movement back into the joints, rediscovering the pleasure of movement and sometimes relieving pain thanks to the relaxation provided.
      </p>

      
      
    </div>
  );
};

export default Jointpain;
