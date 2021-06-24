import React from "react";
import Navbar from "../NavBar/Navbar";
import styles from "./ResaleTicket.module.css";

export default function BuyTicket() {
  return (
    <div>
      <Navbar />

      <div className={styles.container}>
        <form>
          <label>First name:</label>
          <input
            className={styles.inputfield}
            type="text"
            id="fname"
            placeholder="Enter First Name"
            name="fname"
          />

          <label>Last name:</label>

          <input
            className={styles.inputfield}
            type="text"
            id="lname"
            placeholder="Enter Last Name"
            name="lname"
          />

          <div className={styles.dateContainer}>
            <div>
              <label>Date :</label>
              <input className={styles.Date} type="date" />
            </div>

            <div>
              <label>Time :</label>
              <input className={styles.Time} type="time" />
            </div>
          </div>

          <label>File :</label>
          <input type="file" className={styles.inputfield} name="file" />
          <div className={styles.dateContainer}>
            <div>
              <label>No of Ticket :</label>
              <input className={styles.tickets} type="number" />
            </div>

            <div>
              <label for="lname">No of sold tickets :</label>
              <input className={styles.tickets} type="number" />
            </div>
          </div>
          <input type="number" placeholder="Enter price" />
          <button className={styles.btn}>Resale my ticket</button>
        </form>
      </div>
    </div>
  );
}
