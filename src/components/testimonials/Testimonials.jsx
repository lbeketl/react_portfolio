import React from "react";
import "./testimonials.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = ({ clients }) => {
   
    return (
        <section id="testimonials" className="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{delay: 3000}}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="container testimonials__container"
            >
                {clients.map(({ id, avatar, fullname, review }) => {
                    return (
                        <SwiperSlide key={id} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} alt="avatar" />
                            </div>
                            <h5 className="client__fullname">{fullname}</h5>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;
