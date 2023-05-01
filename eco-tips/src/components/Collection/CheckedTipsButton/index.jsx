/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import slugify from 'react-slugify';
import { checkedCard } from '@/actions/collection';
import { askRefresh } from '@/actions/ui';

import ModalTemplate from '@/components/Tools/ModalTemplate';

function CheckedTipsButton({ ...card }) {
  // datas to buttons
  const { id, title } = card;
  // datas to route /admin/proposals/:slug
  const allCardDatas = card;
  // created slug for route /admin/proposals/:slug
  const urlParams = slugify(title);
  const [onShowModalState, setOnShowModalState] = useState(false);
  const { refresh, requestFinished } = useSelector((state) => state.ui);
  const [sentRequest, setSentRequest] = useState(false); // Ajoutez cette ligne
  const [validate, setValidate] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(checkedCard(id));
    setSentRequest(true); // Ajoutez cette ligne
  };

  useEffect(() => {
    if (requestFinished && sentRequest) {
      setOnShowModalState(true);
      setSentRequest(false);
    }
  }, [requestFinished, sentRequest]);

  // useEffect(() => {
  //   if (requestFinished && sentRequest && !onShowModalState) {
  //     dispatch(askRefresh());
  //   }
  // }, [requestFinished]);

  useEffect(() => {
    if (validate) {
      navigate(`/me/achievement/${urlParams}`, { state: { cardDatas: allCardDatas } });
    }
  }, [validate]);

  return (
    <>
      <div className="flex items-center place-content-evenly py-2">
        <button type="button" onClick={handleClick} className="py-1 px-2 font-bold blue-button blue-button:hover button-active active:animate-buttonAnimation">
          Valider
        </button>
      </div>
      <ModalTemplate
        textModal="Souhaitez-vous partager votre accomplissement 💪 ?"
        textValidate="Oui"
        textCancel="Non"
        colorButton="blue"
        onShowModal={onShowModalState}
        onModalClose={() => setOnShowModalState(false)}
        onValidate={() => setValidate(true)}
        mainSvg={
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
}
      />
    </>
  );
}
CheckedTipsButton.propTypes = {
  cardId: PropTypes.number.isRequired,
};

export default CheckedTipsButton;
