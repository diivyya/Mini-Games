import React, { Component } from 'react';
import Lottery from './Lottery-game/Lottery';
import CoinContainer from './Coin-Flip/CoinContainer';
import RollDice from './Roll-Dice/RollDice';
class App extends Component {
    render() {
        return(
            <div>
                <RollDice />
                <Lottery />
                <Lottery title='Jackpot' maxBalls={10} maxNum={100}  />
                <CoinContainer />
            </div>
        )
    }
}
export default App;