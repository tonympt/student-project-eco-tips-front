import { NavLink } from 'react-router-dom';
import icon from '@/assets/images/icon.svg';

function Header() {
  return (
    <header className="relative w-screen bg-white shadow-md p-2 flex flex-wrap justify-between content-center z-40">
      <nav className="flex flex-wrap content-center space-x-2">
        {/* logo */}
        <NavLink to="/">
          <div className="flex flex-row content-center items-end">
            <img src={icon} alt="Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-green-500 from-green-900">eco-tips</h1>
          </div>
        </NavLink>
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
