import React, {useState} from 'react'
import img1 from '../assets/VenueImgs/download (1).jpeg'
import img2 from '../assets/VenueImgs/download (2).jpeg'
import img3 from '../assets/VenueImgs/download.jpeg'
import img4 from '../assets/VenueImgs/images (1).jpeg'
import img5 from '../assets/VenueImgs/images1.jpeg'
import img6 from '../assets/VenueImgs/sector-34-fair-ground-chandigarh-4kw3qfrk3p.avif'
import img7 from '../assets/VenueImgs/sector-34-fair-ground-chandigarh-xidfnsz6jn-250.webp'
import img8 from '../assets/VenueImgs/wonder-carnival-c.webp'
import img9 from '../assets/VenueImgs/images.jpeg'

const Gallery = () => {
    const [images, setImages]=useState([img1, img2, img3, img4, img5, img6, img7, img8, img9])

    return (
        <div className='mx-sm-5' id='gallery' style={{width:''}}>
            <h3 className='text-center my-sm-5 my-4'>Gallery</h3>

            <div className='d-grid galleryBox justify-content-center' style={{width:'100%', gap:'40px', gridTemplateColumns:'30% 30% 30%'}}>
            {
                images.map((i, index)=>{
                    return (
                        <div key={index} className='d-flex justify-content-center rounded-1' style={{backgroundColor:'lightgray'}}>
                            <img src={i} style={{height:'300px', width:'100%', maxWidth:'100%'}} className='shadow'></img>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Gallery