import Layout from "../../components/Layout";
import Form from "react-bootstrap/Form";
import { Button, Container, Col, Row } from "react-bootstrap";
import React, { ChangeEventHandler, useState } from "react";
import IPrivateUser from "../../../domain/models/User/PrivateUser";

export default function Signup() {
  const [formData, setFormData] = useState<IPrivateUser>();

  // function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
  //   console.log("id: ", event.target.id);
  //   console.log("name: ", event.target.name);
  //   console.log("value: ", event.target.value);
  //   const update: IPrivateUser = { ...formData };
  //   update["email"] = event.target.value;
  // }
  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault();
    console.log(formData);
    console.log(e);
  }

  return (
    <Layout>
      <Container>
        <Row className={"justify-content-center"}>
          <Col sm={6}>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(e);
                console.log(formData);
              }}
            >
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      profile: {
                        name: e.target.value,
                      },
                    });
                  }}
                  type="name"
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    });
                  }}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Street</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      profile: {
                        address: {
                          street: e.target.value,
                        },
                      },
                    });
                  }}
                />

                <Form.Label>Number</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      profile: {
                        address: {
                          number: parseInt(e.target.value),
                        },
                      },
                    });
                  }}
                />

                <Form.Label>ZIP</Form.Label>
                <Form.Control
                  id="zip"
                  type="zip"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      profile: {
                        address: {
                          zip: e.target.value,
                        },
                      },
                    });
                  }}
                />

                <Form.Label>City</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      profile: {
                        address: {
                          city: e.target.value,
                        },
                      },
                    });
                  }}
                />

                <Form.Label>State</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      profile: {
                        address: {
                          state: e.target.value,
                        },
                      },
                    });
                  }}
                />

                <Form.Label>Country</Form.Label>
                <Form.Control
                  id="country"
                  type="country"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      profile: {
                        address: {
                          country: e.target.value,
                        },
                      },
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="idDocument">
                <Form.Label>ID Document</Form.Label>
                <br></br>
                <Form.Check
                  inline
                  type="radio"
                  name="documentType"
                  label="CPF"
                  id="1"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      profile: {
                        documentTypology: 1,
                      },
                    });
                  }}
                />
                <Form.Check
                  inline
                  type="radio"
                  name="documentType"
                  label="CPNJ"
                  id="2"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      profile: {
                        documentTypology: 2,
                      },
                    });
                  }}
                />
                <br />
                <Form.Control
                  type="input"
                  name="documentId"
                  placeholder="Enter your ID number"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      profile: {
                        documentId: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
