import React from 'react';

const Massage = () => {
  return (
    <div className={`lg:mr-[20rem] max-w-7xl mx-auto mt-10`}>
      <h1 className="text-3xl font-bold mb-4 text-black font-semibold font-serif">Massage</h1>
      <p className="mb-4 font-semibold font-serif">
         Used for a millennium as a method of healthy and attractive body care,
         massage is recognized worldwide for its benefits and has been integrated into many health systems.
         There are many massage techniques, depending on the culture and the desired objectives.
      </p>
      <img
        src="/src/assets/Massage-i.jpg" 
        alt="Massage"
        className="mb-4 w-full h-[450px]"
      />
      <h2 className="text-2xl text-black font-semibold font-serif mb-3">Massage: How does it work?</h2>
      
      
      
   
      <p className="mb-4 font-semibold font-serif text-black">There are four basic techniques:</p>
      <ul className="list-disc ml-5 space-y-2">
        <li>
          <span className="mb-4 font-semibold font-serif text-black">Effleurage:</span> <span className="mb-4 font-semibold font-serif text-black">A gentle action designed to enhance circulation and relax the muscles. It aims to build the masseur's trust with a soothing introduction.</span>
        </li>
        <li>
          <span className="mb-4 font-semibold font-serif text-black">Petrissage:</span><span className="mb-4 font-semibold font-serif text-black">P This technique stretches and kneads the muscles, mainly used in areas like the thighs to help drain accumulated fat.</span>
        </li>
        <li>
          <span className="mb-4 font-semibold font-serif text-black">Friction:</span><span className="mb-4 font-semibold font-serif text-black">P Consists of deep, direct pressure to relax muscle tension, particularly around the spinal and shoulder regions.</span>
        </li>
        <li>
          <span className="mb-4 font-semibold font-serif text-black">Tapotement:</span> <span className="mb-4 font-semibold font-serif text-black">PPrepares the muscles for physical activity with rhythmic tapping movements.</span>
        </li>
      </ul>
      <p className="mb-4 font-semibold font-serif text-black">
        These techniques are employed to varying degrees in different types of massage (Thai, Swedish, Californian, etc.).
      </p>
      <h2 className="text-2xl text-black font-semibold mb-3">Massage: What is it for?</h2>

      <p className="mb-4 font-semibold font-serif">
         Massage seeks to promote general well-being and strengthen self-esteem, as well as stimulate the circulatory and immune systems.
         A gentle massage can trigger the release of endorphins, the body's natural painkillers, and cause a feeling of comfort and well-being.
         A more vigorous massage can help stretch tight or sore muscles, as well as loosen joints, with the goal of improving mobility.
      </p>

      <p>
      In addition, massage promotes sensitivity to the interaction of body and mind, allowing everyone to take charge of their well-being, 
      alleviate tension and reduce anxiety.
      In short, the actions of massage on the body are mechanical, biochemical, organic or even psychological.
      A massage brings energy and restores the magnetism of the body.
      Customers therefore feel more serene and better equipped to manage daily stress.
      </p>

      <h2 className="text-2xl text-black font-semibold mb-3">What does a kinesiologist do?</h2>

      <p className="mb-4 font-semibold font-serif">
      The kinesiologist is someone who practices kinesiology. Thanks to his training,
      it is this practitioner who will be able to carry out the necessary muscle tests and adapt his practice according to the need.
      For example, a shoulder muscle test can make it possible to observe whether a person is experiencing a tendonitis-type problem and therefore to offer appropriate support.
      Each session is therefore entirely adapted to the needs of the person and the techniques vary from one session to another.


      </p>

      <h2 className="text-2xl text-black font-semibold mb-3">Methods and technique of the kinesiologist</h2>

      <p className="mb-4 font-semibold font-serif">
        The methods and techniques of the kinesiologist depend above all on the training course that has been followed.
        Indeed, as mentioned previously, there are several trends in kinesiology such as Touch For Health®, Three in One Concepts®,
        Brain Gym® and many others. There is even what we call energetic kinesiology.
      </p>

      <h2 className="text-2xl text-black font-semibold mb-3">Progress of a kinesiology session</h2>

      <p className="mb-4 font-semibold font-serif">
       In order to best meet the demand and correct the body blockages encountered, the kinesiology session begins with an exchange.
       This is an opportunity for the consultant to discuss the problem he or she is encountering.
       The practitioner will then ask different questions to understand the consultant's expectations.
       He will also take the time to explain how the practice works.
       It will then be possible to move on to the muscle testing part by performing different gestures and using touch to understand how the body reacts.
       The practitioner will thus have the opportunity to understand the origin of the problem encountered. He can then move on to the part allowing the blockages to be released and the desired action to be had on the body.
      </p>

      <h2 className="text-2xl text-black font-semibold mb-3">When to consult and for what benefits?</h2>

      <p className="mb-4 font-semibold font-serif">
          Kinesiology is for everyone, regardless of age. There are no specific contraindications except in cases of recent trauma
          or surgical intervention. In all cases, we recommend that you consult your doctor before resorting to alternative medicine practices.
          Indeed, the practice of kinesiology is in no way a substitute for medical support.
          It helps in particular to act on stress, anxiety, phobias, fears, learning difficulties, sleep disorders, pain, self-confidence, physical
          or intellectual performance, allergies and intolerances, etc. Kinesiology is also indicated to intervene in the prevention of certain disorders. We can therefore consult even if we do not encounter a specific problem.
      </p>
      
    </div>
  );
};

export default Massage;
