import React from 'react';
import try01 from '../assets/try01.png';
import dr01 from '../assets/drimage.png';
import cal from '../assets/cal.png';
import card from '../assets/credit-card.png';
import clock from '../assets/clock.png';

const Confirm = () => {
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
                  <span className="docname">Dr.Anita Shyam</span>
                  <span className="gyno">Gynecologist</span>
                </span>

                <span className="expert">
                  Expert in Obstetrician, Gynaecologist, Infertility
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
                    Wednesday, 19th October, 2022
                  </span>
                </span>
                <span className="si02">
                  <img className="imgunfo" src={clock} alt="" />
                  <span className="infoslot01">10:30 AM</span>
                </span>
                <span className="si03">
                  <img className="imgunfo" src={card} alt="" />
                  <span className="infoslot01">₹ 1500 Consulting Fee</span>
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

              <button className="cnpbtn">Confirm and pay</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confirm;
