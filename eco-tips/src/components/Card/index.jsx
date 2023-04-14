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

function Card({ imageSrc, title, tags, description, author, ratings, validated }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const cardRef = useRef();

  const styleCardExpanded = isExpanded
    ? 'z-40 fixed top-1/2 left-1/2 animate-expand cursor-auto w-full md:w-1/4'
    : 'md:w-48 cursor-pointer';
  const styleValidated = validated && 'border-4 border-green-600';

  const handleClick = () => {
    setIsExpanded(true);
    setShowBackground(true);
  };

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
          className="z-10 fixed inset-0 bg-black bg-opacity-20 backdrop-blur-md"
          type="button"
          aria-label="Outside click handler"
          onClick={handleOutsideClick}
        />
      )}
      <div className="relative" aria-label="Card container">
        <div
          ref={cardRef}
          className={`bg-white rounded shadow-md hover:shadow-lg sm:w-full ${styleCardExpanded} ${styleValidated}`}
          onClick={handleClick}
        >
          <CardImg imageSrc={imageSrc} title={title} />
          <div className="p-4">
            <CardTitle title={title} isExpanded={isExpanded} />
            <CardTags tags={tags} />
            <CardRating ratings={ratings} />
            <CardDescription description={description} isExpanded={isExpanded} />
            <CardAuthor author={author} />
            {validated && <CheckIcon />}
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  ratings: PropTypes.arrayOf(PropTypes.number).isRequired,
  validated: PropTypes.bool.isRequired,
};

export default Card;
