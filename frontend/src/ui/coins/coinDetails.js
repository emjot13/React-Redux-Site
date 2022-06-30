import { connect } from "react-redux"; 
import { Link } from "react-router-dom";
import { getCoins } from "../../ducks/coins/selectors";
import { withRouter } from "react-router";
import {deleteCoin} from "../../ducks/coins/operations"

const CoinDetails = ({coins, deleteCoin, history}) => {
    let id = window.location.pathname.slice(7)
    const coin =  coins.find(coin => coin.id === id)
    return(
        <div id="content">
            <h1>{coin.name} ({coin.symbol}) #{coin.market_cap_rank}</h1>
            <img src={coin.image} alt="coin"/>
            <table id= "tables">
                <tbody id="info">
                    <tr>
                        <th>
                            {coin.symbol} price
                        </th>
                        <td>
                            {coin.current_price} $
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <th>
                            Total supply
                        </th>
                        <td>
                            {coin.total_supply}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Circulating Supply
                        </th>
                        <td>
                            {coin.circulating_supply}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            High 24h
                        </th>
                        <td>
                            {coin.high_24h} $
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Low 24h
                        </th>
                        <td>
                            {coin.low_24h} $
                        </td>
                    </tr>
                </tbody>
                <tbody id="market-cap">
                <tr>
                    <th>
                        Market Cap Rank
                    </th>
                    <td>
                        {coin.market_cap_rank}
                    </td>
                </tr>
                <tr>
                    <th>
                        Market Cap
                    </th>
                    <td>
                        {coin.market_cap} $
                    </td>
                </tr>
                <tr>
                    <th>
                        Market Cap change 24h
                    </th>
                    <td>
                        {coin.market_cap_change_24h} $
                    </td>
                </tr>
                <tr>
                    <th>
                        Market Cap change 24h percentage
                    </th>
                    <td>
                        {coin.market_cap_change_percentage_24h} %
                    </td>
                </tr>                    
                </tbody>
                <tbody id="ath/atl">
                    <tr>
                        <th>
                            Ath
                        </th>
                        <td>
                            {coin.ath} $
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Ath date
                        </th>
                        <td>
                            {coin.ath_date} 
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Ath change procentage
                        </th>
                        <td>
                            {coin.ath_change_percentage} %
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Atl
                        </th>
                        <td>
                            {coin.atl} $
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Atl date
                        </th>
                        <td>
                            {coin.atl_date} 
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Atl change procentage
                        </th>
                        <td>
                            {coin.atl_change_percentage} %
                        </td>
                    </tr>
                </tbody>
            </table>
            <div id="buttons">
            <button onClick={() => {deleteCoin(coin); history.push("/coins")}}>Delete</button>
            <Link to={`/coins/edit/${coin.id}`}>Edit</Link>
            <button id="back" onClick={() => history.push("/coins")}>Back</button>
            </div>
        </div>)

}

const mapStateToProps = (state) => {
    return {
        coins: getCoins(state)
    };
}
const mapDispatchToProps = {
    deleteCoin
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CoinDetails));
