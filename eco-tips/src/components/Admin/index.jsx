import { Link } from 'react-router-dom';

function Admin() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Espace administrateur</h1>
      <div className="grid grid-cols-1 place-self-center mx-auto p-8 max-w-lg">
        <div className="m-6 place-self-center  ">
          <Link to="/#" className="py-2 px-2 font-bold blue-button blue-button:hover button-active active:animate-buttonAnimation  ">
            Gérer les cartes
          </Link>

        </div>
        <div className=" m-6 place-self-center ">
          <Link to="/admin/tags" className="py-2 px-2 font-bold blue-button blue-button:hover button-active active:animate-buttonAnimation ">
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
    </>
  );
}

export default Admin;
