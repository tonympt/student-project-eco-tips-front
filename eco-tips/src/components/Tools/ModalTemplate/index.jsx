/* eslint-disable max-len */
import { useRef, useEffect, useState } from 'react';
import { Modal } from 'flowbite';
import PropTypes from 'prop-types';

function ModalTemplate({ textModal, textValidate, textCancel, colorButton, onShowModal, onModalClose, onValidate, mainSvg }) {
  // Exemple to props component
  //         <ModalTemplate
  //         textModal="Here Text Modal"
  //         textValidate="Yes"
  //         textCancel="No"
  //          Define state yourOnShowModalState and Validate
  //         onShowModal={yourOnShowModalState}
  //         onModalClose={() => setYourOnShowModalState(false)}
  //          onValidate={()=> setValidate(true)}
  //       />
  //       />
  const modalRef = useRef();
  const [modal, setModal] = useState();

  useEffect(() => {
    const modalEl = modalRef.current;
    const options = {
      placement: 'center',
      backdrop: 'dynamic',
      backdropClasses: 'fixed inset-0 z-60',
      closable: true,
      onHide: () => {
        onModalClose();
        if (modal) {
          modal.hide();
        }
      },
    };
    const modalInstance = new Modal(modalEl, options);
    setModal(modalInstance);
  }, []);

  useEffect(() => {
    if (onShowModal && modal) {
      modal.show();
    }
  }, [onShowModal, modal]);

  const onClose = () => {
    onModalClose();
    modal.hide();
  };

  return (
    <div
      ref={modalRef}
      tabIndex="-1"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full z-50"
    >
      <div className="relative w-full max-w-md max-h-full shadow-lg border-indigo-500/75">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">

            <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {' '}
              {mainSvg || (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />)}
              {' '}
            </svg>

            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{textModal}</h3>
            <button
              data-modal-hide="popup-modal"
              onClick={() => { onValidate(true); onClose(); }}
              type="button"
              className={`text-white flex gap-1 bg-${colorButton}-600 hover:bg-${colorButton}-800 focus:ring-4 focus:outline-none focus:ring-${colorButton}-300 dark:focus:ring-${colorButton}-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2`}
            >
              {textValidate}
            </button>
            <button onClick={onClose} data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">{textCancel}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalTemplate.propTypes = {
  textModal: PropTypes.string.isRequired,
  textValidate: PropTypes.string.isRequired,
  textCancel: PropTypes.string.isRequired,
  onShowModal: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  onValidate: PropTypes.func.isRequired,
  colorButton: PropTypes.string,
  mainSvg: PropTypes.node,
};
ModalTemplate.defaultProps = {
  mainSvg: null,
  colorButton: 'green',
};

export default ModalTemplate;
