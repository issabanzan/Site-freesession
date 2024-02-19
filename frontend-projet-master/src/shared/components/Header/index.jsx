import React, { useState } from 'react';
import logo from '../../../assets/Blue_Blob_Health_Care_Logo_4_-removebg-preview.png';
import { LogIn, Home, Phone, Menu, X } from 'react-feather'; // Assurez-vous d'importer Menu et X pour le bouton de menu

const navigationLinks = [
    {
        label: 'Home',
        url: '/',
        icon: <Home />,
    }, {
        label: 'Contact us',
        url: '/Contact',
        icon: <Phone />,
    },
    {
        label: 'Log in',
        url: '/Login',
        icon: <LogIn />,
    }
];

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <nav className="px-3 py-1 h-20 flex flex-row justify-between items-center max-w-8xl mx-auto">
                <a className="navbar-brand flex items-center">
                <img src={logo} alt="logo" className="h-auto w-20 sm:w-47 md:w-36 lg:w-43 object-contain mt-6" />
                </a>
                
                {/* Bouton du menu pour les petits écrans */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="sm:hidden p-2 bg-[#225886] border-2 border-white"
                    >
                    {isMenuOpen ? <X /> : <Menu />}
                    </button>

                {/* Liens de navigation */}
<div className={`${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
    <ul className="flex flex-col sm:flex-row text-white gap-2 sm:gap-4 items-center mt-5">
        {navigationLinks.map((link, index) => (
            <li key={index} className="nav-item">
                <a href={link.url} className="nav-link flex items-center gap-2 px-4 py-2 bg-[#225886] rounded-md transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg">
                    {link.icon}
                    <span className="text-sm sm:text-base">{link.label}</span>
                </a>
            </li>
        ))}
    </ul>
</div>
            </nav>
        </header>
    );
}

export default Header;
