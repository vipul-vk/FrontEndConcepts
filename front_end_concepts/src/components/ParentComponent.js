import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(ChildName){
        // use of template litrals(``)
        alert(`hello ${this.state.parentName} from ${ChildName}`)
    }
    
    render() {
        return (
            <div>
                <h1>Methods as props</h1>
                <ChildComponent greetHandler= {this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
