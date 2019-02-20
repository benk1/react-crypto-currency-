import React from 'react'

import Coin from "./Coin";

const Coins = (props) => {
  
    return (
    <div className="container">
    {
        props.coins.map((coin, i) => (
            <Coin key={'coin' + i} coin={coin}/>
    
    ))}
       </div>
    );
  
}

export default Coins;
