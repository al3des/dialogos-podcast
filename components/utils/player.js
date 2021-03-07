import { useEffect, useRef, useState } from "react"
import styles from "./player.module.css"

import { Button, Form } from "react-bootstrap"

export default function AudioPlayer({ src }) {
  let [play, setPlay] = useState(false)
  let [volume, setVolume] = useState(1)
  let [volumeIcon, setVolumeIcon] = useState(
    <i class="bi bi-volume-up-fill"></i>
  )
  let [muted, setMuted] = useState(false)
  let [showVolume, setShowVolume] = useState(false)

  let audio = useRef()

  const handleChange = (e) => {
    audio.current.volume = e.target.value / 100
    setVolume(audio.current.volume * 100)
    let vol = Number(e.target.value)
    if (vol === 0) {
      setVolumeIcon(<i class="bi bi-volume-mute-fill"></i>)
      setMuted(true)
    } else {
      setVolumeIcon(<i class="bi bi-volume-up-fill"></i>)
      setMuted(false)
    }
  }

  const toggleVolume = (e) => {
    audio.current.muted = !audio.current.muted
    console.log(audio.current.volume)
    setShowVolume(true)
    setVolume((s) => (audio.current.muted ? 0 : audio.current.volume * 100))
  }

  return (
    <>
      {
        <audio
          className={styles.player}
          ref={audio}
          onPause={() => setPlay(false)}
        >
          <source src={src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      }
      <Button
        className={`rounded-circle ${styles.btnPlay}`}
        onClick={() => {
          setPlay((s) => !s)
          if (!play) {
            audio.current.play()
            return
          }
          audio.current.pause()
        }}
      >
        {play ? (
          <i class={`bi bi-pause-circle-fill ${styles.play}`}></i>
        ) : (
          <i className={`bi bi-play-circle-fill ${styles.play}`}></i>
        )}
      </Button>
      <Form>
        <Form.Group controlId="formBasicRange">
          <Form.Control
            type="range"
            className={!showVolume ? styles.hidden : ""}
            value={muted ? 0 : volume}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <Button
        onClick={() => toggleVolume()}
        // onBlur={() => setShowVolume(false)}
      >
        {volumeIcon}
      </Button>
    </>
  )
}
