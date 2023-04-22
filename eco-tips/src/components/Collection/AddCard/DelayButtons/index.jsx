import { useState } from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import 'dayjs/locale/fr';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);
dayjs.locale('fr');

// Functionality when the user decides on the deadline for his eco tips
function DelayButtons({ handleDate }) {
  const [displayDate, setDisplayDate] = useState('');
  const [rangeValue, setRangeValue] = useState(7);
  // function to send the date on which the user will have to carry out his eco-tips
  const handleRangeChange = (event) => {
    const numberofDays = event.target.value;
    setRangeValue(numberofDays);
    const today = dayjs();
    const targetDate = today.add(numberofDays, 'day');
    const formattedDate = targetDate.format('LL');
    handleDate(targetDate.$d);
    setDisplayDate(formattedDate);
  };
  return (
    <div className="flex flex-col justify-between gap-1 m-2">
      <div className="flex gap-2 mx-auto bg-white p-1 rounded-md shadow-md ">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className=" text-center">{displayDate}</p>
      </div>
      <div className="flex flex-col items-center gap-2 m-2">
        <input
          type="range"
          min="7"
          max="90"
          step="7"
          value={rangeValue}
          onChange={handleRangeChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none"
        />
      </div>
    </div>
  );
}
DelayButtons.propTypes = {
  handleDate: PropTypes.func.isRequired,
};

export default DelayButtons;
