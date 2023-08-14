import React from 'react'
import loader from "./Spin-0.7s-200px.gif"
const Spinner=()=>{
    return (
      <div className='text-center'>
       <img src={loader} alt="" style={{height:'50px',mixBlendMode:'hard-light'}} /> 
      </div>
    )
 
}
export default Spinner;