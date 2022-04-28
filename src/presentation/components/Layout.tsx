import React from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Layout.module.scss";
import "@fortawesome/fontawesome-common-types";

interface ILayoutProps {
  children: React.ReactNode;
}
function Layout(props: ILayoutProps) {
  return (
    <div className={styles.body}>
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
