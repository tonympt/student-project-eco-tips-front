import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import image from '@/assets/images/beaver.svg';
import { HIDE_STATUS } from '@/actions/errorTypes';

function ServerErrorPage() {
  const dispatch = useDispatch();
  useEffect(() => () => {
    dispatch({ type: HIDE_STATUS });
  }, []);

  return (
    <div className="mx-auto bg-white p-8 rounded-md shadow-md flex flex-col items-center justify-center gap-3">
      <img src={image} alt="Logo" className="w-1/5 h-1/5" />
      <div className="flex flex-col items-center justify-center">
        <div className="text-6xl font-bold text-gray-800">500</div>
        <h1 className="text-gray-500">Cette Page est temporairement indisponible...</h1>
        <p className="text-2xl font-semibold text-gray-700">PAS DE PANIQUE, NOS MARMOTTES SONT SUR LE COUPS </p>
      </div>
      <Link to="/" type="button" className="py-2 px-2 font-bold green-button green-button:hover button-active active:animate-buttonAnimation">
        Page d'accueil
      </Link>
    </div>
  );
}

export default ServerErrorPage;
