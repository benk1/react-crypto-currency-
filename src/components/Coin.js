import React from 'react'

 
const Coin = (props) => {
  
  const {coin} = props;
      return (
        <div  className="coin"><div className="name">Name: {coin.name}</div>
        <div className="symbol">Symbol: {coin.symbol}</div>
        <div className="priceUsd">PriceUSD:{Number(coin.price_usd).toFixed(2)}</div>
        <div className="rank">Rank: {coin.rank}</div>
        <div className="changepercentage">ChangeIn7days:
          <div style={coin.percent_change_7d >=0 ? {color: "green"}:{color: "red"}}> {coin.percent_change_7d}%</div>
        </div>
        </div>
       
      )      
};

export default Coin;
