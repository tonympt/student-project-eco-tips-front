import PropTypes from 'prop-types';

function CardImg({ path, title }) {
  const url = `http://paulinecty-server.eddi.cloud:8080${path}`;
  console.log(url);
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
