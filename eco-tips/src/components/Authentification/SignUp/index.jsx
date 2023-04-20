/* eslint-disable max-len */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateAuthField, submitSignup } from '@/actions/user';
import Field from '@/components/Authentification/Field';

function SignUp() {
  const { email, password, firstname, lastname, birthdate, confirmpassword } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { redirectTo } = useSelector((state) => state.ui);
  const navigate = useNavigate();

  const changeField = (newValue, identifier) => {
    const action = updateAuthField(newValue, identifier);
    dispatch(action);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(submitSignup());
  };
  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo);
    }
  }, [redirectTo]);

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Formulaire d'inscription</h1>
      <form
        autoComplete="off"
        className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
        onSubmit={handleSubmit}
      >
        <Field
          name="firstname"
          labelName="Prénom"
          placeholder="Prénom"
          onChange={changeField}
          value={firstname}
          type="text"
        />
        <Field
          name="lastname"
          labelName="Nom"
          placeholder="Nom"
          onChange={changeField}
          value={lastname}
          type="text"
        />

        <Field
          className="text-gray-700 text-sm font-bold mb-2"
          name="birthdate"
          labelName="Date de naissance"
          onChange={changeField}
          value={birthdate}
          type="date"
          placeholder="JJ/MM/AAAA"
        />

        <Field
          name="email"
          labelName="Email"
          placeholder="nom@exemple.com"
          onChange={changeField}
          value={email}
          type="email"
          min="1910-01-01"

        />
        <Field
          name="password"
          labelName="Mot de passe"
          placeholder="********"
          onChange={changeField}
          data-date-format="DD MMMM YYYY"
          value={password}
          type="password"
        />
        <Field
          name="confirmpassword"
          labelName="Confirmer mot de passe"
          placeholder="********"
          type="password"
          onChange={changeField}
          value={confirmpassword}

        />
        <button
          className="w-full py-1 font-bold green-button green-button:hover button-active active:animate-buttonAnimation"
          type="submit"
        >
          Creer un compte
        </button>

      </form>
    </div>

  );
}

export default SignUp;
