import React, { useState } from 'react';
import { headers, post } from '../../../api';
import { BaseSetting } from '../../../utils/common';

const OTPComp = () => {
  const [otpInputs, setOtpInputs] = useState({});
  const [otp, setOtp] = useState(false);
  const [inputs, setInputs] = useState({});
  const [mobNo, setMobNo] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };
  const postData = async () => {
    try {
      if (navigator.onLine) {
        const response = await post(
          BaseSetting.userApiDomain + '/loginViaOTP',
          {
            mobileNo: mobNo,
            otp: inputs.otp1 + inputs.otp2 + inputs.otp3 + inputs.otp4,
          },
          headers
        );
        // setApiData(response.data.data);
        const result = response.data;
        console.log(result);
        if (result.status == 1) {
          alert('Success');
        } else {
          setErrMsg(result.data);
        }
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleOTPChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOtpInputs((values) => ({ ...values, [name]: value }));
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    postOTPData();
  };
  const postOTPData = async () => {
    setMobNo(otpInputs.mobileNo);
    try {
      if (navigator.onLine) {
        const response = await post(
          BaseSetting.userApiDomain + '/generateOTP',
          otpInputs,
          headers
        );
        // setApiData(response.data.data);
        const result = response.data;
        console.log(result);
        if (result.status == 1) {
          setOtp(true);
        }
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  return otp ? (
    <>
      <div className="w-9/12 t414 text-[#1C1C1C] mt-16 grid grid-cols-4">
        <div className="col-span-1 ">
          <input
            name="otp1"
            value={inputs.name}
            onChange={handleChange}
            maxlength="1"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            type="text"
            className="w-12 h-12 pl-4 text-sm font-semibold border rounded-md outline-none opacity-90 "
          />
        </div>
        <div className="col-span-1 ">
          <input
            name="otp2"
            value={inputs.name}
            onChange={handleChange}
            maxlength="1"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            type="text"
            className="w-12 h-12 pl-4 text-sm font-semibold border rounded-md outline-none opacity-90 "
          />
        </div>
        <div className="col-span-1 ">
          <input
            name="otp3"
            value={inputs.name}
            onChange={handleChange}
            maxlength="1"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            type="text"
            className="w-12 h-12 pl-4 text-sm font-semibold border rounded-md outline-none opacity-90 "
          />
        </div>
        <div className="col-span-1 ">
          <input
            name="otp4"
            value={inputs.name}
            onChange={handleChange}
            maxlength="1"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            type="text"
            className="w-12 h-12 pl-4 text-sm font-semibold border rounded-md outline-none opacity-90 "
          />
        </div>
      </div>
      <div className="">
        <button
          className="bg-[#1C5BD9] py-3 rounded-3xl w-8/12 mt-16 text-white t714"
          onClick={(e) => handleSubmit(e)}
        >
          Validate
        </button>
      </div>
    </>
  ) : (
    <>
      <div>
        <div className="t414 text-[#1C1C1C] mt-7">Mobile Number</div>
        <div className="mt-3">
          <input
            name="mobileNo"
            value={otpInputs.name}
            onChange={handleOTPChange}
            className="py-3 pl-2 rounded-md border w-9/12 text-[12px] font-normal text-[#666666] outline-none"
            placeholder="Please enter your mobile number"
          />
        </div>
        <div>{errMsg} </div>
        <div className="">
          <button
            className="bg-[#1C5BD9] py-3 rounded-3xl w-9/12 mt-10 text-white t714"
            onClick={(e) => handleOTPSubmit(e)}
          >
            GET OTP
          </button>
        </div>
      </div>
    </>
  );
};

export default OTPComp;
