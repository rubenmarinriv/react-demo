import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import {
  Container, Row, Col, Card, Form, Button,
} from 'react-bootstrap';

/*
 * Users data
 *
 * If we had a backend we would make a request to the server
 * using fetch or axios to login and we would handle possible errors
 * using an Alert component
 */
import users from '../../data/users.json';

const Login = (props) => {
  const history = useHistory();
  let emailInput = null; // Email input ref
  let passwordInput = null; // Password input ref

  // Handle login form submit
  const handleSubmit = (e) => {
    const { login } = props;
    const user = _.find(users, { email: emailInput.value });

    if (typeof user !== 'undefined'
    && user.password === passwordInput.value) {
      login(() => {
        // If the login is successful, redirect user to Home
        history.replace('/');
      });
    }

    // Prevent default behaviour of submit event
    e.preventDefault();
  };

  return (
    <div className="Login">
      <Container>
        <Row>
          <Col className="m-auto" sm={8} md={6} lg={5} xl={4}>
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
                  <Button variant="primary" type="submit">Login</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Validate data types
Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
