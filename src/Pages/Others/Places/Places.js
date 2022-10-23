import React from 'react';
import { Link } from 'react-router-dom';

const Places = ({ place }) => {
  const { name, img, placesId } = place;
  return (
    <div className='text-center'>
      <img
        src={img}
        className="h-96 mx-auto"
        alt=""
      />
      <Link to={`/places/${placesId}`} className="font-bold text-3xl hover:underline ">{name}</Link>
    </div>
  );
};

export default Places;