import { Component } from "react";
import styles from "./howItWork.module.css";
import image1 from "../../assets/Group 264.png";

// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// import MDBIcon from "mdbreact";

export default class howItWork extends Component {
  render() {
    return (
      <div className={styles.bottomgap}>
        <h1 className={styles.container}>How it works</h1>
        <div className={styles.img}>
          <div>
            <img src={image1} alt="" />
            <h4>Reselling tickets</h4>
            <h5>
              sell your ticket,you will be refunded<span>70%</span> on it.
            </h5>
          </div>

          <div>
            <img src={image1} alt="" />
            <h4>Buy your tickets</h4>
            <h5>
              buy our tickets for easy availability,security at your
              <span>nearest theatre</span> on it.
            </h5>
          </div>

          <div>
            <img src={image1} alt="" />
            <h4>Get your tickets</h4>
            <h5>
              after purchasing the
              <span>ticket</span> we send it through message or email.
            </h5>
          </div>
          {/* <MDBIcon fab icon="facebook-f" /> */}
        </div>
      </div>
    );
  }
}
