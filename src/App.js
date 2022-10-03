import { Component } from "react";
import './App.css'
import Box from "./ColorBoxMaker/Box";
import BoxList from "./ColorBoxMaker/BoxList";




class App extends Component{
    render(){
        return (
            <div className="App">
           <BoxList/>
            </div>
        )
    }
}

export default App;