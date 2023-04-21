import dayjs from 'dayjs';

// Functionality when the user decides on the deadline for his eco tips
function DelayButtons() {
  // function to send the date on which the user will have to carry out his eco-tips
  const handleClick = (value) => {
    const today = dayjs();
    // today.add add the number of days to the date of the button value
    const targetDate = today.add(value, 'day');
  };

  return (
    <div className="flex flex-wrap justify-between gap-2 m-2">
      <button type="button" className="w-[48%] py-1 px-2 text-xs font-bold green-button green-button:hover green-button:active active:animate-buttonAnimation" onClick={() => handleClick(7)}>
        1 semaine
      </button>
      <button type="button" className="w-[48%] py-1 px-2 text-xs font-bold green-button green-button:hover green-button:active active:animate-buttonAnimation" onClick={() => handleClick(15)}>
        2 semaines
      </button>
      <button type="button" className="w-[48%] py-1 px-2 text-xs font-bold green-button green-button:hover green-button:active active:animate-buttonAnimation" onClick={() => handleClick(30)}>
        1 mois
      </button>
      <button type="button" className="w-[48%] py-1 px-2 text-xs font-bold green-button green-button:hover green-button:active active:animate-buttonAnimation" onClick={() => handleClick(90)}>
        3 mois
      </button>
    </div>
  );
}

export default DelayButtons;
