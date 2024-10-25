import React from 'react'
import img1 from '../assets/Sponsors/ajay-atul-9158-1676544753.avif'
import img2 from '../assets/Sponsors/udit-narayan.jpg'
import img3 from '../assets/Sponsors/Sunidhi_Chauhan_Voice_India.jpg'

const Sponsors = () => {
    const api=[
        {
            name:'Ajay Atul',
            img:img1,
            description:'Ajay-Atul is an Indian music composer duo comprising brothers Ajay Ashok Gogavale and Atul Ashok Gogavale.[1] They won the Best Music Direction award at the 56th National Film Awards from the Government of India for their music in the Marathi film Jogwa in 2008.[2] They made their debut in the 2015 Forbes India Celebrity 100 List securing a position of 82 and were placed 22nd in 2019.[3][4] They have composed music for many hit Marathi & Hindi films.'
        },

        {
            name:'Udit Narayan',
            img:img2,
            description:'Udit Narayan Jha (born 1 December 1955) is an Indian playback singer[3] whose songs have been featured mainly in Hindi films. He has also sung in various other languages including Telugu, Kannada, Tamil, Bengali, Sindhi, Odia, Bhojpuri, Nepali, Malayalam, Assamese, Bagheli and Maithili.[4] He has won four National Film Awards[5] and five Filmfare Awards with twenty nominations among many others. The Government of India honoured him with the Padma Shri in 2009[6] and the Padma Bhushan in 2016 for his contribution towards arts and culture.[7] As many as 21 of his tracks feature in BBCs Top 40 Bollywood Soundtracks of all time.[8]'
        },

        {
            name:'Sunidhi Chauhan',
            img:img3,
            description:'Sunidhi Chauhan is an Indian playback singer. Known for her vocal range and versatility, she has recorded songs for films in several Indian languages and received accolades including three Filmfare Awards and a Filmfare Award South.'
        }
    ]

    return (
        <div className='mx-sm-5 mx-2' id='singers' style={{width:''}}>
            <h3 className='text-center my-5'>Singers</h3>

            {
                api.map((singer, index)=>{
                    return (
                        <div className='d-flex my-sm-4 my-4 px-lg-5 border border-dark rounded-2 singersBox' key={index} style={{width:'100%', overflow:'hidden'}}>
                            <div style={{width:'30%'}} className='d-flex justify-content-center singerImg'>
                                <img src={singer.img} style={{width:'100%', height:'100%'}}></img>
                            </div>

                            <div style={{width:'70%'}} className='mx-5 mt-4 singerText'>
                                <h4>{singer.name}</h4>

                                <p>{singer.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sponsors