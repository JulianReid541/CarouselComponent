import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const slides = [
  {
    artist: "Coldplay",
    song: "Clocks"
  },
  {
    artist: "Lifehouse",
    song: "From Where You Are"
  },
];

const wrapper = styled.div`
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
  background: white;
`;