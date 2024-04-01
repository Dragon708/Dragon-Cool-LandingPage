import React from "react";
import Skyline from "../../assets/Images/louisville-skyline-1 (1).jpg";
import Mapa from "../../assets/Images/64f58e33dbaaa70434eda89b2dad0d3c.jpg";
import "@fontsource/raleway";
import { LocationOnOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";

function AreasWeServe() {
  return (
    <div id="areas" className="block">
      <div className="w-full  sm:h-[500px] md:h-[500px] lg:h-[600px] xl:h-[750px] mobile:h-full   bg-gradient-to-br  from-blue-950/60 to-blue-950/60  ">
        <img
          className=" -z-10 absolute w-full  sm:h-[500px] md:h-[500px] lg:h-[600px] xl:h-[750px] mobile:h-full  "
          src={Skyline}
          alt="Main"
        />

        <div
          style={{ fontFamily: "raleway", fontWeight: "1.4" }}
          className="w-[100%] h-[100%]  relative left-[0%] top-[5%] z-20">
          <h1 className="text-white text-center lg:text-5xl md:text-4xl sm:text-2xl mobile:text-3xl mobile:pt-3 ">
            Areas We Serve
          </h1>
          <div className="flex p-5 mobile:p-2 justify-center">
            <div className="h-1 bg-[#3CCDFF] w-[20%]   flex mobile:h-1"></div>
          </div>
          <div className="flex mobile:block justify-center w-[100%] h-[80%]">
            <div className="w-[60%] mobile:w-[100%] justify-center items-center block p-7">
              <div className="text-white text-center sm:text-xl md:text-2xl mobile:text-xl lg:text-4xl lg:p-8 md:p-4 sm:p-2 ">
                We Provide Heating & Cooling Services To The Following Zones and
                Cities in Miami FL{" "}
              </div>
              <div className=" flex justify-center text-center ">
                <div>
                  <div className="flex text-white sm:text-lg md:text-xl lg:text-3xl  mobile:text-lg p-2 gap-2">
                    <LocationOnOutlined fontSize="inherit" /> Miami FL
                  </div>
                  <div className="flex text-white sm:text-lg md:text-xl lg:text-3xl  mobile:text-lg p-2 gap-2">
                    <LocationOnOutlined fontSize="inherit" /> Bonita Sprint FL
                  </div>
                  <div className="flex text-white sm:text-lg md:text-xl lg:text-3xl  mobile:text-lg p-2 gap-2">
                    <LocationOnOutlined fontSize="inherit" /> Fort Mayer FL
                  </div>
                  <div className="flex items-center text-white sm:text-lg md:text-xl lg:text-3xl  mobile:text-left mobile:text-lg p-2 gap-2 ">
                    <LocationOnOutlined fontSize="inherit" />
                    <div>Surrounding Areas of Miami FL</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[40%] mobile:w-[100%] mobile:p-4  flex justify-end mr-5  ">
              <img src={Mapa} alt="map" className=" h-[90%]  object-cover " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreasWeServe;
