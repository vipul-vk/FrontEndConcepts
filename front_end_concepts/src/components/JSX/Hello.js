import React from "react"

const Hello = () =>{

    /*Example with JSX*/
    return(
        <div className='dummyClass'>
            <h1>Hello JSX element</h1>
        </div>    
    )

    /*Example without JSX*/    
    // return React.createElement(
    //     'div',
    //     { id:'hello', className: 'dummyClass' },
    //     React.createElement('h1',null, 'hello react.createElement')
    // )
}
export default Hello