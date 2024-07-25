import { Image } from "react-bootstrap";

export const backgroundFillStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  position: "fixed",
  zIndex: -1,
};

export interface backgroundFillProps {
  /** Source of image set as background (if any) */
  imageSrc?: string;
  /** Color of background (if fill) */
  color?: string;
}

/**
 * Background image/solid color that fills the entire page
 * @param imageSrc (optional) source of image set as the background
 * @param color (optional) source of
 * @returns
 */
const BackgroundFill = ({ imageSrc, color }: backgroundFillProps) => {
  return (
    <div style={backgroundFillStyle}>
      {imageSrc &&
      <Image src={imageSrc} style={{width: '100%'}}/>
      }
      color &&
      <div
        style={{ backgroundColor: color, width: "100%", height: "100%" }}
      ></div>
    </div>
  );
};

export default BackgroundFill;
