import React, {useState} from "react";

function HookCounter (){
    const initialCount = 0;
    const [count, setCount] = useState(0);
    return(
        <div>
             count is = {count}
            <button onClick={() =>setCount(initialCount)}> Reset</button>
            <button onClick={() =>setCount(prevCount => prevCount +1)}> Increase</button>
            <button onClick={() =>setCount(prevCount => prevCount -1)}> Decrease</button>
        </div>
    )
}




export default HookCounter