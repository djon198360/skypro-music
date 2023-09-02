import { styled } from "styled-components";

export const MenuItem = styled.div`
  padding: 5px 0;
  margin-bottom: 16px;
`;

export const MenuLink = styled.a.attrs((props) => ({
  href: props.href,
}))`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
