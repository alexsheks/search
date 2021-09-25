import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { MdClose } from "react-icons/md";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: ${({ sticky }) => (sticky ? "none" : "-80px")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: ${({ sticky }) => (sticky ? "none" : "sticky")};
  top: 0;
  z-index: 10;
  border-bottom: ${({ open }) => (open ? "solid 1px grey" : "none")};

  /* @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  } */
`;

export const NavContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 960px;
  margin-left: 30px;
  border-right: solid 1px grey;
  height: 50px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
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
  align-items: center;
  list-style: none;
  text-align: center;

  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  width: 121px;
`;

export const NavLinks = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 30px;
  height: inherit;
  width: inherit;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const NavbarMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: 100px;
  margin-left: 40px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 30px;
      min-width: 30px;
      width: 30px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 16px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      margin-bottom: 4px;

      &:before {
        background-color: cyan;
        border-radius: 0px, 0px, 4px, 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        opacity: 0;
        position: absolute;
        right: 0px;
        left: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserImg = styled.img`
  height: 100%;

  &:hover {
    box-shadow: 2px 2px 20px #171d33;
  }
`;

export const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

export const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    margin-top: 20px;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
export const ImgLogo = styled.img`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 100px;
`;

export const Slash = styled.div`
  border-left: solid 1px grey;
  height: 50px;
  margin-right: 50px;
`;
export const OpenedImg = styled.div`
  display: flex;
  position: relative;
  height: 30px;
  width: 30px;
  min-width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Walls Rough Thin";
  top: 15%;
  color: white;
  font-size: 35px;
  transform: rotate(-5deg);

  &:hover {
    transform: scale(1.4);
    cursor: pointer;
    text-shadow: 1px 1px 2px cyan, 0 0 1em cyan, 0 0 0.2em cyan;
  }
`;
// export const Close = styled(MdClose)`
//     height: 30px !important;
//     width: 30px !important;
//     color: white !important;

// `
export const Logo = styled.img`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 100px;
`;

export const SearchImg = styled.img`
  width: 30px;
  height: auto;

  &:hover {
    transform: scale(1.4);
    cursor: pointer;
    filter: drop-shadow(0px 0px 2px cyan);
  }
`;
