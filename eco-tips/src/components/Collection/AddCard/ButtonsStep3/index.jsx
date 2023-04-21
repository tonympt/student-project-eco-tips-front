import PropTypes from 'prop-types';
import Button from '@/components/Collection/AddCard/Button';

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
        ✔️
      </Button>
      <Button
        type="button"
        onClick={handleReset}
        color="red"
        width="w-10"
      >
        🗙
      </Button>
    </div>
  );
}

ButtonsStep3.propTypes = {
  stateStep3: PropTypes.func.isRequired,
};

export default ButtonsStep3;
