import { Image } from "react-bootstrap";
import styles from "./Artwork.module.scss";

import AddRoundedIcon from '@mui/icons-material/AddRounded';

export interface ArtworkProps {
  /** Path to the image/artwork */
  link: string;
  /** Name of artwork */
  name: string;
  /** Source */
  source: string;
  /** Width of the image */
  width?: number | string;
  /** Height of the image */
  height?: number | string;
  /** Position of the image */
  position?: React.CSSProperties;
}

const Artwork = ({
  link,
  name,
  source,
  width = "auto",
  height = "auto",
  position,
}: ArtworkProps) => {
  /**
   * Get a random integer < randomInt and >= 0
   * @returns a random integer < randomInt and >= 0
   */
  const getRandomPosition = (randomInt: number) => {
    return Math.floor(Math.random() * randomInt); // leave a bit padding on the sides
  };

  return (
    <div className={styles.container} style={{ width: width, ...position }}>
      <div className={styles.card}>
        <div className={styles.cardImage} style={{ height: height }}>
          <Image
            src={link}
            alt={name}
            onClick={() => window.open(source, "_blank")}
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        <div
          className={styles.cardInfo}
          style={{
            top: `${getRandomPosition(50)}%`,
            left: `${getRandomPosition(30)}%`,
          }}
        >
          <span className={styles.infoText}>{name}</span>
          <div className={styles.icon}>
            <AddRoundedIcon fontSize="small"/>
          </div>
          <div className={styles.background}>
            <div className={styles.backdrop}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artwork;
