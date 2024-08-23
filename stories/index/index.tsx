import * as React from "react";

import { ReactFCC } from "core/types";

import styles from "public/stories/index/styles/Index.module.scss";
import dynamic, { DynamicOptions } from "next/dynamic";

const Index: ReactFCC = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>gestureverse</h1>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Index;
