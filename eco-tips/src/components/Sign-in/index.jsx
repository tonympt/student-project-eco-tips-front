// <!-- component -->
// <!--
//     =======================================================================
//     Name    :   Simple Sign In
//     Author  :   Surjith S M
//     Twitter :   @surjithctly

//     Get more components here ? https://web3templates.com/components

//     Copyright © 2021
//     =======================================================================
//  -->

import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Connexion</h1>
            <p className="text-gray-500 dark:text-gray-400">Connectez vous pour acceder a votre compte</p>
          </div>
          <div className="m-7">
            <form action="">
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Adresse Email</label>
                <input type="email" name="email" id="email" placeholder="email@exemple.com" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Mot de passe</label>

                </div>
                <input type="password" name="password" id="password" placeholder="Votre Mot de passe" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>
              <div className="mb-6">
                <button type="button" className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-600 rounded">Connexion</button>
              </div>
              <p className="text-sm text-center text-gray-400">
                Vous n&#x27;avez pas encore de compte ?
                {' '}
                <Link to className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Inscrivez vous </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
