import { Component } from "react";
import './App.css'
import Box from "./ColorBoxes/Box";
import Hangman from "./HangmanGame/Hangman";
import Board from "./LightOut/Board";



class App extends Component{
    render(){
        return (
            <div className="App">
            <Board/>
            </div>
        )
    }
}

export default App;