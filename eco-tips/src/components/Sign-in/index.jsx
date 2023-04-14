import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Connexion</h1>
      <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="email"
            id="email"
            name="email"
            placeholder="nom@exemple.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Mot de passe</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password"
            id="password"
            name="password"
            placeholder="********"
          />
        </div>

        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-600 rounded"
          type="submit"
        >
          Se connecter

        </button>

        <p className="text-sm text-center text-gray-400">
          Vous n&#x27;avez pas encore de compte ?
          {' '}
          {/* Penser a mettre le lien */}
          <Link className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"> Inscrivez vous</Link>
          .
        </p>

      </form>
    </div>

  );
}

export default SignIn;
