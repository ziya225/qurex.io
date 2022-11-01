import { useState } from 'react';
import OTPComp from '../OTP';
const Home = () => {
  const [otpcomp, setOtpComp] = useState(false);
  const [byPass, setByPass] = useState(false);
  return (
    <div className="flex flex-col bg-white">
      {otpcomp ? (
        <OTPComp />
      ) : (
        <div className=" md:px-28 lg:px-28 xl:px-28 md:py-16 lg:py-16 xl:py-16">
          <div className="t730 text-[#1C1C1C] h-9 ">Login</div>
          <div className="t414 text-[#1C1C1C] opacity-50 h-4 mt-4">
            Welcome Back! Login to Qurex using OTP or password.
          </div>
          <div className="mt-10 t518 text-[#1C1C1C] opacity-70 flex flex-row">
            <div
              className={`cursor-pointer rounded pb-2 border-2 border-transparent ${
                byPass ? '' : 'border-b-[#1C5BD9] text-[#1C5BD9]'
              } `}
              onClick={() => setByPass(false)}
            >
              Use OTP
            </div>
            <div
              className={`ml-4 cursor-pointer rounded pb-2 border-2 border-transparent ${
                byPass ? 'border-b-[#1C5BD9] text-[#1C5BD9]' : ''
              } `}
              onClick={() => setByPass(true)}
            >
              Use Password
            </div>
          </div>
          <div className="t414 text-[#1C1C1C] mt-7">Mobile Number</div>
          <div className="mt-3">
            <input
              className="py-3 pl-2 rounded-md border w-9/12 text-[12px] font-normal text-[#666666] outline-none"
              placeholder="Please enter your mobile number"
            />
          </div>

          {byPass ? (
            <>
              <div className="mt-5 flex justify-between">
                <div className="t414 text-[#1C1C1C] ">Password</div>
                <div className="text-[#1C5BD9] t512 mr-28">
                  Forgot password?
                </div>
              </div>
              <div className="mt-3">
                <input
                  className="py-3 pl-2 rounded-md border w-9/12 text-[12px] font-normal text-[#666666] outline-none"
                  placeholder="Enter your Password"
                />
              </div>
            </>
          ) : (
            ''
          )}
          <div className="mt-2 flex flex-row">
            <div>
              <input type="checkbox" />
            </div>
            <div className="ml-3 t514 text-[#1C1C1C] ">Remember me</div>
          </div>
          <div className="">
            <button
              className="bg-[#1C5BD9] py-3 rounded-3xl w-9/12 mt-10 text-white t714"
              onClick={() => (byPass ? null : setOtpComp(true))}
            >
              Login
            </button>
          </div>
          <div className="mt-4 ml-9 flex flex-row t514 text-[#666666] ">
            <div className="">Don’t have an account? </div>
            <div className="text-[#1C5BD9] pl-1">Register here.</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;