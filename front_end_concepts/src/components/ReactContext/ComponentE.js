import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {
    static contextType = UserContext //this only workes in class component and you can only subscribe to single context using contextType
    render() {
        return (
            <div>
                component E context {this.context}
                <ComponentF/>
            </div>
        
        )
    }
}

export default ComponentE