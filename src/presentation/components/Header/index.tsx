import Navbar from "../Navbar";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className={styles.header + " py-3"}>
        <Container>
          <Row>
            <Col>
              <Link to="/">
                <img src="./../LOGObranca.svg" alt="" />
              </Link>
            </Col>
            <Col className={"align-self-center col-auto"}>
              <Navbar />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Header;
