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
import AddCard from '@/components/Collection/AddCard';
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
  const [addCard, setAddCard] = useState(false);
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

  const addCardRequest = (confirm) => {
    setAddCard(confirm);
  };
  const resetAddCard = (reset) => {
    setAddCard(reset);
  };
  return (
    <div className="mx-auto bg-white p-8 rounded-md shadow-md bg-no-repeat ">
      <IconsAdd addCardRequest={addCardRequest} />
      <SuccessNotifications />
      <ErrorNotifications />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {addCard && (
          <AddCard resetAddCard={resetAddCard} />
          )}
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
          <div>
            {(selectedFilter === 'toDo' || selectedFilter === 'all') && (
            <>
              <h2 className="text-l font-bold mb-1 inline-flex">
                <span className="border-b-4 border-green-500">Eco-gestes à réaliser</span>
              </h2>
              <div className="inline-flex gap-3 my-2">
                {cardsNearestToExpiration.map((card) => (
                  <div key={card.id} className="w-1/6">
                    <Card {...card} delete>
                      {!card.state && (
                      <DisplayRemainingTime expirationDate={card.expiration_date} cardId={card.id} />
                      )}
                    </Card>
                  </div>
                ))}
              </div>
            </>
            )}
            {(selectedFilter === 'toCheck' || selectedFilter === 'all') && (
            <>
              <h2 className="text-l font-bold mb-1 inline-flex">
                <span className="border-b-4 border-green-500">Eco-gestes à valider</span>
              </h2>
              <div className="flex flex-wrap gap-3 my-2">
                {cardsToValidate.map((card) => (
                  <div key={card.id} className="w-1/6">
                    <Card {...card} delete>
                      {!card.state && (
                      <DisplayRemainingTime expirationDate={card.expiration_date} cardId={card.id} />
                      )}
                    </Card>
                  </div>
                ))}
              </div>
            </>
            )}
            {(selectedFilter === 'toChecked' || selectedFilter === 'all') && (
            <>
              <h2 className="text-l font-bold mb-1 inline-flex">
                <span className="border-b-4 border-green-500">Eco-gestes réalisés</span>
              </h2>
              <div className="flex flex-wrap gap-3 my-2">
                {cardsChecked.map((card) => (
                  <div key={card.id} className="w-1/6">
                    <Card {...card} delete />
                  </div>
                ))}
              </div>
            </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Collection;
