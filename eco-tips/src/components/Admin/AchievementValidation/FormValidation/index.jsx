/* eslint-disable max-len */
// Hooks
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
// Form components
import ProposalImg from '@/components/Admin/AchievementValidation/FormValidation/ProposalImg';
import ProposalTitle from '@/components/Admin/AchievementValidation/FormValidation/ProposalTitle';
import ProposalDescription from '@/components/Admin/AchievementValidation/FormValidation/ProposalDescription';
// Tools components
import SuccessNotifications from '@/components/SuccessNotifications';
import ErrorNotifications from '@/components/ErrorNotifications';
import { updateAchievement } from '@/actions/admin';

function FormValidation() {
  // hooks
  const dispatch = useDispatch();
  const location = useLocation();
  // use hooks location to get datas
  const { achievementDatas } = location.state;
  // destructuring datas
  const { image, title, description, id } = achievementDatas;
  // Store
  const { isOpen } = useSelector((state) => state.success);
  // State input form
  const [changeDescription, setChangeDescription] = useState(description);
  // Created formValues for api
  const handleSubmit = (event) => {
    event.preventDefault();
    const formValues = {
      description: changeDescription,
      title,
    };
    dispatch(updateAchievement(formValues, id));
  };
  // reset form with initial state and DOM element
  const resetForm = () => {
    setChangeDescription(description);
  };
  // Scroll on the top page
  useEffect(() => {
    if (isOpen) {
      window.scroll(0, 0);
    }
  }, [isOpen]);

  return (
    <>
      <h1 className="text-2xl font-bold mb-2 text-center">Modification de l'accomplissement :</h1>
      <div className="flex gap-5 justify-center mt-8">
        <form
          className="bg-white p-4 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1 w-full">
            <div className="flex flex-col my-2 gap-2">
              <Link to="/admin/achievements">
                <div className="flex gap-1 text-sm hover:text-green-600 items-center">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                  </svg>
                  <p>Retourner à la gestion des accomplissements</p>
                </div>
              </Link>
              <ErrorNotifications />
              <SuccessNotifications />
              <ProposalTitle title={title} />
              <div className="flex gap-2">
                <ProposalImg path={image} title={title} />
                <ProposalDescription onChangeDescription={setChangeDescription} description={changeDescription} />
              </div>
            </div>
            <div className="flex items-center place-content-evenly py-2">
              <button type="button" onClick={handleSubmit} className="py-1 px-2 font-bold blue-button blue-button:hover button-active active:animate-buttonAnimation">
                Modifier
              </button>
              <button type="button" onClick={resetForm} className="py-1 px-2 font-bold red-button red-button:hover button-active active:animate-buttonAnimation">
                Réinitialiser
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormValidation;
