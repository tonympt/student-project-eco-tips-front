/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// modules
import moment from 'moment';
// action creator
import { fetchProfileData, deleteAccount, updateAccount } from '@/actions/user';
import { askRefresh } from '@/actions/ui';
// import utils component
import InputField from '@/components/ProfilePage/InputField';
import Spinner from '@/components/Spinner';
import Button from '@/components/Tools/ButtonTemplate';
import ModalTemplate from '@/components/Tools/ModalTemplate';
import ErrorNotifications from '@/components/ErrorNotifications';
import SuccessNotifications from '@/components/SuccessNotifications';

function ProfilePage() {
  // store
  const { firstname, lastname, birthdate, ecocoins, email, score, logged } = useSelector((state) => state.user);
  const { refresh } = useSelector((state) => state.ui);
  // --STATE--
  // state to data form
  const [firstnameState, setFirstnameState] = useState('');
  const [lastnameState, setLastnameState] = useState('');
  const [birthdateState, setBirthdateState] = useState('');
  const [emailState, setEmailState] = useState('');
  // state to ux
  const [loading, setLoading] = useState(true);
  const [onEdit, setOnEdit] = useState(false);
  const [onShowModalState, setOnShowModalState] = useState(false);
  // state to validate fetch
  const [validate, setValidate] = useState(false);
  // hooks
  const dispatch = useDispatch();
  // convert birthdate
  const birthdateDisplay = moment.utc(birthdate).format('DD/MM/YYYY');

  // load datas profile
  useEffect(() => {
    if (logged) {
      dispatch(fetchProfileData());
      setLoading(false);
    }
  }, []);
  // change datas on action user
  useEffect(() => {
    if (firstname || lastname || birthdate || email) {
      setFirstnameState(firstname);
      setLastnameState(lastname);
      setBirthdateState(birthdate);
      setEmailState(email);
    }
  }, [firstname, lastname, birthdate, email]);

  // delete account after validation on modal
  useEffect(() => {
    if (validate) {
      dispatch(deleteAccount());
    }
  }, [validate]);

  // refresh datas and component
  useEffect(() => {
    if (refresh) {
      dispatch(fetchProfileData());
      dispatch(askRefresh());
      window.scroll(0, 0);
    }
  }, [refresh]);

  const handleReset = () => {
    setOnEdit(false);
    setFirstnameState(firstname);
    setLastnameState(lastname);
    setBirthdateState(birthdate);
    setEmailState(email);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formValues = {
      firstname: firstnameState,
      lastname: lastnameState,
      birthdate: birthdateState,
      email: emailState,
    };
    setOnEdit(false);
    dispatch(updateAccount(formValues));
  };
  return (
    <>
      <div className="flex font-bold mb-8 text-center justify-center items-center  ">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
        </svg>
        <h1 className="text-2xl font-bold m-2 text-center">Mon profil</h1>
      </div>
      <div className="relative w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
        <ModalTemplate
          textModal="Êtes-vous sûr de vouloir supprimer votre profil?"
          colorButton="red"
          textValidate="Oui"
          textCancel="Non"
          onShowModal={onShowModalState}
          onModalClose={() => setOnShowModalState(false)}
          onValidate={() => setValidate(true)}
        />
        {loading ? (<Spinner />) : (
          <>
            <div className="flex justify-between mb-2">
              <span aria-label="score" className="text-sm bg-blue-100 text-blue-800 font-medium mr-2 px-2 py-2.5 rounded-md">
                {' '}
                🏆
                {' '}
                {score}
              </span>
              <span aria-label="coin" className="bg-yellow-100 text-yellow-800 font-medium mr-2 px-2 py-2.5 rounded-md text-sm">
                {' '}
                💰
                {' '}
                {ecocoins}
              </span>
            </div>
            <ErrorNotifications />
            <SuccessNotifications />
            <div className="flex flex-col items-center gap-7 mt-2">
              <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
              </div>
              <div className="w-full flex flex-col items-center gap-5">
                <InputField
                  icon={(
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  )}
                  inputType="text"
                  name="firstname"
                  value={onEdit ? firstnameState : ''}
                  placeholder={onEdit ? '' : firstname}
                  disabled={!onEdit}
                  onValueChange={(value) => setFirstnameState(value)}
                />
                <InputField
                  icon={(
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  )}
                  inputType="text"
                  name="lastname"
                  value={onEdit ? lastnameState : ''}
                  placeholder={onEdit ? '' : lastname}
                  disabled={!onEdit}
                  onValueChange={(value) => setLastnameState(value)}
                />
                <InputField
                  className="w-full"
                  icon={(
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                    </svg>
                  )}
                  inputType={onEdit ? 'date' : 'text'}
                  name="birthdate"
                  value={onEdit ? birthdateState : ''}
                  placeholder={onEdit ? '' : birthdateDisplay}
                  disabled={!onEdit}
                  onValueChange={(value) => setBirthdateState(value)}
                />
                <InputField
                  icon={(
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                    </svg>
                  )}
                  inputType="text"
                  name="email"
                  value={onEdit ? emailState : ''}
                  placeholder={onEdit ? '' : email}
                  disabled={!onEdit}
                  onValueChange={(value) => setEmailState(value)}
                />
                <div className="flex items-center gap-2">
                  <InputField
                    icon={(
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    )}
                    inputType="password"
                    placeholder="*************"
                    disabled
                  />
                  {onEdit && (
                  <Link to="/profile/password">
                    <Button
                      type="button"
                      color="blue"
                      padding="p-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Button>
                  </Link>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {onEdit ? (
                  <>
                    <button
                      className="w-full py-1 px-2 font-bold green-button green-button:hover button-active active:animate-buttonAnimation"
                      type="submit"
                      onClick={handleSubmit}
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
                  <>
                    <button
                      className="w-full py-1 px-2 font-bold blue-button blue-button:hover button-active active:animate-buttonAnimation"
                      type="button"
                      onClick={() => setOnEdit(true)}
                    >
                      Éditer mon profil
                    </button>
                    <button
                      className="w-full py-1 px-2 font-bold red-button red-button:hover button-active active:animate-buttonAnimation"
                      type="submit"
                      onClick={() => setOnShowModalState(true)}
                    >
                      Supprimer mon profil
                    </button>
                  </>
                )}
              </div>
            </div>
          </>
        )}

      </div>
    </>
  );
}

export default ProfilePage;
