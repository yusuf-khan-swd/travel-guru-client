import React, { useEffect, useState } from 'react';
import Place from '../Others/Place/Place';

const Home = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch('https://travel-guru-server-tau.vercel.app/places')
      .then(res => res.json())
      .then(data => setPlaces(data))
  }, []);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 container mx-auto'>
      {
        places.map(place => <Place key={place.id} place={place}></Place>)
      }
    </div>
  );
};

export default Home;