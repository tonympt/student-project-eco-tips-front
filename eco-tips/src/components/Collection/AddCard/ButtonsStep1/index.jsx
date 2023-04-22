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
        ✔️
      </Button>
      <Button
        width="w-10"
        type="button"
        onClick={handleReset}
        color="red"
      >
        🗙
      </Button>
    </div>
  );
}

ButtonsStep1.propTypes = {
  stateStep1: PropTypes.func.isRequired,
};

export default ButtonsStep1;
