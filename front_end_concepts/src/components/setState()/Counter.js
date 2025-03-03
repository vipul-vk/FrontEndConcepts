import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    increment(){
        // this.setState(
        //     {
        //     count: this.state.count+1
        //     },
        //     () =>{
        //         console.log('callback value', this.state.count)
        //     }
        // )
        this.setState(prevState =>(
            {
                count: prevState.count + 1
            }
        ),
        () =>{
                console.log('COUNT',this.state.count);
            }
        )

        /* if you want to use props in setState ======>*/
        
        // this.setState((prevState, props) =>({
        //     count: prevState.count + props.add
        // }))

        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <h2>Count - {this.state.count}</h2>
                <button onClick={() => this.increment()}>Increase count</button>
            </div>
        )
    }
}

export default Counter

