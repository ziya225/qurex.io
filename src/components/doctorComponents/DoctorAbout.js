import React, { useEffect, useState } from 'react';
import DoctorData from './DoctorData';

const DoctorAbout = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [dectorDetails, setDectorDetails] = useState('');
  const [data, setData] = useState({});

  // console.log(dectorDetails, "hoho");
  function tConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }
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
    <div className="container mt-3 mb-5">
      <h3>About Doctor</h3>
      <select>
        <option value={'AM'} className="outline-none">
          AM
        </option>
      </select>
      <div className="row justify-content-between">
        <div className="col-12 col-lg-8">
          <p>
            {data?.professionalDetail?.about}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="border-0 bg-white fw-bolder"
            >
              Show {`${!showDetails ? 'More' : 'Less'}`}
            </button>
          </p>
          {showDetails && (
            <div className="row mb-4">
              <div className="col-12 col-md-5 mb-2 mx-auto rounded d-flex flex-column doctorMoreSection">
                <h3 className="m-2 mb-5">Experience</h3>

                {data?.experience.map((item, index) => (
                  <>
                    <div className="d-flex mb-2">
                      <div className="col-2 col-lg-2  text-center">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMYSURBVHgBzZmxUttAEIZXxg2dQ0vjzNAyOA0toqNMWpokPYPtJ4hCSxEZaJmQJ6Cli/0GZmiZiVLQEnVU4Py/dOeRZUk+SYfNN3OWrTvJv3bv9u5WjlSk15u4Ly+y4zji4mcHpaUKCVEClslEbhsNGfq+M5QKOGUaQ1QLoroQ1UuIMSVAGeLa7xAbmF5kJJDCYIlv/Cp2uDIVulDg8fGEFvOkvMUWQfd7Z2fOr6JGhQK73ckPsWe1PPzBwOnnVWYKVC69xldXlsMYXtqHy8N0RSOrNcT9luWJIx1lkDnmBCq3dmT5uOq/Z5hxMVz7BU/yU1YIwlj//Nzx9e+pQIhrK9e2ZbWE6I/vdX+cuhjKPVm9OKJjbkRkQWW9P1KSjQ2Rw0ORra3s+sdHkYuL+FgWWPEdrRhZUFmvNNvb+eIIH2BvTyoBTVH8bfIDaivdZn09Pj48iFynggSF8QF0m7JAUxcHz+GqRA2OhWiL6D/d3IzL05PI3d1sW1qW7ene+/v4HNuNRuYuZ/BuwpSuY7imOTqK/zQNBe/uSu5DJev4/eQkFruI52fpNCBuRwzJElcWPoyp27nW5CBpiyXYF7U7bUDjWRPIfnV6GocViyJbFGh7nWeTVlNqwtGbDjGXl3E/OzjIHzymUCDnvMpW5GhMhw2eyzpfgbC2QMY7TncUpC1Jy3HEF80yhgTsg2OpgY5znDU0FMZzdcMSJpC/DNQj7Fs/Sk2SwdpGvFSMm2trMobS2lAgXW0TbvgbascfmlxgMj1ZvE9AbdFyCxYcmFzBib4uNzfGAof80AtWrmL/yRtCLfujUSxcuZpacUlc6bTIdE+CDumJYV98ZQLmbfSPqUBaMVmxKpivSSaVZjbuqPBX6WoYaJBOJmWupbHDX3bqg4yRRPqQPpmZm8GTfJKaU2BJmNjcz6oo3I0gN+ir3dWrQbeia+Wm+BpFF6M/9HCDrxKnb23DQdkvEkdMU8Btbu5xw89iAVoNBy8rHzjXVkqQEMqNflvKESphvokwTSmBSdRrCFdtW9uqJF9DsHClNMQkcFv1NcR/p4gbURaPf1UAAAAASUVORK5CYII=" />
                      </div>

                      <div className="col ">
                        <h5 className="fw-bolder">{item?.hospitalName}</h5>
                        <p>{item?.designation}</p>
                        <p className="text-muted">{item?.from}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div className="col-12 col-md-5 mb-2 mx-auto rounded d-flex flex-column doctorMoreSection">
                <h3 className="m-2 mb-5">Awards & Affiliations</h3>

                {data?.awards.map((item, index) => (
                  <>
                    <div className="d-flex mb-2">
                      <div className="col-2 col-lg-2  text-center">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMYSURBVHgBzZmxUttAEIZXxg2dQ0vjzNAyOA0toqNMWpokPYPtJ4hCSxEZaJmQJ6Cli/0GZmiZiVLQEnVU4Py/dOeRZUk+SYfNN3OWrTvJv3bv9u5WjlSk15u4Ly+y4zji4mcHpaUKCVEClslEbhsNGfq+M5QKOGUaQ1QLoroQ1UuIMSVAGeLa7xAbmF5kJJDCYIlv/Cp2uDIVulDg8fGEFvOkvMUWQfd7Z2fOr6JGhQK73ckPsWe1PPzBwOnnVWYKVC69xldXlsMYXtqHy8N0RSOrNcT9luWJIx1lkDnmBCq3dmT5uOq/Z5hxMVz7BU/yU1YIwlj//Nzx9e+pQIhrK9e2ZbWE6I/vdX+cuhjKPVm9OKJjbkRkQWW9P1KSjQ2Rw0ORra3s+sdHkYuL+FgWWPEdrRhZUFmvNNvb+eIIH2BvTyoBTVH8bfIDaivdZn09Pj48iFynggSF8QF0m7JAUxcHz+GqRA2OhWiL6D/d3IzL05PI3d1sW1qW7ene+/v4HNuNRuYuZ/BuwpSuY7imOTqK/zQNBe/uSu5DJev4/eQkFruI52fpNCBuRwzJElcWPoyp27nW5CBpiyXYF7U7bUDjWRPIfnV6GocViyJbFGh7nWeTVlNqwtGbDjGXl3E/OzjIHzymUCDnvMpW5GhMhw2eyzpfgbC2QMY7TncUpC1Jy3HEF80yhgTsg2OpgY5znDU0FMZzdcMSJpC/DNQj7Fs/Sk2SwdpGvFSMm2trMobS2lAgXW0TbvgbascfmlxgMj1ZvE9AbdFyCxYcmFzBib4uNzfGAof80AtWrmL/yRtCLfujUSxcuZpacUlc6bTIdE+CDumJYV98ZQLmbfSPqUBaMVmxKpivSSaVZjbuqPBX6WoYaJBOJmWupbHDX3bqg4yRRPqQPpmZm8GTfJKaU2BJmNjcz6oo3I0gN+ir3dWrQbeia+Wm+BpFF6M/9HCDrxKnb23DQdkvEkdMU8Btbu5xw89iAVoNBy8rHzjXVkqQEMqNflvKESphvokwTSmBSdRrCFdtW9uqJF9DsHClNMQkcFv1NcR/p4gbURaPf1UAAAAASUVORK5CYII=" />
                      </div>

                      <div className="col ">
                        <h5 className="fw-bolder">{item?.name}</h5>
                        <p>{item?.designation}</p>
                        <p className="text-muted">{item?.year}</p>
                      </div>
                    </div>
                  </>
                ))}

                {data?.affiliation.map((item, index) => (
                  <>
                    <div className="d-flex mb-2">
                      <div className="col-2 col-lg-2  text-center">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMYSURBVHgBzZmxUttAEIZXxg2dQ0vjzNAyOA0toqNMWpokPYPtJ4hCSxEZaJmQJ6Cli/0GZmiZiVLQEnVU4Py/dOeRZUk+SYfNN3OWrTvJv3bv9u5WjlSk15u4Ly+y4zji4mcHpaUKCVEClslEbhsNGfq+M5QKOGUaQ1QLoroQ1UuIMSVAGeLa7xAbmF5kJJDCYIlv/Cp2uDIVulDg8fGEFvOkvMUWQfd7Z2fOr6JGhQK73ckPsWe1PPzBwOnnVWYKVC69xldXlsMYXtqHy8N0RSOrNcT9luWJIx1lkDnmBCq3dmT5uOq/Z5hxMVz7BU/yU1YIwlj//Nzx9e+pQIhrK9e2ZbWE6I/vdX+cuhjKPVm9OKJjbkRkQWW9P1KSjQ2Rw0ORra3s+sdHkYuL+FgWWPEdrRhZUFmvNNvb+eIIH2BvTyoBTVH8bfIDaivdZn09Pj48iFynggSF8QF0m7JAUxcHz+GqRA2OhWiL6D/d3IzL05PI3d1sW1qW7ene+/v4HNuNRuYuZ/BuwpSuY7imOTqK/zQNBe/uSu5DJev4/eQkFruI52fpNCBuRwzJElcWPoyp27nW5CBpiyXYF7U7bUDjWRPIfnV6GocViyJbFGh7nWeTVlNqwtGbDjGXl3E/OzjIHzymUCDnvMpW5GhMhw2eyzpfgbC2QMY7TncUpC1Jy3HEF80yhgTsg2OpgY5znDU0FMZzdcMSJpC/DNQj7Fs/Sk2SwdpGvFSMm2trMobS2lAgXW0TbvgbascfmlxgMj1ZvE9AbdFyCxYcmFzBib4uNzfGAof80AtWrmL/yRtCLfujUSxcuZpacUlc6bTIdE+CDumJYV98ZQLmbfSPqUBaMVmxKpivSSaVZjbuqPBX6WoYaJBOJmWupbHDX3bqg4yRRPqQPpmZm8GTfJKaU2BJmNjcz6oo3I0gN+ir3dWrQbeia+Wm+BpFF6M/9HCDrxKnb23DQdkvEkdMU8Btbu5xw89iAVoNBy8rHzjXVkqQEMqNflvKESphvokwTSmBSdRrCFdtW9uqJF9DsHClNMQkcFv1NcR/p4gbURaPf1UAAAAASUVORK5CYII=" />
                      </div>

                      <div className="col ">
                        <h5 className="fw-bolder">{item?.membership}</h5>
                        <p>{item?.designation}</p>
                        <p className="text-muted">{item?.year}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div className="row my-3   ">
                <div className="col rounded doctorMoreSection">
                  <h3 className="m-3">Availabilities</h3>
                  {data?.businessHours?.map((item, index) => (
                    <>
                      <div className="col-12  d-flex my-3">
                        <div className="col col-lg-3">
                          <p className="fw-bolder text-center">{item.day}</p>
                        </div>
                        <div className="col col-lg-9">
                          <p className="fw-bolder">
                            {item?.slots.map((sotitem, index) => (
                              <>
                                {tConvert(sotitem.from)} &{' '}
                                {tConvert(sotitem.to)}
                              </>
                            ))}
                          </p>
                        </div>
                      </div>
                    </>
                  ))}

                  {/* <div className="col-12  d-flex my-3">
                    <div className="col col-lg-3">
                      <p className="fw-bolder text-center">Tuesday</p>
                    </div>
                    <div className="col col-lg-9">
                      <p className="fw-bolder">
                        10:00 AM - 10.30 AM & 02:00 PM - 04:45 PM
                      </p>
                    </div>
                  </div>

                  <div className="col-12  d-flex my-3">
                    <div className="col col-lg-3">
                      <p className="fw-bolder text-center">Wednesday</p>
                    </div>
                    <div className="col col-lg-9">
                      <p className="fw-bolder">
                        10:00 AM - 10.30 AM & 02:00 PM - 04:45 PM
                      </p>
                    </div>
                  </div>
                  <div className="col-12  d-flex my-3">
                    <div className="col col-lg-3">
                      <p className="fw-bolder text-center">Thursday</p>
                    </div>
                    <div className="col col-lg-9">
                      <p className="fw-bolder">
                        10:00 AM - 10.30 AM & 02:00 PM - 04:45 PM
                      </p>
                    </div>
                  </div>
                  <div className="col-12  d-flex my-3">
                    <div className="col col-lg-3">
                      <p className="fw-bolder text-center">Friday</p>
                    </div>
                    <div className="col col-lg-9">
                      <p className="fw-bolder">
                        10:00 AM - 10.30 AM & 02:00 PM - 04:45 PM
                      </p>
                    </div>
                  </div>
                  <div className="col-12  d-flex my-3">
                    <div className="col col-lg-3">
                      <p className="fw-bolder text-center">Saturday</p>
                    </div>
                    <div className="col col-lg-9">
                      <p className="fw-bolder">
                        10:00 AM - 10.30 AM & 02:00 PM - 04:45 PM
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
              <hr />
            </div>
          )}
          <DoctorData />
        </div>
        <div className="col-12 col-lg-4">
          <div className="border shadow">
            <p className="px-4 pt-4">{data?.professionalDetail?.about}</p>
            <h5 className="p-4"> {data?.name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAbout;
