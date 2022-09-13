import { Component } from "react";
import './App.css'
import Box from "./ColorBoxes/Box";
import Hangman from "./HangmanGame/Hangman";



class App extends Component{
    render(){
        return (
            <div className="App">
            <Hangman />
            </div>
        )
    }
}

export default App;