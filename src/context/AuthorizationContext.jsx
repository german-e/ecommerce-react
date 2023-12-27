import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getData } from "../data/getData";
import { Navigate } from "react-router-dom";

const AuthorizationContex = ({ children }) => {

  const [user, setUser] = useState(undefined);  

  

  const loginMutation = async ({ email, password }) => {
    const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return response.json();
  };

 


  return (
    <AuthContext.Provider value={{ user, setUser, loginMutation }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthorizationContex;
