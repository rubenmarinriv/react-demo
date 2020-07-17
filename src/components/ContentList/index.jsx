import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ state });

function ContentList(props) {
  /*
   * Get movie and series data from Redux store
   * and create a list using them
   */
  const { state } = props;
  const listItems = state.map((element) => (
    <div key={element.id}>
      <img src={element.img} alt={element.title} />
    </div>
  ));

  return (
    <div className="ContentList">
      {listItems}
    </div>
  );
}

ContentList.propTypes = {
  state: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ContentList);
