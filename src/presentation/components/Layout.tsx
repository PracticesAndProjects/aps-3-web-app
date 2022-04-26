import React from "react";
import Header from "./Header";

interface ILayoutProps {
  children: React.ReactNode;
}
function Layout(props: ILayoutProps) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
