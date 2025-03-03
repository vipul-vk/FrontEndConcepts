import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('on button click')
    }
    return (
        <div>
            <h1>Event Handling in functional component</h1>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
