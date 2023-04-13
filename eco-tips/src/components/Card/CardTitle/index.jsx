import PropTypes from 'prop-types';

function CardTitle({ title, isExpanded }) {
  const styleTitleExpanded = isExpanded ? 'text-xl' : 'text-base';

  return (
    <h2 className={`font-bold mb-2 ${styleTitleExpanded}`}>
      {title}
    </h2>
  );
}

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
};

export default CardTitle;
