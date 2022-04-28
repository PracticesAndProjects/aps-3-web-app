import React from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Layout.module.scss";

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
