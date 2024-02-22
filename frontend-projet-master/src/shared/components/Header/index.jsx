import React, { useState } from 'react';
import logo from '../../../assets/Blue_Blob_Health_Care_Logo_4_-removebg-preview.png';
import { LogIn, Menu,Home,Phone, X } from 'react-feather'; // Make sure to import the icons you need

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ marginRight: '25rem' }} className="px-3 py-1 h-20 flex flex-row justify-between items-center max-w-8xl mx-auto ms-1.5">
      
       <a className="navbar-brand flex items-center">
                   <img src={logo} alt="logo" className="h-auto w-20 sm:w-47 md:w-36 lg:w-43 object-contain mt-10" />
               </a>
        
        
               <h1 style={{ marginRight: '10rem' }} className="text-xl font-bold text-[#333C4E] mt-10">
  Freesession
</h1>

       

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="/specialites" className="text-[#333C4E] font-bold mt-10 ">Specialities</a>
          <a href="/troubles" className="text-[#333C4E] font-bold mt-10 ">Troubles</a>
          <a href="/blogs" className="text-[#333C4E] font-bold mt-10 ">Blogs</a>
          <a href="/entreprise" className="text-[#333C4E] font-bold mt-10 ">company offers</a>
        </div>

        {/* Desktop Right-aligned links */}
        <div className="hidden lg:flex items-center space-x-4">
          <a  href="/Contact us" className="text-[#333C4E] font-bold mt-10 ">
          
            Contact us
            </a>
    
          <a href="/login" className="text-[#333C4E] flex items-center font-bold mt-10 ">
            <LogIn className="mr-2" />
            Log in
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-md z-50 lg:hidden transition-transform ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-5 pt-4 pb-3 space-y-1">
          {/* Mobile Navigation Links */}
          <a href="/specialites" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">Spécialités</a>
          <a href="/troubles" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">Troubles</a>
          <a href="/blogs" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">Blogs</a>
          <a href="/entreprise" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">Offre Entreprise</a>
          <a href="/Contact us" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium">Contact us</a>
          <a href="/login" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex items-center">
            <LogIn className="mr-2" />
            Se connecter
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
