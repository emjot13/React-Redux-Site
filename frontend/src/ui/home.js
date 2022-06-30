import {connect } from "react-redux"; 
import { useEffect } from "react";

import { getCoins } from "../ducks/coins/selectors";
import { getCoinsList } from "../ducks/coins/operations";
import { getCategories } from "../ducks/categories/selectors";
import { getCategoriesList } from "../ducks/categories/operations";
import { getExchanges } from "../ducks/exchanges/selectors";
import { getExchangesList } from "../ducks/exchanges/operations";

const Home = ({coins, categories, getCoinsList, getCategoriesList, exchanges, getExchangesList}) => {

    useEffect(async () => {
        if(coins.length === 0) {
            await getCoinsList();
        }
        if(categories.length === 0) {
            await getCategoriesList();
        }
        if(exchanges.length === 0) {
            await getExchangesList();
        }
    }, []);
    
    return(
        <div id="content">
            <div id="home">
                <p>Hello!</p>
                <p>Welcome to your own cryptocurrencies encyclopedia.</p>
                <p>Here you can find detailed information about many popular coins and cryptocurrency exchanges, as well as a list of most cryptocurrency categories such as stable coins, DeFi or Binance Smart Chain Ecosystem.</p>
                <p>It is also possible to add coins, exchanges and categories on your own if you would like to include them in your compendium.</p>
                <p>Enjoy!</p>

                <img src="https://media.shellypalmer.com/wp-content/images/2021/04/cryptocurrencies1600.jpg" alt="Not found"></img>


            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        coins: getCoins(state),
        categories: getCategories(state),
        exchanges: getExchanges(state)
    };
}

const mapDispatchToProps = {
    getCoinsList,
    getCategoriesList,
    getExchangesList
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);