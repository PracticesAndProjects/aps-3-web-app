import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
} from "react-bootstrap";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <Nav className={styles.navbarBtns + " text-right d-flex gap-5 m-0"}>
      <NavItem className={styles.navbarItem}>
        <a className={"p-1 align-self-center"}>INICIO</a>
      </NavItem>
      <NavItem className={styles.navbarLoginItem}>
        <a>ENTRAR</a>
      </NavItem>
    </Nav>
  );
}
export default Navbar;
