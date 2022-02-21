import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #fff;
  color: #0d1e3a;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Sora";
  font-size: 0.8em;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  color: #fed36a;
`;

export const NavLogo = styled(Link)`
  color: #0d1e3a;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  margin-left: 24px;
  fon-weight: 800;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: #0d1e3a;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;

  &.active {
    border-bottom: 3px solid #30ef9a;
  }

  &.hover {
    color: #fed36a;
  }
`;

export const UserLinks = styled(Link)`
  color: #0d1e3a;
  display: flex;

  align-items: center;
  flex-direction: row;
  height: 100%;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
`;
