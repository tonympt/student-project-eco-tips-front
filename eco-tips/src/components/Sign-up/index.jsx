function SignUp() {
    return (
        
            <div class="py-8">
                <h1 class="text-2xl font-bold mb-6 text-center">Formulaire d'inscription</h1>
                <form class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Nom</label>
                        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="text" id="name" name="name" placeholder="Nom"/>
                        </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="email" id="email" name="email" placeholder="nom@exemple.com"/>
                        </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Mot de passe</label>
                        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="password" id="password" name="password" placeholder="********"/>
                        </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">Confirmer mot de passe</label>
                        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="password" id="confirm-password" name="confirm-password" placeholder="********"/>
                        </div>
                    <button
                        class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-600 rounded"
                        type="submit">S'inscrire</button>
                </form>
            </div>
   
    );
  }
  export default SignUp;
