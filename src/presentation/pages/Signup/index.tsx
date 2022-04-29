import Layout from "../../components/Layout";
import Form from "react-bootstrap/Form";
import { Button, Container, Col, Row } from "react-bootstrap";
import { useState } from "react";

export default function Signup() {
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <Layout>
      <Container>
        <Row className={"justify-content-center"}>
          <Col sm={4}>
            <Form validated={isFormValid}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  <p>{"We'll never share your email with anyone else."}</p>
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
