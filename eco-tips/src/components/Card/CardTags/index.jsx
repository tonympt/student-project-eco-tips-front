import PropTypes from 'prop-types';

function CardTags({ tags, isExpanded }) {
  const styleTagExpanded = isExpanded ? 'text-sm' : 'text-xs';

  return (
    <div className="flex flex-wrap gap-1 mb-2">
      {tags.map((tag) => (
        <span key={tag} className={`bg-gray-200 text-gray-700 px-2 py-1 rounded ${styleTagExpanded}`}>
          {tag}
        </span>
      ))}
    </div>
  );
}

CardTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  isExpanded: PropTypes.bool.isRequired,
};

export default CardTags;
