import { Link } from "react-router-dom";

import React, { useState } from "react";
import {
  SearchBar,
  SearchBarWrapper,
  Label,
  Container,
  SearchButton,
  PopUp,
  Content,
  Close,
  Text,
} from "./SearchElements";

const Search = () => {
  // const [isHidden, setIsHidden] = useState(true);
  // const [inputValue, setInputValue] = useState("");
  // const [responseValue, setResponseValue] = useState();
  // const HandleSubmit = () => {
  //   setIsHidden(!isHidden);
  // };
  // const HandleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     HandleSubmit();
  //   }
  // };
  // const HandleRequest = async () => {
  //   const response = await fetch("/search", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(inputValue),
  //   });

  //   if (response.ok) {
  //     console.log("worked");
  //     setInputValue("");
  //     setResponseValue(response);
  //   }
  // };

  // const HandleTask = () => {
  //   HandleSubmit();
  //   HandleRequest();
  // };
  return (
    <Container>
      {/* <Link to="/home">
        <button>ToHome</button>
      </Link> */}
      <Link to="/">
        <button>To Page</button>
      </Link>
      {/* <SearchBarWrapper>
        <SearchBar
          placeholder="search"
          id="one"
          onKeyPress={HandleKeyPress}
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
        />
        <Label>Search</Label>
      </SearchBarWrapper>
      <SearchButton
        type="submit"
        primary={true}
        dark={true}
        big={true}
        onClick={HandleTask}
      >
        Поищем?
      </SearchButton>
      <PopUp hidden={isHidden}>
        <Content>
          <Text>{responseValue}</Text>
          <Close onClick={HandleSubmit}>X</Close>
        </Content>
      </PopUp> */}
    </Container>
  );
};

export default Search;
