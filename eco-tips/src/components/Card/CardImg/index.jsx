/* eslint-disable no-unneeded-ternary */
import PropTypes from 'prop-types';

function CardImg({ path, title, base64Image, isExpanded, children }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const url = base64Image ? base64Image : `${apiUrl}${path}`;
  const styleImgExpanded = isExpanded ? 'h-48' : 'h-40';
  return (
    <div className={`relative w-full ${styleImgExpanded} bg-gradient-to-r from-black via-black to-black bg-opacity-60`}>
      <img
        className="w-full h-full object-cover border-content opacity-70"
        src={url}
        alt={title}
      />
      <div className="absolute bottom-0 px-1">
        {children}
      </div>
    </div>
  );
}

CardImg.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  base64Image: PropTypes.string,
  children: PropTypes.node,
};
CardImg.defaultProps = {
  base64Image: '',
  path: '',
  children: null,
};

export default CardImg;
