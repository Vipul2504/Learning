import { Component } from "react";
import './Dice.css'
class Dice extends Component{
    constructor(props){
        super(props);
    }

    render(){
       return (
        <div className="Die">
            <i className={`Die fas fa-dice-${this.props.face}`}></i>
        </div>
       )
       
       
        
    }
} 

export default Dice