import React, { Component } from "react";
import Coin from "./components/Coin";
import "./App.css";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
//import axios from "axios";
import Coins from "./components/Coins";

import Pagination from "./components/Pagination";

import { paginate } from "./utils/paginate";
const url = "https://api.coinmarketcap.com/v1/ticker/?limit=100";

const searchingFor = name => {
  return function(x) {
    return x.name.toLowerCase().includes(name.toLowerCase()) || !name;
  };
};

class App extends Component {
  state = {
    //coins: [],
    //isLoaded: false,
    name: "",
    result: [],
    pageSize: 10,
    currentPage: 1
  };

  search = e => {
    this.setState({
      name: e.target.value
    });
  };

  componentDidMount = () => {
    fetch(url)
      .then(response => response.json())
      .then(coins => {
        this.setState({
          //isLoaded: true,
          coins: coins,
          result: coins
        });
      });
  };

  sortByRank = () => {
    const data = Array.from(this.state.result);

    const sortedRank = data.sort((a, b) => Number(a.rank) - Number(b.rank));
    console.log(sortedRank);
    this.setState({
      result: sortedRank
    });
  };

  sortByName = () => {
    const data = Array.from(this.state.result);

    const sortedName = data.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      else if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      else return 0;
    });
    console.log(sortedName);
    this.setState({
      result: sortedName
    });
  };

  sortByPrice = key => {
    const data = Array.from(this.state.result);

    const sortedPrice = data.sort(
      (a, b) => Number(a.price_usd) - Number(b.price_usd)
    );

    this.setState({
      result: sortedPrice
    });
  };

  handleChange = e => {
    const key = e.target.value;
    
    const searchResult = this.state.coins.filter(searchingFor(key));
    this.setState({
      result: searchResult
    });
  };

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { result, pageSize, currentPage } = this.state;
    const allCoins = paginate(result, currentPage, pageSize);

    const newArray = result.map((coin, i) => (
      <Coin key={"coin" + i} coin={coin} />
    ));
    
    return (
      <div className="App">
        <Search handleChange={this.handleChange} newArray={newArray} />

        {
          <div className="sortBy">
            {" "}
            <p>Sort By:</p>
            <button onClick={this.sortByName}>Name</button>
            <button onClick={this.sortByPrice}>Price</button>
            <button onClick={this.sortByRank}>Rank</button>
          </div>
        }

        <div className="container">
          <Coins coins={allCoins} />
          <Pagination
            itemsCount={result.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
          
        </div>
      </div>
    );
  }
}

export default App;

