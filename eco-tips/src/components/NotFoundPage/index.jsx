import React from 'react';
import { Link } from 'react-router-dom';
import image from '@/assets/images/404.svg';

function NotFoundPage() {
  return (
    <div className="mx-auto sm:w-[90%] lg:w-[80%] my-10 bg-white p-20 rounded-md shadow-md flex flex-col items-center justify-center gap-3">
      <img src={image} alt="Logo" className="lg:w-1/5 lg:h-1/5 sm:w-1/3 sm:h-1/3" />
      <div className="flex flex-col items-center justify-center">
        <div className="text-6xl font-bold text-gray-800">404</div>
        <h1 className="text-2xl font-semibold text-gray-700">Page non trouvé</h1>
        <p className="text-gray-500">La page que vous recherchez n'existe pas ou a été déplacée.</p>
      </div>
      <Link to="/" type="button" className="py-2 px-2 font-bold green-button green-button:hover button-active active:animate-buttonAnimation">
        Page d'accueil
      </Link>
    </div>
  );
}

export default NotFoundPage;
