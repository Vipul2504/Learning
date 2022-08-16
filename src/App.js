import { Component } from "react";
import Clock from "./Clock";
import Counter from "./counter";
import Demo from "./Demo";
import Dice from "./DiceExcercise/Dice.component";
import RollDice from "./DiceExcercise/RollDice.component";
import Random from "./Random";
import SetState from "./Setstate";
import './App.css'



class App extends Component{
    render(){
        return (
            <div className="App">
             <RollDice />
            </div>
        )
    }
}

export default App;