import React from 'react'

const Banner = () => {
  return (
    <div className='banner d-flex flex-column justify-content-center align-items-center' style={{height:'100vh', width:'100%', boxSizing:'border-box', backgroundPosition:'center', backgroundSize:'cover'}}>
      <h1 className='text-danger fw-bold' style={{fontFamily:'Playwrite GB S Light'}}>Happy Diwali</h1>
      <div>
        <h1 className='d-inline text-white text-uppercase'>Carnival</h1>
        <h1 className='d-inline text-uppercase text-white ms-2'>Chandigarh</h1>
      </div>
    </div>
  )
}

export default Banner