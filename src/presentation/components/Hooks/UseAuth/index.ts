import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import Cookies from "universal-cookie";

interface IProfile {
  name: string;
  email: string;
  token: string;
}
const useAuth = () => {
  const isAuthenticated = () => {
    if (sessionStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  };
  const profile = () => {
    const profileJSON = sessionStorage.getItem("user");
    if (profileJSON) {
      return JSON.parse(profileJSON);
    }
  };
  const getToken = () => {
    const profileJSON = sessionStorage.getItem("user");

    if (profileJSON) {
      return JSON.parse(profileJSON).token;
    }
  };

  const doLogout = () => {
    sessionStorage.removeItem("user");
  };

  const doLogin = (token: string, name: string, email: string) => {
    sessionStorage.setItem("user", JSON.stringify({ token, name, email }));
  };

  useEffect(() => {
    const userJSON = sessionStorage.getItem("user");

    if (userJSON) {
      console.log(userJSON);
    }
  }, []);

  return {
    isAuthenticated,
    profile,
    getToken,
    doLogout,
    doLogin,
  };
};

export { useAuth };
