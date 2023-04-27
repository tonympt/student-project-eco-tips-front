/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getRandomCard, saveRandomCardCollection } from '@/actions/collection';

import Card from '@/components/Card';
import Spinner from '@/components/Spinner';
import Buttons from '@/components/Collection/AddCard/Buttons';
import DelayButtons from '@/components/Collection/AddCard/DelayButtons';
import SuccessNotifications from '@/components/SuccessNotifications';

function AddCard() {
  // handle fetch random card
  const dispatch = useDispatch();
  const { randomCard } = useSelector((state) => state.collection);
  // state
  const [loading, setLoading] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    dispatch(getRandomCard());
  }, []);

  useEffect(() => {
    if (Object.keys(randomCard).length > 0) {
      setLoading(false);
      setFormValues((prevFormData) => ({ ...prevFormData, cardId: randomCard.id }));
    }
  }, [randomCard]);
  // handle step
  const stateStep1 = (isValid) => {
    if (isValid) {
      setStep2(true);
    } else {
      dispatch(getRandomCard());
      setLoading(true);
    }
  };

  const handleDateStep2 = (expirationDate) => {
    setFormValues((prevFormData) => ({ ...prevFormData, expirationDate }));
    setStep3(true);
  };

  const stateStep3 = (isValid) => {
    if (isValid) {
      dispatch(saveRandomCardCollection(formValues));
    } else {
      dispatch(getRandomCard());
      setLoading(true);
    }
    setStep2(false);
    setStep3(false);
  };

  return (
    <div className="px-4 m-12 w-full max-w-sm bg-white mx-auto rounded-md shadow-md pt-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold mb-6 text-center">Ajouter une carte :</h1>
        <SuccessNotifications />
        {loading ? (
          <Spinner />
        ) : (
          <Card {...randomCard}>
            {step2 ? (
              <DelayButtons handleDate={handleDateStep2} />
            ) : (
              <Buttons stateStep={stateStep1} />
            )}
            {step3 && <Buttons stateStep={stateStep3} />}
          </Card>
        )}
      </div>
      <div>
        <Link to="/collection">
          <div className="flex gap-1 text-sm hover:text-green-600 items-center pt-5 pb-1">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            <p>Retourner à ma collection</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AddCard;
