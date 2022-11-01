import React, { useState } from 'react';
import { headers, post } from '../../../api';
import { BaseSetting } from '../../../utils/common';

const UPComp = () => {
  const [upInputs, setUpInputs] = useState({});
  const handleUPChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpInputs((values) => ({ ...values, [name]: value }));
  };
  const handleUPSubmit = (e) => {
    e.preventDefault();
    postUPData();
  };
  const postUPData = async () => {
    try {
      if (navigator.onLine) {
        const response = await post(
          BaseSetting.userApiDomain + '/generateOTP',
          upInputs,
          headers
        );
        // setApiData(response.data.data);
        const result = response.data;
        console.log(result);
        if (result.status == 1) {
          alert('success');
        } else {
          alert('error');
        }
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="t414 text-[#1C1C1C] mt-7">Modbile Number</div>
      <div className="mt-3">
        <input
          name="mobileNo"
          value={upInputs.name}
          onChange={handleUPChange}
          className="py-3 pl-2 rounded-md border w-9/12 text-[12px] font-normal text-[#666666] outline-none"
          placeholder="Please enter your mofbile number"
        />
      </div>
      <div className="mt-5 flex justify-between">
        <div className="t414 text-[#1C1C1C] ">Password</div>
        <div className="text-[#1C5BD9] t512 mr-28">Forgot password?</div>
      </div>
      <div className="mt-3">
        <input
          name="password"
          value={upInputs.name}
          onChange={handleUPChange}
          className="py-3 pl-2 rounded-md border w-9/12 text-[12px] font-normal text-[#666666] outline-none"
          placeholder="Enter your Password"
        />
      </div>
      <div className="mt-2 flex flex-row">
        <div>
          <input type="checkbox" />
        </div>
        <div className="ml-3 t514 text-[#1C1C1C] ">Remember me</div>
      </div>
      <div className="">
        <button
          className="bg-[#1C5BD9] py-3 rounded-3xl w-9/12 mt-10 text-white t714"
          onClick={(e) => handleUPSubmit(e)}
        >
          UP
        </button>
      </div>
    </>
  );
};

export default UPComp;
