import { Component } from "react";


class Game2 extends Component{
    state = {
        score : 99,
        GameOver: false
    }

    render(){
        return (
            <div>
                <h1>your score is {this.state.score}</h1>
            </div>
        )
    }
}

export default Game2;