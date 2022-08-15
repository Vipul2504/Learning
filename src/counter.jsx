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

export default Counter;