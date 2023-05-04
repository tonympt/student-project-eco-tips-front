import PropTypes from 'prop-types';

function ProposalImg({ path, title }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const url = `${apiUrl}${path}`;
  return (
    <div className="p-2 border border-opacity-50 border-gray-400 rounded">
      <img
        className="w-full h-36 object-cover"
        src={url}
        alt={title}
      />
    </div>
  );
}

ProposalImg.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProposalImg;
