import AboutPicture from "../../assets/Images/Diseño sdfsdfdfsin título.png";
import React from "react";
import "@fontsource/italianno";
import "@fontsource/raleway";

import "@emotion/react";
import { motion } from "framer-motion";
import Formulario from "./Formulario";

export function Committed() {
  return (
    <div className="bg-slate-200 pb-[7%]  ">
      <div>
        <div className="lg:flex sm:block md:block mobile:block px-[2%] pt-[7%] justify-between">
          <div className="lg:w-[50%] md:w-full sm:w-full mobile:w-full ">
            <div className="text-[#182951] mobile:text-3xl mobile:pt-[60px] p-4 text-5xl mobile:p-5 font-bold tracking-widest ">
              Committed To Your Comfort
            </div>
            <div className="text-[#182951] mobile:text-2xl mobile:p-2 p-5 text-3xl  tracking-wide ">
              Get Started With Your Service or Estimate Today
            </div>
            <div className="flex p-5">
              <div className="h-1 bg-[#3CCDFF] w-[20%]   flex mobile:h-1"></div>
            </div>
            <div
              style={{ fontFamily: "raleway", fontWeight: 100 }}
              className=" xl:text-xl 2xl:text-2xl tracking-wider lg:text-lg md:text-xl p-6 sm:text-lg text-[#3b3b3b]">
              Are you having issues with your heating and cooling system? Are
              you noticing with each passing year that the comfort in your home
              has gone down, but your utility bill has gone up?
              <br />
              <br />
              At Dragon-cool Repair, we take pride in providing homeowners in
              the Miami FL area with energy efficient heating and cooling
              solutions. Our team can service and repair and make or model HVAC
              system. <br />
              <br />
              Our system installation and replacement services are backed with
              impressive parts and labor warranties to keep you and your family
              comfortable for years to come!
              <br />
              <br />
              Contact the team at Dragon-cool Repair today for 24/7 AC repair
              service. Our team of trusted technicians can repair any make or
              model air conditioner and can get your system working properly
              again.
              <br />
              <br />
            </div>
            <div className="flex justify-center   ">
              <a className=" my-2 mobile:mb-4 lg:mb-0 md:mb-4 cursor-pointer duration-500 mobile:px-8 mobile:p-2 px-8 rounded-3xl mobile:text-sm bg-[#182951] text-center sm:text-xl md:text-2xl  lg:text-2xl hover:bg-[#CD1308]   text-white font-semibold py-4 sm:my-0  transition ">
                Give Us a Call
              </a>
            </div>
          </div>
          <div className="lg:w-[50%] lg:h-[50%] justify-center items-center h-fit flex md:w-full sm:w-full mobile:w-full  ">
            <img src={AboutPicture} alt="About" className="w-full rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Committed;
