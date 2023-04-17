import PropTypes from 'prop-types';

function CardAuthor({ author }) {
  return (
    <div className="text-gray-500 text-xs">
      Par
      {' '}
      {author}
    </div>
  );
}

CardAuthor.propTypes = {
  author: PropTypes.string.isRequired,
};

export default CardAuthor;
