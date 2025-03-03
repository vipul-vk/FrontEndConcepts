import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }

        //option3 binding in constructor (best approach)
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message:'button CLicked'
        })
    }


    //option4 use arrow function as class propperty
    // clickHandler = () =>{
    //     this.setState({
    //         message:'button CLicked'
    //     })
    // }
    
    render() {
        return (
            <div>
                <h1>Event Binding</h1>
                <h2>{this.state.message}</h2>
                {/* option1 binding in the render method 
                <button onClick={this.clickHandler.bind(this)}>Click me</button> */}

                {/* option2 arroy function in render method
                <button onClick={() => this.clickHandler()}>Click me</button> */}

                {/* option3 binding in constructor */}
               <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default EventBind
