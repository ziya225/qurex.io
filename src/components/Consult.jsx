import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import { get, headers, post } from '../api';
import { BaseSetting } from '../utils/common';

const Consult = () => {
  const drId = '6360ebd882226cefd0b8e745';
  const pId = '63517faa27034150ae8ad190';
  const [mydate, setMyDate] = useState(new Date());
  const [time, setTime] = useState('');

  const [data, setData] = useState([
    {
      time: '18:00',
      isAvailable: true,
    },
    {
      time: '18:15',
      isAvailable: true,
    },
    {
      time: '18:30',
      isAvailable: true,
    },
    {
      time: '18:45',
      isAvailable: true,
    },
    {
      time: '19:00',
      isAvailable: true,
    },
  ]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    const date = mydate;

    const [day, month, year] = date.split('-');

    const resdate = [year, month, day].join('-');
    try {
      if (navigator.onLine) {
        const response = await post(
          BaseSetting.doctorApiDomain + '/bookAppointment',
          {
            patientId: '63517faa27034150ae8ad190',
            doctorId: '6360ebd882226cefd0b8e745',
            meta: 'test',
            from: resdate + 'T' + time + ':00.000Z',
          },
          headers
        );

        // setApiData(response.data.data);
        const result = response.data;
        if (result.status == 1) {
          navigate('/confirm-payment', { state: result.data, time: time });
        } else {
          console.log(result);
        }
        // setData(result.data['02-01-2022']);
        // console.log(result.data['02-01-2022']);
      } else {
      }
    } catch (error) {}
  };

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
  const changeSelectedDate = (date) => {
    setMyDate(moment(date).format('DD-MM-YYYY'));
  };
  useEffect(() => {
    getData();
    changeSelectedDate();
    // console.log(value);
    // apiData.map((item) => console.log(item._id));
  }, []);
  const getData = async () => {
    try {
      if (navigator.onLine) {
        const response = await get(
          BaseSetting.doctorApiDomain +
            '/availableSlots/635acdb6d73dc75ae04a8217',
          headers
        );

        // setApiData(response.data.data);
        const result = response.data;
        // setData(result.data['02-01-2022']);
        // console.log(result.data['02-01-2022']);
      } else {
      }
    } catch (error) {}
  };
  return (
    <section className="consultsec">
      <div className="innerconsult">
        <div className="conleft">
          <div className="inconleft">
            <span className="slot">Slot Available On Today</span>
            <span className="gryline"></span>
            <div className="timings">
              <div className="topt grid grid-cols-3 gap-4">
                {data?.map((item) => (
                  <>
                    <button
                      className="col-span-1"
                      onClick={() => setTime(item?.time)}
                    >
                      {tConvert(item?.time)}
                    </button>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="mobnavdw">
            <span className="mobnav01">Back</span>
            <button className="mobnav02">Book now</button>
          </div>
        </div>

        <div className="conright">
          <Calendar onChange={changeSelectedDate} value={new Date()} />

          <div className="bitdiv">
            <button className="back">Back</button>
            <button className="book" onClick={handleSubmit}>
              Book now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consult;
