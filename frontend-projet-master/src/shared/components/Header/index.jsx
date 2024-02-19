import React from 'react';
import logo from '../../../assets/Blue_Blob_Health_Care_Logo_4_-removebg-preview.png';
import { LogIn, Home, Phone, Users } from 'react-feather';

const navigationLinks = [
    {
        label: 'Home',
        url: '/',
        icon: <Home size={16} />,
    }, {
        label: 'Contact us',
        url: '/Contact',
        icon: <Phone size={16} />,
    },
    {
        label: 'Log in',
        url: '/Login',
        icon: <LogIn size={16} />,
    }
];

function Header() {
    return (
        <header className="bg-white shadow">
            <nav className="flex flex-wrap justify-between items-center px-4 py-3 max-w-8xl mx-auto">
                <a href="/" className="flex items-center">
                    <img src={logo} alt="logo" className="h-12 md:h-16 lg:h-20 object-contain" />
                </a>
                <ul className="w-full md:flex md:items-center md:w-auto md:gap-4">
                    {navigationLinks.map((link, index) => (
                        <li key={index} className="nav-item mt-3 md:mt-0 md:px-2">
                            <a href={link.url} className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
                                {link.icon}
                                <span className="ml-2">{link.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
