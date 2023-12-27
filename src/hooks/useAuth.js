import { useEffect } from "react";
import { useUser } from '../hooks/useUser'
import { useLocalStorage } from "../hooks/useLocaleStorage";
import { useMutation, useQuery } from "@tanstack/react-query";
export const useAuth = () => {

  const { user, addUser, removeUser } = useUser();
  const { getItem, setItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    }
  }, []);

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



  const mutation = useMutation({
    mutationFn: loginMutation,
    onSuccess: (data) => {
      console.log("data en mutation", data);
      setItem("token", data.access_token);  

      addUser( getUser() );       
    },
    onError: (data) => {
        console.log('Error en mutation: ',error);        
    }
  });



  


  function getUser() {

  
    const query = useQuery({
    queryKey: ["profile"],

    queryFn: async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
        method: "GET",
        headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${getItem("token")}`,
        },
    });

    const json = await res.json();

    console.log('json en qerty', json)
    return json;


    },
});

return query.data;

}



  const login = (email, password) => {  

    mutation.mutate({
        email,
        password
      })

  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout };
};
