import PropTypes from 'prop-types';

function CardDescription({ description, isExpanded }) {
  const styleDescriptionExpanded = isExpanded ? 'line-clamp-none text-sm' : 'line-clamp-3 text-xs';

  return (
    <p className={`text-gray-700 mb-2 ${styleDescriptionExpanded}`}>
      {description}
    </p>
  );
}

CardDescription.propTypes = {
  description: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
};

export default CardDescription;
