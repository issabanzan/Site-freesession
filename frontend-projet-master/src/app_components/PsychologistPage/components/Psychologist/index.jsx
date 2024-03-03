import React from 'react';

const Psychologist = () => {
  return (
    <div style={{ marginRight: '16rem' }}  className="max-w-7xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4 text-black font-semibold font-serif">Psychologist</h1>
      <p className="mb-4 font-semibold font-serif">
       Psychology is the study of ideas about psychological cases, behaviors and intellectual processes.
       It is a science which aims to distinguish and understand the organization of our psychic activity and the reactions affiliated with it.
      </p>
      <img
        src="/src/assets/psychologue.jpg" 
        alt="auriculo"
        className="mb-4 w-full h-[450px]"
      />
      <h2 className="text-2xl text-black font-semibold font-serif mb-3">Psychology: how does it work?</h2>
      
      
      <p className="mb-4 font-semibold font-serif">
          Psychology has very varied areas of research (transcription of the activity of nerve cells, studies of the effects on behavior through psychotherapy, etc.). Which makes it a discipline with various definitions.
          Since psychology is a science, it involves psychological learning established through observations and experiments.
      </p>
      <h2 className="text-2xl text-black font-semibold mb-3">General psychology</h2>

      <p className="mb-4 font-semibold font-serif">
         It is psychology that takes stock of referential functions (memory, reasoning, learning)
      </p>

      <h2 className="text-2xl text-black font-semibold mb-3">Developmental psychology</h2>

      <p className="mb-4 font-semibold font-serif">
          This branch studies the evolution of mental behavior from the beginning to the end of life.
      </p>

      <h2 className="text-2xl text-black font-semibold mb-3">Psychopathology</h2>

      <p className="mb-4 font-semibold font-serif">
         Known as “health psychology”, it focuses on psychological disorders and the psychological consequences of “somatic” illnesses, also called physiological.
      </p>

      <h2 className="text-2xl text-black font-semibold mb-3">Neuropsychology</h2>

      <p className="mb-4 font-semibold font-serif">
         She studies the different mental and behavioral expressions linked to mental malfunctions and lesions.
      </p>

      <h2 className="text-2xl text-black font-semibold mb-3">Social psychology</h2>

      <p className="mb-4 font-semibold font-serif">
          Elle est tournée vers la façon dont les réflexions, le comportements de l’individu sont influencés par les règles culturelles et sociales.
      </p>

      <h2 className="text-2xl text-black font-semibold mb-3">The psychology of work</h2>

      <p className="mb-4 font-semibold font-serif">
      It acts on the relationships between Man and his physico-social environment which is work.
      All fields are associated with the practice of psychology. Whatever the branch, psychology requires a diploma and specific skills.
      All psychologists are state-certified professionals.
      </p>
      
    </div>
  );
};

export default Psychologist;
