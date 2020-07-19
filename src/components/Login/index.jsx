import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Container, Row, Col, Card, Form, Button,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

/*
 * Users data
 *
 * If we had a backend we would make a request to the server
 * to make the auth process
 */
import users from '../../data/users.json';

function Login(props) {
  const history = useHistory();

  // Email input ref
  let emailInput = null;
  // Password input ref
  let passwordInput = null;

  const handleSubmit = (e) => {
    const { login } = props;
    const user = _.find(users, { email: emailInput.value });

    if (typeof user !== 'undefined'
    && user.password === passwordInput.value) {
      login(() => {
        history.push('/');
      });
    }

    e.preventDefault();
  };

  return (
    <div className="Login">
      <Container>
        <Row>
          <Col
            className="m-auto"
            sm={8}
            md={6}
            lg={5}
            xl={4}
          >
            <Card>
              <Card.Body>
                <Card.Title>Login</Card.Title>
                <Form onSubmit={(e) => handleSubmit(e)}>
                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      required
                      ref={(input) => { emailInput = input; }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                      ref={(input) => { passwordInput = input; }}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
