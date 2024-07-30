import * as React from "react";

import { ReactFCC } from "core/types";

import styles from "public/stories/a-beach-walk/styles/Index.module.scss";
import Head from "next/head";

const Index: ReactFCC = ({ children }) => {
  return (
    <>
      <Head>
        <title lang="en">a beach walk</title>
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
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Index;
