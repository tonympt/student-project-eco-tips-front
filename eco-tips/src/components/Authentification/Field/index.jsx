import PropTypes from 'prop-types';

function Field({ value, type, name, placeholder, labelName, onChange }) {
  // input value change management
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };
  const inputId = `field-${name}`;

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={inputId}>{labelName}</label>
      <input
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  value: '',
  type: 'text',
};

export default Field;
