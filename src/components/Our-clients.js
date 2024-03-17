"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Ourclients = () => {
  return (
    <div>
      <section className="clients-carso bg-gray1 section-padding">
        <div className="container">
          <div className="row mb-50">
            <div className="col-12">
              <div className="main-marq lrg">
                <div className="st1">
                  <div className="box pb-20 text-center">
                    <div className="item">
                      <div>OUR CLIENTS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <div
                className="blog-carsouel"
                data-carousel="swiper"
                data-items="3"
                data-loop="true"
                data-space="10"
                data-speed="1000"
                data-autoplay="true"
              >
                <div
                  id="content-carousel-container-unq-client"
                  className="swiper-container"
                  data-swiper="container"
                >
                  <div className="swiper-wrapper curs-scroll">
                    <Swiper
                      spaceBetween={40}
                      slidesPerView={3}
                      autoplay={{
                        delay: 3000,
                      }}
                      modules={[Autoplay]}
                    >
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/adidas.webp"
                            alt="Adidas"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/bluestar.webp"
                            alt="Bluestar"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/dolce-gelato.webp"
                            alt="Dolce Gelato"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/firebox.webp"
                            alt="Firebox"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/godrej.webp"
                            alt="Godrej"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/hitachi.webp"
                            alt="Hitachi"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/indianmotorcycle.webp"
                            alt="Indianmotorcycle"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/itc.webp"
                            alt="ITC"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/ith.webp"
                            alt="ITH"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/jsw.webp"
                            alt="JSW"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/it.webp"
                            alt="I&amp;T"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/laatsaab.webp"
                            alt="Laatsaab"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/latinsquarter.webp"
                            alt="Latinsquarter"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/lloyd.webp"
                            alt="LLOYD"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/mitsubishi.webp"
                            alt="MITSUBISHI"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/mobil.webp"
                            alt="Mobil"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/niit.webp"
                            alt="NIIT"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/patanjali.webp"
                            alt="Patanjali"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/redchief.webp"
                            alt="Redchief"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/studds.webp"
                            alt="Studds"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/tata-steel.webp"
                            alt="Tata Steel"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/tvs.webp"
                            alt="TVS"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <Image
                            className="client-images"
                            src="https://www.dartdesign.in/images/clients/vlcc.webp"
                            alt="VLCC"
                            width="200"
                            height="200"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center mt-50 mb-50">
                <div className="fz-14 fw-400">
                  More than <span className="fw-600">200+ companies</span>{" "}
                  trusted us worldwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourclients;
