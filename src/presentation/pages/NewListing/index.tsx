import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormInput from "../../components/FormInput";
import { useAuth } from "../../components/Hooks/UseAuth";
import Layout from "../../components/Layout";

interface IFormValues {
  titulo?: string;
  img_url?: string;
  product_price?: number;
  delivery_median_price?: number;
  weight_dimension?: number;
  volume_dimension?: number;
  material_type?: string;
}

export default function NewListing() {
  const { getProfile, getToken } = useAuth();
  const [formValues, setFormValues] = useState<IFormValues | null>({
    titulo: "",
    img_url: "placeholder",
    material_type: "",
    product_price: 0,
    delivery_median_price: 0,
    volume_dimension: 0,
    weight_dimension: 0,
  });

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      label: "Título do Anúncio",
      name: "titulo",
      type: "text",
      placeholder: "Seu anúncio chamativo e importante aqui.",
      required: true,
    },
    {
      id: 27,
      label: "Classificação do Material",
      name: "material_type",
      type: "string",
      placeholder: "Metal, Plástico, Papel...",
      required: true,
    },
    {
      id: 26,
      label: "Preço do Lote",
      name: "product_price",
      type: "number",
      min: "1",
      placeholder: "R$ 99,00",
      required: true,
    },
    {
      id: 25,
      label: "Preço do Frete",
      name: "delivery_median_price",
      type: "number",
      placeholder: "R$ 99,00",
      required: true,
    },
    {
      id: 24,
      label: "Volume do Lote (mm³)",
      name: "volume_dimension",
      type: "number",
      min: "1",
      placeholder: "R$ 99,00",
      required: true,
    },
    {
      id: 23,
      label: "Peso do Lote (g)",
      name: "weight_dimension",
      type: "number",
      min: "1",
      placeholder: "R$ 99,00",
      required: true,
    },
  ];

  async function handleSubmit(e: React.SyntheticEvent): Promise<void> {
    e.preventDefault();

    const formEntityJSON: IFormValues = {
      ...formValues,
    };

    console.log(formEntityJSON);

    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URI + "/v1/listings",
        formEntityJSON,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Anúncio criado com sucesso.");
        console.log(response);

        navigate("/listings", { replace: true });
      }

      //
    } catch (err: any) {
      if (err.response.status === 500) {
        toast.error("Erro ao criar o anúncio.");
      } else {
        toast.error("Erro ao criar o anúncio. Dados inválidos.");
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
              <h3>Anunciar Novo Lote</h3>
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
                  Finalizar
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
