export const backgroundFillStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: -1,
  };
  
export interface backgroundFillProps {
  /** Color of background (if fill) */
  color?: string;
  children: React.ReactNode;
}

import styles from './BackgroundFill.module.scss'

/**
 * Background image/solid color that fills the entire page
 * @param imageSrc (optional) source of image set as the background
 * @param color (optional) source of
 * @returns
 */
const BackgroundFill = ({ color = null, children}: backgroundFillProps) => {  
  return (
    <div style={{backgroundColor: color}} className={styles.container}>
      {children}
    </div>
  );
};

export default BackgroundFill;
