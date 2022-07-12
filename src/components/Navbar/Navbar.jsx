import "./Navbar.css";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navigation">
      <nav class="navbar fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img className="logo" src={Logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    CONTACT
                  </a>
                </li>
                <li class="nav-item login">
                  <a class="nav-link login-link" href="#">
                    LOGIN
                  </a>
                </li>
                <li class="nav-item sign-up">
                  <a class="nav-link sign-up-link" href="#">
                    SIGN UP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>

  
  );
};

export default Navbar;
