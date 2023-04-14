import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import icon from '@/assets/images/icon.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative w-screen bg-white shadow-md p-2 flex flex-wrap justify-between content-center z-40">
      <nav className="flex flex-wrap content-center space-x-2">
        {/* Burger button */}
        <button type="button" className="ml-3" onClick={toggleMenu}>
          {menuOpen ? (
            <svg viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-green-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-green-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
        {/* logo */}
        <NavLink to="/">
          <div className="flex flex-row content-center items-end">
            <img src={icon} alt="Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-green-500 from-green-900">eco-tips</h1>
          </div>
        </NavLink>
        {/* navbar link */}
        <div className={`absolute top-full left-0 ${menuOpen ? 'block bg-white border rounded-b-lg border-x-1 border-b-1' : 'hidden'}`}>
          <ul className="flex flex-col gap-2 py-2">
            <li>
              <NavLink to="/profile/:id" className="flex flex-row gap-2 text-gray-700 block px-4 py-1 hover:border-l-4  border-green-600 hover:text-green-600">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>

                Mon Profil
              </NavLink>
            </li>
            <li>
              <NavLink to="/collection/:id" className="flex flex-row gap-2 text-gray-700 block px-4 py-1 hover:border-l-4  border-green-600 hover:text-green-600">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z" clipRule="evenodd" />
                </svg>
                Ma Collection
              </NavLink>
            </li>
            <li>
              <NavLink to="/community" className="flex flex-row gap-2 text-gray-700 block px-4 py-1 border-green-600 hover:border-l-4 hover:text-green-600">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
                Communauté
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* button sign-up sign-in */}
      <div className="flex flex-wrap space-x-2">
        <button type="button" className="text-gray-700 hover:text-green-700">Se connecter</button>
        <button type="button" className="styleButton styleButton:hover py-1 px-2">S'inscrire</button>
      </div>
    </header>
  );
}

export default Header;
