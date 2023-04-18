import PropTypes from 'prop-types';

function CardImg({ name, data, type }) {
  const imageUrl = `data:${type};base64,${data}`;
  return (
    <img
      className="w-full h-32 object-cover"
      src={imageUrl}
      alt={name}
    />
  );
}

CardImg.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CardImg;
