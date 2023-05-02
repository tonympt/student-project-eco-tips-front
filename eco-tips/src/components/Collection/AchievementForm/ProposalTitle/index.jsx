import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function ProposalTitle({ author, title, onTitle }) {
  const { firstname, lastname } = useSelector((state) => state.user);
  const titleAchievement = `Accomplissement de ${firstname} ${lastname} : ${title}`;
  onTitle(titleAchievement);
  return (
    <div className="p-2 border border-opacity-50 border-gray-400 rounded">
      <div
        id="title"
        className="w-full px-2 py-1 border-none outline-none bg-transparent text-gray-900 text-sm"
        contentEditable={false}
      >
        <h2>
          {titleAchievement}
        </h2>
      </div>
    </div>
  );
}
ProposalTitle.propTypes = {
  onTitle: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default ProposalTitle;
