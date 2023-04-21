/* eslint-disable max-len */

import dayjs from 'dayjs';

import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/fr';

function DisplayRemainingTime({ expirationDate }) {
  const timeRemaining = () => {
    dayjs.extend(relativeTime);
    dayjs.locale('fr');
    const now = dayjs();
    const expectedDate = expirationDate;
    const remainingDays = now.to(expectedDate, 'day');
    return remainingDays;
  };

  const remainingDays = timeRemaining();
  return (

    <div className="flex flex-row text-center w-full mx-auto bg-white p-4 rounded-md shadow-md relative mt-3 ">
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

      <p className="text-sm font-semibold text-center ml-2 ">
        {' '}
        {remainingDays}
        {' '}
        restants

      </p>
    </div>
  );
}
export default DisplayRemainingTime;
