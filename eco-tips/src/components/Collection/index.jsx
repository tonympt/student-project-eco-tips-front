import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconsAdd from '@/components/Collection/IconsAdd';
import { getAllCollection } from '@/actions/collection';
import DisplayRemainingTime from '@/components/Collection/RemainingTime';
// card component
import Card from '@/components/Card';
import Spinner from '@/components/Spinner';
import AddCard from '@/components/Collection/AddCard';

function Collection() {
  const dispatch = useDispatch();
  const { collection } = useSelector((state) => state.collection);
  const [loading, setLoading] = useState(true);
  const [addCard, setAddCard] = useState(false);
  useEffect(() => {
    dispatch(getAllCollection());
    setLoading(false);
  }, []);
  const addCardRequest = (confirm) => {
    setAddCard(confirm);
  };
  const resetAddCard = (reset) => {
    setAddCard(reset);
  };
  return (
    <div className="w-full mx-auto bg-white p-8 rounded-md shadow-md relative">
      <IconsAdd addCardRequest={addCardRequest} />
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap gap-3 m-6">
          {collection.map((card) => (

            <div key={card.id}>
              <Card {...card} />
              <DisplayRemainingTime expirationDate={card.expiration_date} />
            </div>
          ))}
          {addCard && <AddCard resetAddCard={resetAddCard} />}
        </div>
      )}
    </div>
  );
}

export default Collection;
