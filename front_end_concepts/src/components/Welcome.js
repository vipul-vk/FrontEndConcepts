import React, { Component } from "react";

class Welcome extends Component{
    render(){
        return (
            <div>
                <h2>welcome {this.props.name}</h2>
                {this.props.children}
            </div>    
        )
    }
}

/* Destructuring of props, state in class component */
// class Welcome extends Component{
//     render(){
//         const { name, heroName } = this.props
//         const { state1, state2 } = this.state
//         return (
//             <div>
//                 <h2>welcome {name} aka {heroName} and {state1} or {state2}</h2>
//                 {this.props.children}
//             </div>    
//         )
//     }
// }
export default Welcome