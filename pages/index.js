import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ol>
          <li>
            <Link href="/vanilla">Vanilla</Link>
          </li>
          <li>MUI</li>
          <li>Chakra UI</li>
          <li>Mantine</li>
        </ol>
      </main>
    </div>
  );
}
