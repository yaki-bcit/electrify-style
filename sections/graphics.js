import Container from "react-bootstrap/Container";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoad,
  faBatteryThreeQuarters,
  faLightbulb,
  faCheckCircle,
  faCircleExclamation,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

// Yevgeniy
export default function Graphics() {
  return (
    <Container fluid="md">
      <h2 className={styles.pagesection} id="graphics">
        Graphics
      </h2>

      <h3 className="align-self-start">Icons</h3>

      <p style={{ fontSize: 20 }}>
        The icons we use are from Font Awesome. The icons are chosen on the
        basis of common metaphors. We use the icons to make the website more
        appealing and intuitive to the user.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h4>Battery</h4>

          <div>
            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon
                icon={faBatteryThreeQuarters}
                size="5x"
                color="#3B8D95"
              />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon
                icon={faBatteryThreeQuarters}
                size="3x"
                color="#3B8D95"
              />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon
                icon={faBatteryThreeQuarters}
                size="2x"
                color="#3B8D95"
              />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon
                icon={faBatteryThreeQuarters}
                size="1x"
                color="#3B8D95"
              />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h4>Tip, idea</h4>

          <div>
            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon icon={faLightbulb} size="5x" color="#EDD144" />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon icon={faLightbulb} size="3x" color="#EDD144" />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon icon={faLightbulb} size="2x" color="#EDD144" />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon icon={faLightbulb} size="1x" color="#EDD144" />
            </div>
          </div>
        </div>
      </div>

      <p style={{ fontSize: 20 }}>
        We will be using the icons in four different sizes: 5x, 3x, 2x, and 1x.
        The 5x icon is used for the title of the page, the 3x icon is used for
        the title of the section, the 2x icon is used for the title of the
        subsection, and the 1x icon is used for regular text.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h4>Done, correct</h4>

          <div>
            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon icon={faCheckCircle} size="5x" color="#3B8D95" />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon icon={faCheckCircle} size="3x" color="#3B8D95" />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon icon={faCheckCircle} size="2x" color="#3B8D95" />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#3B8D95" />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h4>Warning</h4>

          <div>
            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size="5x"
                color="#EDD144"
              />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size="3x"
                color="#EDD144"
              />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size="2x"
                color="#EDD144"
              />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size="1x"
                color="#EDD144"
              />
            </div>
          </div>
        </div>
      </div>

      <p style={{ fontSize: 20 }}>
        The icons will use two main colors:
        <span style={{ color: "#3B8D95", fontWeight: "600" }}>
          {" "}
          #3B8D95
        </span>{" "}
        and
        <span style={{ color: "#EDD144", fontWeight: "600" }}> #EDD144</span>.
        On non-white backgrounds, the icons will be white.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h4>Road</h4>

          <div>
            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon icon={faRoad} size="5x" color="#3B8D95" />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon icon={faRoad} size="3x" color="#3B8D95" />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon icon={faRoad} size="2x" color="#3B8D95" />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon icon={faRoad} size="1x" color="#3B8D95" />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h4>Error, wrong</h4>

          <div>
            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon icon={faCircleXmark} size="5x" color="#EDD144" />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon icon={faCircleXmark} size="3x" color="#EDD144" />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon icon={faCircleXmark} size="2x" color="#EDD144" />
            </div>

            <div style={{ margin: "0 10px", display: "inline-block" }}>
              <FontAwesomeIcon icon={faCircleXmark} size="1x" color="#EDD144" />
            </div>
          </div>
        </div>
      </div>

      <h3 className="align-self-start">Pictures and Illustrations</h3>

      <p style={{ fontSize: 20 }}>
        The pictures and illustrations will be used to illustrate the text. They
        will be used to show the user what the text is talking about. The
        pictures and illustrations will be used in the following sizes: 100%,
        50%, 25%, and 10%.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h4>100%</h4>
        </div>

        <div className={styles.card}>
          <h4>50%</h4>
        </div>

        <div className={styles.card}>
          <h4>25%</h4>
        </div>

        <div className={styles.card}>
          <h4>10%</h4>
        </div>
      </div>

      <div className={styles.grid}></div>

      <div className={styles.grid}></div>

      <div className={styles.grid}></div>
    </Container>
  );
}
