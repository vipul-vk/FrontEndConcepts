import React from 'react'

// function Greet(){
//     return <h1>Hello world</h1>
// }
const Greet = (props) => {
    return(
        <div>
            <h2>Hello {props.name}</h2>
            {props.children} 
        </div>
    )
}

                        /* Destructuring of props, state in functional component */

/* Destructing of props in parameter */
// const Greet = ({name, heroname}) => {
//     return(
//         <div>
//             <h2>Hello {name} a.k.a {heroname}</h2>
//             {props.children} 
//         </div>
//     )
// }

/* Destructing of props in function body */
// const Greet = (props) => {
//     const {name, heroname} = props
//     return(
//         <div>
//             <h2>Hello {name} a.k.a {heroname}</h2>
//             {props.children} 
//         </div>
//     )
// }
export default Greet