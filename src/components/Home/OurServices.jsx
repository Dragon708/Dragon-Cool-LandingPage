import React, { useRef } from "react";
import AirCon from "../../assets/Images/ac-repair.jpg";
import Heating from "../../assets/Images/640.jpeg";
import AirFilter from "../../assets/Images/air-filter-at-home.jpg";
import Maintenance from "../../assets/Images/1-1200x675.jpeg";
import { motion } from "framer-motion";

function OurServices() {
  return (
    <div id="services" className="mx-[5%] mb-[5%]">
      <div className="text-center p-5">
        <div className="text-[#182951] mobile:text-3xl mobile:pt-[60px] p-4 text-5xl font-bold tracking-widest ">
          Our Services
        </div>
        <div className="text-[#182951] mobile:text-base  mobile:p-0 p-5 text-3xl  tracking-wide ">
          Heating and AC Repair in Miami FL, and Surrounding Areas
        </div>
      </div>
      <div className="flex flex-wrap p-2 gap-5 justify-center ">
        <div className="w-[300px] h-[300px] hover:scale-110 transition-all duration-500  rounded-2xl overflow-hidden shadow-lg">
          <div className="relative w-fit object-cover h-[250px]">
            <img
              src={AirCon}
              alt="Air Conditioner"
              className="object-cover h-full"
            />
          </div>
          <div className="px-6 py-4 text-center bg-[#182951] text-white items-center flex justify-center ">
            <div className="font-bold text-xl mb-2">Air Conditioning</div>
          </div>
        </div>
        <div className="w-[300px] h-[300px] hover:scale-110 transition-all duration-500  rounded-2xl overflow-hidden shadow-lg">
          <div className="relative w-fit object-cover h-[250px]">
            <img
              src={Heating}
              className="object-cover h-full"
              alt="Card Image"
            />
          </div>
          <div className="px-6 py-4 text-center bg-[#182951] text-white items-center flex justify-center ">
            <div className="font-bold text-xl mb-2">Heating</div>
          </div>
        </div>
        <div className="w-[300px] h-[300px] hover:scale-110 transition-all duration-500  rounded-2xl overflow-hidden shadow-lg">
          <div className="relative w-fit object-cover h-[250px]">
            <img
              src={AirFilter}
              className="object-cover h-full"
              alt="Card Image"
            />
          </div>
          <div className="px-6 py-4 text-center bg-[#182951] text-white items-center flex justify-center ">
            <div className="font-bold text-xl mb-2">Indoor Air Quality</div>
          </div>
        </div>
        <div className="w-[300px] h-[300px] hover:scale-110 transition-all duration-500  rounded-2xl overflow-hidden shadow-lg">
          <div className="relative w-fit object-cover h-[250px]">
            <img
              src={Maintenance}
              className="object-cover h-full"
              alt="Card Image"
            />
          </div>
          <div className="px-6 py-4 text-center bg-[#182951] text-white items-center flex justify-center ">
            <div className="font-bold text-xl mb-2">Maintenance</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
