import PropTypes from 'prop-types';

function CostCard({ cost }) {
  return (
    <div className="absolute top-2 right-2">
      <div className="inline-flex items-baseline p-1 bg-white rounded shadow-lg">
        <span className="text-sm font-bold">{cost}</span>
        <div className="pl-1 font-normal text-l">🪙</div>
      </div>
    </div>
  );
}

CostCard.propTypes = {
  cost: PropTypes.number.isRequired,
};

export default CostCard;
