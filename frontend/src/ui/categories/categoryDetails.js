import { connect } from "react-redux"; 
import { Link } from "react-router-dom";
import { getCategories } from "../../ducks/categories/selectors";
import { withRouter } from "react-router";
import { deleteCategory } from "../../ducks/categories/operations"
import { getCoins } from "../../ducks/coins/selectors";
import Coin from '../coins/coin';

const CategoryDetails = ({categories, deleteCategory, history, coins}) => {
    let id = window.location.pathname.slice(12)
    const category =  categories.find(category => category.id === id)
    return(
        <div id="content">
            <h1>{category.name}</h1>      
            <div id="coinsAmount">
                Number of coins: {category.coins.length}
            </div>
            <article>
                {category.content}
            </article>    
            <div id="buttons">
            <button onClick={() => {deleteCategory(category); history.push("/categories")}}>Delete</button>
                <Link to={`/categories/addcoins/${category.id}`}>Add Coins</Link>
                <Link to={`/categories/edit/${category.id}`}>Edit</Link>
                <button id="back" onClick={() => history.push("/categories")}>Back</button>
            </div>
            {coins.map(coin => {
                if (category.coins.includes(coin)){
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
        </div>)

}

const mapStateToProps = (state) => {
    return {
        categories: getCategories(state),
        coins: getCoins(state)
    };
}
const mapDispatchToProps = {
    deleteCategory
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryDetails));
