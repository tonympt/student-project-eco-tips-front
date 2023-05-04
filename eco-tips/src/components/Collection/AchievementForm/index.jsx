/* eslint-disable max-len */
// Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
// Form components
import Card from '@/components/Card/';
import ProposalImg from '@/components/Collection/AchievementForm/ProposalImg';
import ProposalTitle from '@/components/Collection/AchievementForm/ProposalTitle';
import ProposalDescription from '@/components/Collection/AchievementForm/ProposalDescription';
// Tools components
import SuccessNotifications from '@/components/SuccessNotifications';
import ErrorNotifications from '@/components/ErrorNotifications';
import { sendAchievement } from '@/actions/achievement';

function AchievementForm() {
  // hooks
  const dispatch = useDispatch();
  const location = useLocation();
  // use hooks location to get datas
  const { cardDatas } = location.state;
  // Store
  const { isOpen } = useSelector((state) => state.success);
  // STATE
  // State input form
  const [base64Image, setBase64Image] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // Created formValues for api
  const handleSubmit = (event) => {
    event.preventDefault();
    const formValues = {
      image: base64Image,
      title,
      description,
    };
    dispatch(sendAchievement(formValues));
  };
  // reset form with initial state and DOM element
  const resetForm = () => {
    setBase64Image('');
    setDescription('');
  };
  // Scroll on the top page
  useEffect(() => {
    if (isOpen) {
      window.scroll(0, 0);
    }
  }, [isOpen]);

  return (
    <>
      <h1 className="text-2xl font-bold mb-2 text-center">Soumettre mon accomplissement</h1>
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center mx-auto w-[90%] ">
        <form
          className="bg-white p-4 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <div className="flex flex-col my-2 gap-2">
              <Link to="/collection">
                <div className="flex gap-1 text-sm hover:text-green-600 items-center">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                  </svg>
                  <p>Retourner à ma collection</p>
                </div>
              </Link>
              <ErrorNotifications />
              <SuccessNotifications />
              <ProposalTitle author={cardDatas.author} title={cardDatas.title} onTitle={setTitle} />
              <div className="flex gap-2">
                <ProposalImg onImageChange={setBase64Image} base64Image={base64Image} title={cardDatas.title} />
                <ProposalDescription onChangeDescription={setDescription} description={description} />
              </div>
            </div>
            <div className="flex items-center place-content-evenly py-2">
              <button type="submit" onClick={handleSubmit} className="py-1 px-2 font-bold green-button green-button:hover button-active active:animate-buttonAnimation">
                Valider
              </button>
              <button type="button" onClick={resetForm} className="py-1 px-2 font-bold red-button red-button:hover button-active active:animate-buttonAnimation">
                Annuler
              </button>
            </div>
          </div>
        </form>
        <div className="w-1/2 lg:w-1/5">
          <Card {...cardDatas} />
        </div>
      </div>
    </>
  );
}

export default AchievementForm;
