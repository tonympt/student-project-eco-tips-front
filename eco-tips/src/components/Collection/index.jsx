/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import IconsAdd from '@/components/Collection/IconsAdd';
import { getAllCollection } from '@/actions/collection';
import { askRefresh } from '@/actions/ui';
import DisplayRemainingTime from '@/components/Collection/RemainingTime';
// card component
import Card from '@/components/Card';
import Spinner from '@/components/Spinner';
// Tools components
import SuccessNotifications from '@/components/SuccessNotifications';
import ErrorNotifications from '@/components/ErrorNotifications';
// utils fonction
import { filterChecked, filterToValidate, cardsAccordingToExpiration } from '@/utils/collection';

function Collection() {
  const dispatch = useDispatch();
  const { collection } = useSelector((state) => state.collection);
  const { refresh } = useSelector((state) => state.ui);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const cardsChecked = filterChecked(collection);
  const cardsToValidate = filterToValidate(collection);
  const cardsNearestToExpiration = cardsAccordingToExpiration(collection, true);
  const cardsfarthestToExpiration = cardsAccordingToExpiration(collection, false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  useEffect(() => {
    dispatch(getAllCollection());
    setLoading(false);
  }, []);

  useEffect(() => {
    if (refresh) {
      dispatch(getAllCollection());
      dispatch(askRefresh());
      window.scroll(0, 0);
    }
  }, [refresh, location]);

  return (
    <>
      <div className="flex font-bold mb-8 text-center justify-center items-center  ">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm1.5 1.5a.75.75 0 00-.75.75V16.5a.75.75 0 001.085.67L12 15.089l4.165 2.083a.75.75 0 001.085-.671V5.25a.75.75 0 00-.75-.75h-9z" clipRule="evenodd" />
        </svg>
        <h1 className="text-2xl font-bold m-2 text-center">Ma collection</h1>
      </div>
      <div className="mx-auto lg:w-[80%] sm:w-[90%] bg-white p-8 rounded-md shadow-md">
        <IconsAdd />
        <SuccessNotifications />
        <ErrorNotifications />
        {loading ? (
          <Spinner />
        ) : (
          <div>

            <div className="my-3">
              <label htmlFor="filter" className="block mb-2 text-sm font-medium text-gray-900" />
              <select
                id="filter"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                <option selected disabled>Tris</option>
                <option value="all">Tous les éco-gestes</option>
                <option value="toDo">Par éco-gestes à réaliser</option>
                <option value="toCheck">Par éco-gestes à valider</option>
                <option value="toChecked">Par éco-gestes réalisés</option>
              </select>
            </div>
            <div className="flex flex-col">
              {(selectedFilter === 'toDo' || selectedFilter === 'all') && (
              <>
                <h2 className="text-lg mb-2 mt-4 p-2 shadow-md text-white font-extrabold bg-gradient-to-r to-green-400 from-emerald-600 border-b-4 border-green-500 rounded-t-lg">
                  <span className="inset-text-shadow">Eco-gestes à réaliser</span>
                </h2>
                <div className="flex flex-wrap gap-3 my-2">
                  {cardsNearestToExpiration.length > 0 ? (cardsNearestToExpiration.map((card) => (
                    <div key={card.id} className="lg:w-1/5 md:w-1/3 sm:w-full">
                      <Card {...card} delete>
                        {!card.state && (
                        <DisplayRemainingTime {...card} />
                        )}
                      </Card>
                    </div>
                  ))) : (<p> Aucune carte dans cette catégorie ...  </p>)}
                </div>
              </>
              )}
              {(selectedFilter === 'toCheck' || selectedFilter === 'all') && (
              <>
                <h2 className="text-lg mb-2 mt-4 p-2 shadow-md text-white font-extrabold bg-gradient-to-r to-green-400 from-emerald-600 border-b-4 border-green-500 rounded-t-lg">
                  <span className="inset-text-shadow">Eco-gestes à valider</span>
                </h2>
                <div className="flex flex-wrap gap-3 my-2">
                  {cardsToValidate.length > 0 ? (cardsToValidate.map((card) => (
                    <div key={card.id} className="lg:w-1/5 md:w-1/3 sm:w-full">
                      <Card {...card} delete>
                        {!card.state && (
                        <DisplayRemainingTime {...card} />
                        )}
                      </Card>
                    </div>
                  ))) : (<p> Aucune carte dans cette catégorie ...  </p>)}
                </div>
              </>
              )}
              {(selectedFilter === 'toChecked' || selectedFilter === 'all') && (
              <>
                <h2 className="text-lg mb-2 mt-4 p-2 shadow-md text-white font-extrabold bg-gradient-to-r to-green-400 from-emerald-600 border-b-4 border-green-500 rounded-t-lg">
                  <span className="inset-text-shadow">Eco-gestes réalisés</span>
                </h2>
                <div className="flex flex-wrap gap-3 my-2">
                  {cardsChecked.length > 0 ? (cardsChecked.map((card) => (
                    <div key={card.id} className="lg:w-1/5 md:w-1/3 sm:w-full">
                      <Card {...card} delete>
                        {!card.state && (
                        <DisplayRemainingTime {...card} />
                        )}
                      </Card>
                    </div>
                  ))) : (<p> Aucune carte dans cette catégorie ...  </p>)}
                </div>
              </>
              )}
            </div>
          </div>
        )}
      </div>

    </>
  );
}

export default Collection;
