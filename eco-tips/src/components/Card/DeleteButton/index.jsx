import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ModalTemplate from '@/components/Tools/ModalTemplate';
import { deleteOneCard } from '@/actions/collection';
import { askRefresh } from '@/actions/ui';

function DeleteButton({ cardId }) {
  const [onShowModalState, setOnShowModalState] = useState(false);
  const [validate, setValidate] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setOnShowModalState(true);
  };

  useEffect(() => {
    if (validate) {
      dispatch(deleteOneCard(cardId));
      dispatch(askRefresh());
    }
  }, [validate]);
  return (
    <>
      <button onClick={handleClick} type="button" className=" absolute top-2 right-2 rounded shadow-lg p-1 bg-white button-active active:animate-buttonAnimation">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      </button>
      <ModalTemplate
        textModal="Êtes vous sûrs de vouloir supprimer la carte?"
        textValidate="Oui"
        textCancel="Non"
        colorButton="red"
        onShowModal={onShowModalState}
        onModalClose={() => setOnShowModalState(false)}
        onValidate={() => setValidate(true)}
      />
    </>
  );
}
DeleteButton.propTypes = {
  cardId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default DeleteButton;
