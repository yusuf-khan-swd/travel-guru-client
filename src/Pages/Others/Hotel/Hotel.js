import React from 'react';

const Hotel = ({ hotel }) => {
  const { name, img } = hotel;
  return (
    <div>
      <h2>All Available  {name}</h2>
      <img src={img} className="w-80" alt="" />
    </div>
  );
};

export default Hotel;