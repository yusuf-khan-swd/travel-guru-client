import React from 'react';

const Hotel = ({ hotel }) => {
  const { img, name } = hotel;
  return (
    <div>
      <h2 className='text-2xl font-semibold'>{name}</h2>
      <img src={img} className="w-80" alt="" />
    </div>
  );
};

export default Hotel;