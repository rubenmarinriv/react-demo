import React from 'react';
import {
  Container, Row, Col, Card, Form, Button,
} from 'react-bootstrap';

function Login() {
  // Email input ref
  let emailInput = null;
  // Password input ref
  let passwordInput = null;

  const handleSubmit = (e) => {
    console.log(emailInput.value);
    console.log(passwordInput.value);

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

export default Login;
