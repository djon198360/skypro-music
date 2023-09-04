import { NavLink as NavLinkStandart } from "react-router-dom";
import { styled } from "styled-components";

export const ContainerSignup = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: rgba(0, 0, 0, 0.85);
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (439px / 2));
  opacity: 1;
`;

export const ModalFormLogin = styled.form`
  width: 366px;
  height: 439px;
  background-color: #ffffff;
  border-radius: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 43px 44px 47px 40px;

  & input:first-child {
    margin-bottom: 30px;
  }
`;

export const ModalFormLink = styled(NavLinkStandart)``;
export const ModalLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 34px;
  background-color: transparent;
`;

export const ModalLogoImg = styled.img.attrs((props) => ({
    "src": props.src
}))`
  width: 140px;
  height: auto;
`;

export const ModalInput = styled.input.attrs((props) => ({
  "type": props.type,
  "name": props.name,
  "placeholder":props.placeholder
}))`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  margin-right: 3px;
  margin-bottom: 30px;

  color: #D0CECE;
font-variant-numeric: lining-nums proportional-nums;
/* Desk • 1366/Text M */
font-family: StratosSkyeng;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 133.333% */
letter-spacing: -0.054px;

  &::-webkit-input-placeholder,
  &:-ms-input-placeholder,
  &::-ms-input-placeholder,
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
`;

export const ModalInputLogin = styled(ModalInput)`
  margin-bottom: 30px;
`;

export const ModalInputPasswordFirst = styled(ModalInput)`
`

export const ModalInputPasswordDouble = styled(ModalInput)`
`
export const ModalBtnSignupEnt = styled.button.attrs((props) => ({
    "type":props.type
}))`  width: 278px;
height: 62px;
background-color: #580EA2;
border-radius: 6px;
margin-left: 4px;
border: none;
margin-top: 30px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
&:active {
  background-color: #271A58;
}
&:hover {
  background-color: #3F007D;
}
`

export const ModalBtnSignupLink = styled(NavLinkStandart)`
 width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #FFFFFF;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

letter-spacing: -0.054px;
  `