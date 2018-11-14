import React from 'react'

/*const searchingFor = (name) => {
  return function(x){
    return x.name.toLowerCase().includes(name.toLowerCase()) || !name;
  }
  }*/

 
const Coins = (props) => {
  const coins = props.coins != null
  ? props.coins.map(coin =>  {
    
      return (
       <div key={coin.id} className="coin">
          <h1 style={{color:'red'}}>Name: {coin.name}</h1>
          <h2>Price: {Number(coin.price_usd).toFixed (2)}</h2>
          <h2>Rank: {coin.rank}</h2>
          <h2> Symbol: {coin.symbol}</h2>
          <h2>perc ent: {coin.percent_change_7d}</h2>
        </div>
      );
    })
  
    : (<div><h1>something went wrong!</h1></div>)
  
return coins;
};

export default Coins;
