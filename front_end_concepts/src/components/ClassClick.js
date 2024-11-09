import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('click me button clicked')
    }
    render() {
        return (
            <div>
                <h1>Event Handling in classs component</h1>     
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick
