import PropTypes from 'prop-types';

function CardTags({ tags, isExpanded }) {
  const styleTagExpanded = isExpanded ? 'text-sm' : 'text-xs';
  return (
    <div className="flex flex-wrap gap-1 mb-2">
      {tags.map((tag) => (
        <span
          key={tag.name}
          className={`text-white px-2 py-1 rounded ${styleTagExpanded}`}
          style={{ backgroundColor: tag.color }}
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
}

CardTags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isExpanded: PropTypes.bool.isRequired,
};

export default CardTags;
