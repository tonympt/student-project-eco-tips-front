/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { askRefresh } from '@/actions/ui';
// Achievement component
import Achievement from '@/components/Achievement';
// Tools component
import Spinner from '@/components/Spinner';
import ButtonsControls from '@/components/Admin/AchievementValidation/ButtonsControls';
import SuccessNotifications from '@/components/SuccessNotifications';
// Action creator
import { getAllAchievements } from '@/actions/admin';

function AchievementValidation() {
  const dispatch = useDispatch();
  // Faire la vérification du role qui est = à 1 dans le useEffect
  // const { role } = useSelector((state) => state.user);
  // const { roleId } = useSelector((state) => state.user);
  const { achievements } = useSelector((state) => state.admin);
  const { refresh } = useSelector((state) => state.ui);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    dispatch(getAllAchievements());
    setLoading(false);
  }, []);
  useEffect(() => {
    if (refresh) {
      dispatch(getAllAchievements());
      dispatch(askRefresh());
      window.scroll(0, 0);
    }
  }, [refresh, location]);

  return (
    <>
      <div className="flex flex-col text-center my-3">
        <h1 className="text-2xl font-bold mb-6 text-center">Espace administrateur</h1>
      </div>
      <div className="bg-white p-8 rounded-md shadow-md mx-48">
        <SuccessNotifications />
        <div className="shadow-md">
          <h2 className="text-lg mb-6 p-2 shadow-md text-white font-extrabold bg-gradient-to-r to-green-400 from-emerald-600 opacity-80 border-b-4 border-green-500 rounded-t-lg">
            <span className="inset-text-shadow">Gérer les accomplissements des utilisateurs avant publication</span>
          </h2>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-wrap gap-3 w-full">
            {achievements.length > 0 ? (
              achievements.map((achievement) => (
                <div key={achievement.id}>
                  <Achievement {...achievement}>
                    <ButtonsControls achievement={achievement} />
                  </Achievement>
                </div>
              ))
            ) : (
              <p className="text-md">Aucune accomplissement n'est à valider pour l'instant...</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default AchievementValidation;
