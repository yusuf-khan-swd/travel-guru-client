import React from 'react';
import { Link } from 'react-router-dom';

const Place = ({ place }) => {
  const { name, img, placesId } = place;
  return (
    <div className="relative">
      <img
        src={img}
        className="absolute h-full"
        alt=""
      />
      <div className="relative h-96" >
        <h2 className="z-10 p-5">
          <Link to={`/hotels/${placesId}`} className="font-bold text-3xl hover:underline">{name}</Link>
        </h2>
      </div>
    </div>
  );
};

export default Place;