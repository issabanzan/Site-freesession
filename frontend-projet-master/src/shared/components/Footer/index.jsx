import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#225886] text-white p-4">
      <div className="mx-auto max-w-7xl sm:pl-0 lg:mr-[305px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h5 className="text-lg font-semibold mb-2">Call freesession</h5>
            <ul>
              <li className="mb-1">Call freesession at <br /> 01 82 88 75 89</li>
              <li>Send a message to <br /> contact@freesession.com</li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Discover freesession</h5>
            <ul>
              <li className="mb-1"><a href="/whoarewe" className="hover:underline">Who are we?</a></li>
              
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Freesession</h5>
            <ul>
              <li className="mb-1"><a href="/cookie" className="hover:underline">Privacy policy (Cookies)</a></li>
            </ul>
          </div>
        </div>

        <div className="text-sm mt-4">
          <p className='text-white'>
          Warning: If you feel unwell or sick, first consult a doctor or healthcare professional who can make a diagnosis and suggest appropriate treatment. This site presents general information on unconventional medicines, it is in no way personalized advice and consultations. The practitioners listed on this site are not doctors and in no way replace the role of your doctor. By using this site you acknowledge that it does not offer the diagnosis or treatment of any disease. Results are not guaranteed, they depend on many elements and in particular on people and context.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
