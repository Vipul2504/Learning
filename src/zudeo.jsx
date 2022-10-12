import axios from "axios";
import { Component } from "react";
import './zenquote.css'

class ZenQuote extends Component{
    constructor(props){
        super(props);
        this.state = {quote : "", isLoadind: false}
    }

    componentDidMount(){
        axios.get("https://api.github.com/zen").then(response => {
            setTimeout(
                function() {
                    this.setState({quote:response.data, isLoadind: true})
                }.bind(this),
                3000
            )
        })
    }

    render(){
        return (
            <div>
                {this.state.isLoadind ? (
                    <div>
                        <h1>Always remeber</h1>
                        <p>{this.state.quote}</p>
                    </div>
                ): (<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>)}
            </div>
        )
    }
}

export default ZenQuote