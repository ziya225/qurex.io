import React from 'react';
import DoctorAbout from '../components/doctorComponents/DoctorAbout';
import DoctorHero from '../components/doctorComponents/DoctorHero';
import FeedBack from '../components/homecomponents/FeedBack';
import Footer from '../components/Footer';
import DoctorcoursesVideo from '../components/doctorComponents/DoctorcoursesVideo';

const Doctor = () => {
  return (
    <>
      <DoctorHero />
      <DoctorAbout />
      <DoctorcoursesVideo />
      <FeedBack />
      <Footer />
    </>
  );
};

export default Doctor;
