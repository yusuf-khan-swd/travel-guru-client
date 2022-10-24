import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';

const Place = () => {
  const [value, onChange] = useState(new Date());

  const places = useLoaderData();
  const { name, placesId } = places;

  return (
    <div className='p-5'>
      <Calendar onChange={onChange} value={value} />
      <h2 className='text-3xl uppercase mb-5'>{name}</h2>
      <Link to={`/hotels/${placesId}`} className='px-2 py-2 bg-orange-400 rounded-md '>Start Booking</Link>
    </div>
  );
};

export default Place;