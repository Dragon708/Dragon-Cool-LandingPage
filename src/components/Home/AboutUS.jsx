import AboutPicture from "../../assets/Images/Diseño sin título3242345324.png";
import React from "react";
import "@fontsource/italianno";
import "@fontsource/raleway";

import "@emotion/react";

export function AboutUS() {
  return (
    <div id="about" className="bg-[url(./assets/Images/FondoAbout.jpg)]   ">
      <div>
        <div className="lg:flex sm:block md:block mobile:block px-[7%] pt-[7%] justify-between">
          <div className="lg:w-[50%] md:w-full sm:w-full mobile:w-full ">
            <div className="text-[#182951] mobile:text-3xl mobile:pt-[60px] p-4 text-5xl font-bold tracking-widest ">
              About US
            </div>
            <div className="text-[#182951] mobile:text-2xl mobile:p-2 p-5 text-3xl  tracking-wide ">
              Top-Rated HVAC Repair Company in Miami, FL
            </div>
            <div className="flex p-5">
              <div className="h-1 bg-[#3CCDFF] w-[20%]   flex mobile:h-1"></div>
            </div>
            <div className=" xl:text-3xl 2xl:text-4xl tracking-wider font-extralight lg:text-2xl md:text-3xl p-6 sm:text-2xl text-[#3b3b3b]">
              "After owning an HVAC business for over 30 years, I came to
              realize the part I love about the HVAC business is helping people
              and educating homeowners.
              <br /> <br />
              An HVAC system can be complex, but if you take the time to slow
              down and spend time with the customer, they will never forget how
              you made them feel."
              <br />
              <br />
              <span
                style={{ fontFamily: "italianno", fontWeight: 400 }}
                className="flex  text-[#3b3b3b] text-4xl __className_5c893e justify-center">
                -Dragon Dev
              </span>
            </div>
          </div>
          <div className="lg:w-[40%]  justify-center items-center flex md:w-full sm:w-full mobile:w-full   ">
            <img src={AboutPicture} alt="About" className="rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUS;
