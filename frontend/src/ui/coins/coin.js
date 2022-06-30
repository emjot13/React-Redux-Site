import React from 'react';
import { Link } from "react-router-dom";

const Coin = ({
  coin_id,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='coin-container' key={coin_id}>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <Link to={`/coins/${coin_id}`}><h1>{name}</h1></Link>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>
          <p className='coin-volume'>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Market Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Coin;
