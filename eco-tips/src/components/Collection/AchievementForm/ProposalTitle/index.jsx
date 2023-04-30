import PropTypes from 'prop-types';
import { useState } from 'react';

function ProposalTitle({ author, title, onTitle }) {
  const titleAchievement = `🏆 - Accomplissement de ${author} de l'écogeste : "${title}"`;
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
