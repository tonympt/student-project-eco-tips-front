import PropTypes from 'prop-types';

function ProposalDescription({ description, onChangeDescription }) {
  const handleChange = (event) => {
    onChangeDescription(event.target.value);
  };
  return (
    <div className="p-2 border border-opacity-50 border-gray-400 rounded">
      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description :</label>
      <textarea
        name="description"
        id="description"
        rows="4"
        minLength="10"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Votre description..."
        value={description}
        onChange={handleChange}
      />
    </div>
  );
}

ProposalDescription.propTypes = {
  description: PropTypes.string.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
};

export default ProposalDescription;
