import { Component } from "react";


class ScoreKeeper extends Component{
    constructor(props){
        super(props);
        this.state = {count : 0};
    }

    singleKill = () => {
        this.setState({count: this.state.count + 1});
    }

    // doubleKill = () => {
    //     this.setState(st => {
    //         return {count : st.count + 1};
    //     })
    // }

    incrementCount(currState){
        return {count : currState.count + 3};
    }

    doubleKill =() => {
        this.setState(this.incrementCount)
    }

    resetToOne = () => {
       
        this.setState({count: this.state.count = 0})
    }

    decrement = () => {
        if (this.state.count > 0){
            this.setState(st => {
                return {count : st.count - 1};
            })
        }
        
    }

    Multiply = () => {
        if(this.state.count === 0){
            this.setState(this.singleKill)
        }
        this.setState(mu => {
            return {count : mu.count * 2}
        })
    }
    render(){
        return(
            <div>
                <h1>Your Score is {this.state.count}</h1>
                <button onClick={this.singleKill}>Click me</button>
                <button onClick={this.doubleKill}>Click me for 3</button>
                <button onClick={this.resetToOne}>Reset</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.Multiply}>Multiply By 2</button>
            </div>
        )
    }
}

export default ScoreKeeper;