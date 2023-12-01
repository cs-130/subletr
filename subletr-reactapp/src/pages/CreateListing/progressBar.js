import React, { useContext } from 'react';
import { CreateListingContext } from '../../context/CreateListingProvider';

const ProgressBar = () => {
  const {
    progress,
  } = useContext(CreateListingContext);

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
