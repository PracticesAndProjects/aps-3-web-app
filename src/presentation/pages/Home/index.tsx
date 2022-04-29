/* eslint-disable prettier/prettier */
import { Button, Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    
    <Layout>
      
      <Row className={"justify-content-center"}>
        <Col className={"col-5 py-5"}>
          <h3>Como o nosso Marketplace funciona...</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            repellendus cum veniam, ipsum ex reprehenderit quisquam totam
            aspernatur tempora minus, nulla dolorem sequi, magni dicta impedit
            ut fugit aut ab.
          </p>
        </Col>
        <Col sm={5} className={"p-5"}>
          <div className={styles.imageContainer}>
            <img src="./undraw_drag_re_shc0.svg" alt="" />
          </div>
        </Col>
      </Row>

      <Row className={"p-5"}>
        <Col className={"col-4 offset-4" + " " + styles.divisor}> </Col>
      </Row>

      <Row className={"justify-content-center py-5"}>
        <Col sm={3}>
          <div className={styles.imageContainer}>
            <img src="./undraw_access_account_re_8spm.svg" alt="" />
          </div>
        </Col>
        <Col sm={4}>
          <h4>Registre sua conta e começe a anunciar já</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vulputate feugiat ligula, aliquet lacinia lectus volutpat non.
            Praesent elit augue.
          </p>
          <Button className={styles.btnPrimary} variant="primary">
            Registrar Já
          </Button>
        </Col>
      </Row>
      
    </Layout>
    
  );
}
