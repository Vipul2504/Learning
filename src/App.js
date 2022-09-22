import { Component } from "react";
import './App.css'
import FormCom from "./Forms/Form";
import MultipleForm from "./Forms/MultiForms";




class App extends Component{
    render(){
        return (
            <div className="App">
            <FormCom/>
            <MultipleForm/>
            </div>
        )
    }
}

export default App;