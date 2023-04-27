import PropTypes from 'prop-types';

function AuthorForm({ author }) {
  return (
    <div className="p-2 border border-opacity-50 border-gray-400 rounded text-gray-500 text-xs">
      Par
      {` ${author}`}
    </div>
  );
}

AuthorForm.propTypes = {
  author: PropTypes.string.isRequired,
};

export default AuthorForm;
