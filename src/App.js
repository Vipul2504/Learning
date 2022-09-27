import { Component } from "react";
import './App.css'
import FormCom from "./Forms/Form";
import MultipleForm from "./Forms/MultiForms";
import ShoppingList from "./Forms/ShopingListDemo/ShoppingList";




class App extends Component{
    render(){
        return (
            <div className="App">
            <ShoppingList/>
            </div>
        )
    }
}

export default App;