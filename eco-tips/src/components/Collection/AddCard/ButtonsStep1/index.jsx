import PropTypes from 'prop-types';
import Button from '@/components/Collection/AddCard/Button';

function ButtonsStep1({ stateStep1 }) {
  const handleValidation = () => {
    stateStep1(true);
  };

  const handleReset = () => {
    stateStep1(false);
  };
  return (
    <div className="flex w-full content-center gap-3 place-content-evenly m-2">
      <Button
        width="w-10"
        type="button"
        color="green"
        onClick={handleValidation}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-5 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bold">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </Button>
      <Button
        width="w-10"
        type="button"
        onClick={handleReset}
        color="red"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-5 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bold">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

      </Button>
    </div>
  );
}

ButtonsStep1.propTypes = {
  stateStep1: PropTypes.func.isRequired,
};

export default ButtonsStep1;
