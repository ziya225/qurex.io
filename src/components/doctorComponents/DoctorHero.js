import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get, headers } from '../../api';
import { BaseSetting } from '../../utils/common';

const DoctorHero = () => {
  const [dectorDetails, setDectorDetails] = useState('');
  const [data, setData] = useState({});

  // console.log(dectorDetails, "hoho");

  const getDoctorDetails = async () => {
    let dataOBJ = {
      name: 'Dr Ankita',
      userId: 'string',
      cases: '+89',
      fees: '890',

      professionalDetail: {
        degree: 'homology',
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
          hospitalName: 'string',
          from: Date,
          to: Date,
          designation: 'String',
        },
      ],
      awards: [
        {
          name: String,
          year: Number,
        },
      ],
      affiliation: [
        {
          membership: String,
          year: Number,
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
              from: '17:00',
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
    <div className="container-fluid doctorHeroSection py-5">
      <div className="row">
        <div className="col-12 col-md-6  d-flex justify-content-center">
          <img
            src="https://quer.vercel.app/static/media/dranita.66f4e152a5afe7abebb0.png"
            className="rounded-circle"
          />
        </div>
        <div className="col-12 col-md-6 mt-3 d-flex flex-column justify-content-center align-items-center align-items-md-start  ">
          <div className="d-flex align-items-center">
            <h1 className="fw-bolder">{data.name}</h1>
            <p className="btn btn-primary btn-sm rounded-pill mx-2 mt-2">
              {data?.professionalDetail?.degree}
            </p>
          </div>
          <p className="fw-bolder flex">
            Expert in
            {/* {data.professionalDetail.treatments} */}
            {data?.professionalDetail?.treatments.map((item, index) => (
              <div className="flex"> {item},</div>
            ))}
          </p>
          <p className="fw-bolder ">{data.cases} Cases Solved</p>
          <p className="fw-bolder">₹ {data.fees} Consulting Fee</p>
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-outline-primary rounded-pill mr-2"
            >
              Watch Now
            </button>
            <Link to={'/booking-calendar'}>
              <button
                type="button"
                className="btn btn-primary rounded-pill mx-2"
              >
                Consult Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorHero;
