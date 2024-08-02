import * as React from "react";

import { ReactFCC } from "core/types";

import styles from "public/stories/procrastinate/styles/Index.module.scss";
import Head from "next/head";
import Grid, { GridProps } from "core/components/ui/layouts/grid";
import { ResetButton } from "core/components/ui";

const headerEl = React.createElement("header", {'className': styles.header}, <nav>
    <div>
      <button
        className={styles.backButton}
        onClick={() => window.location.replace(window.location.origin)}
      >
        Back to home
      </button>
    </div>
    <h1>procrastinate</h1>
    <div className={styles.controls}>
        <ResetButton message = "Do you want to reset the story?"/>
    </div>
  </nav>);

const Index: ReactFCC = ({ children }: GridProps) => {
    
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
      
      <Grid styles={styles} header={headerEl}>
        <main className={styles.main}>{children}</main>
      </Grid>
    </>
  );
};

export default Index;
