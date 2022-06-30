import { connect } from "react-redux"; 
import { Link } from "react-router-dom";
import { getCategories } from "../../ducks/categories/selectors";
import { withRouter } from "react-router";
import { getCoins } from "../../ducks/coins/selectors";
import Coin from '../coins/coin';
import { editCategory } from '../../ducks/categories/operations';


const CategoryAddCoins = ({categories, history, editCategory, coins}) => {
    let id = window.location.pathname.slice(21)
    console.log(id);
    const category =  categories.find(category => category.id === id)

    function addCoin(coin){
      const bool = category.coins.find(x => x.id === coin.id)
      if (bool){
        
      }else{
        category.coins.push(coin)
        editCategory(category)
        alert(`${coin.name} added to ${category.name}`)
      }
    }
    function deleteCoin(coin){
      const bool = category.coins.filter(x => x.id !== coin.id)
      if (bool){
        category.coins=bool
        editCategory(category)
        alert(`${coin.name} deleted from ${category.name}`)
      }else{
        
      }
    }

    return(
        <div id="content">
            <h1>{category.name}</h1>
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
            <button class="adddel" onClick={() => addCoin(coin)}>ADD</button>
            <button class="adddel" onClick={() => deleteCoin(coin)}>DELETE</button>
          </div>
          
        );
      })}
      
      </div>
    </div>)
        
}

const mapStateToProps = (state) => {
    return {
        categories: getCategories(state),
        coins: getCoins(state)
    };
}
const mapDispatchToProps = {
  editCategory
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryAddCoins));
