import React from 'react';

import './RandomImage.css';

const AmeotrackRadix = 36;
const FirstImageCode = '74w';
const LastImageCode = '7hh';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomImage = () => {
  const minNum = Number.parseInt(FirstImageCode, AmeotrackRadix);
  const maxNum = Number.parseInt(LastImageCode, AmeotrackRadix);
  const imageNum = getRandomInt(minNum, maxNum + 1);
  const imageCode = imageNum.toString(AmeotrackRadix);
  return `https://ameo.link/u/${imageCode}.png`;
};

const RandomImage = ({ imageURL }) => {
  return <img src={imageURL} />;
};

export default RandomImage;
