import PropTypes from 'prop-types';
import Button from '@/components/Tools/ButtonTemplate';

function Buttons({ stateStep }) {
  const handleValidation = () => {
    stateStep(true);
  };

  const handleReset = () => {
    stateStep(false);
  };
  return (
    <div className="flex w-full content-center gap-3 place-content-evenly m-2">
      <Button
        width="w-10"
        type="button"
        color="green"
        onClick={handleValidation}
        padding="py-1 px-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bold">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </Button>
      <Button
        width="w-10"
        type="button"
        onClick={handleReset}
        color="blue"
        padding="py-1 px-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>
      </Button>
    </div>
  );
}

Buttons.propTypes = {
  stateStep: PropTypes.func.isRequired,
};

export default Buttons;
