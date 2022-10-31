import Image  from 'next/image'
import Container from "react-bootstrap/Container"
import styles from "../styles/Home.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faRoad,
  faBatteryThreeQuarters,
  faLightbulb,
  faCheckCircle,
  faCircleExclamation,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons"

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
        will be used to show the user what the content is about. Pages and container 
        components will have background images where appropriate.
      </p>

      <div style={{ fontSize: 20 }}>
        Image requirements:
        <ul style={{ fontSize: 20 }}>
          <li>
            The images must be in .png (preferred) or .jpg format.
          </li>

          <li>
            Icons and vector illustrations should be in .svg format.
          </li>

          <li>
            No borders or shadows.
          </li>

          <li>
            Images must be responsive.
          </li>

          <li>
            Informative illustrations must have alt text.
          </li>

          <li>
            Keep at least 20px of space between the text and the image, except captions.
          </li>

          <li>
            The graphic images must be in the same color scheme as the rest of the
            website.
          </li>

          <li>
            The acceptable aspect ratios of the images are 16:9, 4:3, 1:1, 3:4,
            and 9:16. However, other aspect ratios are allowed for backgrounds.
          </li>
        </ul>
      </div>

      <div className={styles.grid}>
        <div style={{ margin: "20px" }} >
          <Image src='/16to9.jpg' width={384} height={216} margin="20px" alt='16 by 9' />
          <p>
            16:9
          </p>
        </div>

        <div style={{ margin: "20px" }} >
          <Image src='/4to3.png' width={288} height={216} margin="20px" alt='16 by 9' />
          <p>
            4:3
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        <div style={{ margin: "20px" }} >
          <Image src='/1to1.png' width={288} height={288} margin="20px" alt='1 by 1' />
          <p>
            1:1
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        <div style={{ margin: "20px" }} >
          <Image src='/3to4.png' width={288} height={384} margin="20px" alt='1 by 1' />
          <p>
            3:4 
          </p>
        </div>

        <div style={{ margin: "20px" }} >
          <Image src='/9to16.png'  width={216} height={384} margin="20px" alt='1 by 1' />
          <p>
            9:16
          </p>
        </div>
      </div>
    </Container>
  )
}
