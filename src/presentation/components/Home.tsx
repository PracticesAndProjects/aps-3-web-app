import styles from "./Home.module.scss";

function Home() {
  return (
    <main className={styles.container + " mt-5 p-5 mb-5"}>
      <div className="row justify-content-center">
        <div className="col-5 py-5">
          <h3>Como o nosso Marketplace funciona...</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            repellendus cum veniam, ipsum ex reprehenderit quisquam totam
            aspernatur tempora minus, nulla dolorem sequi, magni dicta impedit
            ut fugit aut ab.
          </p>
        </div>
        <div className="col-5 img__marketplace p-5">
          <img src="./img/undraw_drag_re_shc0.svg" alt="" />
        </div>
      </div>

      <div className="row p-5">
        <div className="divisor col-4 offset-4"></div>
      </div>

      <div className="row justify-content-center py-5">
        <div className="col-3 img__account">
          <img src="./img/undraw_access_account_re_8spm.svg" alt="" />
        </div>
        <div className="col-4">
          <h4>Registre sua conta e começe a anunciar já</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vulputate feugiat ligula, aliquet lacinia lectus volutpat non.
            Praesent elit augue.
          </p>
          <button type="button" className="btn btn-primary">
            Registrar já
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
