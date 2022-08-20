import { Component } from "react";

class CoinContainer extends Component{
    static DefaultProps = {
        coins : [
            { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
            { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
        ]
    }

    constructor(props){
        super(props)
        this.state = {
            currCoin : null,
            nFlips : 0, 
            nHeads: 0,
            nTails: 0
        }
    }
}

export default CoinContainer;