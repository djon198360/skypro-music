import { StrictMode,useState } from "react";
import AppRoutes from "./components/Routes/Routes";
import * as S from "./StyledApp";

function App() {
  const user = localStorage.getItem('user')
  const [token, setToken] = useState(user)
  return (
    <StrictMode>
      <S.StyledWrapper>
        <AppRoutes token={Boolean(token)} setToken={setToken}/>
      </S.StyledWrapper>
    </StrictMode>
  );
}

export default App;
