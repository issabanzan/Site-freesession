import React, { useState } from 'react'; // usetate sert à gérer l'état d'un composant fonctionnel
import logo from '../../../assets/Blue_Blob_Health_Care_Logo_4_-removebg-preview.png';
import { LogIn, Menu, X } from 'react-feather';// import des icones

function Header() { // création du composant Header

// création d'un état pour le menu ouvert ou fermé useState(false) permet de définir la valeur initiale de l'état
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return ( // le return permet de retourner le code JSX qui sera affiché dans le navigateur
    <header className="px-3 py-1 h-20 flex flex-row justify-between items-center max-w-8xl mx-auto">
    
     <a className="flex items-center">
        <img src={logo} alt="logo" className="h-auto w-20 sm:w-47 md:w-36 lg:w-43 object-contain mt-7 hidden sm:block" />
      </a>
        
      
      {/* Titre pour les grands écrans */}
      <h1 style={{ marginRight: '0rem' }}  className="hidden lg:block lg:text-xl font-bold text-[#333C4E] mt-7 leading-tight tracking-tighter inter text-2xl">
        Freesession
      </h1>

      {/* Responsive Titre pour les petits écrans */}
      <h1 style={{ marginRight: '14rem' }} className="text-xl font-bold text-[#333C4E] mt-7 leading-tight tracking-tighter inter text-2xl lg:hidden max-w-8xl mx-auto">
        Freesession
      </h1>

      
      
      {/* Bouton menu pour mettre mes liens dedans pour les petits écrans */}
      <div className="flex items-center lg:hidden mt-7">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} fixed inset-0 bg-[#225886] z-20 flex-col items-center justify-center`}>
        <a href="/AllSpecialities" className="text-white px-3 py-2 rounded-md text-base font-medium">Specialties</a>
        <a href="/AllDisorders" className="text-white px-3 py-2 rounded-md text-base font-medium">Troubles</a>
        <a href="#" className="text-[#333C4E] font-bold mt-7 leading-tight tracking-tighter inter text-1xl">Home</a>
        <a href="/Contact" className="text-white px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
        <a href="/login" className="text-white px-3 py-2 rounded-md text-base font-medium flex items-center">
          <LogIn className="mr-2" />
          Log In
        </a>
      </nav>
      
      <div style={{ marginRight: '25rem' }}   className="hidden lg:flex items-center space-x-8">
        <a href="/AllSpecialities" className="text-[#333C4E] font-bold mt-7 leading-tight tracking-tighter inter text-1xl">Specialies</a>
        <a href="/AllDisorders" className="text-[#333C4E] font-bold mt-7 leading-tight tracking-tighter inter text-1xl">Disorders</a>
        <a href="#" className="text-[#333C4E] font-bold mt-7 leading-tight tracking-tighter inter text-1xl">Home</a>
        
      </div>

      
      <div style={{ marginRight: '17rem' }} className="hidden lg:flex items-center space-x-4">
        <a href="/Contact" className="text-[#333C4E] font-bold mt-7 leading-tight tracking-tighter inter text-1xl">
          Contact us
        </a>
        <a href="/login" className="text-[#333C4E] flex items-center font-bold mt-7 leading-tight tracking-tighter inter text-1xl">
          <LogIn className="mr-2" />
          Log in
        </a>
      </div>
    </header>
  );
}

export default Header;
