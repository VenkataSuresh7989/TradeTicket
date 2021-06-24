import React, { Component } from "react";

import Login from "./Login/Login";
import Movie from "./Movies/Movie";
import Partners from "./Partners/Partners";
import Ticket from "./BookingTicket/Ticket";
import HowItWork from "./HowItWork/howItWork";
import Navbar from "./NavBar/Navbar";


function Footer() {
  return (
    <div>
      <div style={{ paddingBottom: "100px" }}>
        <h1 className="title" style={{ textAlign: "left" }}>
          Trade<i className="Heading1">𝓣</i>icket
        </h1>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ color: "white" }}>
          <h5>About us</h5>
          <h5>Ticket History</h5>
          <h5>Customer help</h5>
        </div>

        <div style={{ color: "white" }}>
          {/* <img src={Facebook} alt="" /> */}
          <h5>insta</h5>
          <h5>linkedIn</h5>
        </div>
      </div>
    </div>
  );
}

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    };
  }

  toggleState = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };
  render() {
    return (
      <>
        {this.state.isClicked && <Login />}
        <div style={{ backgroundColor: "black" }}>
          <Navbar />
          <Ticket />
          <HowItWork />

          <Movie />
          <hr
            style={{
              height: 5,
            }}
          />
          <Partners />
          <hr
            style={{
              height: 5,
            }}
          />
          <Footer />
          {/* {this.state.isClicked && <Menu />} */}
        </div>
      </>
    );
  }
}
