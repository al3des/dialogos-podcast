import React from "react";

export const AudioContext = React.createContext();

export default function AudioProvider({ children }) {
  const [audioFile, setAudioFile] = React.useState(null);
  const [play, setPlay] = React.useState(true);
  return (
    <AudioContext.Provider value={{ audioFile, setAudioFile, play, setPlay }}>
      {children}
    </AudioContext.Provider>
  );
}
