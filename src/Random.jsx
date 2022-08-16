import { Component } from "react";
import "./App.css"

class Random extends Component{
    constructor(props){
        super(props);
        this.state = {num : 1}
        this.getRandom = this.getRandom.bind(this)
    }

    getRandom(){
        let random = Math.floor(Math.random() * 10) + 1;
        this.setState({num : random})
    }

    render(){
        return(
            <div className="App">
                <h1>Number is {this.state.num}</h1>
                {this.state.num === 7 && <h2>You Win!!!</h2>}
                {this.state.num !== 7 && <button onClick={this.getRandom}>Random number</button>}

            </div>
        )
    }
}

export default Random