/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/fr';

import CheckedTipsButton from '@/components/Collection/CheckedTipsButton';

// function to display the time left before validation of the card

function DisplayRemainingTime({ expirationDate, cardId }) {
  const [displayCheckedButton, setDisplayCheckedButton] = useState(false);
  const timeRemaining = () => {
    dayjs.extend(relativeTime);
    dayjs.locale('fr');
    // current date
    const now = dayjs();
    // date user have chosen
    const expectedDate = expirationDate;
    // time left from current date to date chosen
    const remainingDays = now.to(expectedDate, 'day');
    return remainingDays;
  };

  const diffDate = () => {
    const now = dayjs();
    const expectedDate = expirationDate;
    const diff = now.diff(expectedDate, 'day');
    return diff;
  };

  const remainingDays = timeRemaining();
  const dateDiff = diffDate();
  useEffect(() => {
    if (dateDiff && dateDiff >= 0) {
      setDisplayCheckedButton(true);
    }
  }, [remainingDays]);

  return (
    displayCheckedButton ? (
      <CheckedTipsButton cardId={cardId} />
    ) : (
      <div className="flex flex-row text-center w-full mx-auto bg-white p-4 rounded-md shadow-md mt-3 ">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-sm font-semibold text-center ml-2 ">
          {remainingDays}
          {' '}
          restants
        </p>
      </div>
    )
  );
}

DisplayRemainingTime.propTypes = {
  expirationDate: PropTypes.string.isRequired,
  cardId: PropTypes.number.isRequired,
};

export default DisplayRemainingTime;
