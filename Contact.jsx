import React, {useState, useRef} from 'react'

const Contact = () => {
    const fnameError=useRef()
    const lnameError=useRef()
    const emailError=useRef()

    const fnameCheck=(e)=>{
        let fname=e.target.value
        
        if(fname=="")
            fnameError.current.textContent="Please enter First Name!"
        else if(fname.length<3)
            fnameError.current.textContent="Minimum 3 characters!"
        else if(fname.length>15)
            fnameError.current.textContent="Maximum 15 characters!"
        else if(/[\d\W_]+/.test(fname))
            e.target.value=fname.slice(0, fname.length-1)
        else
            fnameError.current.textContent=""
    }

    const lnameCheck=(e)=>{
        let lname=e.target.value
        
        if(lname=="")
            lnameError.current.textContent="Please enter First Name!"
        else if(lname.length<3)
            lnameError.current.textContent="Minimum 3 characters!"
        else if(lname.length>15)
            lnameError.current.textContent="Maximum 15 characters!"
        else if(/[\d\W_]+/.test(lname))
            e.target.value=lname.slice(0, lname.length-1)
        else
            lnameError.current.textContent=""
    }

    const emailCheck=(e)=>{
        let email=e.target.value

        if(/[a-z\d_$#-]{3,20}@[a-z]{3,8}.[a-z]{2,3}/i.test(email))
        {
            emailError.current.textContent=""
        }

        if(/[a-z\d_$#-]{1,2}/i.test(email)){
            emailError.current.textContent="User name must have more than 2 characters!"
        }
        if(/[a-z\d_$#-]{21,}/i.test(email)){
            emailError.current.textContent="User name must have less than 21 characters!"
        }
        if(/[a-z\d_$#-]{3,20}/i.test(email)){
            emailError.current.textContent=""
        }

        if(/[^a-z\d_$#-]{1,}/i.test(email)){
            emailError.current.textContent="Domain name can only contain alphabets, numbers, $, _, #!"
        }
        else if(/[a-z\d_$#-]{3,20}/i.test(email)){
            emailError.current.textContent=""
        }

        if(/[a-z\d_$#-]{3,20}[a-z]{3,8}./i.test(email)){
            emailError.current.textContent="Please include @!"
        }
        if(/[a-z\d_$#-]{3,20}@[a-z]{3,8}./i.test(email)){
            emailError.current.textContent=""
        }

        if(/.{3,20}@[a-z]{3,8}/i.test(email)){
            emailError.current.textContent=""
        }
        if(/.{3,20}@[a-z]{0,2}$/i.test(email)){
            emailError.current.textContent="Domain name's length must be between 3-8"
        }
        if(/.{3,20}@[a-z]{9,}/i.test(email)){
            emailError.current.textContent="Domain name's length must be between 3-8"
        }

        // if(/[a-z\d_$#-]{3,20}@[a-z]{3,8}.[a-z]{4,}/i.test(email))
        // {
        //     emailError.current.textContent="TLD's length must be between 2-3!"
        // }
        // if(/[a-z\d_$#-]{3,20}@[a-z]{3,8}.[a-z]{0,1}/i.test(email))
        // {
        //     emailError.current.textContent="TLD's length must be between 2-3!"
        // }
        // if(/[a-z\d_$#-]{3,20}@[a-z]{3,8}.[a-z]{2,3}/i.test(email))
        // {
        //     emailError.current.textContent=""
        // }

        // if(/[a-z\d_$#-]{3,20}@[a-z]{3,8}[a-z]{2,3}/i.test(email)){
        //     emailError.current.textContent="Please include .!"
        // }
        // if(/[a-z\d_$#-]{3,20}@[a-z]{3,8}./i.test(email)){
        //     emailError.current.textContent=""
        // }
        // if(/[a-z\d_$#-]{3,20}@[a-z]{3,8}.[a-z]{2,3}/i.test(email)){
        //     emailError.current.textContent=""
        // }

        // if(email.length>32)
        // {
        //     emailError.current.textContent="Maxlength can be 32!"
        // }
    }

    return (
        <div className='mx-sm-5' id='contact'>
            <h3 className='text-center my-5'>Contact</h3>

            <div id='contactForm' className='w-100'>
                <form>
                    <label className='my-3'>Full Name</label>
                    <div className='d-flex justify-content-between flex-wrap name'>
                        <input type='text' placeholder='First Name' className='' onChange={fnameCheck} style={{outline:'none', width:'48%', height:'45px'}}></input>
                        <input type='text' className='' placeholder='Last Name' onChange={lnameCheck} style={{outline:'none', width:'48%', height:'45px'}}></input>
                        <span className='text-danger' ref={fnameError} style={{width:'48%', height:'45px'}}></span>
                        <span className='text-danger' ref={lnameError} style={{width:'48%', height:'45px'}}></span>
                    </div>

                    <label className='my-3'>Email</label>
                    <input type='email' className='w-100' onChange={emailCheck} style={{outline:'none', width:'48%', height:'45px'}}></input><br/>
                    <span className='d-block text-danger' ref={emailError} style={{width:'100%', height:'45px'}}></span><br/>

                    <label className='my-3'>Message</label>
                    <textarea className='w-100' style={{height:'250px', outline:'none'}}></textarea>

                    <div className='d-flex justify-content-end my-3'>
                        <input type='submit' className=''></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact