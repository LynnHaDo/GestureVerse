import * as React from "react";

import { ReactFCC } from "core/types";

import styles from "public/stories/procrastinate/styles/Index.module.scss";
import Head from "next/head";
import Grid, { GridProps } from "core/components/ui/layouts/grid";
import { ResetButton } from "core/components/ui";

import { setupIonicReact } from "@ionic/react";

const headerEl = React.createElement(
  "header",
  { className: styles.header },
  <nav>
    <h1>procrastinate</h1>
    <div className={styles.controls}>
      <button
        className={styles.backButton}
        onClick={() => window.location.replace(window.location.origin)}
      >
        home
      </button>
      <ResetButton
        message="Do you want to reset the story?"
        style={{ textDecoration: "none", fontSize: "0.8rem" }}
      />
    </div>
  </nav>
);

const Index: ReactFCC = ({ children }: GridProps) => {
  React.useEffect(() => {
    setupIonicReact();
  })
  return (
    <>
      <Head>
        <title lang="en">procrastinate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/Storytelling_Logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/Storytelling_Logo_transparent.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/Storytelling_Logo_transparent.png"
        />
      </Head>

      <Grid styles={styles} header={headerEl}>{children}</Grid>
    </>
  );
};

export default Index;
