import { useContext } from "react";
import { AudioContext } from "context/AudioContext";

import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import MyAudioPlayer from "../utils/player";

export default function Layout({ children }) {
  const { audioFile, play } = useContext(AudioContext);
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
      {audioFile && (
        <div className={styles.audioPlayer}>
          <MyAudioPlayer play={play} src={audioFile} />
        </div>
      )}
    </>
  );
}
