import axios from "axios";
import React from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../Hooks/UseAuth";
import styles from "./styles.module.scss";

interface IProps {
  data: IListing[];
}
interface IListing {
  titulo: string;
  id: number;
  usuario: IUser;
  material_type: string;
  product_price: number;
  delivery_type: number;
  volume_dimension: number;
  weight_dimension: number;
}
interface IUser {
  email: string;
  nome: string;
  telefone: string;
  id: number;
}

export default function ListingsBlock(props: IProps) {
  const { getProfile, getToken } = useAuth();

  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    try {
      const response = await axios.delete(
        process.env.REACT_APP_API_URI + "/v1/listings/" + id,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Anúncio deletado com sucesso.");
        console.log(response);

        navigate(0);
      }

      //
    } catch (err: any) {
      toast.error("Erro ao deletar o anúncio.");
      console.log(err);
    }
  };

  const handleOrder = async (id: number) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URI + "/v1/listings/order/" + id,
        null,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Pedido criado com sucesso.");
        console.log(response);

        navigate(0);
      }

      //
    } catch (err: any) {
      toast.error("Erro ao criar o pedido.");
      console.log(err);
    }
  };

  return (
    <ListGroup>
      {props.data.map((listing: IListing) => {
        return (
          <ListGroup.Item key={listing.id} className={styles.container}>
            <Container>
              <Row>
                <Col>
                  <h4>{listing.titulo}</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Classificação: {listing.material_type}</h5>
                  <h4>R$ {listing.product_price / 100}</h4>
                  <p>Preço do Lote</p>
                </Col>
                <Col>
                  <h5>Dimensões:</h5>
                  <p>Peso: {listing.weight_dimension} gramas</p>
                  <p>Área: {listing.volume_dimension} mm³</p>
                </Col>
                <Col>
                  <h5>Anunciante</h5>
                  <p>{listing.usuario.nome}</p>
                  <p>{listing.usuario.email}</p>
                  <p>{listing.usuario.telefone}</p>
                </Col>
              </Row>
              <Row>
                <Col className={styles.floatRight}>
                  {getProfile().id == listing.usuario.id ? (
                    <Button
                      disabled
                      onClick={() => {
                        handleOrder(listing.id);
                      }}
                    >
                      Criar Pedido
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        handleOrder(listing.id);
                      }}
                    >
                      Criar Pedido
                    </Button>
                  )}
                  {getProfile().id == listing.usuario.id ? (
                    <Button
                      onClick={() => {
                        handleDelete(listing.id);
                      }}
                      className={styles.deleteBtn}
                    >
                      Deletar Anúncio
                    </Button>
                  ) : null}
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
