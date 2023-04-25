/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// action creator
import moment from 'moment';
import { fetchProfileData } from '@/actions/user';
// import component
import Spinner from '@/components/Spinner';

function InputField({ icon, inputType, placeholder }) {
  return (
    <div className="flex items-center ">
      <div className="mr-2">{icon}</div>
      <div className="flex items-center bg-gray-100 border-b border-gray-200 py-2 px-2">
        <input
          className="bg-gray-100 focus:outline-none w-full"
          type={inputType}
          placeholder={placeholder}
          disabled
        />
      </div>
    </div>
  );
}

function ProfilePage() {
  const { firstname, lastname, birthdate, ecocoins, email, score, logged } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const birthdateDisplay = moment.utc(birthdate).format('DD/MM/YYYY');
  useEffect(() => {
    if (logged) {
      dispatch(fetchProfileData());
      setLoading(false);
    }
  }, []);
  return (
    <div className="relative w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md mt-16">
      {loading ? (<Spinner />) : (
        <>
          <div className="absolute top-4 left-2">
            <span aria-label="score" className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-2.5 rounded-md">
              {' '}
              🏆
              {' '}
              {score}
            </span>
          </div>
          <div className="absolute top-4 right-2">
            <span aria-label="coin" className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2 py-2.5 rounded-md">
              {' '}
              💰
              {' '}
              {ecocoins}
            </span>
          </div>
          <div className="flex flex-col items-center gap-7 mt-9">
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
                placeholder={`${firstname} ${lastname}`}
              />
              <InputField
                icon={(
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                  </svg>
)}
                inputType="text"
                placeholder={birthdateDisplay}
              />
              <InputField
                icon={(
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                  </svg>
)}
                inputType="text"
                placeholder={email}
              />
              <InputField
                icon={(
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
)}
                inputType="text"
                placeholder="*************"
              />
            </div>
            <div className="flex flex-col gap-3">
              <button
                className="w-full py-1 px-2 font-bold blue-button blue-button:hover button-active active:animate-buttonAnimation"
                type="submit"
              >
                Éditer mon profil
              </button>
              <button
                className="w-full py-1 px-2 font-bold red-button red-button:hover button-active active:animate-buttonAnimation"
                type="submit"
              >
                Supprimer mon profil
              </button>
            </div>
          </div>
        </>
      )}

    </div>
  );
}

InputField.propTypes = {
  icon: PropTypes.node.isRequired,
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default ProfilePage;
