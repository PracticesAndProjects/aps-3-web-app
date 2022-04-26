import "./Header.scss";

function Navbar() {
  return (
    <div className="col-auto">
      <ul className="list-unstyled navbar-btns d-flex gap-5 m-0">
        <li className="navbar-item">
          <a href="/" className="p-1 align-self-center">
            ÍNICIO
          </a>
        </li>
        <li className="navbar-login-item">
          <a href="#">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            LOGIN
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
