import { NavLink as NavLinkStandart } from "react-router-dom";
import { styled } from "styled-components";


export const MenuItem = styled.div`
  padding: 5px 0;
  margin-bottom: 16px;
`;

export const MenuLink = styled(NavLinkStandart)`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
