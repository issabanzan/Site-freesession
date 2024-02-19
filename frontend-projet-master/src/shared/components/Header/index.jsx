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
                    <img src={logo} alt="logo" className="h-auto w-38 sm:w-47 md:w-36 lg:w-43 object-contain" />
                </a>
                
                {/* Bouton du menu pour les petits écrans */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white sm:hidden">
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
                
                {/* Liens de navigation */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
                    <ul className="flex flex-col sm:flex-row text-white gap-3 items-center">
                        {navigationLinks.map((link, index) => (
                            <li className="nav-item px-3 py-1 bg-slate-700 flex items-center rounded-lg" key={index}>
                                <a className="nav-link flex gap-2 items-center" href={link.url}>
                                    {link.icon}
                                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl">{link.label}</span>
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
