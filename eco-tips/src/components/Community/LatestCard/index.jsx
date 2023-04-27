import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLatestCard } from '@/actions/community';
import Spinner from '@/components/Spinner';
import Card from '@/components/Card';

function LatestCard() {
  const latestCard = useSelector((state) => state.community.latestCard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestCard());
  }, []);

  return (
    <div className="bg-white p-8 rounded-md shadow-md flex-col w-1/4">
      <h1 className="text-l font-bold inline-flex mb-3">
        <span className="border-b-4 border-green-500 text-xl">Dernière carte ajoutée</span>
      </h1>
      <div>
        <div className="w-full">
          {Object.keys(latestCard).length > 0 ? (
            <Card {...latestCard} />
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
}

export default LatestCard;
