import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainImage from "../../assets/Images/imagePrincipal.jpg";
import logoFondo from "../../assets/Images/Colling.png";
import "@fontsource/italianno";
import "@fontsource/raleway";
import "../../App.css";
import { Star } from "@mui/icons-material";

const reviewsData = [
  {
    id: 1,
    name: "-Sara Smith",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "“The gentlemen at Dragon-cool Repair were absolutely fantastic. They were kind, friendly, quick, and honest. I would highly recommend them for any job you need. They came and fixed my AC back to back to make sure I was taken care of. Thank you guys!”",
  },
  {
    id: 2,
    name: "-John Johnson",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The service was very fast, the technician was very professional and nice, he determined the problem fast and fixed it. He made sure there were no other problems as well, I called this morning and had a technician out here at 1pm! One of the best experiences I’ve ever had especially with an air conditioning issue and company. The price was very fair as well! Thank you so much, I will be using your company in the future!!",
  },
  {
    id: 3,
    name: "-Megan Davis",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    review:
      "“Great service—very thorough and professional! I’ve used a different company twice and I’m completely blown away by the difference in this company’s service. If I could rate them more than 5 stars, I would!”",
  },
  {
    id: 4,
    name: "-Peter Lee",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    review:
      "“Dragon with Dragon-cool Repair came 3 hrs earlier than scheduled which was great. He explained the good news that the breaker tripped the AC unit. I didn’t realize that could happen so I learned something.The temperature was going lower before he left and I was happy.”",
  },
  {
    id: 5,
    name: "-Emily Clark",
    image: "https://randomuser.me/api/portraits/women/95.jpg",
    review:
      "“I’ve been using Dragon-cool Repair for about five years now and have been consistently satisfied with their service. I trust them, and that says it all. The techs are knowledgeable, polite and get the job done in a timely manner. I recommend them.”",
  },
];

function Reviews() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div id="review" className=" w-full ">
      <div className="relative w-full sm:h-[500px] md:h-[500px] lg:h-[600px] xl:h-[750px] mobile:h-[650px]    ">
        <img
          className=" -z-10 absolute  w-full object-fill sm:h-[500px] md:h-[500px] lg:h-[600px] xl:h-[750px] mobile:h-[650px]  "
          src={MainImage}
          alt="Main"
        />

        <div className="relative bg-white/90 top-[15%] mobile:top-[5%] mobile:left-[5%] mobile:w-[90%] mobile:h-[90%]  left-[15%] w-[70%] h-[70%]  ">
          <div className="xl:text-[200px] lg:text-[150px] md:text-[150px] sm:text-[150px] mobile:text-[200px] text-[#53C8FB] font-serif absolute z-10  left-[5%] top-[-20%]">
            "
          </div>
          <div className="xl:text-[200px] lg:text-[150px] md:text-[150px] sm:text-[150px] mobile:text-[200px] text-[#4cb0db] font-serif absolute z-10 right-[5%] bottom-[-20%]  rotate-180">
            "
          </div>
          <div className="flex justify-center items-center lg:p-6 sm:p-2 lg:m-6 md:m-2">
            <div className="block">
              <div className="flex text-yellow-400 justify-center mobile:text-base lg:m-4 md:m-2 mobile:my-2">
                <Star /> <Star /> <Star /> <Star /> <Star />{" "}
              </div>
              <div className="text-3xl mobile:text-base text-center text-[#182951]">
                Customer Reviews
              </div>
            </div>
          </div>
          <div className="justify-center items-center">
            <Slider {...settings} centerMode={true}>
              {reviewsData.map((datos, index) => (
                <div key={index} className="">
                  <div className="flex justify-center items-center ">
                    <div className="block lg:w-[100%] md:w-[100%] sm:w-[100%] mobile:w-[100%] h-full">
                      <div
                        style={{ fontFamily: "raleway", fontWeight: "1.4" }}
                        className=" xl:text-2xl 2xl:text-2xl mobile:text-sm   lg:text-lg md:text-base sm:text-base font-thin text-[#3b3b3b] p-2">
                        {datos.review}
                      </div>
                      <div className="flex justify-center text-xl gap-2">
                        <div
                          className="font-semibold lg:text-4xl md:text-3xl sm:text-3xl"
                          style={{
                            fontFamily: "italianno",
                            fontWeight: "1.4",
                          }}>
                          {datos.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
