// import hookds
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
// import action creator
import { resetAllData, fetchProfileData } from '@/actions/user';
import { askRefreshProfileData } from '@/actions/ui';
// import components
import Spinner from '@/components/Spinner';

import icon from '@/assets/images/icon.svg';

function Header() {
  // state
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // store
  const { token, logged, firstname, roleId, score } = useSelector((state) => state.user);
  const { refreshProfileData } = useSelector((state) => state.ui);
  // hooks
  const dispatch = useDispatch();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(resetAllData());
  };
  // fetch datas for the sign-in
  useEffect(() => {
    if (logged && firstname && roleId && score) {
      setLoading(false);
    }
  }, [logged]);

  useEffect(() => {
    if (refreshProfileData) {
      dispatch(fetchProfileData());
      dispatch(askRefreshProfileData());
    }
  }, [refreshProfileData]);

  return (
    <header className="relative w-screen bg-white shadow-md p-2 flex flex-wrap justify-between items-center z-40 bg-bottom ">

      <nav className="flex flex-wrap items-center space-x-2 ">
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
          <div className="flex flex-row items-center">
            <img src={icon} alt="Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-green-500 from-green-900">eco-tips</h1>
          </div>
        </NavLink>
        {logged && (
          loading ? (
            <Spinner />
          ) : (
            <div className="">
              <span
                aria-label="score"
                className="text-sm bg-blue-100 text-blue-800 font-medium mr-2 px-2 py-2.5 rounded-md"
              >
                🏆
                {' '}
                {score}
              </span>
            </div>
          )
        )}
        {/* navbar link */}
        <div className={`absolute top-full left-0 ${menuOpen ? 'block bg-white border rounded-b-lg border-x-1 border-b-1' : 'hidden'}`}>
          <ul className="flex flex-col gap-2 py-2">
            <li>
              <NavLink to="/profile" className="flex flex-row gap-2 text-gray-700 px-4 py-1 hover:border-l-4  border-green-600 hover:text-green-600 ">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
                Mon Profil
              </NavLink>
            </li>
            <li>
              <NavLink to="/collection" className="flex flex-row gap-2 text-gray-700 px-4 py-1 hover:border-l-4  border-green-600 hover:text-green-600">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z" clipRule="evenodd" />
                </svg>
                Ma Collection
              </NavLink>
            </li>
            <li>
              <NavLink to="/community" className="flex flex-row gap-2 text-gray-700 px-4 py-1 border-green-600 hover:border-l-4 hover:text-green-600">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
                Communauté
              </NavLink>
            </li>
            <div>
              {logged && roleId === 1 && (
              <NavLink to="/admin" className="flex flex-row gap-2 text-gray-700 px-4 py-1 border-blue-600 hover:border-l-4 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>

                Admin
              </NavLink>

              )}
            </div>
          </ul>
        </div>
      </nav>
      {/* button sign-up sign-in */}
      <div className="flex flex-wrap items-center space-x-2 ">
        {!logged && !token ? (
          <>
            <Link to="/sign-in" className="text-gray-700 hover:text-green-700">Se connecter</Link>
            <Link to="/sign-up" className="py-1 px-2 font-bold green-button green-button:hover button-active active:animate-buttonAnimation">S'inscrire</Link>
          </>
        ) : (
          <>
            <p className="text-gray-700">
              Bonjour
              {' '}
              {firstname}
            </p>
            <button
              type="button"
              to="/logout"
              className="py-1 px-2 font-bold green-button green-button:hover button-active active:animate-buttonAnimation"
              onClick={handleLogout}
            >
              Se déconnecter
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
