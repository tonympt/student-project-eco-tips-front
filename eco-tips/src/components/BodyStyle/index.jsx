import PropTypes from 'prop-types';
import imageFooter from '@/assets/images/footer.png';

function Bodystyle({ children }) {
  const date = new Date().getFullYear();
  return (
    // website background
    <div className="min-h-screen w-full relative overflow-hidden" style={{ backgroundColor: '#FBF5DF' }}>
      <div
        className="absolute inset-0 bottom-0 z-0"
        style={{ backgroundImage: `url(${imageFooter})`, backgroundSize: '40rem', backgroundRepeat: 'repeat-x', backgroundPosition: 'bottom', opacity: 0.6 }}
      />
      <div className="relative z-3 py-5">
        {children}
      </div>
      <footer className="w-full absolute bottom-0">
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
