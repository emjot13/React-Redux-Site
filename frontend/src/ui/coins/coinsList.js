import { connect } from "react-redux"; 
import { Link } from "react-router-dom";
import { getCoins } from "../../ducks/coins/selectors";
import Coin from './coin';
import { sortCoins } from "../../ducks/coins/operations"
import React, { useState } from 'react';

const CoinsList = ({coins, sortCoins}) => {
    const [search, setSearch] = useState('');

    const _ = require('lodash');
    const sort = (x) => {
        const coins_sorted = _.chain(_.sortBy(coins,[x])).forEach().value()
        sortCoins(coins_sorted)
    }
    const handleChange = e => {
        setSearch(e.target.value);
      };
    const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <div id="content">
            <h1>Coins List</h1>
            <form id="form">
              <input
                className='coin-input'
                type='text'
                onChange={handleChange}
                placeholder='Search'
              />
            </form>
            <select id="sort" onChange={(x) => (sort(x.target.value))}>
                <option value="market_cap_rank"> -------- </option>
                <option value="market_cap_rank">Market cap</option>
                <option value="name">Name</option>
                <option value="current_price">Current price</option>
                <option value="price_change_percentage_24h">Price change</option>
                <option value="ath_date">Ath date</option>
            </select>
            <div className="coins">
            {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            coin_id={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        coins: getCoins(state)
    };
}
const mapDispatchToProps = {
    sortCoins
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList);
