import PropTypes from 'prop-types';

function ProposalDescription({ description, onChangeDescription }) {
  return (
    <div className="p-2 border border-opacity-50 border-gray-400 rounded w-full flex flex-col">
      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description :</label>
      <textarea
        id="description"
        name="description"
        maxLength="350"
        className="block p-2.5 w-full flex-grow text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
        value={description}
        onChange={(event) => onChangeDescription(event.target.value)}
      />
    </div>
  );
}

ProposalDescription.propTypes = {
  description: PropTypes.string.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
};

export default ProposalDescription;
