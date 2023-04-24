/* eslint-disable max-len */
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/fr';
import updateLocale from 'dayjs/plugin/updateLocale';

// function to display the time left before validation of the card

function DisplayRemainingTime({ expirationDate }) {
  const timeRemaining = () => {
    dayjs.extend(updateLocale);
    dayjs.extend(relativeTime);
    dayjs.locale('fr');
    dayjs.updateLocale('fr', {
      relativeTime: {
        future: 'dans %s',
        s: 'quelques secondes',
        m: '1 minute',
        mm: '%d minutes',
        h: '1 heure',
        hh: '%d heures',
        d: '1 jour',
        dd: '%d jours',
        M: '1 mois',
        MM: '%d mois',
        y: '1 an',
        yy: '%d ans',
      },
    });
    // current date
    const now = dayjs();
    // date user have chosen
    const expectedDate = expirationDate;
    console.log(expectedDate);
    // time left from current date to date chosen
    const remainingDays = now.to(expectedDate, 'day');
    console.log(remainingDays);
    return remainingDays;
  };

  const remainingDays = timeRemaining();

  return (

    <div className="flex flex-row text-center w-full mx-auto bg-white p-4 rounded-md shadow-md mt-3 ">
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

      <p className="text-sm font-semibold text-center ml-2 ">
        {' '}
        {remainingDays}
        {' '}
        restant(s)

      </p>
    </div>
  );
}

DisplayRemainingTime.propTypes = {
  expirationDate: PropTypes.string.isRequired,
};

export default DisplayRemainingTime;
