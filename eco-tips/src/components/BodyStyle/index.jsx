import PropTypes from 'prop-types';
import imageFooter from '@/assets/images/footer.png';

function Bodystyle({ children }) {
  const date = new Date().getFullYear();
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#FBF5DF' }}>
      <div
        className="absolute inset-0 bottom-0 z-0"
        style={{ backgroundImage: `url(${imageFooter})`, backgroundSize: '40rem', backgroundRepeat: 'repeat-x', backgroundPosition: 'bottom', opacity: 0.6 }}
      />
      <div className="relative z-3 min-h-screen py-12">
        {children}
      </div>
      <footer className="w-screen absolute bottom-0">
        <p className="text-center text-l text-white ">
          @Eco-Tips -
          {date}
        </p>
      </footer>
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
