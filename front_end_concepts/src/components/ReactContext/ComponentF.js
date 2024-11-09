import React, { Component } from 'react'
import { USerConsumer } from './userContext'

class ComponentF extends Component {
  render() {
    return (
      <USerConsumer>
          {
              (username) =>{
                return <div>Hello {username}</div>
              }
          }
      </USerConsumer>
    )
  }
}

export default ComponentF