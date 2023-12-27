import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="text-center d-flex flex-column align-items-center justify-content-center">
        <div>
        <p style={{ fontSize: 100 }}>:(</p>
        </div>

        <div>
          <h2 className="text-danger" style={{ fontSize: 150 }}>
            Oops!
          </h2>
          
          
          <h5>¡Algo Salio mal!</h5>
          <p>Error 404 - Página no encontrada</p>

          <Link to="/">Ir la pantalla principal</Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
