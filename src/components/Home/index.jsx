import React from 'react';
import { Container } from 'react-bootstrap';

// Components
import Filters from '../Filters';
import Content from '../Content';

function Home() {
  return (
    <div className="Home">
      <Container className="App mt-3">
        <Filters />
        <Content />
      </Container>
    </div>
  );
}

export default Home;
