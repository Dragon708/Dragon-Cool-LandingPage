import Logo from "../../assets/Images/Colling.png";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll/modules";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Menu as MenuMaterial } from "@mui/icons-material";
import React from "react";

function NavBar() {
  return (
    <div
      id="home"
      className="  flex px-[5%] lg:px-[3%] justify-between  mobile:justify-between shadow-2xl border-2 text-xl">
      <div className="flex ">
        <img src={Logo} alt="Placeholder" className="h-[100px] w-[120px]" />
        <div className="  block lg:flex ml-5 lg:items-center lg:w-auto mobile:hidden sm:hidden ">
          <div className="xl:text-2xl lg:text-lg items-center flex gap-5 xl:gap-2 lg:gap-1  ">
            <LinkScroll
              smooth={true}
              offset={-50}
              duration={300}
              to="home"
              className="group/Home pt-6 block m-2 cursor-pointer">
              <div className="block mt-4 lg:inline-block lg:mt-0  text-[#182951]  hover:text-[#CD1308] transition-all duration-200">
                Home
              </div>
              <div className="pt-3 flex justify-center w-[100%]">
                <div className=" transition-all duration-700  group-hover/Home:w-full  w-0 h-1  bg-black"></div>
              </div>
            </LinkScroll>
            <LinkScroll
              smooth={true}
              offset={-50}
              duration={300}
              to="about"
              className="group/Home pt-6 block m-2 cursor-pointer">
              <div className="block mt-4 lg:inline-block lg:mt-0   text-[#182951]  hover:text-[#CD1308] transition-all duration-200">
                About
              </div>
              <div className="pt-3 flex justify-center w-[100%]">
                <div className=" transition-all duration-700  group-hover/Home:w-full  w-0 h-1  bg-black"></div>
              </div>
            </LinkScroll>

            <LinkScroll
              smooth={true}
              offset={-50}
              duration={300}
              to="services"
              className="group/Home pt-6 block m-2 cursor-pointer">
              <div className="block mt-4 lg:inline-block lg:mt-0   text-[#182951]  hover:text-[#CD1308] transition-all duration-200">
                Services
              </div>
              <div className=" pt-3 flex justify-center w-[100%]">
                <div className=" transition-all duration-700  group-hover/Home:w-full  w-0 h-1  bg-black"></div>
              </div>
            </LinkScroll>
            <LinkScroll
              smooth={true}
              offset={-50}
              duration={300}
              to="areas"
              className="group/Home pt-6 block m-2 cursor-pointer">
              <div className="block mt-4 lg:inline-block lg:mt-0   text-[#182951]  hover:text-[#CD1308] transition-all duration-200">
                Areas We Serve
              </div>
              <div className=" pt-3 flex justify-center w-[100%]">
                <div className=" transition-all duration-700  group-hover/Home:w-full  w-0 h-1  bg-black"></div>
              </div>
            </LinkScroll>
            <LinkScroll
              smooth={true}
              offset={-50}
              duration={300}
              to="review"
              className="group/Home pt-6 block m-2 cursor-pointer">
              <div className="block mt-4 lg:inline-block lg:mt-0   text-[#182951]  hover:text-[#CD1308] transition-all duration-200">
                Reviews
              </div>
              <div className=" pt-3 flex justify-center w-[100%]">
                <div className=" transition-all duration-700  group-hover/Home:w-full  w-0 h-1  bg-black"></div>
              </div>
            </LinkScroll>
          </div>
        </div>
      </div>

      <div className=" lg:flex justify-end  items-center gap-4 lg:ml-auto     mobile:hidden sm:hidden">
        <a
          //
          className="font-semibold xl:text-3xl lg:text-2xl text-[#182951] transition-all duration-300 ">
          (555)-555-555
        </a>
        <div className=" my-2 cursor-pointer duration-500 px-3 rounded-3xl bg-[#182951] text-center sm:text-xl  text-2xl hover:bg-[#CD1308] text-white tracking-wider p-3 transition ">
          <a> Request Service</a>
        </div>
      </div>
      <div className=" justify-center items-center rounded-md  flex lg:flex lg:items-center lg:w-auto text-sm font-medium text-black ">
        <Menu as="div" className="z-50">
          <div>
            <Menu.Button className="lg:hidden flex justify-center items-center  ">
              <MenuMaterial />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="fixed right-0  w-56 z-[999] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active, close }) => (
                    <div className="group/Home block m-2 cursor-pointer p-1">
                      <LinkScroll
                        smooth={true}
                        offset={-50}
                        duration={300}
                        to="home"
                        onClick={close}
                        className="block mt-4 lg:inline-block lg:mt-0   text-[#182951]  hover:text-[#CD1308] transition-all duration-200">
                        Home
                      </LinkScroll>
                      <div className="flex justify-center w-[100%]">
                        <div className=" transition-all duration-700  group-hover/Home:w-full  w-0 h-1  bg-black"></div>
                      </div>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active, close }) => (
                    <div className="group/Home block m-2 cursor-pointer p-1">
                      <LinkScroll
                        smooth={true}
                        offset={-50}
                        duration={300}
                        to="about"
                        onClick={close}
                        className="block mt-4 lg:inline-block lg:mt-0   text-[#182951]  hover:text-[#CD1308] transition-all duration-200">
                        About Us
                      </LinkScroll>
                      <div className="flex justify-center w-[100%]">
                        <div className=" transition-all duration-700  group-hover/Home:w-full  w-0 h-1  bg-black"></div>
                      </div>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active, close }) => (
                    <div className="group/Home block m-2 cursor-pointer p-1">
                      <LinkScroll
                        smooth={true}
                        offset={-50}
                        duration={300}
                        to="services"
                        onClick={close}
                        className="block mt-4 lg:inline-block lg:mt-0   text-[#182951]  hover:text-[#CD1308] transition-all duration-200">
                        Services
                      </LinkScroll>
                      <div className="flex justify-center w-[100%]">
                        <div className=" transition-all duration-700  group-hover/Home:w-full  w-0 h-1  bg-black"></div>
                      </div>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active, close }) => (
                    <div className="group/Home block m-2 cursor-pointer p-1">
                      <LinkScroll
                        smooth={true}
                        offset={-50}
                        duration={300}
                        to="areas"
                        onClick={close}
                        className="block mt-4 lg:inline-block lg:mt-0   text-[#182951]  hover:text-[#CD1308] transition-all duration-200">
                        Areas We Serve
                      </LinkScroll>
                      <div className="flex justify-center w-[100%]">
                        <div className=" transition-all duration-700  group-hover/Home:w-full  w-0 h-1  bg-black"></div>
                      </div>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active, close }) => (
                    <div className="group/Home block m-2 cursor-pointer p-1">
                      <LinkScroll
                        smooth={true}
                        offset={-50}
                        duration={300}
                        to="review"
                        onClick={close}
                        className="block mt-4 lg:inline-block lg:mt-0   text-[#182951]  hover:text-[#CD1308] transition-all duration-200">
                        Reviews
                      </LinkScroll>
                      <div className="flex justify-center w-[100%]">
                        <div className=" transition-all duration-700  group-hover/Home:w-full  w-0 h-1  bg-black"></div>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active, close }) => (
                    <div className="  block text-center  p-2">
                      <a className="my-2">(555)-555-5555</a>
                      <div className=" my-2  rounded-2xl cursor-pointer duration-500 bg-slate-900 text-center hover:bg-[#CD1308] text-white font-semibold text-xl p-2 transition ">
                        <a>Contact</a>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default NavBar;
