import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, NavItem } from "react-bootstrap";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <Nav className={styles.navbarBtns + " text-right d-flex gap-5 m-0"}>
      <NavItem className={styles.navbarItem}>
        <a className={"p-1 align-self-center"}>INICIO</a>
      </NavItem>
      <NavItem className={styles.navbarLoginItem}>
        <FontAwesomeIcon
          className={styles.faIcon}
          icon={faRightFromBracket}
        ></FontAwesomeIcon>
        <a className={"p-2 align-self-center"}>ENTRAR</a>
      </NavItem>
    </Nav>
  );
}
export default Navbar;
