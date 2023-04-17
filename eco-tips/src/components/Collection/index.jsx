import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconsAdd from '@/components/Collection/IconsAdd';
import { getAllCollection } from '@/actions/collection';
// card component
import Card from '@/components/Card';
import Spinner from '@/components/Spinner';
// // fake datas to delete
// import {cards} from '@/assets/datas/data';

function Collection() {
  const dispatch = useDispatch();
  const { collection } = useSelector((state) => state.collection);
  const [loading, setLoading] = useState(true);
  console.log(collection);
  useEffect(() => {
    dispatch(getAllCollection());
    setLoading(false);
  }, []);

  return (
    <div className="w-full mx-auto bg-white p-8 rounded-md shadow-md relative">
      <IconsAdd />
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap gap-3 m-6">
          {collection.map((card) => (
            <div key={card.id}>
              <Card {...card} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Collection;
