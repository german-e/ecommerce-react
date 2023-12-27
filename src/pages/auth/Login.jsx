import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  
  const {login} = useAuth();


  const navigate = useNavigate();
  const location = useLocation();



  const {user} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');




  
  

  let from = location.state?.from?.pathname || '/';

  
  const handleSubmit = (ev) => {
    ev.preventDefault();
    login(email,password);   

    navigate(from, {replace:true})

    
  }


  return (
    <div className="w-100 m-auto mt-5">

      { user && <p>Nombre de Usuario: {user.name}</p>}
      
      <form className="d-flex justify-content-center align-items-center" onSubmit={handleSubmit}>
        <div className="col-md-3">

        <img
          className="mb-4"
          src="https://higherlogicdownload.s3.amazonaws.com/NLA/6afabec0-4411-463d-8243-8e55e4dc4e2b/UploadedImages/phone-login-trouble.png"
          alt=""
          width="300"
          height="300"
          />
        </div>
        <div className="col-md-4 border rounded shadow-sm p-5">

        
        <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

        <div className="form-floating mb-3">
          <input
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">Remember me</label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        <h6 className="mt-3">¿Aún no tienes cuenta? <Link to="/auth/register">Registrate</Link></h6> 
        </div>
      </form>
    </div>
  );
};

export default Login;
