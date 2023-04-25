import PropTypes from 'prop-types';

function ProposalRating({ label, name, value, onChange }) {
  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    onChange(newValue);
  };

  return (
    <div>
      <label htmlFor={`${label}_rating`} className="block mb-2 text-sm font-medium text-gray-900">
        {`${label} : ${value}`}
      </label>
      <input
        id={`${name}`}
        name={`${name}`}
        type="range"
        min="0"
        max="5"
        step="1"
        value={value}
        className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        onChange={handleChange}
      />
    </div>
  );
}

ProposalRating.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ProposalRating;
