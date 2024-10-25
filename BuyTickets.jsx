import React from 'react'

const BuyTickets = () => {
  return (
    <div className='px-2 px-sm-5' id='buytickets'>
      <h3 className='text-uppercase text-center mt-sm-5 my-2'>Buy tickets</h3>

      <p className='text-center'>Singapore Carnival Entry and Haunted House are this year's majestic themes and you can buy tickets from here</p>

      <hr className='' style={{width:'5%', height:'1px', border:'3px solid red', margin:'auto'}}></hr>

      <div className='d-flex justify-content-evenly mt-5 flex-column flex-sm-row text-center text-sm-start'>
        <div className='my-4 my-sm-0 d-flex flex-column justify-content-center align-items-center'>
            <p className='text-secondary fs-5'>Singapore Carnival Entry</p>
            <p className='text-center fs-4'>50 Rs</p>

            <ul className='lh-lg'>
                <li>#chandigarhBytes</li>
                <li>#chandigarharnival</li>
                <li>#chandigarhdiaries</li>
                <li>singapore</li>
                <li>sector34</li>
            </ul>

            <button className='bg-primary rounded-2 text-white border-primary border-1 px-3' style={{width:'30%'}}>Buy</button>
        </div>

        <div className='my-4 my-sm-0 d-flex flex-column justify-content-center align-items-center'>
            <p className='text-secondary fs-5 text-center'>Haunted House</p>
            <p className='text-center fs-4'>50 Rs</p>

            <ul className='lh-lg'>
                <li>Nadeem Contractor</li>
                <li>Sadda Adda</li>
                <li>Megatech Ventures</li>
                <li>Redrobo Art</li>
                <li>Horror House</li>
            </ul>

            <button className='bg-primary rounded-2 text-white border-primary border-1 px-3' style={{width:'30%'}}>Buy</button>
        </div>
      </div>
    </div>
  )
}

export default BuyTickets