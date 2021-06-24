import React from "react";
// import Navbar from "../NavBar/Navbar";
import styles from "./BuyTicket.module.css";
import { FaChevronLeft } from "react-icons/fa";
import secondChair from "../../assets/whitechair.png";
import firstChair from "../../assets/graychair.png";
import thirdChair from "../../assets/redchair.svg";
import { useHistory } from "react-router";

export default function BuyTicket() {
  const history = useHistory();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.firstChild}>
          <div className={styles.icon}>
            <FaChevronLeft
              onClick={() => history.push("/")}
              style={{ fontSize: "25px", height: "25px", width: "25px" }}
            />
          </div>

          <div className={styles.buttonsContainer}>
            <h5>JAGADAMBA</h5>
            <p>Thu 24,2020</p>
            <div className={styles.buttons}>
              <button>11:00 AM</button>
              <button>02:00 PM</button>
              <button>06.30 PM</button>
              <button>09:30 PM</button>
            </div>
          </div>
        </div>

        <div className={styles.secondChild}>
          <div className={styles.firstChair}>
            <img src={firstChair} />
            <p>Not Available</p>
          </div>
          <div className={styles.secondChair}>
            <img src={secondChair} />
            <p>Available</p>
          </div>
          <div className={styles.thirdChair}>
            <img src={thirdChair} />
            <p>Your Seats</p>
          </div>
        </div>
      </div>
      <div className={styles.theatreModelContainer}>
        <div className={styles.groundchairs}>
          <div className={styles.L1}>
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
          </div>
          <div className={styles.R1}>
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
          </div>
        </div>
        {/* ************************************************************************** */}

        <div className={styles.balcony}>
          <div className={styles.L2}>
            <div>
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
            </div>
            <div>
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
            </div>
            <div>
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
            </div>
            <div>
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
            </div>
            <div>
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
            </div>
            <div>
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
            </div>
            <div>
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
            </div>
            <div>
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
            </div>
          </div>
          <div className={styles.R2}>
            <div>
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
            </div>
            <div>
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
            </div>
            <div>
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
            </div>
            <div>
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
            </div>
            <div>
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
            </div>
            <div>
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
            </div>
            <div>
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
            </div>
            <div>
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
              <img src={firstChair} />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.T1}>
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />

            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
          </div>
          <div className={styles.T2}>
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
            <img src={firstChair} />
          </div>
        </div>
      </div>
      <div className={styles.btn}>
        <button>Book</button>
      </div>
    </div>
  );
}
