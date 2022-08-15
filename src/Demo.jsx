import { Component } from "react";

class Demo extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        return(
            <div>
                <h1>Hello World {this.props.colour}</h1>
            </div>
        )
    }
}

export default Demo;