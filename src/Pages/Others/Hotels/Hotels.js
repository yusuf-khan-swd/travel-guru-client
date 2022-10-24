import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
  const hotels = useLoaderData();
  return (
    <div className='p-5'>
      <h2>All Available  {hotels.length}</h2>
      {
        hotels.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)
      }
    </div>
  );
};

export default Hotels;