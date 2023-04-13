import PropTypes from 'prop-types';

function CardRating({ ratings }) {
  // functionality to create notation spans
  const renderRatingSpans = (ratingValue, ratingType) => {
    const spans = [];
    for (let i = 1; i <= 5; i++) {
      spans.push(
        <span
          key={`${ratingType}-${i}`}
          className={`w-4 h-2 rounded ${i <= ratingValue ? 'bg-amber-300' : 'bg-stone-300'}`}
        />,
      );
    }
    return spans;
  };

  return (
    <div className="flex flex-col mb-2">
      <div className="flex items-center space-x-2">
        <span className="text-xl">💰</span>
        <div className="flex flex-row gap-1">
          {renderRatingSpans(ratings.economy, 'economy')}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-xl">🍃</span>
        <div className="flex flex-row gap-1">
          {renderRatingSpans(ratings.ecology, 'ecology')}
        </div>
      </div>
    </div>
  );
}

CardRating.propTypes = {
  ratings: PropTypes.shape({
    economy: PropTypes.number.isRequired,
    ecology: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardRating;
