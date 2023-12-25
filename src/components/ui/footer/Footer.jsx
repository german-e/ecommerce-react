const Footer = () => {
  return (
    <footer class=" container pt-3 border-top">
      <div class="row">
        <div class="col-6 col-md-2 mb-3">
          <h5>Shop</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Men
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Woman
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Shoes
              </a>
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <h5>Help</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Help Center
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Order Status
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Size Chart
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Return & Warranty
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <h5>About</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                About Us
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Responsability
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Technology & Innovation
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary">
                Explore our stories
              </a>
            </li>
          </ul>
        </div>

        <div class="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>
              Be the first to know about our special offers, new product
              launched, and events
            </p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">
                Email Address
              </label>
              <input
                id="newsletter1"
                type="text"
                class="form-control"
                placeholder="Email address"
              />
              <button class="btn btn-primary" type="button">
                Suscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="d-flex flex-column flex-sm-row justify-content-between pt-2 my-1 border-top">
        <p>© 2023 Company, Inc. All rights reserved</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a class="link-body-emphasis text-decoration-none" href="#">              
            <i class="fab fa-twitter"></i> twitter
              
            </a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis text-decoration-none" href="#">
            <i class="fab fa-instagram"></i> instagram
            </a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis text-decoration-none" href="#">
            <i class="fab fa-facebook"></i>facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
