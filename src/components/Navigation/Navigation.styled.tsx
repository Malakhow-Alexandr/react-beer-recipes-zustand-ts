import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (max-width: 375px) {
    max-width: 375px;
  }
  @media screen and (min-width: 376px) and (max-width: 767px) {
    width: 375px;
  }
  @media screen and (min-width: 768px) and (max-width: 1219px) {
    width: 700px;
  }
  @media screen and (min-width: 1220px) and (max-width: 1439px) {
    width:1200px
  }
  @media screen and (min-width: 1440px) {
    width: 1400px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: all 250ms ease;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  &.active {
    color: white;
    background-color: #936104;
  }
  &.active:hover,
  &.active:focus {
    transform: scale(1);
  }
`;
