import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout";
import styles from "./Dashboard.module.scss";
import { link } from "fs";

const User = "Rafael";
const Email = "rafael.vozikis@hotmail.com";
const Id = "2";

export default function Dashboard() {
  return (
    <Layout>
      <div className="row">
        <div className="col-3 d-flex flex-column">
          <FontAwesomeIcon
            icon={faCircleUser}
            className={"fa-8x " + styles.user__prof__pic}
          />

          <div className="row justify-content-center mt-3">
            <span className="badge rounded-pill bg-primary w-auto">
              <span className="m-0 h5">{User}</span>
            </span>
          </div>
          <div className="row justify-content-center border-bottom pb-3">
            <span className="text-muted text-center">{Email}</span>
          </div>
          <div className="row">
            <nav className="nav flex-column mt-3">
              <a
                className={"nav-link " + styles.nav__link + " " + styles.active}
                aria-current="page"
                href="#"
              >
                Active
              </a>
              <a className={"nav-link " + styles.nav__link} href="#">
                Link
              </a>
              <a className={"nav-link " + styles.nav__link} href="#">
                Link
              </a>
            </nav>
          </div>
        </div>
        <div className="col">
          <div className="row mb-4">
            <h1>Dashboard</h1>
          </div>

          <div className="row">
            <div className="col-4">
              <div className="row">
                <h3>Meus pedidos</h3>
              </div>
              <div className="row gx-2">
                <div className={styles.card__dashboard + " shadow-sm"}>
                  <p>Pedido #1</p>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, natus?
                  </span>
                  <div className="pt-2">
                    <button type="button" className="btn btn-sm btn-danger">
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <h3>Meus anúncios</h3>
              </div>
              <div className="row gx-2">
                <div className={styles.card__dashboard + " shadow-sm"}>
                  <p>Anúncio #1</p>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, natus?
                  </span>
                  <div className="pt-2">
                    <button type="button" className="btn btn-sm btn-danger">
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <h3>Avisos</h3>
              </div>
              <div className="row gx-2">
                <div className={styles.card__dashboard + " shadow-sm"}>
                  <p>Aviso #1</p>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, natus?
                  </span>
                  <div className="pt-2">
                    <button type="button" className="btn btn-sm btn-danger">
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
