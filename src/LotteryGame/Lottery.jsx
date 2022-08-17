import { Component } from "react";
import Ball from "./Ball";

class Lottery extends Component{
    static defaultProps = {
        title : 'Lotto', 
        MaxBalls : 6, 
        MaxNum: 40
    }

    constructor(props){
        super(props)
        this.state = { nums : Array.from({length : this.props.MaxBalls})}
    }

    generate(){
        this.setState(curState => ({
            nums: curState.nums.map(n => Math.floor(Math.random() * this.props.MaxNum) + 1)
        }))
        
    }

    handleClick =() => {
        this.generate()
    }

    render(){
        return (
            <section>
                <h1>{this.props.title}</h1>
                <div>{this.state.nums.map(n => <Ball num={n}/>)}</div>
                <button onClick={this.handleClick}>Generate</button>
            </section>
        )
    }
}

export default Lottery