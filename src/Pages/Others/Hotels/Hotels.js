import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Hotels = () => {
  const hotels = useLoaderData();
  console.log(hotels);
  return (
    <div>
      <h2>All Available  { }</h2>
    </div>
  );
};

export default Hotels;