import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";
import styles from "./Login.module.css";

const loginPopupRef = createRef();
class Login extends Component {
  render() {
    return ReactDOM.createPortal(
      <div
        className={styles.popupFixedOverlay}
        ref={loginPopupRef}
        onClick={() => (loginPopupRef.current.style = "display: none")}
      >
        <div>
          <h4>Login</h4>

          {/* Email starts */}
          <div className="form-group form-row">
            <input
              type="text"
              className="form-control"
              placeholder="Selection of theater"
            />
          </div>
          {/* Email ends */}

          {/* Password starts */}
          <div className="form-group form-row">
            <input
              type="text"
              className="form-control"
              placeholder="Movie name"
            />
          </div>
          {/* Password ends */}

          <button>Close</button>
        </div>
      </div>,
      document.getElementById("portal")
    );
  }
}

export default Login;
