/* eslint-disable max-len */

import dayjs from 'dayjs';


function DisplayRemainingTime() {
  // récupèrer la targetDate de la carte
  const targetDate = '12'; // nombre factice

  const timeRemaining = () => {
    const now = dayjs();
    const futureDate = now.add(targetDate, 'day');
    const currentDate = dayjs();
    const remainingDays = futureDate.diff(currentDate, 'day');
    console.log(futureDate);
    return remainingDays;
  };

  const remainingDays = timeRemaining();
  return (

    <div className="flex flex-row items-center ">
      <p className="text-sm font-semibold">
        {' '}
        {remainingDays}
        {' '}
        Jours restant
      </p>
    </div>
  );
}
export default DisplayRemainingTime;
