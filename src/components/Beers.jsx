import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BeerCard from './BeerCard';
import './Beers.css'



const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(25);

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`)
      .then(res => setBeers(res.data))
      .catch(err => console.error(err));
  }, [page, perPage]);

  const beerGrid = beers.map((beer, index) => {
    return (
      <BeerCard
        key={index}
        name={beer.name}
        tagline={beer.tagline}
        imageUrl={beer.image_url}
      />
    );
  });

  return (
    <>
    <div style={{ display: 'flex'}}>
        <div style={{marginRight: '30px'}}>
            <input type="number" placeholder="Page Number" value={page} onChange={e => setPage(e.target.value)} />
        </div>
        <div>
            <input type="number" placeholder="Page Size" value={perPage} onChange={e => setPerPage(e.target.value)} />
        </div>
    </div>
    <div style={{textAlign: 'center'}}>
        <h2>Beer</h2>
    </div>
    <div className="card-grid" style={{ width: '100%', maxWidth: '800px', borderColor: 'black' }}>
    {beerGrid}
    </div>
    </>
  );

}
export default Beers;