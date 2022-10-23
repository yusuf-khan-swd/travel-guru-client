import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';

const Hotels = () => {
  const hotels = useLoaderData();

  return (
    <div>
      <button className='px-2 py-2 bg-orange-400 rounded-md '>Start Booking</button>
      {
        hotels.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)
      }
    </div>
  );
};

export default Hotels;