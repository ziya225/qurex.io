import { useState } from 'react';
import DiscMsg from '../../components/DisclaimerMsg';
import RegisterDetails from '../RegisterDetails';

const OTP = () => {
  const [validateComp, setValidateComp] = useState(false);
  return (
    <div className="flex flex-col bg-white">
      {validateComp ? (
        <RegisterDetails />
      ) : (
        <div className=" md:px-28 lg:px-28 xl:px-28 md:py-16 lg:py-16 xl:py-16">
          <div className="t730 text-[#1C1C1C] h-9 ">Submit OTP</div>
          <div className="t414 text-[#1C1C1C] opacity-50 h-4 mt-4">
            Please enter the OTP sent to your mobile number
          </div>
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

          <div className="">
            <button
              className="bg-[#1C5BD9] py-3 rounded-3xl w-8/12 mt-16 text-white t714"
              onClick={() => setValidateComp(true)}
            >
              Validate
            </button>
          </div>
          <div className="mt-5 ml-9 flex flex-row t514 text-[#666666] ">
            <div className="">Didn’t receive the OTP? </div>
            <div className="text-[#1C5BD9] ">Resend</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OTP;
