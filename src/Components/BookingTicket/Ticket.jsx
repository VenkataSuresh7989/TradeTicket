import { Component } from "react";
import styles from "./Ticket.module.css";
import { NavLink } from "react-router-dom";

const navLinkStyle = {
  textDecoration: "none",
  border: "0",
  outline: "0",
  backgroundColor: "#F84460",
  color: "white",
  padding: "15px 30px",
  borderRadius: "11px",
  fontSize: "16px",
  // fontWeight: "bold",
  marginTop: "2px",
};
export default class Ticket extends Component {
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.firstchild}>
          <h1>
            <i> Sell Your Ticket</i>
          </h1>
          <p>
            sell your ticket through us ina a easiest way anf get more points
          </p>
          {/* <button
            type="button"
            class={styles.btn}
            onClick={() => alert("Resale  Your Ticket ")}
          >
            Resale Your Ticket
          </button> */}
          <NavLink to="/resaleticket" style={navLinkStyle}>
            Resale Your Ticket
          </NavLink>
        </div>

        <div className={styles.firstchild}>
          <h1>
            <i> Buy Our Ticket</i>
          </h1>
          <p>
            Get your tickets,chill with your show and your security is our
            priority.
          </p>

          <NavLink to="/buyticket" style={navLinkStyle}>
            Buy Our Ticket
          </NavLink>
        </div>

        {/* <div className={styles.buyticket}>
          <h1>
            <i> Buy Your Ticket</i>
          </h1>
          <p>
            Get your rickets,chill with your show and your security is our
            priority.
          </p>

          <NavLink to="/buyticket" style={navLinkStyle}>
            Buy Our Ticket
          </NavLink>
        </div> */}
      </div>
    );
  }
}
