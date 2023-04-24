/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

// react and redux hooks
import { useState, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
// components
import CardTitle from './CardTitle';
import CardTags from './CardTags';
import CardRating from './CardRating';
import CardDescription from './CardDescription';
import CardAuthor from './CardAuthor';
import CardImg from './CardImg';
import CheckIcon from './CheckIcon';
import DeleteButton from './DeleteButton';

function Card({ image,
  title,
  tags,
  description,
  author,
  environmental_rating,
  economic_rating,
  state,
  delete: isDeleteEnabled,
  id,
  children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const cardRef = useRef();
  const styleCardExpanded = isExpanded
    ? 'z-40 fixed top-1/2 left-1/2 w-full animate-expand cursor-auto md:w-1/3'
    : 'md:w-full sm:w-full';
  const styleValidated = state && 'border-4 border-green-600';
  const handleClick = () => {
    setIsExpanded(true);
    setShowBackground(true);
  };
  console.log(`le chemin dans les cartes collection ${image}`);
  const handleOutsideClick = (event) => {
    // Check if the clicked element is not a descendant of cardRef and isExpanded=true
    if (!cardRef.current.contains(event.target) && isExpanded) {
      setIsExpanded(false);
      setShowBackground(false);
    }
  };

  useEffect(() => {
    // listen click on window when isExpanded=true
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isExpanded]);
  return (
    <>
      {showBackground && (
        <button
          className="z-40 fixed inset-0 bg-black bg-opacity-20 backdrop-blur-md"
          type="button"
          aria-label="Outside click handler"
          onClick={handleOutsideClick}
        />
      )}
      <div
        className={`${styleCardExpanded}`}
        aria-label="Card container"
        id={`${id}`}
        ref={cardRef}
      >
        <div
          className={`bg-white relative rounded shadow-lg hover:shadow-lg ${styleValidated}`}
        >
          {isExpanded ? (
            <button
              type="button"
              onClick={() => { setIsExpanded(false); setShowBackground(false); }}
              className="absolute top-2 left-2 rounded shadow-lg p-1 bg-white button-active active:animate-buttonAnimation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
              </svg>

            </button>
          ) : (
            <button
              type="button"
              onClick={handleClick}
              className="absolute top-2 left-2 rounded shadow-lg p-1 bg-white button-active active:animate-buttonAnimation"
            >
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
              </svg>
            </button>
          )}
          <CardImg path={image} title={title} />
          <div className="p-4">
            <CardTitle title={title} isExpanded={isExpanded} />
            <CardTags tags={tags} isExpanded={isExpanded} />
            <CardRating environmental={environmental_rating} economic={economic_rating} />
            <CardDescription description={description} isExpanded={isExpanded} />
            <CardAuthor author={author} />
            {state && <CheckIcon />}
            {isDeleteEnabled && <DeleteButton cardId={id} />}
          </div>
        </div>
        {children}
      </div>
    </>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  environmental_rating: PropTypes.number.isRequired,
  economic_rating: PropTypes.number.isRequired,
  state: PropTypes.bool,
  children: PropTypes.node,
  delete: PropTypes.bool,
  id: PropTypes.number.isRequired,
};
Card.defaultProps = {
  children: null,
  state: false,
  delete: false,
};

export default Card;
