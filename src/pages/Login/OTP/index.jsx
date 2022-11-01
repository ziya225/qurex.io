import { useState } from 'react';
import DiscMsg from '../../components/DisclaimerMsg';
import LoginDetails from '../LoginDetails';

const OTP = () => {
  const [otpcomp, setOtpComp] = useState(false);
  const [byPass, setByPass] = useState(false);

  return (
    <div className="flex flex-col bg-white">
      <div className=" md:px-28 lg:px-28 xl:px-28 md:py-16 lg:py-16 xl:py-16">
        <div className="t730 text-[#1C1C1C] h-9 ">Submit OTP</div>
        <div className="t414 text-[#1C1C1C] opacity-50 h-4 mt-4">
          Please enter the OTP sent to your mobile number
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

        {byPass ? (
          <>
            <div className="t414 text-[#1C1C1C] mt-7">Mobile Number</div>
            <div className="mt-3">
              <input
                className="py-3 pl-2 rounded-md border w-9/12 text-[12px] font-normal text-[#666666] outline-none"
                placeholder="Please enter your mobile number"
              />
            </div>
            <div className="mt-5 flex justify-between">
              <div className="t414 text-[#1C1C1C] ">Password</div>
              <div className="text-[#1C5BD9] t512 mr-28">Forgot password?</div>
            </div>
            <div className="mt-3">
              <input
                className="py-3 pl-2 rounded-md border w-9/12 text-[12px] font-normal text-[#666666] outline-none"
                placeholder="Enter your Password"
              />
            </div>
          </>
        ) : (
          <div className="w-9/12 t414 text-[#1C1C1C] mt-16 grid grid-cols-4">
            <div className="col-span-1 ">
              <input
                maxlength="1"
                oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                type="text"
                className="w-12 h-12 pl-4 text-sm font-semibold border rounded-md outline-none opacity-90 "
              />
            </div>
            <div className="col-span-1 ">
              <input
                maxlength="1"
                oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                type="text"
                className="w-12 h-12 pl-4 text-sm font-semibold border rounded-md outline-none opacity-90 "
              />
            </div>
            <div className="col-span-1 ">
              <input
                maxlength="1"
                oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                type="text"
                className="w-12 h-12 pl-4 text-sm font-semibold border rounded-md outline-none opacity-90 "
              />
            </div>
            <div className="col-span-1 ">
              <input
                maxlength="1"
                oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                type="text"
                className="w-12 h-12 pl-4 text-sm font-semibold border rounded-md outline-none opacity-90 "
              />
            </div>
          </div>
        )}

        <div className="">
          <button className="bg-[#1C5BD9] py-3 rounded-3xl w-8/12 mt-16 text-white t714">
            Validate
          </button>
        </div>
        <div className="mt-5 flex flex-row t516 text-[#666666] ">
          <div className="">Didn’t receive the OTP? </div>
          <div className="text-[#1C5BD9] ">Resend</div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
