import React from 'react'

const DoctorHero = () => {
  return (
    <div className='container-fluid doctorHeroSection py-5'>
    <div className='row'>
        <div className='col-12 col-md-6  d-flex justify-content-center'>
            <img src="https://quer.vercel.app/static/media/dranita.66f4e152a5afe7abebb0.png" className='rounded-circle'/>
        </div>
        <div className='col-12 col-md-6 mt-3 d-flex flex-column justify-content-center align-items-center align-items-md-start  '>
            <div className='d-flex align-items-center'>
            <h1 className='fw-bolder'>Dr. Anita Shyam</h1>
            <p className='btn btn-primary btn-sm rounded-pill mx-2 mt-2'>Gynecologist</p>
            </div>
            <p className='fw-bolder '>Expert in Obstetrician, Gynaecologist, Infertility</p>
            <p className='fw-bolder '>100+ Cases Solved</p>
            <p className='fw-bolder'>₹ 1500 Consulting Fee</p>
            <div className='d-flex'>
            <button type="button" className="btn btn-outline-primary rounded-pill mr-2">Watch Now</button>
            <button type="button" className="btn btn-primary rounded-pill mx-2">Consult Now</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default DoctorHero