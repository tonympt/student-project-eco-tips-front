// recat hooks
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import components
import InputField from '@/components/ProfilePage/InputField';
import ErrorNotifications from '@/components/ErrorNotifications';
import SuccessNotifications from '@/components/SuccessNotifications';
import ModalTemplate from '@/components/Tools/ModalTemplate';
// action creator
import { updatePassword } from '@/actions/user';

function PasswordForm() {
  // state to datas form
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // state to ux
  const [onShowModalState, setOnShowModalState] = useState(false);
  const [validate, setValidate] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  // hooks
  const dispatch = useDispatch();

  const handleReset = () => {
    setOnEdit(false);
    setPassword('');
    setConfirmPassword('');
  };

  useEffect(() => {
    if (validate) {
      const formValues = {
        password,
        confirmpassword: confirmPassword,
      };
      setOnEdit(false);
      setPassword('');
      setConfirmPassword('');
      dispatch(updatePassword(formValues));
    }
  }, [validate]);

  return (
    <div className="relative w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
      <Link to="/profile">
        <div className="flex gap-1 text-sm hover:text-green-600 items-center">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          <p>Retourner à mon profil</p>
        </div>
      </Link>
      <SuccessNotifications />
      <ErrorNotifications />
      <ModalTemplate
        textModal="Êtes-vous sûr de vouloir modifier votre mot de passe?"
        colorButton="green"
        textValidate="Oui"
        textCancel="Non"
        onShowModal={onShowModalState}
        onModalClose={() => setOnShowModalState(false)}
        onValidate={() => setValidate(true)}
      />
      <div className="flex flex-col items-center gap-7 mt-9">
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
          <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
        </div>
        <div className="flex flex-col gap-3">
          <InputField
            icon={(
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
          )}
            inputType="password"
            name="password"
            value={onEdit ? password : ''}
            placeholder={onEdit ? 'nouveau mot de passe' : '***********'}
            disabled={!onEdit}
            onValueChange={(value) => setPassword(value)}
          />
          <InputField
            icon={(
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
          )}
            inputType="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder={onEdit ? 'confirmer votre mot de passe' : '***********'}
            disabled={!onEdit}
            onValueChange={(value) => setConfirmPassword(value)}
          />
        </div>
        <div className="flex flex-col gap-3">
          {onEdit ? (
            <>
              <button
                className="w-full py-1 px-2 font-bold green-button green-button:hover button-active active:animate-buttonAnimation"
                type="button"
                onClick={() => setOnShowModalState(true)}
              >
                Valider
              </button>
              <button
                className="w-full py-1 px-2 font-bold red-button red-button:hover button-active active:animate-buttonAnimation"
                type="button"
                onClick={handleReset}
              >
                Réinitialiser
              </button>
            </>
          ) : (
            <button
              className="w-full py-1 px-2 font-bold blue-button blue-button:hover button-active active:animate-buttonAnimation"
              type="button"
              onClick={() => setOnEdit(true)}
            >
              Modifier mon mot de passe
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

InputField.propTypes = {
  icon: PropTypes.node.isRequired,
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default PasswordForm;
