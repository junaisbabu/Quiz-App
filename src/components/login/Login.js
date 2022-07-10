import "./login.css";
import {useNavigate} from 'react-router-dom'
import { Container, Card, Col, Form } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/quiz');
};

  return (
    <>
      <Container className="login-container">
          <Col xs={8} sm={8} md={7} lg={3} >
            <Card className="form-container">
              <Card.Header className="p-3 form-header">
                <h1>Log In</h1>
              </Card.Header>
              <Card.Body className="form-body">
                <Form onSubmit={handleSubmit} >
                  <Form.Group>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      required
                    />
                  </Form.Group>
                  
                  <Form.Group>
                  <Form.Control
                    className="mt-3 login-btn"
                    variant="primary"
                    type="submit"
                    value="Log In"
                  />
                    
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
      </Container>
    </>
  );
}

export default Login;
