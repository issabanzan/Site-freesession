import React, { useState } from 'react';
import logo from '../../../assets/Blue_Blob_Health_Care_Logo_4_-removebg-preview.png';
import { LogIn, Menu, X } from 'react-feather';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-3 py-1 h-20 w-full">
     
     <a className="flex items-center">
        <img src={logo} alt="logo" className="h-auto w-20 sm:w-47 md:w-36 lg:w-43 object-contain mt-7" />
      </a>
        
      
      <h1 style={{ marginRight: '7rem' }} className="text-xl font-bold text-[#333C4E] hidden lg:block mt-7">
        Freesession
      </h1>

      
      
      <div className="flex items-center lg:hidden mt-7">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

     
      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} fixed inset-0 bg-[#225886] z-20 flex-col items-center justify-center`}>
        <a href="/specialites" className="text-white px-3 py-2 rounded-md text-base font-medium">Specialties</a>
        <a href="/troubles" className="text-white px-3 py-2 rounded-md text-base font-medium">Troubles</a>
        <a href="/blogs" className="text-white px-3 py-2 rounded-md text-base font-medium">Blogs</a>
        <a href="/entreprise" className="text-white px-3 py-2 rounded-md text-base font-medium">Company Offers</a>
        <a href="/contact-us" className="text-white px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
        <a href="/login" className="text-white px-3 py-2 rounded-md text-base font-medium flex items-center">
          <LogIn className="mr-2" />
          Log In
        </a>
      </nav>
      
      <div className="hidden lg:flex items-center space-x-8">
        <a href="/specialites" className="text-[#333C4E] font-bold mt-7">Specialies</a>
        <a href="/troubles" className="text-[#333C4E] font-bold mt-7">Troubles</a>
        <a href="/blogs" className="text-[#333C4E] font-bold mt-7">Blogs</a>
        <a href="/entreprise" className="text-[#333C4E] font-bold mt-7">company offers</a>
      </div>

      
      <div className="hidden lg:flex items-center space-x-4">
        <a href="/contact-us" className="text-[#333C4E] font-bold mt-7">
          Contact us
        </a>
        <a href="/login" className="text-[#333C4E] flex items-center font-bold mt-7">
          <LogIn className="mr-2" />
          Log in
        </a>
      </div>
    </header>
  );
}

export default Header;
