import PropTypes from 'prop-types';

function ProposalTitle({ title, onChangeTitle }) {
  const handleChange = (event) => {
    onChangeTitle(event.target.value);
  };
  return (
    <div className="p-2 border border-opacity-50 border-gray-400 rounded">
      <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Titre</label>
      <input
        type="text"
        name="title"
        id="title"
        minLength="3"
        className="block resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Écrivez votre titre ici..."
        value={title}
        onChange={handleChange}
      />
    </div>
  );
}
ProposalTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onChangeTitle: PropTypes.func.isRequired,
};

export default ProposalTitle;
