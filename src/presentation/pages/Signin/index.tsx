import Layout from "../../components/Layout";
import Form from "react-bootstrap/Form";
import { Button, Container, Col, Row } from "react-bootstrap";
import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import axios, { AxiosError, AxiosResponse } from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";
import { useAuth } from "../../components/Hooks/UseAuth";

interface IUserFormValues {
  email?: string;
  password?: string;
}

export default function Signin() {
  const { doLogin } = useAuth();
  const [formValues, setFormValues] = useState<IUserFormValues>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "your@email.com",
      required: true,
    },
    {
      id: 2,
      label: "Senha",
      name: "password",
      type: "password",
      placeholder: "Senha",
      required: true,
    },
  ];

  async function handleSubmit(e: React.SyntheticEvent): Promise<void> {
    e.preventDefault();

    const formEntityJSON = {
      email: formValues.email,
      senha: formValues.password,
    };

    console.log(formEntityJSON);

    try {
      const response = await axios.post(
        "http://localhost:8080/v1/auth/signin",
        formEntityJSON
      );

      if (response.status === 200) {
        toast.success("Logado com sucesso!");
        console.log(response);

        const { token, nome, email } = response.data;
        doLogin(token, nome, email);
        navigate("/", { replace: true });
      }

      //
    } catch (err: any) {
      if (err.response.status === 500) {
        toast.error("O endereço de email ou senha encontram-se inválidos.");
      } else {
        toast.error(
          "Os dados fornecidos são inválidos. Verifique os dados inseridos."
        );
      }
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(`${e.target.name} changed to [${e.target.value}]`);
  }

  return (
    <>
      <Layout>
        <Container>
          <Row className={"justify-content-center"}>
            <Col sm={6}>
              <h3>Login</h3>
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
                  Logar
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
