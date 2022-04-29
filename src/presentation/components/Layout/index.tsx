/* eslint-disable prettier/prettier */
import React from "react";
import Header from "../Header";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Layout.module.scss";
import { Container } from "react-bootstrap";

interface ILayoutProps {
  children: React.ReactNode;
}
function Layout(props: ILayoutProps) {
  return (
    <div className={styles.body}>
      <Header />
      <Container className={styles.container + " mt-5 p-5 mb-5"}>
        {props.children}
      </Container>
    </div>
  );
}

export default Layout;
