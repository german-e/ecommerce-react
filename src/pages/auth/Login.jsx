
const Login = () => {
  

  return (
    <div class="w-100 m-auto mt-5">
      <form className="d-flex justify-content-center align-items-center">
        <div className="col-md-3">

        <img
          class="mb-4"
          src="https://higherlogicdownload.s3.amazonaws.com/NLA/6afabec0-4411-463d-8243-8e55e4dc4e2b/UploadedImages/phone-login-trouble.png"
          alt=""
          width="300"
          height="300"
          />
        </div>
        <div className="col-md-4 border rounded shadow-sm p-5">

        
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="form-check text-start my-3">
          <input
            class="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">Remember me</label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-body-secondary">© 2023</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
