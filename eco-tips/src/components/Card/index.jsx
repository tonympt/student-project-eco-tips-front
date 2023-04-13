/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// react and redux hooks

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
  return (
    <div className="relative">
      <div
        className="bg-white rounded shadow-md hover:shadow-lg sm:w-full "
      >
        <CardImg imageSrc={imageSrc} title={title} />
        <div className="p-4">
          <CardTitle title={title} />
          <CardTags tags={tags} />
          <CardRating ratings={ratings} />
          <CardDescription description={description} />
          <CardAuthor author={author} />
          {validated && <CheckIcon />}
        </div>
      </div>
    </div>
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
