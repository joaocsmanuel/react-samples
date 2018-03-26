import React from 'react';
import PropTypes from 'prop-types';

const Card = props => (
  <div className="card">
    <a href={props.url}>
      <img src={props.thumbnailUrl} alt="thumbnail" />
    </a>
    <p className="title-card">{props.title}</p>
  </div>
);

Card.defaultProps = {
  url: '',
  thumbnailUrl: '',
  title: ''
};

Card.propTypes = {
  url: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string
};

export default Card;
