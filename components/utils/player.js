import { createRef, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function MyAudioPlayer({ src, play }) {
  const player = createRef();
  useEffect(() => {
    !play
      ? player.current.audio.current.play()
      : player.current.audio.current.pause();
  }, [play]);

  return (
    <>
      <AudioPlayer ref={player} preload="metadata" src={src} />
    </>
  );
}
