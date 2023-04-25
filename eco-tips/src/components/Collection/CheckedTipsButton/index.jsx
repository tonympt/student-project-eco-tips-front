/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { checkedCard } from '@/actions/collection';

function CheckedTipsButton({ cardId }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkedCard(cardId));
  };
  return (
    <div className="flex items-center place-content-evenly py-2">
      <button type="button" onClick={handleClick} className="py-1 px-2 font-bold blue-button blue-button:hover button-active active:animate-buttonAnimation">
        Valider
      </button>
    </div>
  );
}
CheckedTipsButton.propTypes = {
  cardId: PropTypes.number.isRequired,
};

export default CheckedTipsButton;
