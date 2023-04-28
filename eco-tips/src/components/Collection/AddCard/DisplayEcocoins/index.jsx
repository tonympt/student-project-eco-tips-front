/* eslint-disable react/button-has-type */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProfileData } from '@/actions/user';
import { askRefreshProfileData } from '@/actions/ui';

function DisplayEcocoins() {
  const { ecocoins } = useSelector((state) => state.user);
  const { refreshProfileData } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    if (refreshProfileData) {
      dispatch(fetchProfileData());
      dispatch(askRefreshProfileData());
    }
  }, [refreshProfileData]);

  return (
    <div className="absolute top-4 right-2">
      <span aria-label="coin" className="bg-yellow-100 text-yellow-800 font-medium mr-2 px-2 py-2.5 rounded-md text-sm">
        {' '}
        💰
        {' '}
        {ecocoins}
      </span>
    </div>
  );
}

export default DisplayEcocoins;
