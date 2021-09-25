import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CardSlider = ({ responseValue }) => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  //   let answer = responseValue.context.split(" ");

  return (
    <Carousel {...settings}>
      {responseValue.slice(0, 20).map((book, key) => {
        return (
          <Wrap key={key}>
            <Title>TITLE</Title>
            <ContextText>
              {book.context.split(" ").slice(0, book.answer.first).join(" ") +
                " "}
              <ResponceText>
                {"" +
                  book.context
                    .split(" ")
                    .slice(book.answer.first, book.answer.second)
                    .join(" ") +
                  " "}
              </ResponceText>
              {"" +
                book.context
                  .split(" ")
                  .slice(book.answer.second, book.context.split(" ").length)
                  .join(" ")}
            </ContextText>
            <ScoreContainer>
              <Score>{book.score}</Score>
            </ScoreContainer>
          </Wrap>
        );
      })}
    </Carousel>
  );
};

// const Con = styled.div`
//   background-color: white;
//   background-image: url("/images/slider-badging.jpg");
//   width: 100%;
//   height: 100%;
//   img {
//     width: 100%;
//     height: 100%;
//   }
// `;
const Carousel = styled(Slider)`
  width: 86%;
  height: 80%;
  position: relative;
  padding: 0px;
  & > button {
    opacity: 0.5;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  /* .slick-list {
    height: 80%;
    position: relative;
  } */

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  ul {
    position: relative;
  }
  li.slick-active button:before {
    color: cyan;
  }

  /* .slick-list {
    overflow: initial;
  } */

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  /* cursor: pointer; */
  font-family: "Walls Rough Thin";
  position: relative;
  height: 500px;
  margin-top: -50px;
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 15px;
  color: white;

  padding-top: 20vh;

  /* a {
    border-radius: 4px;
    box-shadow: rgb(255 255 255 / 69%) 0px 26px 30px -10px,
      rgb(255 255 255 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative; */
  /* padding: 4px; */

  /* img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
  } */

  /* &:hover {
      padding: 0;
      border: 3px solid rgba(249, 249, 249, 0.8);
      transform: scale(1.02);
      z-index: 5;
      box-shadow: rgb(0 255 255 / 69%) 0px 26px 30px -10px,
        rgb(0 255 255 / 73%) 0px 16px 10px -10px,
        rgb(0 255 255 / 69%) 0px 6px 30px -10px;
    } */
  /* } */
`;
const Score = styled.div`
  position: relative;
  bottom: -40%;
  margin-left: 20px;
  text-align: center;
  width: 120px;
  height: 110px;
  &::before {
    content: "   ";
    z-index: -1;
    left: -0.5em;
    top: -0.1em;
    border-width: 2px;
    border-style: solid;
    border-color: cyan;
    position: absolute;
    border-right-color: transparent;
    width: 100%;
    height: 1em;
    transform: rotate(2deg);
    opacity: 0.7;
    border-radius: 80%;
    padding: 0.1em 0.25em;
  }

  &::after {
    content: "";
    z-index: -1;
    left: -0.5em;
    top: 0.1em;
    padding: 0.1em 0.25em;
    border-width: 2px;
    border-style: solid;
    border-color: cyan;
    border-left-color: transparent;
    border-top-color: transparent;
    position: absolute;
    width: 100%;
    height: 1em;
    transform: rotate(-1deg);
    opacity: 0.7;
    border-radius: 50%;
  }
`;
const ResponceText = styled.span`
  color: cyan;
`;

const ContextText = styled.div`
  font-size: 24px;
  text-align: center;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase;
  font-size: 30px;
`;

const ScoreContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  font-size: 24px;
  height: 110px;
  bottom: -5%;
  justify-content: center;
  align-items: center;
`;
export default CardSlider;
