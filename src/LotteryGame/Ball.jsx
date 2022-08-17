import { Component } from "react"
import './Lottery.css'

class  Ball extends Component{
    render(){
        return(
            <div className="Ball">
                {this.props.num}
            </div>
        )
    }
}

export default Ball