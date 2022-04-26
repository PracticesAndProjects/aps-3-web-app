import Navbar from "./Navbar";
import "./Header.scss";

function Header() {
  return (
    <div className="container">
      <div className="col-auto">
        <img src="./LOGObranca.svg" alt="" />
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
