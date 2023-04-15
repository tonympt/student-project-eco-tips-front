import React from 'react';
import { Link } from 'react-router-dom';
import image from '@/assets/images/404.svg';

function NotFoundPage() {
  return (
    <div className="mx-auto bg-white p-8 rounded-md shadow-md flex flex-col items-center justify-center gap-3">
      <img src={image} alt="Logo" className="w-1/5 h-1/5" />
      <div className="flex flex-col items-center justify-center">
        <div className="text-6xl font-bold text-gray-800">404</div>
        <h1 className="text-2xl font-semibold text-gray-700">Page non trouvé</h1>
        <p className="text-gray-500">La page que vous recherchez n'existe pas ou a été déplacée.</p>
      </div>
      <Link to="/" type="button" className="py-2 px-2 font-bold green-button green-button:hover green-button:active active:animate-buttonAnimation">
        Page d'accueil
      </Link>
    </div>
  );
}

export default NotFoundPage;
