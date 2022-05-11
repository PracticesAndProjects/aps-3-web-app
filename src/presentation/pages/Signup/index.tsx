import Layout from "../../components/Layout";
import Form from "react-bootstrap/Form";
import { Button, Container, Col, Row } from "react-bootstrap";
import React, { ChangeEventHandler, useRef, useState } from "react";
import IPrivateUser from "../../../domain/models/User/PrivateUser";
import FormInput from "../../components/FormInput";

interface IUserFormValues {
  email?: string;
  name?: string;
  password?: string;
  passwordConfirmation?: string;
  street?: string;
  number?: number;
  zip?: string;
  city?: string;
  state?: string;
  country?: string;
  documentId?: string;
  documentTypology?: number;
}

export default function Signup() {
  const [userData, setUserData] = useState<IPrivateUser>();
  const [formValues, setFormValues] = useState<IUserFormValues>({
    email: "",
    name: "",
    password: "",
    passwordConfirmation: "",
    street: "",
    number: 0,
    zip: "",
    state: "",
    city: "",
    country: "",
    documentId: "",
    documentTypology: 0,
  });

  const inputs = [
    {
      id: 1,
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      id: 2,
      label: "Full Name",
      name: "name",
      type: "text",
      placeholder: "Full Name",
    },
    {
      id: 3,
      label: "Street Address",
      name: "street",
      type: "text",
      placeholder: "Address Line 1",
    },
    {
      id: 4,
      label: "Number",
      name: "number",
      type: "number",
      placeholder: "",
    },
    {
      id: 5,
      label: "Postal Code",
      name: "zip",
      type: "text",
      placeholder: "",
    },
    {
      id: 6,
      label: "City",
      name: "city",
      type: "text",
      placeholder: "",
    },
    {
      id: 7,
      label: "State/Province",
      name: "state",
      type: "text",
      placeholder: "",
    },
    {
      id: 8,
      label: "Country",
      name: "country",
      type: "text",
      placeholder: "Country",
    },
    {
      id: 10,
      label: "ID Type",
      name: "documentTypology",
      type: "radio",
      placeholder: "CPF",
    },
    {
      id: 11,
      name: "documentTypology",
      type: "radio",
      placeholder: "CNPJ",
    },
    {
      id: 12,
      label: "Document ID",
      name: "documentId",
      type: "text",
      placeholder: "Insert your Document ID number",
    },
    {
      id: 13,
      label: "Create a password",
      name: "password",
      type: "password",
      placeholder: "Password",
    },
    {
      id: 14,
      label: "Confirm your password",
      name: "passwordConfirmation",
      type: "password",
      placeholder: "Confirm Password",
    },
  ];

  function handleSubmit(e: React.SyntheticEvent): void {
    e.preventDefault();
    console.log(formValues);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  return (
    <Layout>
      <Container>
        <Row className={"justify-content-center"}>
          <Col sm={6}>
            <Form onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={(formValues as any)[input.name]}
                  handleChange={handleChange}
                />
              ))}

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
