import React, { useRef } from 'react';
import HotelsApi from './HotelsApi.jsx';
import '../index.css'

const Hotels = () => {
  const hotelImg = useRef({});

  return (
    <div style={{ width: '100%', padding: '0px 10px' }} id='hotels' className='px-sm-5'>
      <h3 className='text-center my-sm-5'>Hotels</h3>

      <div className='d-grid hotels' style={{gap:'50px', width:'100%', gridTemplateColumns:'30% 30% 30%', justifyContent:'center'}}>
        {HotelsApi.map((h) => {
          return (
            <div key={h.id} className='border rounded-1 p-2'>
              <img
                src={h.img[0]}
                id={h.id}
                style={{ width: '100%', height: '300px' }}
                ref={(el) => {
                  hotelImg.current[h.id] = el;
                }}
              />
              <br/>

              <div className='d-flex mt-2' style={{ gap: '10px' }}>
                {h.img.map((i, index) => {
                  return (
                    <span key={index}>
                      <img
                        src={i}
                        style={{ width: '40px', height: '40px', cursor: 'pointer' }}
                        onMouseEnter={() => {
                          if (hotelImg.current[h.id]) {
                            hotelImg.current[h.id].src = i;
                          }
                        }}
                      />
                    </span>
                  );
                })}
              </div>

              <h5 style={{marginTop:'10px'}}>{h.name} Rating {h.rating}</h5>
              <div>{h.address}</div>
              <div style={{ fontWeight: 'bold', fontSize: '19pt' }}>{h.price}<span className='fw-normal fs-5'> / Night</span></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hotels;