import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Place = () => {
  const places = useLoaderData();
  const { name, placesId } = places;

  return (
    <div>
      <h2 className='text-3xl uppercase mb-5'>{name}</h2>
      <Link to={`/hotels/${placesId}`} className='px-2 py-2 bg-orange-400 rounded-md '>Start Booking</Link>
    </div>
  );
};

export default Place;