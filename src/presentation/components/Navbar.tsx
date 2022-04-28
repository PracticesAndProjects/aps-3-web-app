import { Col, Container, ListGroup, Row } from "react-bootstrap";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <Container className={styles.nav}>
      <Row>
        <Col>
          <ListGroup as="ul">
            {/* <ul className="list-unstyled navbar-btns d-flex gap-5 m-0"> */}
            <ListGroup.Item className={styles.navbarItem}>
              <a href="/" className="p-1 align-self-center">
                ÍNICIO
              </a>
            </ListGroup.Item>
            <ListGroup.Item className={styles.navbarLoginItem}>
              <a href="#">
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                LOGIN
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
export default Navbar;
