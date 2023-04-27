import PropTypes from 'prop-types';
import Button from '@/components/Tools/ButtonTemplate';

function ButtonsStep3({ stateStep3 }) {
  const handleReset = () => {
    stateStep3();
  };
  return (
    <div className="flex w-full content-center gap-3 place-content-evenly m-2">
      <Button
        type="submit"
        color="green"
        width="w-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-5 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bold">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </Button>
      <Button
        type="button"
        onClick={handleReset}
        color="red"
        width="w-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-5 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bold">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Button>
    </div>
  );
}

ButtonsStep3.propTypes = {
  stateStep3: PropTypes.func.isRequired,
};

export default ButtonsStep3;
