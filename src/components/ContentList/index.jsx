import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';

const mapStateToProps = (state) => ({ state });

function ContentList(props) {
  /*
   * Get movie and series data from Redux store
   * and create a list using them
   */
  const { state } = props;
  const { order, search, content } = state;
  // Apply order
  const sortedContent = order === '' ? content : _.orderBy(content, 'title', order);
  // Apply search
  const searchedContent = search === '' ? sortedContent
    : _.filter(sortedContent, (element) => (
      element.title.toLowerCase().includes(search.toLowerCase())
      || element.summary.toLowerCase().includes(search.toLowerCase())
    ));
  const listItems = searchedContent.map((element) => (
    <Col key={element.id} xs={6} md={3} lg={2} className="mb-3">
      <Media>
        <img
          key={element.id}
          width="100%"
          height="auto"
          src={element.img}
          alt={element.title}
        />
      </Media>
    </Col>
  ));

  return (
    <Row className="ContentList">
      {listItems}
    </Row>
  );
}

ContentList.propTypes = {
  state: PropTypes.shape({
    order: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(ContentList);
