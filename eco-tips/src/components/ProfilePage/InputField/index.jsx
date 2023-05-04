import PropTypes from 'prop-types';

function InputField({ icon, inputType, value, placeholder, disabled, name, onValueChange }) {
  return (
    <div className="flex items-center ">
      <div className="mr-2">{icon}</div>
      <div className="flex items-center bg-gray-100 border-b border-gray-200 py-2 px-2">
        <input
          className="bg-gray-100 focus:outline-none"
          name={name}
          type={inputType}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => onValueChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default InputField;

InputField.propTypes = {
  icon: PropTypes.node.isRequired,
  inputType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};
