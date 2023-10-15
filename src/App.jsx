/* eslint-disable react/jsx-no-constructed-context-values */
import { StrictMode, useState } from "react";
import AppRoutes from "./components/Routes/Routes";
import {
  Context,
  setCurrentTrackContext,
} from "./components/AuthForm/AuthForm";
import * as S from "./StyledApp";

export function App() {
  const userLocal = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).username
    : false;
  const [user, setUser] = useState(userLocal);
  const [currentTrack, setCurrentTrack] = useState(false);

  return (
    <StrictMode>
      <S.StyledWrapper>
        <Context.Provider value={[user, setUser]}>
          <setCurrentTrackContext.Provider
            value={[currentTrack, setCurrentTrack]}
          >
            <AppRoutes />
          </setCurrentTrackContext.Provider>
        </Context.Provider>
      </S.StyledWrapper>
    </StrictMode>
  );
}

export default App;
