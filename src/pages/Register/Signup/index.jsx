import { useState } from 'react';
import DiscMsg from '../../components/DisclaimerMsg';
import OTPComp from '../OTP';
import { get, headers, post, put } from '../../../api';
import { BaseSetting } from '../../../utils/common';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [inputs, setInputs] = useState({});
  const [otpcomp, setOtpComp] = useState(false);
  const [mobileNo, setMobileNo] = useState('');
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
    //console.log(inputs.mobileNo);
    try {
      setMobileNo(inputs.mobileNo);

      if (navigator.onLine) {
        const response = await post(
          BaseSetting.userApiDomain + '/generateOTP',
          inputs,
          headers
        );
        // setApiData(response.data.data);
        const result = response.data;
        console.log(result);
        if (result.status == 1) {
          setOtpComp(true);
        }
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col bg-white">
      {otpcomp ? (
        <OTPComp mobileNo={mobileNo} />
      ) : (
        <div className=" md:px-28 lg:px-28 xl:px-28 md:py-16 lg:py-16 xl:py-16">
          <div className="t730 text-[#1C1C1C] h-9 ">Sign up</div>
          <div className="t414 text-[#1C1C1C] opacity-50 h-4 mt-4">
            Welcome! Please enter your mobile number to get OTP
          </div>
          <div className="t414 text-[#1C1C1C] mt-10">Mobile Number</div>
          <div className="mt-6">
            <input
              name="mobileNo"
              value={inputs.name}
              onChange={handleChange}
              className="py-3 pl-2 rounded-md border w-9/12 text-[12px] font-normal text-[#666666] outline-none"
              placeholder="Please enter your mobile number"
            />
          </div>
          <div className="">
            <button
              className="bg-[#1C5BD9] py-3 rounded-3xl w-9/12 mt-16 text-white t714"
              onClick={(e) => handleSubmit(e)}
            >
              Get OTP
            </button>
          </div>
          <div className="mt-5  ml-9 flex flex-row t514 text-[#666666] ">
            <div className="">Already have an account?</div>
            <div className="text-[#1C5BD9] ">
              <Link className="no-underline pl-[2px]" to="/login">
                Login Here.
              </Link>
            </div>
          </div>
        </div>
      )}
      <DiscMsg />
    </div>
  );
};

export default Signup;
