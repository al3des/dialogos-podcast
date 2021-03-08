import { useEffect, useRef, useState } from "react";
import styles from "./player.module.css";

import { Button, Form } from "react-bootstrap";
import usePlayerControls from "hooks/usePlayerControls";

export default function AudioPlayer({ src }) {
  let [controls, dispatch] = usePlayerControls();
  let { play, muted, volume, volumeBar } = controls;
  let [currentTime, setCurrentTime] = useState(0);
  let audio = useRef();

  useEffect(() => {
    console.log(play);
    if (play) {
      setInterval(() => {
        console.log(audio.current.currentTime / 1000);
        setCurrentTime(audio.current.currentTime / 1000);
      }, 1000);
    }
    return;
  }, [audio]);

  const handleChange = (e) => {
    audio.current.volume = Number(e.target.value / 100);
    dispatch({ type: "CHANGE_VOLUME", payload: e.target.value / 100 });
  };

  const handlePlay = () => {
    dispatch({ type: "TOGGLE_PLAY", payload: audio.current.currentTime });
    if (!play) {
      audio.current.play();
      return;
    }
    audio.current.pause();
  };

  const handleToggleMute = () => {
    audio.current.muted = !audio.current.muted;
    dispatch({ type: "TOGGLE_MUTE" });
  };
  return (
    <>
      <audio className={styles.player} ref={audio}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className={styles.root}>
        {/* Play Button */}
        <Button
          className={`rounded-circle ${styles.btnPlay}`}
          onClick={handlePlay}
        >
          {play ? (
            <i className={`bi bi-pause-circle-fill ${styles.play}`}></i>
          ) : (
            <i className={`bi bi-play-circle-fill ${styles.play}`}></i>
          )}
        </Button>
        {/* Volume control */}
        <div
          className={styles.controls}
          onMouseOver={() => dispatch({ type: "TOGGLE_VOLUME_BAR" })}
          onMouseOut={() => dispatch({ type: "TOGGLE_VOLUME_BAR" })}
        >
          <input
            type="range"
            value={muted ? 0 : volume * 100}
            className={!volumeBar ? styles.hidden : ""}
            onChange={handleChange}
          />
          {/* Mute Button */}
          <Button onClick={handleToggleMute} className="rounded-circle">
            {muted ? (
              <i className="bi bi-volume-mute-fill"></i>
            ) : (
              <i className="bi bi-volume-up-fill"></i>
            )}
          </Button>
        </div>
        <div className={styles.duration}>
          <input type="range" value={currentTime} />
        </div>
      </div>
    </>
  );
}
