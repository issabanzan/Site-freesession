import React, { useState } from 'react';


const faqData = [
  {
    question: "How to find the right complementary practice practitioner for you?",
    answer: "The practitioners of the freesession network support each person who consults with a natural approach. For people who do not know which practice can relieve their pain or aches, we offer information to help you discover the complementary practices that suit you.Our practitioners are selected based on their specialties, experiences and theoretical and practical training. In our practitioner selection criteria, we also take into account practitioners' references from other professionals with whom they work regularly. Customer reviews also remain an important reference criterion: we obtain information from the clients of these practitioners.",
  },
  {
    question: "What complementary practices does freesession offer?",
    answer: "freesession is a network of practitioners from various specialties: practitioners in naturopathy, reflexology, traditional Chinese medicine, sophrology, Ayurveda, hypnosis, shiatsu, psychotherapies, nutrition, aromatherapy, osteopathy, brief therapies, auriculotherapy, etc.",
  },
  {
    question: "What are the issues on which freesession practitioners can support you?",
    answer: "Our practitioners support you with many disorders such as stress, anxiety, phobias, fatigue, sleep disorders, stomach and back pain, weight loss, pain and also allergies. We also have practitioners who offer well-being and personal development support. You can make an appointment with a practitioner depending on the disorders or pain for which you wish to be supported. On the files of our practitioners, you can find the details of the disorders treated by them",
  },
  {
    question: "How are practitioners selected in freesession?",
    answer: "For each of the listed practitioners we ensure that they respect a series of quality criteria that we have defined by working with doctors and practitioners of complementary practices as well as professional organizations",
  },
  {
    question: "What are the common health problems people face today and what are their impacts?",
    answer: "More and more people are encountering daily problems: musculoskeletal disorders, digestive disorders, stress or even sleep disorders. These ailments sometimes have repercussions on their health, their quality of life and their professional life.",
  },

  
];
  

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <dt
        className="text-white hover:text-white cursor-pointer font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {faq.question}
        <span className={isOpen ? 'text-white' : 'text-white'}>
          {isOpen ? '▼' : '▶'}
        </span>
      </dt>
      <dd className={`${isOpen ? 'block' : 'hidden'} text-white mt-2 mb-4`}>
        {faq.answer}
      </dd>
      

      
      <hr />
    </div>
  );
};

const HelpSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-[#3BAFBC] mt-10">
      <div className="flex flex-wrap md:flex-nowrap">
        
        {/* Contact information */}
        <div className="flex-1 md:ml-20 lg:ml-20">

          <div className="mb-4">
            <img
              src="/src/assets/plm.png" 
              alt="Contact"
              className="w-40 h-30 rounded-full" 
            />
          </div>
          <div className="text-black">
            <p className="mb-2 font-medium ml-9 text-white font-semibold">01 78 40 80 90</p>
            <p className='ml-4 text-white font-semibold'>contact@freesession.net</p>
          </div>
        </div>

        
        <div style={{ marginRight: '5rem' }} className="flex-1 ml-8 mt-3"> 
          <h3 className="text-white text-xl font-semibold mb-4 leading-tight tracking-tighter inter text-2xl">a question? need help?</h3>
          <dl className="space-y-3">
            {faqData.map(faq => (
              <FAQItem key={faq.question} faq={faq} />
            ))}
          </dl>
        </div>

      </div>
    </div>
  );
};

export default HelpSection;
