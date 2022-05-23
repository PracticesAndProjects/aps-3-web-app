/* eslint-disable prettier/prettier */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket,} from "@fortawesome/free-solid-svg-icons";
import { Nav, NavItem } from "react-bootstrap";
import styles from "./Navbar.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../Hooks/UseAuth';
import { toast } from "react-toastify";

function Navbar() {
  
  const { isAuthenticated, doLogout } = useAuth();
  const navigate = useNavigate();
    
  function handleLogout() {
    doLogout();
    navigate(0);    
  }
  
  return (
    
    <Nav className={styles.navbarBtns + " text-right d-flex gap-5 m-0"}>
      <NavItem className={styles.navbarItem}>
        <Link to="/" className={"p-1 align-self-center"}>INICIO</Link>
      </NavItem>

      { isAuthenticated() ?
      <>
        <NavItem className={styles.navbarItem}>
          <Link to="/listings" className={"p-1 align-self-center"}>LISTAGENS</Link>
        </NavItem> 
        <NavItem className={styles.navbarItem}>
          <Link to="/orders" className={"p-1 align-self-center"}>PEDIDOS</Link>
        </NavItem> 
        <NavItem className={styles.navbarItem}>
          <a onClick={handleLogout} className={"p-1 align-self-center"}>SAIR</a>
        </NavItem> 
      </>
      : 
      <NavItem className={styles.navbarLoginItem}>
        <FontAwesomeIcon className={styles.faIcon} icon={faRightFromBracket} />
        <Link to="/signin" className={"p-2 align-self-center"}>ENTRAR</Link>
      </NavItem> }

      
    </Nav>
  );
}
export default Navbar;
