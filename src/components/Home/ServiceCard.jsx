import {
  Air,
  Engineering,
  ManageHistory,
  Payment,
  Timelapse,
} from "@mui/icons-material";
import React from "react";
import "@fontsource/raleway";
import { motion } from "framer-motion";

function ServiceCard() {
  return (
    <div
      id="serviCard"
      className="  bg-[#F7F7F7] px-[10%] xl:px-[8%]  mobile:px-[3%] xl:pb-[4%] mobile:py-0">
      <div className="mobile:block grid sm:grid-cols-2 md:grid-cols-2  xl:grid-cols-4  gap-8 mt-6">
        <div className="bg-[#F7F7F7] grid justify-between items-center h-[550px] mobile:h-auto   transition-all duration-500 cursor-pointer rounded-3xl hover:shadow-2xl p-2 ">
          <div className="mb-4 text-center mobile:p-3 mobile:mb-0">
            <div className="flex justify-center items-center mobile:h-[100px] sm:h-[182px]">
              <div>
                <div className="text-red-600 text-6xl mobile:text-4xl p-2 ">
                  <ManageHistory fontSize="inherit" />
                </div>
                <div className="text-[#182951]   p-2 text-3xl mobile:text-2xl  ">
                  30 Years+ Experience
                </div>
              </div>
            </div>
            {/* <div className="h-[20px] mobile:h-0"></div> */}
            <div className="flex justify-center items-center xl:h-[264px] md:h-[200px]">
              <div className="text-slate-500 __className_f94d93 mobile:text-base  p-2 xl:text-2xl sm:text-2xl lg:text-3xl mb-2 tracking-wide ">
                We have more than 30 years of experience in HVAC Repairs
              </div>
            </div>
          </div>

          {/* <div className="h-[40px]  mobile:h-0"></div> */}

          <div className="flex justify-center __className_f94d93 h-[54] p-1   ">
            <div className=" my-2  cursor-pointer duration-500 lg:px-2  p-2 py-3 rounded-3xl mobile:text-sm bg-[#182951] text-center sm:text-xl  hover:bg-[#CD1308] tracking-widest text-white    transition ">
              <a>Request Service</a>
            </div>
          </div>
        </div>
        <div className="bg-[#F7F7F7] grid justify-between items-center h-[550px] mobile:h-auto   transition-all duration-500 cursor-pointer rounded-3xl hover:shadow-2xl p-2 ">
          <div className="mb-4 text-center mobile:p-3 mobile:mb-0">
            <div className="flex justify-center items-center mobile:h-[100px] sm:h-[182px]">
              <div>
                <div className="text-red-600 text-6xl mobile:text-4xl p-2 ">
                  <Payment fontSize="inherit" />
                </div>
                <div className="text-[#182951]   p-2 text-3xl mobile:text-2xl mb-2 ">
                  Financing Available
                </div>
              </div>
            </div>
            {/* <div className="h-[50px] mobile:h-0"></div> */}
            <div className="flex justify-center items-center xl:h-[264px] md:h-[200px]">
              <div className="text-slate-500 __className_f94d93 mobile:text-base  p-2 xl:text-2xl sm:text-2xl lg:text-3xl mb-3 tracking-wide ">
                Working with your lifestyle and your budget. No Hidden Cost
              </div>
            </div>
          </div>
          {/* <div className="h-[50px] mobile:h-0"></div> */}

          <div className="flex justify-center __className_f94d93 h-[54] p-1   ">
            <div className=" my-2  cursor-pointer duration-500  lg:px-2 p-2 py-3 rounded-3xl mobile:text-sm bg-[#182951] text-center sm:text-xl  hover:bg-[#CD1308] tracking-widest text-white    transition ">
              <a>Request Service</a>
            </div>
          </div>
        </div>
        <div className="bg-[#F7F7F7] grid justify-between items-center h-[550px] mobile:h-auto   transition-all duration-500 cursor-pointer rounded-3xl hover:shadow-2xl p-2 ">
          <div className="mb-4 text-center mobile:p-3 mobile:mb-0">
            <div className="flex justify-center items-center mobile:h-[100px] sm:h-[182px]">
              <div>
                <div className="text-red-600 text-6xl mobile:text-4xl p-2 ">
                  <Engineering fontSize="inherit" />
                </div>
                <div className="text-[#182951]   p-2 text-3xl mobile:text-2xl mb-1 ">
                  All Employees trained by Dragon
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center xl:h-[264px] md:h-[200px] mobile:pt-4 ">
              <div className="text-slate-500 __className_f94d93 mobile:text-base xl:text-2xl sm:text-2xl lg:text-3xl    ">
                All our employees are specialists, and have been personally
                trained by Dragon to give the best care and service to our
                customers.
              </div>
            </div>
          </div>

          <div className="flex justify-center __className_f94d93 h-[54] p-1   ">
            <div className=" my-2  cursor-pointer duration-500 lg:px-2  p-2 py-3 rounded-3xl mobile:text-sm bg-[#182951] text-center sm:text-xl  hover:bg-[#CD1308] tracking-widest text-white    transition ">
              <a>Request Service</a>
            </div>
          </div>
        </div>
        <div className="bg-[#F7F7F7] grid justify-between mobile:justify-normal items-center h-[550px] mobile:h-auto   transition-all duration-500 cursor-pointer rounded-3xl hover:shadow-2xl p-2 ">
          <div className="mb-4 text-center mobile:p-3 mobile:mb-0">
            <div className="flex justify-center items-center mobile:h-[100px] sm:h-[182px]">
              <div>
                <div className="text-red-600 text-6xl mobile:text-4xl p-2 ">
                  <Air fontSize="inherit" />
                </div>
                <div className="text-[#182951]   p-2 text-3xl mobile:text-2xl mb-2 ">
                  R22 System Specialist
                </div>
              </div>
            </div>
            {/* <div className="h-[40px] mobile:h-0"></div> */}
            <div className="flex justify-center items-center xl:h-[264px] md:h-[200px] mobile:pt-4">
              <div className="text-slate-500 __className_f94d93 mobile:text-base  p-2 xl:text-2xl sm:text-2xl lg:text-3xl  tracking-wide ">
                HVAC Repair and Maintenance Experts
              </div>
            </div>
          </div>
          {/* <div className="h-[60px] mobile:h-0"></div> */}
          <div className="flex justify-center __className_f94d93 h-[54] p-1   ">
            <div className=" my-2  cursor-pointer duration-500 lg:px-2  p-2 py-3 rounded-3xl mobile:text-sm bg-[#182951] text-center sm:text-xl  hover:bg-[#CD1308] tracking-widest text-white    transition ">
              <a>Request Service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
