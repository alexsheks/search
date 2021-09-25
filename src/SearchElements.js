import styled from "styled-components";
import { Button } from "./ButtonElement";
export const Container = styled.div`
  position: ${({ fixed }) => (fixed ? "fixed" : "relative")};
  min-height: calc(150vh - 250px);
  height: 100%;
  overflow-x: none;

  display: block;
  margin-top: ${({ fixed }) => (fixed ? "none" : "80px")};
  width: 100%;
`;
// export const SearchBarWrapper = styled.div`
//   position: relative;
//   padding: 15px 0 0;
//   margin-top: 10px;
//   width: 100%;
// `;
// export const Label = styled.label`
//   position: absolute;
//   top: 0;
//   display: block;
//   transition: 0.2s;
//   font-size: 1rem;
//   color: #9b9b9b;
// `;
// export const SearchBar = styled.input`
//   width: 100%;
//   border: 0;
//   border-bottom: 2px solid #9b9b9b;
//   outline: 0;
//   font-size: 1.3rem;
//   color: #11998e;
//   padding: 7px 0;
//   background: transparent;
//   transition: border-color 0.2s;

//   &::placeholder {
//     color: transparent;
//     text-align: center;
//   }

//   &:placeholder-shown ~ ${Label} {
//     font-size: 1.3rem;
//     cursor: text;
//     top: 20px;
//     text-align: center;
//   }

//   &:focus {
//     padding-bottom: 6px;
//     font-weight: 700;
//     border-width: 3px;
//     border-image: linear-gradient(to right, #11998e, #38ef7d);
//     border-image-slice: 1;
//   }

//   &:focus ~ ${Label} {
//     position: absolute;
//     top: 0;
//     display: block;
//     transition: 0.2s;
//     font-size: 1rem;
//     color: #11998e;
//     font-weight: 700;
//   }

//   &:required {
//     box-shadow: none;
//   }

//   &:invalid {
//     box-shadow: none;
//   }
// `;

// export const SearchButton = styled(Button)`
//   margin-top: 20px;
//   max-width: 500px;

//   margin-left: auto;
//   margin-right: auto;
// `;

export const PopUp = styled.div`
  display: flex;

  align-content: center;
  justify-content: center;
  width: inherit;
  z-index: 10;

  /* -webkit-transition: ease-in 500ms visibility; */

  height: 100%;

  transition: opacity 500ms;
  visibility: ${({ hidden }) => (hidden ? "hidden" : "visible")};
  opacity: ${({ hidden }) => (hidden ? "0" : "1")};
  padding: none;
  background-color: black;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
`;
// export const Close = styled.div`
//   color: white;
//   align-content: flex-end;
//   padding: 10px;

//   &:hover {
//     cursor: pointer;
//     color: red;
//   }
// `;
// export const Text = styled.div`
//   align-content: flex-start;

//   margin: auto;
//   padding: auto;
// `;
// export const Card = styled.div`
//   width: 100px;
//   height: 200px;
//   font-size: x-small;
// `;
// export const CardWrapper = styled.div`
//   width: inherit;
//   height: inherit;
//   display: flex;
//   flex-direction: row;

//   padding: 15px;
//   justify-content: center;
// `;

export const Searchbar = styled.input`
  margin-right: 20px;
  font-size: 26px;
  width: 860px;
  background-color: inherit;
  transition: 0.2s;
  color: white;
  line-height: 22px;
  padding: 0px 5px;
  border: none;
  padding-top: 2px;
  outline: none;
  font-family: "Walls Rough Thin";

  &::placeholder {
    font-family: "Walls Rough Thin";
    color: rgba(255, 255, 255, 0.5);
  }
`;
