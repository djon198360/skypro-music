/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-constructed-context-values */
import { StrictMode , useState } from "react";
import { useSelector } from "react-redux";
import AppRoutes from "./components/Routes/Routes";
import FooterRender from "./components/Footer/Footer";
import { loadingSelector } from "./Store/Selectors/music";
import { Context } from "./components/AuthForm/AuthForm";
import { PlayerRender } from "./components/Player/Player";

import * as S from "./StyledApp";

export function App() {
    const userLocal = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).username
    : false; 
  //  const [user,setUser] = useContext(userLocal);
  const [user,setUser] = useState(userLocal);

  const loading = useSelector(loadingSelector);
  const currentTrackStore = useSelector(
    (state) => state.handleTrackState.current_track
  );
  return (
    <StrictMode>
      <S.StyledWrapper>
      <Context.Provider value={[user,setUser]}>   
          <AppRoutes/>
          {currentTrackStore ? (
            <PlayerRender
              current={currentTrackStore}
              toggle="false"
              loading={loading}
            ></PlayerRender>
          ) : null}
          <FooterRender />
      
          </Context.Provider>   
             </S.StyledWrapper>
    </StrictMode>
  );
}

export default App;
