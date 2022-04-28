import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <>
      <div className="container">
        <div className="col-auto">
          <img src="./LOGObranca.svg" alt="" />
        </div>

        <Navbar />
      </div>
    </>
  );
}

export default Header;
