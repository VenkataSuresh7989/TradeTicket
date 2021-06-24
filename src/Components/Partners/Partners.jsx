import { Component } from "react";
import aha from "../../assets/aha.png";
import bookmyshow from "../../assets/bookmyshow.png";
import netflix from "../../assets/netflix.png";
import prime from "../../assets/prime.png";
import styles from "./Partners.module.css";

export default class Partners extends Component {
  render() {
    return (
      <div>
        <h3 className={styles.partner_heading}>partners</h3>
        <div className={styles.partner_img}>
          <img src={bookmyshow} alt="" />
          <img src={netflix} alt="" />
          <img src={prime} alt="" />
          <img src={aha} alt="" />
        </div>
      </div>
    );
  }
}
