import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  opacity: 0.8;
`;

const Slide = styled.div`
  height: 100%;
  width: 100vw;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  transition: 750ms all ease-in-out;
`;

const ImageSlider = ({
  images = [],
  autoPlay = true,
  autoPlayTime = 3000,
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newSlideIndex =
        currentSlide >= images.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(newSlideIndex);
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);
  return (
    <Wrapper {...props}>
      {images.map((imageUrl, index) => (
        <Slide
          key={index}
          style={{
            backgroundImage: `url(${imageUrl})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
          }}
        ></Slide>
      ))}
    </Wrapper>
  );
};

export default ImageSlider;
