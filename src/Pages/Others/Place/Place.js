import React from 'react';

const Place = ({ place }) => {
  const { name, img } = place;
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt="" />
    </div>
  );
};

export default Place;