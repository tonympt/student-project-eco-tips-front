import PropTypes from 'prop-types';

function CardImg({ imageSrc, title }) {
  return (
    <img
      className="w-full h-32 object-cover"
      src={imageSrc}
      alt={title}
    />
  );
}

CardImg.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardImg;
