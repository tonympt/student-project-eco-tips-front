import PropTypes from 'prop-types';

function CardImg({ path, title }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const url = `${apiUrl}${path}`;
  return (
    <img
      className="w-full h-32 object-cover"
      src={url}
      alt={title}
    />
  );
}

CardImg.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardImg;
