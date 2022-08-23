import { Component } from "react";
import { choice } from "./helper";

class Box extends Component{
    static defaultProps = {
        allColors : ['purple', "mangneta", 'voilet', "pink", "yellow"]
    }
    constructor(props){
        super(props);
        this.state = {color : choice(this.props.allColors)}
    
    }

    handleClick = () =>{

    }
    
    render(){
        return(
            <div className="Box" onClick={this.handleClick} style={{backgroundColor : this.state.color}}></div>
        )
    }
}
export default Box;