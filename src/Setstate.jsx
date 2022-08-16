import { Component } from "react";

class SetState extends Component{
    constructor(props){
        super(props);
        this.state = {count : 0}
    }
    incrementCount() {
        this.setState({count: this.state.count + 1});
      }
      
      handleSomething() {
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
      }
      
    render(){
        return(
            <div>
            <h1>Hello</h1>  
            <h2>{this.handleSomething}</h2>  
            </div>
        )
    }
} 

export default SetState;