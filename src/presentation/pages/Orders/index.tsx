import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";

import { useAuth } from "../../components/Hooks/UseAuth";
import useFetch from "../../components/Hooks/UseFetch";
import Layout from "../../components/Layout";
import styles from "./styles.module.scss";

export default function Orders() {
  const { getToken } = useAuth();
  const { data, error, isPending } = useFetch(
    process.env.REACT_APP_API_URI + "/v1/listings/order",
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
            <Col>
              <h3>Seus Pedidos Abertos</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              {error && <div>Asda</div>}
              {isPending && <p>Carregando...</p>}
              {data &&
                data.map((order: any) => {
                  return (
                    <ListGroup.Item key={order.id}>
                      <Row>
                        <Col>
                          {order.accepted ? (
                            <h4>Pedido Finalizado</h4>
                          ) : (
                            <h4>Pedido em Aberto</h4>
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <h5>Suas Informações</h5>
                          <p>{order.orderOwnerName}</p>
                          <p>{order.orderOwnerEmail}</p>
                          <h5>Informações do Anunciante</h5>
                          <p>{order.listingCreatorName}</p>
                          <p>{order.listingCreatorEmail}</p>
                        </Col>
                        <Col>
                          <h5>Informações do Anúncio</h5>
                          <h6>Título</h6>
                          <p>{order.listingTitle}</p>
                          <h6>Material</h6>
                          <p>{order.listingMaterialType}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col className={styles.floatRight}>
                          <Button>Cancelar Pedido</Button>
                          <Button>Ver Listagem</Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  );
                })}
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
