import React from "react";
import MainImage from "../../assets/Images/UC-main-banner.jpg";
import "@fontsource/roboto-slab";

function MainBanner() {
  return (
    <div>
      <div className="w-full sm:h-[500px] md:h-[500px] lg:h-[600px] xl:h-[750px] mobile:h-[350px]  bg-gradient-to-t from-blue-500/40 to-blue-500/20  ">
        {/* <div className="w-full sm:h-[500px] md:h-[500px] lg:h-[600px] xl:h-[750px] mobile:h-[350px]   "> */}
        <img
          className=" -z-10 absolute convertir w-full mobile:object-left-bottom object-cover sm:h-[500px] md:h-[500px] lg:h-[600px] xl:h-[750px] mobile:h-[350px] "
          // className=" -z-10 absolute convertsir w-full object-cover sm:h-[500px] md:h-[500px] lg:h-[600px] xl:h-[750px] mobile:h-[350px] "
          src={MainImage}
          alt="Main"
        />
        <div className=" z-10 text-white  relative left-[10%] xl:left-[5%] md:top-[10%] lg:top-[15%] xl:top-[20%] sm:top-4 mobile:left-[5%] mobile:top-3 max-w-[80%] mobile:max-w-[90%]">
          <div className=" md:w-[60%] sm:w-[80%] p-4 sm:p-0 mobile:px-0 mobile:w-[100%] ">
            <div
              style={{ fontFamily: "roboto-slab", fontWeight: "1.4" }}
              className="lg:text-3xl  xl:text-4xl font-[900]   mobile:text-base sm:text-xl p-3 mobile:p-0 text-center">
              HVAC Repair Company in Miami FL
            </div>
            <div
              style={{ fontFamily: "roboto-slab", fontWeight: "1.4" }}
              className="lg:text-4xl xl:text-5xl font-[900]  sm:text-2xl my-3 mobile:my-0 sm:my-0 mobile:text-xl  p-3 text-center tracking-wide">
              “My dad would always tell me, take care of people, and they will
              take care of you.”
            </div>
            <div className="flex justify-center">
              <div className="h-1 bg-[#3CCDFF] w-[60%] justify-center  flex mobile:h-1"></div>
            </div>
            <div
              style={{ fontFamily: "roboto", fontWeight: "1.4" }}
              className="lg:text-2xl  xl:text-3xl lg:pt-5 font-semibold  my-3 mobile:mb-2 xl:my-2 xl:mb-6 lg:mb-4 text-center sm:text-lg mobile:text-sm mobile:p-0 sm:p-0 p-3 ">
              Call Dragon on his Cell 555-555-5555
              <br />
              <span
                style={{ fontFamily: "roboto", fontWeight: "1.4" }}
                className="xl:text-xl tracking-wider lg:text-lg mobile:text-sm ">
                Providing 24/7 AC service and repairs. Never a Service Call Fee
                to come out!
              </span>{" "}
            </div>

            <div className="flex justify-center   ">
              <div className=" my-2 mobile:mt-6 cursor-pointer duration-500 mobile:px-8 mobile:p-2 px-8 rounded-3xl mobile:text-sm bg-[#CD1308] text-center sm:text-xl md:text-2xl  lg:text-2xl hover:bg-white hover:text-[#CD1308]  text-white font-semibold py-4 sm:my-0  transition ">
                <a href="tel:502-407-6776">Request Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
