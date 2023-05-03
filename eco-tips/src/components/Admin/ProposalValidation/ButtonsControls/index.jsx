/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
// Hooks
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Browser router Dom
import { Link } from 'react-router-dom';
// Module
import slugify from 'react-slugify';
// action creator
import { deleteProposal, addProposalToCollection } from '@/actions/admin';

// Components
import Button from '@/components/Tools/ButtonTemplate';
import ModalTemplate from '@/components/Tools/ModalTemplate';

function ButtonsControls({ card }) {
  // === DATAS ===
  // datas to buttons
  const { id, title } = card;
  // datas to route /admin/proposals/:slug
  const allCardDatas = card;
  // created slug for route /admin/proposals/:slug
  const urlParams = slugify(title);
  // === STATE ===
  // State to custom modal
  const [currentAction, setCurrentAction] = useState(null);
  const [curentColorButton, setCurentColorButton] = useState('');
  const [modalText, setModalText] = useState('');
  const [onShowModalState, setOnShowModalState] = useState(false);
  // State to validate fetch
  const [validate, setValidate] = useState(false);
  // Hooks
  const dispatch = useDispatch();
  useEffect(() => {
    if (validate) {
      if (currentAction === 'delete') {
        dispatch(deleteProposal(id));
      } else if (currentAction === 'validate') {
        dispatch(addProposalToCollection(id));
      }
      setCurrentAction(null);
    }
  }, [validate]);

  const handleDelete = () => {
    setModalText('Êtes-vous sûr de vouloir supprimer la carte ?');
    setCurrentAction('delete');
    setCurentColorButton('red');
    setOnShowModalState(true);
  };

  const handleValidation = () => {
    setModalText('Êtes-vous sûr de vouloir valider la carte ?');
    setCurentColorButton('green');
    setCurrentAction('validate');
    setOnShowModalState(true);
  };

  return (
    <div className="flex w-full content-center gap-3 place-content-evenly m-2">
      <ModalTemplate
        textModal={modalText}
        colorButton={curentColorButton}
        textValidate="Oui"
        textCancel="Non"
        onShowModal={onShowModalState}
        onModalClose={() => setOnShowModalState(false)}
        onValidate={() => setValidate(true)}
      />
      <Button
        type="button"
        color="green"
        padding="p-1"
        onClick={handleValidation}
      >
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bold">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </Button>
      <Link
        to={`/admin/proposals/${urlParams}`}
        state={{ cardDatas: allCardDatas }}
      >
        <Button
          type="button"
          color="blue"
          padding="p-1"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
          </svg>
        </Button>
      </Link>
      <Button
        type="button"
        color="red"
        padding="p-1"
        onClick={handleDelete}
      >
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bold">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Button>
    </div>
  );
}

ButtonsControls.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ButtonsControls;
