import React from 'react';

const consultationsData = {
  byPractice: [
    "Osteopathy",
    "Chiropractic",
    "Hypnosis",
    "Naturopathy",
    "Traditional Chinese Energy Work",
    "Massage",
    "Shiatsu",
    "Reflexology",
    "Psychotherapy",
    "Sophrology",
    "Yoga",
    "Mindfulness - Meditation",
    "Aromatherapy",
    "Phytotherapy"
  ],
  byIssue: [
    "Headaches",
    "Stress, Anxiety, Phobias",
    "Stomach Aches",
    "Allergic Troubles, Intolerances",
    "Skin Problems",
    "Assisted Reproduction (Medically Assisted Procreation)",
    "Back Pain",
    "Lumbar Pain",
    "Dorsalgia",
    "Fatigue and Sleep",
    "Happiness",
    "Parents and Child",
    "Weight Loss",
    "Addictions"
  ]
};

const ConsultationsPage = () => {
  return (
    <div style={{ marginRight: '17rem' }}className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 mt-12">
        <h2 className="font-semibold text-lg mb-3 text-black">Consultations by practice</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
          {consultationsData.byPractice.map((item, index) => (
            <div key={index} className="text-base mb-2">{item}</div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-lg mb-3 text-black">Consultations by subject</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
          {consultationsData.byIssue.map((item, index) => (
            <div key={index} className="text-base mb-2">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultationsPage;
