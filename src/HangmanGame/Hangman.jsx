import { Component } from "react";
import { randomWord } from "./words";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component{
    static defaultProps = {
        maxWrong : 6,
        Images : [img0, img1, img2, img3, img4, img5, img6]
    }

    constructor(props){
        super(props);
        this.state = {nWrong : 0, guessed: new Set(), answer : randomWord()};
    }

    guessedWord(){
        return this.state.answer.split("").map(itr => (this.state.guessed.has(itr) ? itr : "_"));

    }

     reset = () => {
        this.setState({
            nWrong: 0,
            guessed: new Set(),
            answer: randomWord()
        })
    }

    handleguess(evt){
        let itr = evt.target.value;
        this.setState(st => ({
            guessed : st.guessed.add(itr),
            nWrong : st.nWrong + (st.answer.includes(itr) ? 0 : 1)
        }))
    }

    generateButton =() =>{
        return ("abcdefghijklmnopqrstuvwxyz".split("").map(itr => {
            <button 
            key={itr}
            value={itr}
            onClick={this.handleguess}
            disabled={this.state.guessed.has(itr)}
            >
                {itr}
            </button>
        })
        )
    }
    render(){
        let gameOver = this.state.nWrong >= this.props.maxWrong;
        const isWinner = this.guessedWord().join("") === this.state.answer
        const alttext = `${this.state.nWrong}/${this.props.maxWrong} gusses`;
        let gamestate = this.generateButton()
        if(gameOver) gamestate = "You Loose!";
        if(isWinner) gamestate = "You Win!"
        return (
            <div className="Hangman">
                <h1>Hangman</h1>
                <img src={this.props.Images[this.state.nWrong]} alt={alttext}/>
                <p className="Hangman-word">{!gameOver ? this.guessedWord : this.state.answer}</p>
                <p className="Hangman-btns">{gamestate}</p>
                    <button id="reset" className="Hangman-reset" onClick={this.reset}>Restart</button>
            </div>
        )
    }
} 

export default Hangman;