import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomCard } from '@/actions/collection';

import Card from '@/components/Card';
import Spinner from '@/components/Spinner';

function AddCard() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { randomCard } = useSelector((state) => state.collection);

  useEffect(() => {
    dispatch(getRandomCard());
  }, []);

  useEffect(() => {
    if (Object.keys(randomCard).length > 0) {
      setLoading(false);
    }
  }, [randomCard]);

  return (
    <form>
      <p>rien</p>
      { loading ? (<Spinner />) : (<Card {...randomCard} />)}

    </form>
  );
}

export default AddCard;
