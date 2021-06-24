import { Component } from "react";
import movie from "../../assets/mvi.png";
import zombi from "../../assets/zombi.png";
import kapatadhari from "../../assets/kapatadhari.png";
import master from "../../assets/master.png";
import nandi from "../../assets/nandi.png";
import uppena from "../../assets/uppena.png";
import styles from "./Movies.module.css";

export default class Movie extends Component {
  render() {
    return (
      <div>
        <h2 className={styles.moviesHeading}>Movies</h2>
        <div className={styles.movie}>
          <div>
            <img src={uppena} alt="" />

            <div className={styles.mviName}>
              <h1>Uppena</h1>
              <p>UA</p>
              <p>Telugu,Tamil</p>
            </div>
          </div>

          <div>
            <img src={nandi} alt="" />
            <div className={styles.mviName}>
              <h1>Nandi</h1>
              <p>UA</p>
              <p>Telugu</p>
            </div>
          </div>

          <div>
            <img src={zombi} alt="" />
            <div className={styles.mviName}>
              <h1>Zombi Reddy</h1>
              <p>UA</p>
              <p>Telugu</p>
            </div>
          </div>

          <div>
            <img src={movie} alt="" />
            <div className={styles.mviName}>
              <h1>Tom and Jerry</h1>
              <p>UA</p>
              <p>English,Hindi</p>
            </div>
          </div>

          <div>
            <img src={kapatadhari} alt="" />
            <div className={styles.mviName}>
              <h1>Kapatadhari</h1>
              <p>UA</p>
              <p>Tamil</p>
            </div>
          </div>

          <div>
            <img src={master} alt="" />
            <div className={styles.mviName}>
              <h1>Master</h1>
              <p>UA</p>
              <p>Tamil</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
