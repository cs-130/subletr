import React from 'react';
import { useProgress } from './context';

const ProgressBar = () => {
  const { progress } = useProgress();

  const progressBarStyle = {
    width: `${progress}%`,
    backgroundColor: 'darkgreen',
    height: '20px',
  };

  return (
    <div style={progressBarStyle} />
  );
};

export default ProgressBar;
