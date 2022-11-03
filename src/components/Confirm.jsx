import React from 'react';
import try01 from '../assets/try01.png';
import dr01 from '../assets/drimage.png';
import cal from '../assets/cal.png';
import card from '../assets/credit-card.png';
import clock from '../assets/clock.png';
import { useLocation } from 'react-router-dom';
import logo from '../assets/pngs/doctor.png';
const Confirm = () => {
  const userData = {
    name: 'Dr Ankita',
    category: 'Gynecologist',
    treatments: ['Obstetrician', 'Gynaecologist', 'Infertility'],
  };
  const { state } = useLocation();
  console.log(state);
  const confirmPayment = () => {
    var options = {
      key: 'rzp_test_XQ6VLwgvOXG2Te', // Enter the Key ID generated from the Dashboard
      amount: state.fees, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'Qurex',
      description: 'Booking Dr Test',
      image: logo,
      order_id: state.payment.razorPayOrderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

      prefill: {
        name: 'Test Name',
        email: 'test@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
      handler: function (response) {
        console.log(response);
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    rzp1.on('payment.failed', function (response) {
      console.log(response.error);
    });
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
  // moment(date).format('DD-MM-YYYY')
  return (
    <section className="confirmpay">
      <div className="incp">
        <span className="confirmur">Confirm Your Booking</span>
        <div className="divincp">
          <div className="onediv">
            <div className="inonediv">
              <img src={dr01} alt="" />
              <span className="dff01">
                <span>
                  <span className="docname">{userData.name}</span>
                  <span className="gyno">{userData.category}</span>
                </span>

                <span className="expert">
                  Expert in{' '}
                  {userData.treatments.map((item) => (
                    <>{item} </>
                  ))}
                </span>
              </span>
            </div>
          </div>
          <div className="divt">
            <div className="indivtwoonw">
              <span className="selectedslot">Selected Slot</span>

              <div className="slotinfo">
                <span className="si01">
                  <img className="imgunfo" src={cal} alt="" />
                  <span className="infoslot01">
                    {new Date(state.from).toDateString()}
                  </span>
                </span>
                <span className="si02">
                  <img className="imgunfo" src={clock} alt="" />
                  <span className="infoslot01">
                    {tConvert(state.from.substr(11, 5))}
                  </span>
                </span>
                <span className="si03">
                  <img className="imgunfo" src={card} alt="" />
                  <span className="infoslot01">
                    ₹ {state.fees} Consulting Fee
                  </span>
                  <span className="infoslot02">
                    ( 30% Discount for Qurex User)
                  </span>
                </span>
              </div>
            </div>
            <div></div>
          </div>
          <div className="divthree">
            <div className="indivthr">
              <span>
                <img src={try01} alt="" />
                <a href="/">Change Slot</a>
              </span>

              <button className="cnpbtn" onClick={confirmPayment}>
                Confirm and pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confirm;
