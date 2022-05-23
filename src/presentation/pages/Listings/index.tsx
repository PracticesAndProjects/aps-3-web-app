import { useEffect, useState } from "react";
import { Button, Container, ListGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../components/Hooks/UseAuth";
import useFetch from "../../components/Hooks/UseFetch";
import Layout from "../../components/Layout";
import ListingsBlock from "../../components/ListingsBlock";
import styles from "./styles.module.scss";

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
export default function Listings() {
  const { getToken, getProfile } = useAuth();

  const { data, error, isPending } = useFetch(
    process.env.REACT_APP_API_URI + "/v1/listings",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return (
    <>
      <Layout>
        <Container className={styles.container}>
          <Row>
            <Col sm={6}>
              <h3>Ações</h3>
              <Link to="/listings/new">
                <Button>Criar Anúncio</Button>
              </Link>
            </Col>
            <Col sm={6}>
              <h3>Seus Anúncios</h3>
              <ListGroup>
                {data &&
                  data.map((listing: IListing) => {
                    if (listing.usuario.id == getProfile().id) {
                      return (
                        <ListGroup.Item key={listing.id}>
                          <Row>
                            <Col>{listing.titulo}</Col>
                          </Row>
                        </ListGroup.Item>
                      );
                    }
                  })}
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <h3>Anúncios Disponíveis</h3>
              {error && <div> </div>}
              {isPending && <p>Carregando anúncios...</p>}
              {data && <ListingsBlock data={data} />}
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
