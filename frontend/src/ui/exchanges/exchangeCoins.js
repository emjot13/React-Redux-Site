import { connect } from "react-redux"; 
import { Link } from "react-router-dom";
import { getExchanges } from "../../ducks/exchanges/selectors";
import { withRouter } from "react-router";
import { getCoins } from "../../ducks/coins/selectors";
import Coin from '../coins/coin';
import { editExchange } from '../../ducks/exchanges/operations';


const ExchangeAddCoins = ({exchanges, history, editExchange, coins}) => {
    let id = window.location.pathname.slice(20)
    const exchange =  exchanges.find(exchange => exchange.id === id)

    function addCoin(coin){
      const bool = exchange.coins.find(x => x.id === coin.id)
      if (bool){
        
      }else{
        exchange.coins.push(coin)
        editExchange(exchange)
        alert(`${coin.name} added to ${exchange.name}`)
      }
    }
    function deleteCoin(coin){
      const bool = exchange.coins.filter(x => x.id !== coin.id)
      if (bool){
        exchange.coins = bool
        editExchange(exchange)
        alert(`${coin.name} deleted from ${exchange.name}`)
      }else{
        
      }
    }

    return(
        <div id="content">
            <h1>{exchange.name} (place in trust rating: {exchange.trust_score_rank})</h1>
            <img src={exchange.image} alt="exchange"/>
            <div className="coins">
            {coins.map(coin => {
        return (
          <div key={coin.id}>
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
            <button className="adddel" onClick={() => addCoin(coin)}>ADD</button>
            <button className="adddel" onClick={() => deleteCoin(coin)}>DELETE</button>
          </div>
          
        );
      })}
      
      </div>
    </div>)
        
}

const mapStateToProps = (state) => {
    return {
        exchanges: getExchanges(state),
        coins: getCoins(state)
    };
}
const mapDispatchToProps = {
  editExchange
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExchangeAddCoins));
