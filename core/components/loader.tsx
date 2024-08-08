import styles from "./Loader.module.scss";
import * as React from "react";

export interface LoaderProps {
  backgroundColor?: string;
}

export const Loader = ({
  backgroundColor = "rgba(255, 255, 255, 0.53)",
}: LoaderProps): JSX.Element => {
  let loaderRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    let timeoutID = setTimeout(() => {
      loaderRef.current.style.opacity = "0";
      loaderRef.current.style.visibility = "hidden";
    }, 500);

    return () => clearTimeout(timeoutID);
  }, []);

  return (
    <span
      className={styles.loaderWrapper}
      ref={loaderRef}
      style={{ backgroundColor: backgroundColor }}
    >
      <span className={styles.loaderFlex}>
        <span className={styles.loader}></span>
        <span className={styles.loader}></span>
      </span>
    </span>
  );
};
