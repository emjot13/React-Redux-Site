import { connect } from "react-redux"; 
import { Link } from "react-router-dom";
import { getExchanges } from "../../ducks/exchanges/selectors";
import { deleteExchange } from "../../ducks/exchanges/operations"
import { withRouter } from "react-router";
import { getCoins } from "../../ducks/coins/selectors";
import Coin from '../coins/coin';

const ExchangeDetails = ({exchanges, history, deleteExchange, coins}) => {
    let id = window.location.pathname.slice(11)
    const exchange =  exchanges.find(exchange => exchange.id === id)
    return(
        <div id="content">
            <h1>{exchange.name} (place in trust rating: {exchange.trust_score_rank})</h1>
            <img src={exchange.image} alt="exchange"/>
            <table id= "tables">
                <tbody id="info">
                    <tr>
                        <th>
                        Year established
                        </th>
                        <td>
                            {exchange.year_established}
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <th>
                            Country
                        </th>
                        <td>
                            {exchange.country}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Trust Score
                        </th>
                        <td>
                            {exchange.trust_score}/10
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Trade volume 24h
                        </th>
                        <td>
                            {parseInt(exchange.trade_volume_24h_btc)} BTC
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Page
                        </th>
                        <td>
                            <a href={exchange.url} target="_blank" rel="noreferrer">{exchange.name}</a>
                        </td>
                    </tr>
                </tbody>
            </table>
 
            <div id="buttons">
                <button onClick={() => {deleteExchange(exchange); history.push("/exchanges")}}>Delete</button>
                <Link to={`/exchanges/addcoins/${exchange.id}`}>Add Coins</Link>
                <Link to={`/exchanges/edit/${exchange.id}`}>Edit</Link>
                <button id="back" onClick={() => history.push("/exchanges")}>Back</button>
            </div>
            {coins.map(coin => {
                if (exchange.coins.includes(coin)){
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
                        </div>
                    );}})}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        exchanges: getExchanges(state),
        coins: getCoins(state)

    };
}
const mapDispatchToProps = {
    deleteExchange
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExchangeDetails));
