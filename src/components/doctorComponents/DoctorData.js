import React from 'react';
import {AiOutlineCalendar} from 'react-icons/ai'
import {CiGlobe} from 'react-icons/ci'
import {SlGraduation} from 'react-icons/sl'
import {BsTelephone} from 'react-icons/bs'

const DoctorData = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <div className='d-flex'><AiOutlineCalendar size={25} color="#6F6FFF"/><p className='mx-2'>8+ years of experience</p></div>
            </div>
            <div className='col-12'>
                <div className='d-flex'><CiGlobe size={25} color="#6F6FFF"/><p className='mx-2'>Language known English, Tamil, Hindi</p></div>
            </div>
            <div className='col-12'>
                <div className='d-flex'><SlGraduation size={25} color="#6F6FFF"/><p className='mx-2'>MBBS, MD (Psychiatry)</p></div>
            </div>
            <div className='col-12'>
                <div className='d-flex'><BsTelephone size={20} color="#6F6FFF"/><p className='mx-2'>Available on chat, live, and voice</p></div>
            </div>
        </div>
    </div>
  )
}

export default DoctorData