import Layout from "../../components/Layout";
import Form from "react-bootstrap/Form";
import { Button, Container, Col, Row } from "react-bootstrap";
import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import axios, { AxiosError, AxiosResponse } from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IUserFormValues {
  email?: string;
  name?: string;
  birth: string;
  phone: string;
  password?: string;
  passwordConfirmation?: string;
  street?: string;
  zip?: string;
  city?: string;
  state?: string;
  country?: string;
  documentId?: string;
  documentTypology?: number;
}

export default function Signup() {
  const [formValues, setFormValues] = useState<IUserFormValues>({
    email: "",
    name: "",
    birth: "",
    phone: "",
    password: "",
    passwordConfirmation: "",
    street: "",
    zip: "",
    state: "",
    city: "",
    documentId: "",
    documentTypology: 0,
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
      errorMessage: "O endereço de email está inválido.",
    },
    {
      id: 2,
      label: "Nome Completo",
      name: "name",
      type: "text",
      placeholder: "Nome Completo",
      required: true,
      pattern: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
      errorMessage: "Nome inválido. O nome deve conter de 3 a 60 letras.",
    },
    {
      id: 201,
      label: "Data de Nascimento",
      name: "birth",
      type: "date",
      required: true,
      placeholder: "mm/dd/yyyy",
      errorMessage: "É necessário fornecer uma data de nascimento.",
    },
    {
      id: 202,
      label: "Número de Telefone",
      name: "phone",
      type: "phone",
      placeholder: "Telefone",
      errorMessage: "É necessário fornecer um telefone válido.",
      pattern: "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$",
      required: true,
    },
    {
      id: 3,
      label: "Endereço",
      name: "street",
      type: "text",
      placeholder: "Linha de Endereço",
      errorMessage: "É necessário fornecer um endereço.",

      required: true,
    },
    {
      id: 5,
      label: "CEP",
      name: "zip",
      type: "text",
      placeholder: "CEP",
      errorMessage: "É necessário fornecer um código postal.",
      required: true,
    },
    {
      id: 6,
      label: "Cidade",
      name: "city",
      type: "text",
      placeholder: "Cidade",
      errorMessage: "É necessário fornecer uma cidade.",
      required: true,
    },
    {
      id: 7,
      label: "Estado",
      name: "state",
      type: "text",
      placeholder: "Estado",
      errorMessage: "É necessário fornecer um estado.",
      required: true,
    },
    {
      id: 200,
      type: "radio",
      label: "Tipo de Documento",
      name: "documentTypology",
      placeholder: "1",
      required: true,
      options: [
        { label: "CPF", value: 1 },
        { label: "CNPJ", value: 2 },
      ],
    },
    {
      id: 13,
      label: "Número do Documento",
      name: "documentId",
      type: "text",
      placeholder: "Insert your Document ID number",
      errorMessage: "É necessário preencher o documento.",
      required: true,
    },
    {
      id: 14,
      label: "Senha",
      name: "password",
      type: "password",
      placeholder: "Senha",
      errorMessage:
        "A senha deve conter de 6 a 12 letras, com ou sem números e caracteres especiais.",
      pattern: "^.{6,12}$",
      required: true,
    },
    {
      id: 15,
      label: "Confirme sua Senha",
      name: "passwordConfirmation",
      type: "password",
      placeholder: "Confirme sua Senha",
      errorMessage: "As senhas não correspondem.",
      pattern: formValues.password,
      required: true,
    },
  ];

  async function handleSubmit(e: React.SyntheticEvent): Promise<void> {
    e.preventDefault();

    const newUserJSON = {
      nome: formValues.name,
      email: formValues.email,
      senha: formValues.password,
      data_nasc: formValues.birth,
      telefone: formValues.phone,
      endereco: `${formValues.street}, ${formValues.city} - ${formValues.state}`,
      cpf_cnpj: formValues.documentId,
      idType: formValues.documentTypology,
    };

    console.log(newUserJSON);

    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URI + "/v1/users",
        newUserJSON
      );

      if (response.status === 200) {
        toast.success("Registrado com sucesso! Você pode logar agora.");
        window.scrollTo(0, 0);
        navigate("/", { replace: true });
      }
    } catch (err: any) {
      if (err.response.status === 500) {
        toast.error("O endereço de email fornecido já se encontra registrado.");
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
              <h3>Registro</h3>
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
                  Registrar
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
