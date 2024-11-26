import React, { createContext, useContext, useReducer } from "react";
import { useLocalStorage } from "react-use";

// Define audio state structure
interface AudioState {
  id: string | null;
  isPlaying: boolean;
  currentTime: number;
  volume: number;
  duration: number;
}

// Actions for updating audio state
type Action =
  | { type: "SET_AUDIO"; payload: AudioState }
  | { type: "PLAY"; payload: { id: string } }
  | { type: "PAUSE" }
  | { type: "UPDATE_TIME"; payload: number }
  | { type: "SET_VOLUME"; payload: number }
    | { type: "SET_DURATION"; payload: number };
// Reducer to handle state updates
const audioReducer = (state: AudioState, action: Action): AudioState => {
  switch (action.type) {
    case "SET_AUDIO":
      return { ...action.payload };
    case "PLAY":
      return { ...state, isPlaying: true, id: action.payload.id };
    case "PAUSE":
      return { ...state, isPlaying: false };
    case "UPDATE_TIME":
      return { ...state, currentTime: action.payload };
    case "SET_VOLUME":
      return { ...state, volume: action.payload };
    case "SET_DURATION":
      return { ...state, volume: action.payload };
    default:
      return state;
  }
};

// Create context
const AudioContext = createContext<{
  state: AudioState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

// Initial state
const initialAudioState: AudioState = {
  id: null,
  isPlaying: false,
  currentTime: 0,
  volume: 1,
  duration: 0,
};

// Provider component
export const LectureProvider = ({ children }:{children: React.ReactNode}) => {
  const [storedState, setStoredState] = useLocalStorage<AudioState>(
    "audioState",
    initialAudioState
  );

  const [state, dispatch] = useReducer(
    audioReducer,
    storedState || initialAudioState
  );

  // Sync state with localStorage
  React.useEffect(() => {
    setStoredState(state);
  }, [state, setStoredState]);

  return (
    <AudioContext.Provider value={{ state, dispatch }}>
      {children}
    </AudioContext.Provider>
  );
};

// Custom hook to use the audio context
export const useLecture = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
