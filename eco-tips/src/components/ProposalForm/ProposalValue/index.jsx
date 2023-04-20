import PropTypes from 'prop-types';

function ProposalValue({ value, onValueChange }) {
  const handleValueInput = (number) => {
    if (number >= 0 && number <= 20) {
      onValueChange(number);
    } else if (number < 1) {
      onValueChange(1);
    } else if (number > 20) {
      onValueChange(20);
    }
  };

  const decrement = () => {
    if (value > 1) {
      onValueChange(value - 1);
    }
  };

  const increment = () => {
    if (value < 20) {
      onValueChange(value + 1);
    }
  };

  return (
    <div className="p-2 border border-opacity-50 border-gray-400 rounded">
      <label htmlFor="value" className="mb-2 text-sm font-medium text-gray-900">
        Valeur :
      </label>
      <div className="flex flex-row w-1/3 rounded-lg relative bg-transparent mt-1 h-9">
        <button
          type="button"
          data-action="decrement"
          className="bg-gray-50 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-20 rounded-l cursor-pointer border-opacity-50 border-gray-400"
          onClick={decrement}
        >
          <span className="m-auto text-xl">−</span>
        </button>
        <input
          type="number"
          min="1"
          max="20"
          className="bg-gray-50 hover:bg-gray-200 flec text-center text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-20 cursor-pointer border-opacity-50 border-gray-400"
          id="value"
          name="value"
          value={value}
          onChange={(event) => handleValueInput(Number(event.target.value))}
        />
        <button
          type="button"
          data-action="increment"
          className="bg-gray-50 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-20 rounded-r cursor-pointer border-opacity-50 border-gray-400"
          onClick={increment}
        >
          <span className="text-xl">+</span>
        </button>
      </div>
    </div>
  );
}

ProposalValue.propTypes = {
  value: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default ProposalValue;
