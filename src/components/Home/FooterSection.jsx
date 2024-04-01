import React from "react";
import logo from "../../assets/Images/Colling.png";
import { Link as LinkScroll } from "react-scroll/modules";

import "@fontsource/raleway";
import "@fontsource/roboto-slab";
import {
  Email,
  EmailOutlined,
  EmailRounded,
  LocationOn,
  LocationOnOutlined,
  Phone,
  PhoneOutlined,
} from "@mui/icons-material";

function FooterSection() {
  return (
    <div>
      <div className="flex mobile:block mobile:h-fit h-[500px] bg-[#F7F7F7]">
        <div className="w-2/4 mobile:w-full px-[5%] text-center pb-[5%]">
          <div className="flex  justify-center">
            <img
              src={logo}
              alt="imagen"
              className=" w-[50%] mobile:w-[100%] 2xl:w-[40%] object-cover"
            />
          </div>
          <p className="text-center text-2xl mobile:text-sm font-thin">
            We provide Heating, Cooling, Furnace & Air Conditioning
            Installation, Repair & Maintenance in Miami, FL, and the surrounding
            areas. Contact us today to schedule service or request a free
            estimate.
          </p>
        </div>
        <div
          className="w-1/4 mobile:w-full  text-center block py-[3%] p-2   "
          style={{ fontFamily: "raleway" }}>
          <div
            style={{ fontFamily: "roboto-slab", lineHeight: "1.4" }}
            className="text-2xl text-center font-semibold font-serif tracking-widest">
            Helpful Links
          </div>
          <div className="py-3 p-2">
            <LinkScroll
              smooth={true}
              offset={-50}
              duration={300}
              to="home"
              className="block m-2 cursor-pointer lg:text-2xl mobile:text-lg  text-[#182951]  hover:text-[#CD1308] transition-all duration-200">
              Home
            </LinkScroll>
          </div>
          <div className="py-3 p-2">
            <LinkScroll
              smooth={true}
              offset={-50}
              duration={300}
              to="about"
              className="block m-2 cursor-pointer lg:text-2xl mobile:text-lg   text-[#182951]  hover:text-[#CD1308] transition-all duration-200">
              About Us
            </LinkScroll>
          </div>
          <div className="py-3 p-2">
            <LinkScroll
              smooth={true}
              offset={-50}
              duration={300}
              to="services"
              className="block m-2 cursor-pointer lg:text-2xl mobile:text-lg   text-[#182951]  hover:text-[#CD1308] transition-all duration-200">
              Services
            </LinkScroll>
          </div>
          <div className="py-3 p-2">
            <LinkScroll
              smooth={true}
              offset={-50}
              duration={300}
              to="areas"
              className="block m-2 cursor-pointer lg:text-2xl mobile:text-lg   text-[#182951]  hover:text-[#CD1308] transition-all duration-200">
              Areas We Serve
            </LinkScroll>
          </div>

          <div className="py-3 p-2">
            <LinkScroll
              smooth={true}
              offset={-50}
              duration={300}
              to="review"
              className="block m-2 cursor-pointer lg:text-2xl mobile:text-lg   text-[#182951]  hover:text-[#CD1308] transition-all duration-200">
              Reviews
            </LinkScroll>
          </div>
        </div>
        <div
          className="w-1/4 mobile:w-full md:w-fit text-center block py-[3%] p-2  "
          style={{ fontFamily: "raleway" }}>
          <div
            style={{ fontFamily: "roboto-slab", lineHeight: "1.4" }}
            className="text-2xl text-center font-semibold  tracking-widest">
            Contact Info
          </div>
          <a className="flex gap-2 py-3 p-2 hover:text-[#CD1308] transition-all duration-200">
            <PhoneOutlined />
            <a className="font-light text-xl ">(555)-555-5555</a>
          </a>
          <a className="flex gap-2 py-3 p-2 hover:text-[#CD1308] transition-all duration-200">
            <EmailOutlined />
            <div className="font-light text-xl ">
              info@dragon-cool-repair.com
            </div>
          </a>
          <div className="flex gap-2 py-3 p-2 ">
            <LocationOnOutlined />
            <div className="font-light text-xl ">Miami Fl</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
