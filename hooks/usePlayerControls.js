import { useReducer } from "react";

export default function usePlayerControls() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "TOGGLE_PLAY": {
          return {
            ...state,
            play: !state.play,
            currentTime: action.payload,
          };
        }
        case "TOGGLE_MUTE": {
          return {
            ...state,
            muted: !state.muted,
          };
        }

        case "CHANGE_VOLUME": {
          return {
            ...state,
            volume: action.payload,
          };
        }

        case "TOGGLE_VOLUME_BAR": {
          return {
            ...state,
            volumeBar: !state.volumeBar,
          };
        }

        default:
          return state;
      }
    },
    { play: false, volume: 0.7, muted: false, volumeBar: false, currentTime: 0 }
  );
  return [state, dispatch];
}
