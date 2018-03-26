import React from 'react';
import PropTypes from 'prop-types';

const SortButton = props => (
  <div id="button-sort-app">
    <button className="button-app" onClick={props.handleSort}>
      Title
      {props.order ? ' \uD83E\uDC53' : ' \uD83E\uDC51'}
    </button>
  </div>
);

SortButton.defaultProps = {
  handleSort: null,
  order: true
};

SortButton.propTypes = {
  handleSort: PropTypes.func,
  order: PropTypes.bool
};

export default SortButton;
