import dayjs from 'dayjs';
import PropTypes from 'prop-types';

// Functionality when the user decides on the deadline for his eco tips
function DelayButtons({ handleDate }) {
  // function to send the date on which the user will have to carry out his eco-tips
  const handleClick = (value) => {
    const today = dayjs();
    // today.add add the number of days to the date of the button value
    let targetDate = today.add(value, 'day');
    targetDate = targetDate.$d;
    handleDate(targetDate, true);
  };
  return (
    <div className="flex flex-wrap justify-between gap-2 m-2">
      <button type="button" className="w-[46%] py-1 px-1 text-xs font-bold green-button green-button:hover green-button:active active:animate-buttonAnimation" onClick={() => handleClick(7)}>
        1 semaine
      </button>
      <button type="button" className="w-[46%] py-1 px-1 text-xs font-bold green-button green-button:hover green-button:active active:animate-buttonAnimation" onClick={() => handleClick(15)}>
        2 semaines
      </button>
      <button type="button" className="w-[46%] py-1 px-1 text-xs font-bold green-button green-button:hover green-button:active active:animate-buttonAnimation" onClick={() => handleClick(30)}>
        1 mois
      </button>
      <button type="button" className="w-[4%] py-1 px-1 text-xs font-bold green-button green-button:hover green-button:active active:animate-buttonAnimation" onClick={() => handleClick(90)}>
        3 mois
      </button>
    </div>
  );
}
DelayButtons.propTypes = {
  handleDate: PropTypes.func.isRequired,
};

export default DelayButtons;
