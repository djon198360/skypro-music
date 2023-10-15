/* eslint-disable react/jsx-no-constructed-context-values */
import { StrictMode, useState } from "react";
import { useSelector } from "react-redux";
import AppRoutes from "./components/Routes/Routes";

import { loadingSelector, currentTrackSelector } from "./Store/Selectors/music";
// "../Store/Selectors/music";

import {
  Context,
  setCurrentTrackContext,
} from "./components/AuthForm/AuthForm";

import { PlayerRender } from "./components/Player/Player";

import * as S from "./StyledApp";

export function App() {
  const userLocal = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).username
    : false;
  const [user, setUser] = useState(userLocal);
  const [currentTrack, setCurrentTrack] = useState(false);
  const loading = useSelector(loadingSelector);
  const currentTrackStore = useSelector(currentTrackSelector);
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
        {currentTrackStore ? (
          <PlayerRender
            current={currentTrackStore}
            toggle="false"
            loading={loading}
          ></PlayerRender>
        ) : null}
      </S.StyledWrapper>
    </StrictMode>
  );
}

export default App;
