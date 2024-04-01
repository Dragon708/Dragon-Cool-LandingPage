import { ArrowDownward, ArrowDropDown } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { Link as LinkScroll } from "react-scroll/modules";

const Notification = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [abajo, setAbajo] = useState(false);

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setAbajo(true);
      } else {
        setAbajo(false);
      }
    };
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {showNotification && (
        <div className="bg-gradient-to-br  from-blue-600/90 to-blue-600/70 py-2 px-4 ">
          <div className="flex justify-between w-full">
            <div className="text-center w-[90%]">
              <p className="text-white mobile:text-lg flex justify-center font-semibold text-4xl text-center">
                Financing Available
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleCloseNotification}
                className="text-white hover:text-red-500 flex justify-center items-center font-bold">
                X
              </button>
            </div>
          </div>
        </div>
      )}
      <LinkScroll
        smooth={true}
        offset={-50}
        duration={100}
        to="serviCard"
        hidden={abajo}
        className="rounded-full fixed right-5 bottom-5 cursor-pointer bg-blue-600/70 text-white animate-bounce p-4">
        <ArrowDownward />
      </LinkScroll>
    </>
  );
};

export default Notification;
