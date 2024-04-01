import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-500 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center  mobile:block">
          <div>
            <p className="text-sm md:text-base mobile:text-sm mobile:text-center">
              © 2024 Dragon-cool Repair HVAC Company, Inc. All rights reserved.
            </p>
          </div>
          <div className="mobile:flex flex justify-center items-center mobile:justify-center gap-2 p-3">
            <div className="px-3 sm:px-1 mobile:p-0 py-2 text-sm md:text-base mobile:text-xs font-medium text-gray-500">
              Privacy Policy
            </div>
            <div className="px-3 sm:px-1 py-2 text-sm mobile:p-0 md:text-base font-medium text-gray-500 mobile:text-xs ">
              Terms of Service
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pt-4 sm:px-6 lg:px-8  mobile:text-center">
        <div>
          <a className="text-sm md:text-base hover:text-white transition-all duration-300">
            HVAC Website Design by Jorge Gonzalez
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
