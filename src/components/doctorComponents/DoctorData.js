import React, { useEffect, useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { CiGlobe } from 'react-icons/ci';
import { SlGraduation } from 'react-icons/sl';
import { BsTelephone } from 'react-icons/bs';

const DoctorData = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [dectorDetails, setDectorDetails] = useState('');
  const [data, setData] = useState({});
  const [expe, setExpe] = useState({});

  // console.log(dectorDetails, "hoho");

  const getDoctorDetails = async () => {
    let dataOBJ = {
      name: 'Dr Ankita',
      userId: 'string',
      cases: '+89',
      fees: '890',

      professionalDetail: {
        degree: 'homology ',
        treatments: [' treatment 1', 'treatment2', 'treatment 3'],
        specializations: [
          'specialization 1',
          'specialization 2',
          'specialization 3',
        ],
        treatmentRendered: ['Men', 'Women', 'Both men and women'],
        about: 'Hi, I am Ankita, I have done MBBS from XYZ College.',
      },
      education: [
        {
          degree: 'string',
          institution: 'string',
          year: Number,
        },
      ],
      experience: [
        {
          hospitalName: 'Diplomate',
          from: '2 years',
          to: Date,
          designation: 'American board of sexology',
        },
        {
          hospitalName: 'Diplomate',
          from: '2 years',
          to: Date,
          designation: 'American board of sexology',
        },
        {
          hospitalName: 'Diplomate',
          from: '2 years',
          to: Date,
          designation: 'American board of sexology',
        },
      ],
      awards: [
        {
          name: 'Diplomate',
          designation: 'American board of sexology',
          year: '2022',
        },
        {
          name: 'Diplomate',
          designation: 'American board of sexology',
          year: '2022',
        },
      ],
      affiliation: [
        {
          membership: 'Diplomate',
          designation: 'American board of sexology',
          year: '2022',
        },
      ],
      accountDetail: {
        number: String,
        bank: String,
        ifsc: String,
        holderName: String,
      },
      satisfactionCount: Number,
      punctualCount: Number,
      rating: Number,
      // blockSlots,
      consultationCount: Number,
      moneyStats: {
        earning: Number,
        loss: Number,
      },
      feeCharge: Number,
      sessionDuration: Number, // in mins
      verified: { type: Boolean, default: false },
      businessHours: [
        {
          day: 'monday',
          slots: [
            {
              from: '17:00 ',
              to: '22:00',
              _id: '63627088371c01d49f53702e',
            },
          ],
          _id: '63627088371c01d49f53702d',
        },
        {
          day: 'tuesday',
          slots: [
            {
              from: '18:00',
              to: '19:00',
              _id: '63627088371c01d49f537030',
            },
          ],
          _id: '63627088371c01d49f53702f',
        },
        {
          day: 'wednesday',
          slots: [
            {
              from: '18:00',
              to: '19:00',
              _id: '63627088371c01d49f537032',
            },
          ],
          _id: '63627088371c01d49f537031',
        },
        {
          day: 'thursday',
          slots: [
            {
              from: '18:00',
              to: '19:00',
              _id: '63627088371c01d49f537034',
            },
          ],
          _id: '63627088371c01d49f537033',
        },
        {
          day: 'friday',
          slots: [
            {
              from: '18:00',
              to: '19:00',
              _id: '63627088371c01d49f537036',
            },
          ],
          _id: '63627088371c01d49f537035',
        },
        {
          day: 'saturday',
          slots: [],
          _id: '63627088371c01d49f537037',
        },
        {
          day: 'sunday',
          slots: [],
          _id: '63627088371c01d49f537038',
        },
      ],
    };
    setData(dataOBJ);
    // try {
    //   if (navigator.onLine) {
    //     const response = await get(
    //       BaseSetting.doctorApiDomain + '/getByUserId/635acdb6d73dc75ae04a8217',
    //       headers
    //     );
    //     const result = response.data;
    //     // console.log(result, "dd");
    //     setDectorDetails(result);
    //   } else {
    //     setDectorDetails([]);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  useEffect(() => {
    getDoctorDetails();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex">
            <AiOutlineCalendar size={25} color="#6F6FFF" />
            <p className="mx-2">
              {data?.experience?.map((item, index) => (
                //   setExpe(item.from[0])
                <>{item.from[0]}</>
              ))}{' '}
              years of experience
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex">
            <CiGlobe size={25} color="#6F6FFF" />
            <p className="mx-2">Language known English, Tamil, Hindi</p>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex">
            <SlGraduation size={25} color="#6F6FFF" />
            <p className="mx-2">MBBS, MD (Psychiatry)</p>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex">
            <BsTelephone size={20} color="#6F6FFF" />
            <p className="mx-2">Available on chat, live, and voice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorData;
