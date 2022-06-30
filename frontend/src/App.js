import './style/App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./ui/home.js"
import CoinList from "./ui/coins/coinsList"
import CoinDetails from "./ui/coins/coinDetails"
import CategoriesList from './ui/categories/categoriesList';
import CategoryDetails from './ui/categories/categoryDetails';
import ExchangesList from './ui/exchanges/exchangesList';
import ExchangeDetails from "./ui/exchanges/exchangeDetails"
import ExchangeAdd from './ui/exchanges/exchangeAdd';
import ExchangeEdit from './ui/exchanges/exchangeEdit';
import CategoryAdd from './ui/categories/categoryAdd';
import CategoryEdit from './ui/categories/categoryEdit';
import CoinAdd from './ui/coins/coinAdd';
import CoinEdit from './ui/coins/coinEdit';
import ExchangeAddCoins from './ui/exchanges/exchangeCoins'
import CategoryAddCoins from './ui/categories/categotyCoins'


function App() {
    return (
        <Router>
            <aside>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/coins">Coins</Link>
                    </li>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>
                    <li>
                        <Link to="/exchanges">Exchanges</Link>
                    </li>
                
                <br/>
                
                    <li>
                        Add: 
                    </li>
                    <li>
                        <Link to="/coins/add">Coin</Link>
                    </li>
                    <li>
                        <Link to="/categories/add">Category</Link>
                    </li>
                    <li>
                        <Link to="/exchanges/add">Exchange</Link>
                    </li>
                </ul>
            </aside>
            <Switch>
                <Route path="/exchanges/addcoins/:id"><ExchangeAddCoins/></Route>
                <Route path="/exchanges/edit/:id"><ExchangeEdit/></Route>
                <Route path="/exchanges/add"><ExchangeAdd/></Route>
                <Route path="/exchanges/:id"><ExchangeDetails/></Route>
                <Route path="/exchanges"><ExchangesList/></Route>

                <Route path="/categories/addcoins/:id"><CategoryAddCoins/></Route>
                <Route path="/categories/edit/:id"><CategoryEdit/></Route>
                <Route path="/categories/add"><CategoryAdd/></Route>
                <Route path="/categories/:id"><CategoryDetails/></Route>
                <Route path="/categories"><CategoriesList/></Route>

                <Route path="/coins/edit/:id"><CoinEdit/></Route>
                <Route path="/coins/add"><CoinAdd/></Route>
                <Route path="/coins/:id"><CoinDetails/></Route>
                <Route path="/coins"><CoinList/></Route>
                
                <Route path="/"><Home/></Route>
            </Switch>
        </Router>
    )  
}


export default App;
