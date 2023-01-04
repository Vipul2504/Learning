import { Component } from "react";

import './App.css'
import Expense from "./Components/Expense";
import ZenQuote from "./zudeo";




class App extends Component{
    render(){
        return (
            <div className="App">
          <Expense/>
            </div>
        )
    }
}

export default App;