/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getRandomCard, saveRandomCardCollection } from '@/actions/collection';

import Card from '@/components/Card';
import Spinner from '@/components/Spinner';
import ButtonsStep1 from '@/components/Collection/AddCard/ButtonsStep1';
import ButtonsStep3 from '@/components/Collection/AddCard/ButtonsStep3';
import DelayButtons from '@/components/Collection/AddCard/DelayButtons';

function AddCard({ resetAddCard }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { randomCard } = useSelector((state) => state.collection);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [formValues, setFormValues] = useState({});

  const stateStep1 = (isValid) => {
    if (isValid) {
      setStep2(true);
    } else {
      resetAddCard(false);
    }
  };
  const stateStep3 = () => {
    resetAddCard(false);
  };
  const handleStep2 = (expirationDate) => {
    setFormValues((prevFormData) => ({ ...prevFormData, expirationDate }));
    setStep3(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(saveRandomCardCollection(formValues));
    resetAddCard(false);
  };

  useEffect(() => {
    dispatch(getRandomCard());
  }, []);
  useEffect(() => {
    if (Object.keys(randomCard).length > 0) {
      setLoading(false);
      setFormValues((prevFormData) => ({ ...prevFormData, cardId: randomCard.id }));
    }
  }, [randomCard]);

  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
        <Spinner />
      ) : (
        <Card {...randomCard}>
          {step2 ? (
            <DelayButtons handleDate={handleStep2} />
          ) : (
            <ButtonsStep1 stateStep1={stateStep1} />
          )}
          {step3 && <ButtonsStep3 stateStep3={stateStep3} />}
        </Card>
      )}
    </form>
  );
}

AddCard.propTypes = {
  resetAddCard: PropTypes.func.isRequired,
};

export default AddCard;
