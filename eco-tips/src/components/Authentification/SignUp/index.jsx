import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { updateSignupField, submitSignup } from '@/actions/user';
import Datepicker from 'react-tailwindcss-datepicker';
import Field from '@/components/Authentification/Field';

function SignUp() {
  const { email, password, firstname, lastname, birthdate, confirmpassword } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { redirectTo } = useSelector((state) => state.ui);
  const navigate = useNavigate();

  const changeField = (newValue, identifier) => {
    const action = updateSignupField(newValue, identifier);
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
  }, [redirectTo, navigate]);

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
          name="birhtdate"
          labelName="Année de naissance"
          onChange={changeField}
          value={birthdate}
          type="date"
        />

        <Field
          name="email"
          labelName="Email"
          placeholder="nom@exemple.com"
          onChange={changeField}
          value={email}
          type="email"
        />
        <Field
          name="password"
          labelName="Mot de passe"
          placeholder="********"
          onChange={changeField}
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
