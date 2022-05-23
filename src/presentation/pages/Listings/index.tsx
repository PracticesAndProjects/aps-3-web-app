import { useEffect } from "react";
import { Button, Container, ListGroup, Row, Col } from "react-bootstrap";
import { useAuth } from "../../components/Hooks/UseAuth";
import useFetch from "../../components/Hooks/UseFetch";
import Layout from "../../components/Layout";
import ListingsBlock from "../../components/ListingsBlock";

export default function Listings() {
  const { getToken } = useAuth();

  const { data, error, isPending } = useFetch(
    "http://localhost:8080" + "/v1/listings",
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
        <Container>
          <Row>
            <Col sm={6}>
              <h3>Ações</h3>
              <Button>Criar Anúncio</Button>
            </Col>
            <Col sm={6}>
              <h3>Seus Anúncios</h3>
              <ListGroup>
                <ListGroup.Item>
                  Sucata de Origem Mecânica, só pra doação!
                </ListGroup.Item>
                <ListGroup.Item>Garrafas PET Cores Sortidas</ListGroup.Item>
                <ListGroup.Item>Garrafas PET</ListGroup.Item>
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
