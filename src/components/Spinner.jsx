import React, { Component } from 'react'
import loader from "./Spin-0.7s-200px.gif"
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
       <img src={loader} alt="" style={{height:'50px',mixBlendMode:'hard-light'}} /> 
      </div>
    )
  }
}
