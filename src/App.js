import React, { Component } from "react";

import "./App.css";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import Coins from "./components/Coins";

import Pagination from "./components/Pagination";

import { paginate } from "./utils/paginate";
import SortBy from "./components/SortBy";
const url = "https://api.coinmarketcap.com/v1/ticker/?limit=100";

const searchingFor = name => {
  console.log('name',name)
  return function(obj) {
    //console.log(obj)
    return obj.name.toLowerCase().includes(name.toLowerCase()) || !name;
  };
};

class App extends Component {
  state = {
    filteredcoins: [],
    result: [],
    pageSize: 10,
    currentPage: 1
  };

  //  search = e => {
  //    this.setState({
  //      name: e.target.value
  //    });
  //  };

  componentDidMount = () => {
    axios.get(url).then(res => {
      console.log(res);
      this.setState({
        filteredcoins: res.data,
        result: res.data
      });
    });
  };

  sortByRankAsc = () => {
    const data = Array.from(this.state.result);

    const sortedRank = data.sort((a, b) => Number(a.rank) - Number(b.rank));
    console.log(sortedRank);
    this.setState({
      result: sortedRank
    });
  };

  sortByRankDesc = () => {
    const data = Array.from(this.state.result);

    const sortedRank = data.sort((a, b) => Number(a.rank) - Number(b.rank));
    console.log(sortedRank);
    this.setState({
      result: sortedRank.reverse()
    });
  };

  sortByNameAsc = () => {
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

  sortByNameDesc = () => {
    const data = Array.from(this.state.result);

    const sortedName = data.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      else if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      else return 0;
    });
    console.log(sortedName);
    this.setState({
      result: sortedName.reverse()
    });
  };

  sortByPriceAsc = key => {
    const data = Array.from(this.state.result);

    const sortedPrice = data.sort(
      (a, b) => Number(a.price_usd) - Number(b.price_usd)
    );

    this.setState({
      result: sortedPrice
    });
  };

  sortByPriceDesc = key => {
    const data = Array.from(this.state.result);

    const sortedPrice = data.sort(
      (a, b) => Number(a.price_usd) - Number(b.price_usd)
    );

    this.setState({
      result: sortedPrice.reverse()
    });
  };

  handleChange = e => {
    const key = e.target.value;

    const searchResult = this.state.filteredcoins.filter(searchingFor(key));
    console.log('key',key)
    this.setState({
      result: searchResult
    });
  };

  handlePageChange = page => {
    //console.log('mimi',page)
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { result, pageSize, currentPage } = this.state;

    const allCoins = paginate(result, currentPage, pageSize);
   
    
      return (
        <div className="App">
          <Search
            handleChange={this.handleChange}
            coins={result}
            result={result}
          />
          <SortBy
            sortByRankAsc={this.sortByRankAsc}
            sortByRankDesc={this.sortByRankDesc}
            sortByNameAsc={this.sortByNameAsc}
            sortByNameDesc={this.sortByNameDesc}
            sortByPriceAsc={this.sortByPriceAsc}
            sortByPriceDesc={this.sortByPriceDesc}
          />

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
