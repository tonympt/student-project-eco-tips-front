import PropTypes from 'prop-types';
// Hooks
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Components
import Button from '@/components/Tools/ButtonTemplate';
import ModalTemplate from '@/components/Tools/ModalTemplate';
import { addTag } from '@/actions/admin';

function ButtonsAdd({ color, name, onReset }) {
  // === STATE ===
  // State to custom modal
  const [curentColorButton, setCurentColorButton] = useState('');
  const [modalText, setModalText] = useState('');
  const [onShowModalState, setOnShowModalState] = useState(false);
  // State to validate fetch
  const [validate, setValidate] = useState(false);
  // Hooks
  const dispatch = useDispatch();
  useEffect(() => {
    if (validate) {
      const formValues = {
        name,
        color,
      };
      dispatch(addTag(formValues));
      setValidate(false);
    }
  }, [validate]);

  const handleDelete = () => {
    onReset();
    setValidate(false);
  };

  const handleValidation = () => {
    setModalText('Êtes-vous sûr de vouloir modifier la catégorie ?');
    setCurentColorButton('green');
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-3 0 24 24" strokeWidth={1.5} stroke="currentColor" className="font-bold w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </Button>
      <Button
        width="w-10"
        type="button"
        color="blue"
        padding="p-1"
        onClick={handleDelete}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-3 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      </Button>
    </div>
  );
}

ButtonsAdd.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default ButtonsAdd;
