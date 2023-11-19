import React from "react";
import "./awards.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../../img/profile1.jpg";
import profilePic2 from "../../../img/profile2.jpg";
import profilePic3 from "../../../img/profile3.jpg";
import profilePic4 from "../../../img/profile4.jpg";


const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Afronex Tech Hub is an innovative technology solutions provider based in Dire Dawa, Ethiopia. We offer best-fit technologies and professional services for Corporations, Government, NGOs and Private Enterprises on their business and technological needs.",
    },
    {
      img: profilePic2,
      review:
      "Afronex Tech Hub is an innovative technology solutions provider based in Dire Dawa, Ethiopia. We offer best-fit technologies and professional services for Corporations, Government, NGOs and Private Enterprises on their business and technological needs.",
    },
    {
      img: profilePic3,
      review:
      "Afronex Tech Hub is an innovative technology solutions provider based in Dire Dawa, Ethiopia. We offer best-fit technologies and professional services for Corporations, Government, NGOs and Private Enterprises on their business and technological needs.",
    },
    {
      img: profilePic4,
      review:
      "Afronex Tech Hub is an innovative technology solutions provider based in Dire Dawa, Ethiopia. We offer best-fit technologies and professional services for Corporations, Government, NGOs and Private Enterprises on their business and technological needs.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Companies that  </span>
        <span> we </span>
        <span>work with</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
