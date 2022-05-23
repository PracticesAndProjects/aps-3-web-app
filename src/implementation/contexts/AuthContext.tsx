import React, { createContext, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const AuthContext = createContext({});
export const AuthProvider = (props: IProps) => {
  return (
    <AuthContext.Provider value={{ signed: true }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
