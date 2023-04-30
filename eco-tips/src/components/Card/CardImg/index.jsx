/* eslint-disable no-unneeded-ternary */
import PropTypes from 'prop-types';

function CardImg({ path, title, base64Image }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const url = base64Image ? base64Image : `${apiUrl}${path}`;
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
  base64Image: PropTypes.string,
};
CardImg.defaultProps = {
  base64Image: '',
};

export default CardImg;
