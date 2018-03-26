import React from 'react';
import PropTypes from 'prop-types';

const PageNumbers = props => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.dataLength / props.dataPerPage); i += 1) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => (
    <button className="button-app" key={number} id={number} onClick={props.handleClickPage}>
      {number}
    </button>
  ));
  return (
    <div>
      <div id="button-pages-app">{renderPageNumbers}</div>
    </div>
  );
};

PageNumbers.defaultProps = {
  handleClickPage: null,
  dataLength: 0,
  dataPerPage: 0
};

PageNumbers.propTypes = {
  handleClickPage: PropTypes.func,
  dataLength: PropTypes.number,
  dataPerPage: PropTypes.number
};

export default PageNumbers;
