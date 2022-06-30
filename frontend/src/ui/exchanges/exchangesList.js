import { connect } from "react-redux"; 
import { Link } from "react-router-dom";
import { getExchanges } from "../../ducks/exchanges/selectors";
import { sortExchanges } from "../../ducks/exchanges/operations"
import React, { useState } from 'react';

const ExchangesList = ({exchanges, sortExchanges}) => {
    const [search, setSearch] = useState('');
    const _ = require('lodash');
    const sort = (x) => {
        const exchanges_sorted = _.chain(_.sortBy(exchanges,[x])).forEach().value()
        sortExchanges(exchanges_sorted)
    }
    const handleChange = e => {
        setSearch(e.target.value);
      };
    const filteredExchanges = exchanges.filter(exchange =>
        exchange.name.toLowerCase().includes(search.toLowerCase())
    );
    return(
        <div id="content">
            <h1>Exchanges List</h1>
            <form id="form">
              <input
                className='exchange-input'
                type='text'
                onChange={handleChange}
                placeholder='Search'
              />
            </form>
            <select id="sort" onChange={(x) => (sort(x.target.value))}>
                <option value="trust_score_rank"> -------- </option>
                <option value="trust_score_rank">Trust</option>
                <option value="name">Name</option>
                <option value="year_established">Year established</option>
                <option value="price_change_percentage_24h">Price change</option>
                <option value="trade_volume_24h_btc">Trade volume</option>
            </select>
            <div className="exchanges">
            {filteredExchanges.map(exchange => {
        return (
            <div className="exchange-container" key={exchange.id}>
                <div className='exchange-row'>
                    <div className='exchange'>
                        <Link to={`/exchanges/${exchange.id}`}>
                            <img src={exchange.image} alt="404"/>
                            <h1>{exchange.name}</h1>
                        </Link>
                        <div className='exchange-trust'>
                            <p id="trustScore">Trust score: {exchange.trust_score}/10</p>
                        </div>
                    </div>
            </div>
        </div>
        );
      })}

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        exchanges: getExchanges(state)
    };
}
const mapDispatchToProps = {
    sortExchanges
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangesList);
