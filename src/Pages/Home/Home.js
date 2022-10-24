import React, { useEffect, useState } from 'react';
import Places from '../Others/Places/Places';

const Home = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch('https://travel-guru-server-tau.vercel.app/places')
      .then(res => res.json())
      .then(data => setPlaces(data))
  }, []);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 container mx-auto p-5 m-5 border'>
      {
        places.map(place => <Places key={place.id} place={place}></Places>)
      }
    </div>
  );
};

export default Home;