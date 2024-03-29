import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const slides = [
  {
    title: "Coldplay",
    subtitle: "Clocks"
  },
  {
    title: "Lifehouse",
    subtitle: "From Where You Are"
  },
];

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 280px;
`;

const radius = "0.5rem";

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 72px;
  width: 72px;
  height 72px;
  font-size: 2rem;
  border-radius: ${radius} 0 0 ${radius};
  background: #7823fd;
  color: white;
`;

const Content = styled.div`
  position: relative;
  flex: 1 0 auto;
  border-radius: 0 ${radius} ${radius} 0;
  background: black;
`;

const Slider = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  width: 100%;
  height: 100%;
  color: white;

  transform: translateY(
    -${p => 
      p.activeIndex === 0 ? 0 : p.activeIndex * 100}%
  );

  transition: transform ease-out 0.45s;
`;

const Slide = styled.div`
  height: 72px;
`;

const VerticalCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if(activeIndex === slides.length -1) {
        setActiveIndex(0);
      }
      else {
        setActiveIndex(activeIndex + 1);
      }
    }, 3600);
    return () => clearInterval(interval);
  }, [setActiveIndex, activeIndex]);

  return (
    <Wrapper>
      <Icon>@</Icon>
      <Content>
        <Slider activeIndex={activeIndex}>
          {slides.map((s, i) => (
            <Slide index={i}>
              <div>{s.title}</div>
              <div>{s.subtitle}</div>
            </Slide>
          ))}
        </Slider>
      </Content>
    </Wrapper>
  );
};

export default VerticalCarousel;