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

import SuccessNotifications from '@/components/SuccessNotifications';
import ErrorNotifications from '@/components/ErrorNotifications';

function Collection() {
  const dispatch = useDispatch();
  const { collection } = useSelector((state) => state.collection);
  const { refresh } = useSelector((state) => state.ui);
  const [loading, setLoading] = useState(true);
  const [addCard, setAddCard] = useState(false);
  const location = useLocation();

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
    <div className="mx-auto bg-white p-8 rounded-md shadow-md">
      <IconsAdd addCardRequest={addCardRequest} />
      <SuccessNotifications />
      <ErrorNotifications />
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap gap-3 m-6">
          {addCard && (
          <AddCard resetAddCard={resetAddCard} />
          )}
          {collection.map((card) => (
            <div key={card.id} className="md:w-1/6">
              <Card {...card} delete>
                {!card.state && <DisplayRemainingTime expirationDate={card.expiration_date} cardId={card.id} />}
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Collection;
