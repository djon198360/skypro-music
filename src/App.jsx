/* eslint-disable react/jsx-no-constructed-context-values */
import { StrictMode, useState } from "react";
import AppRoutes from "./components/Routes/Routes";
import {
  Context,
  setCurrentTrackContext,
} from "./components/AuthForm/AuthForm";
import * as S from "./StyledApp";

export function App() {

   const userlocal = JSON.parse(localStorage.getItem("user")); 
 const [user, setUser] = useState( userlocal);
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
