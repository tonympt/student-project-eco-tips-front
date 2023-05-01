/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
// Hooks
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Components
import Button from '@/components/Tools/ButtonTemplate';
import ModalTemplate from '@/components/Tools/ModalTemplate';
import { deleteTag, updateTag } from '@/actions/admin';

function ButtonsUpdate({ id, color, name }) {
  // === DATAS ===
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
        dispatch(deleteTag(id));
      } else if (currentAction === 'validate') {
        const formValues = {
          name,
          color,
        };
        dispatch(updateTag(formValues, id));
        setValidate(false);
      }
      setCurrentAction(null);
    }
  }, [validate]);

  const handleDelete = () => {
    setModalText('Êtes-vous sûr de vouloir supprimer la catégorie ?');
    setCurrentAction('delete');
    setCurentColorButton('red');
    setOnShowModalState(true);
  };

  const handleValidation = () => {
    setModalText('Êtes-vous sûr de vouloir modifier la catégorie ?');
    setCurentColorButton('green');
    setCurrentAction('validate');
    setOnShowModalState(true);
  };

  return (
    <div className="flex content-center gap-6 place-content-evenly m-2">
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
        width="w-10"
        type="button"
        color="green"
        padding="p-1"
        onClick={handleValidation}
      >
        <svg viewBox="-2 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
          <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
        </svg>
      </Button>
      <Button
        width="w-10"
        type="button"
        color="red"
        padding="p-1"
        onClick={handleDelete}
      >
        <svg fill="none" viewBox=" -3 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-bold">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Button>
    </div>
  );
}

ButtonsUpdate.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ButtonsUpdate;
