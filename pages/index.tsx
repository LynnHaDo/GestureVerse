import { GetStaticProps } from "next";
import Head from "next/head";
import fs from "fs";
import path from "path";

import styles from "public/stories/index/styles/Index.module.scss";

interface StoryProps {
  paths: string[];
}
export const getStaticProps: GetStaticProps = async () => {
  const storyDirs = path.join(process.cwd(), "public/stories");
  const paths = fs
    .readdirSync(storyDirs, { withFileTypes: true })
    .filter(
      (dir) =>
        dir.isDirectory() &&
        (dir.name.includes("my-story") || dir.name.includes("my-game"))
    )
    .map((dir) => dir.name)
    .flat();
  return {
    props: {
      paths,
    },
  };
};

function Index({ paths }: StoryProps): JSX.Element {
  return (
    <>
      <Head>
        <title lang="en">gestureverse</title>
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="loader"></div>
      <header className={styles.header}>
        <nav>
          <div></div>
          <h1>gestureverse</h1>
          <div> </div>
        </nav>
      </header>
      <main className={styles.main} lang="en">
        <nav className={styles.left}></nav>
        <article className={styles.story}>
          <p>Choose your own adventure</p>
          <ul>
            {paths.map((s) => (
              <li key={s}>
                <a href={`${s}`}>{s}</a>
              </li>
            ))}
          </ul>
        </article>
        <nav className={styles.right}></nav>
      </main>
    </>
  );
}

export default Index;
