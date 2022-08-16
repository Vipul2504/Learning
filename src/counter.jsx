import { Component } from "react";
import { useState } from "react"

const Counter = () => {
    
    let [count, setCounter] = useState(0);

    const incr = () => {
        setCounter(count++);
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={incr}>++</button>
        </>
    )
}

// class Counter extends Component{
//     constructor(props){
//         super(props);
//         this.state = {count : 0}
//     }

//     HandleIncrement = () => {
//         this.setState({count : this.state.count + 1})
//     }

//     render(){
//         return(
//             <div>
//             <h1>{this.HandleIncrement()}</h1>
//             <h1>{this.HandleIncrement()}</h1>
//             <h1>{this.HandleIncrement()}</h1>
//             </div>
           
//         )
//     }
// }



export default Counter;