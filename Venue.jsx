import React from 'react'

const Venue = () => {
  return (
    <div id='venue' className='px-sm-5'>
      <h3 className='text-center py-sm-5'>Venue</h3>

      <div style={{fontSize:'14pt'}}>
        <p>
            <b>Located in: </b>Sector 34 Exhibition Ground
        </p>
        <p>
            <b>Address: </b>PQC8+663, Sector 34A, Sector 34, Chandigarh, 160022
        </p>

        <a href='https://www.google.com/maps/dir//diwali+carnival+in+chandigarh+sec+34+venue/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390fed00527d35eb:0x9e1bb8d62bdec0d2?sa=X&ved=1t:3061&ictx=111'><button className='rounded-1'>Directions</button></a>
      </div>
    </div>
  )
}

export default Venue