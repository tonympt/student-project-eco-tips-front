import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div className="grid grid-cols-1 place-self-center mx-auto bg-white p-8 rounded-md shadow-md mt-16 max-w-lg">
      <h1 className="m-6 place-self-center font-bold text-2xl">Espace administrateur</h1>
      <div className="m-6 place-self-center  ">
        <Link to="/#" className="py-2 px-2 font-bold blue-button blue-button:hover button-active active:animate-buttonAnimation  ">
          Gérer les cartes
        </Link>

      </div>
      <div className=" m-6 place-self-center  ">
        <Link to="/#" className="py-2 px-2 font-bold blue-button blue-button:hover button-active active:animate-buttonAnimation ">
          Gérer les catégories
        </Link>

      </div>
      <div className=" m-6 place-self-center   ">
        <Link to="/admin/proposals" className="py-2 px-2 font-bold blue-button blue-button:hover button-active active:animate-buttonAnimation  ">
          Gérer les propositions de nouvelles cartes
        </Link>

      </div>
      <div className=" m-6 place-self-center   ">
        <Link to="/admin/achievements" className="py-2 px-2 font-bold blue-button blue-button:hover button-active active:animate-buttonAnimation  ">
          Gérer les accomplissements des utilisateurs
        </Link>

      </div>
    </div>
  );
}

export default Admin;
