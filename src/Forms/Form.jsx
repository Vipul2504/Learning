import { Component } from "react";

class FormCom extends Component{
    constructor(props){
        super(props);

        this.State = {username : ""};

    }

    handleclick = (e) => {
        this.setState({username:e.target.value})
    }

    handleSubmit = (e) => {
        console.log(`Ypu Typed :${this.state.username}`);
        this.setState({username: ""})
    }

    render(){
        return(
            <div>
            <h1>Form Demo</h1>
           <form onSubmit={this.handleSubmit}>
                <input type="text"
                value={this.State.username}
                onChange={this.handleclick}
                />
           </form>
            </div>
        )
    }
}

export default FormCom;