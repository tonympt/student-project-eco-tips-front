import PropTypes from 'prop-types';

function Bodystyle({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen px-4 py-3 ">
      {children}
    </div>
  );
}

Bodystyle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Bodystyle;
