import PropTypes from 'prop-types';

function ProposalTitle({ title }) {
  return (
    <div className="p-2 border border-opacity-50 border-gray-400 rounded">
      <div
        id="title"
        className="w-full px-2 py-1 border-none outline-none bg-transparent text-gray-900 text-sm"
        contentEditable={false}
      >
        <h2>
          {title}
        </h2>
      </div>
    </div>
  );
}
ProposalTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default ProposalTitle;
