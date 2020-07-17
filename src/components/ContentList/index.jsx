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
  const { order, content } = state;
  const sortedContent = order === '' ? content : _.orderBy(content, 'title', order);
  const listItems = sortedContent.map((element) => (
    <Col
      key={element.id}
      xs={6}
      md={3}
      lg={2}
      style={{
        marginBottom: '1rem',
      }}
    >
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
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(ContentList);
