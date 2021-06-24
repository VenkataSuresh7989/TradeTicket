import React from "react";
import LocationImage from "../../assets/location.png";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg">
          <a className="navbar-brand" href="/">
            <h1 className="Heading">
              Trade<i className="Heading1">𝓣</i>icket
            </h1>
          </a>

          <div className="options">
            {/* <i class="fas fa-map-marker-alt"></i> */}
            <img src={LocationImage} alt="" />
            <button className="btn" onClick={this.toggleState}>
              Login
            </button>
            <button style={{ backgroundColor: "#F84460" }}>
              {/* <img src={User} alt="" /> */}

              <ul className="navbar-nav ">
                <li className="nav-item dropdown user">
                  <a
                    className="nav-link dropdown-toggle "
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ backgroundColor: "#F84460", color: "white" }}
                  >
                    <i className="fa fa-user-circle" />
                    User
                  </a>
                  <div
                    className="dropdown-menu "
                    aria-labelledby="navbarDropdown"
                    style={{ backgroundColor: "peru" }}
                  >
                    <h5>Venkat Suresh</h5>
                    <p>abc@gmail.com</p>
                    <a
                      className="dropdown-item "
                      style={{ backgroundColor: "gray" }}
                      href="/"
                      onClick={() => {
                        alert("Log out");
                      }}
                    >
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
