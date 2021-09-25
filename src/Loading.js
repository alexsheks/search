import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingCircle>
      <Content value={1}></Content>
      <Content value={2}></Content>
      <Content value={3}></Content>
      <Content value={4}></Content>
      <Content value={5}></Content>
      <Content value={6}></Content>
      <Content value={7}></Content>
      <Content value={8}></Content>
      <Content value={9}></Content>
      <Content value={10}></Content>
      <Content value={11}></Content>
      <Content value={12}></Content>
      <Content value={13}></Content>
      <Content value={14}></Content>
      <Content value={15}></Content>
      <Content value={16}></Content>
      <Content value={17}></Content>
      <Content value={18}></Content>
      <Content value={19}></Content>
      <Content value={20}></Content>
      <Text>Loading</Text>
    </LoadingCircle>
  );
};
const LoadingCircle = styled.div`
  position: absolute;
  top: 20%;
  padding: 0;
  margin: auto;

  width: 130px;
  height: 130px;
`;
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #001d10;
`;
const Wrapper = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
`;

const Content = styled.div`
  position: absolute;
  width: 8px;
  height: 25px;
  background: #050c09;
  left: 50%;
  border-radius: 8px;
  transform: rotate(calc(18deg * ${({ value }) => value}));
  transform-origin: 0 125px;
  animation: animate 1.9s ease-in-out infinite;
  animation-delay: calc(0.05s * ${({ value }) => value});

  @keyframes animate {
    0%,
    50% {
      background: #050c09;
      box-shadow: none;
    }

    50.1%,
    100% {
      background: cyan;
      box-shadow: 0 0 5px cyan, 0 0 15px cyan, 0 0 30px cyan, 0 0 60px cyan,
        0 0 90px cyan;
    }
  }
`;

const Text = styled.h3`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  letter-spacing: 2px;
  animation: animateText 2s ease-in-out infinite;
  animation-delay: 1s;

  @keyframes animateText {
    0%,
    50% {
      color: #050c09;
      text-shadow: none;
    }

    50.1%,
    100% {
      color: cyan;
      text-shadow: 0 0 5px cyan, 0 0 15px cyan;
    }
  }
`;

export default Loading;
