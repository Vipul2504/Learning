import { Component } from "react";
import Clock from "./Clock";
import Counter from "./counter";
import Demo from "./Demo";
import Dice from "./DiceExcercise/Dice.component";
import RollDice from "./DiceExcercise/RollDice.component";
import Random from "./Random";
import SetState from "./Setstate";
import './App.css'
import ScoreKeeper from "./ScoreKeeper";
import Lottery from "./LotteryGame/Lottery";
import Ball from "./LotteryGame/Ball";



class App extends Component{
    render(){
        return (
            <div className="App">
             <Ball nums={6}/>
            </div>
        )
    }
}

export default App;