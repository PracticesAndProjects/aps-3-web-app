import React from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
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
}

export default function ListingsBlock(props: IProps) {
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
                  <Button>Criar Pedido</Button>
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
