import React, { Component } from 'react';
//import Coins from "./components/Coins";
import './App.css';
//import Search from "./components/Search";
const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=200';

const searchingFor = (name) => {
  return function(x){
    return x.name.toLowerCase().includes(name.toLowerCase()) || !name;
  }
  }

  
class App extends Component {

  state = {
    coins: [],
    isLoaded: false,
    name: "",
    result:[],
    
  }

   

  search  = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  componentDidMount = () => {
    fetch (url)
    .then (response => response.json ())
    .then (coins => {
      this.setState ({
        isLoaded: true,
        coins:  coins,
        result: coins,
      });
    });  
  }

  sortByRank = () => {  
    const data = Array.from(this.state.result)
    
    const sortedRank =    data.sort((a,b) => Number(a.rank) - Number(b.rank))
  
    
    console.log(sortedRank)
    this.setState({
     result: sortedRank,
    })  
  }

  sortByName = () => {  
    const data = Array.from(this.state.result)
    
    const sortedName =    data.sort((a,b) => {
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      else if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
       else return 0;
    });
    console.log(sortedName)
    this.setState({
     result: sortedName,
    })  
  }

  sortByPrice = (key) => {  
  const data = Array.from(this.state.result)
  
  const sortedPrice =    data.sort((a,b) => Number(a.price_usd) - Number(b.price_usd))
  
  this.setState({
   result: sortedPrice,
  })  
}

handleChange = (e) => {
  const key = e.target.value;
  const searchResult = this.state.coins.filter(searchingFor(key));
  this.setState({
 result: searchResult
  })

}



  

  render() {
    const {result} = this.state;
    
    const newArray = result.map((coin,i) =><div key={'coin'+i} className="coin"><div className="name">Name: {coin.name}</div>
    <div className="symbol">Symbol: {coin.symbol}</div><div className="priceUsd">PriceUSD:{Number(coin.price_usd).toFixed(2)}</div>
    <div className="rank">Rank: {coin.rank}</div>
    <div className="changepercentage">ChangeIn7days:
      <div style={coin.percent_change_7d >=0 ? {color: "green"}:{color: "red"}}>  {coin.percent_change_7d}%</div>
    </div>
    </div>)
  /*const newArray = coins.filter(searchingFor(this.state.name)).map((coin,i) =><div key={coin.id} className="coin"><h2 >Name: {coin.name}</h2>
  <h2>Symbol: {coin.symbol}</h2><h2>PriceUSD: {Number(coin.price_usd).toFixed (2)}</h2>
  <h2>Rank: {coin.rank}</h2><h2>ChangeIn7days: {coin.percent_change_7d}%</h2></div>) */

 
    return (
  <div className="App">
    
  {/*<div className="search">
    <Search handleChange={this.handleChange}/>
    </div>*/}
    <div className="header">
    <h1>Cryptocurrency </h1>
    <input type="text" ref="bitcoins"   onChange={this.handleChange} placeholder="Search Bitcoin Name" />
    <p>Sum Of Searched Coins: {newArray.length}</p>
    </div>
   
            {<div className="sortBy"> <p>Sort By:</p>
                     <button onClick={this.sortByName}>Name</button> 
                     <button onClick={this.sortByPrice}>Price</button> 
                     <button onClick={this.sortByRank}>Rank</button>          
           </div>}
   

    <div className="container">
       {newArray}
    
    {/*<div className="coins">
      <Coins coins={coins} />
  </div> */}
    </div>
</div>
    );
  }
}

export default App;

//(coin.percent_change_7d) >= 0 ? <i className="fas fa-arrow-down"></i> : <i className="fas fa-arrow-up"></i>