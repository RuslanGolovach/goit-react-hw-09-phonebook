import React from 'react';
import Loader from 'react-loader-spinner';

const PreLoader = () => {
  return (
    <div>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default PreLoader;
