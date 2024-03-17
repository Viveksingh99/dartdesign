"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Ourthinking = () => {
  return (
    <div>
      <section className="blog-modern section-padding sub-bg">
        <div className="container">
          <div className="main-marq lrg pb-3">
            <div className="st1">
              <div className="box pb-20 text-center">
                <div className="item border-none">
                  <div>OUR THINKING</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="blog-carsouel"
            data-carousel="swiper"
            data-items={3}
            data-loop="true"
            data-space={10}
            data-speed={1000}
            data-autoplay="true"
          >
            <div
              id="content-carousel-container-unq-blog"
              className="swiper-container"
              data-swiper="container"
            >
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <div className="swiper-wrapper curs-scroll">
                  <div
                    className="swiper-slide wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <SwiperSlide>
                      <div className="item">
                        <div className="cont mt-30">
                          <div className="fz-20 fw-500 pb-2">
                            <Link href="/">
                              How does colour psychology in retail design
                              establish brand identity to influence customer
                              behaviour?
                            </Link>
                          </div>
                          <div>
                            <p>
                              With high competition in the market, it becomes
                              crucial for brands to explore all possible ways
                              they can create a differentiating image for
                              themsel...
                            </p>
                          </div>
                          <Link href="/" className="blog__section">
                            <span className="fz-12 text-u">Explore More</span>
                            <span className="arrow-icon">&gt;</span>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                  <div
                    className="swiper-slide wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <SwiperSlide>
                      <div className="item">
                        <div className="cont mt-30">
                          <div className="fz-20 fw-500 pb-2">
                            <Link href="/">
                              How does branding get drained away in India
                              without giving the ROI?
                            </Link>
                          </div>
                          <div>
                            <p>
                              <span>
                                Branding in the Indian Market presents a
                                multifaceted challenge, despite considerable
                                efforts and investments made by brands with the
                                objecti...
                              </span>
                            </p>
                          </div>
                          <Link href="/" className="blog__section">
                            <span className="fz-12 text-u">Explore More</span>
                            <span className="arrow-icon">&gt;</span>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                  <div
                    className="swiper-slide wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <SwiperSlide>
                      <div className="item">
                        <div className="cont mt-30">
                          <div className="fz-20 fw-500 pb-2">
                            <Link href="/">
                              Exploring The Future of Mobility For New-Age
                              Businesses
                            </Link>
                          </div>
                          <div>
                            <p>
                              As the mobility sector undergoes significant
                              transformation due to rapid technological
                              advancements, the revolutionization continues to
                              fuel innova...
                            </p>
                          </div>
                          <Link href="/" className="blog__section">
                            <span className="fz-12 text-u">Explore More</span>
                            <span className="arrow-icon">&gt;</span>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                  <div
                    className="swiper-slide wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <SwiperSlide>
                      <div className="item">
                        <div className="cont mt-30">
                          <div className="fz-20 fw-500 pb-2">
                            <Link href="/">
                              Exploring new dimensions in luxury interior design
                              with branding agency
                            </Link>
                          </div>
                          <div>
                            <p>
                              In the presently evolving era where newly emerging
                              trends like quiet luxury continues to define the
                              dynamics in the niche segment, driving brands t...
                            </p>
                          </div>
                          <Link
                            href="https://www.dartdesign.in/exploring-new-dimensions-in-luxury-interior-design-with-branding-agency.php"
                            className="blog__section"
                          >
                            <span className="fz-12 text-u">Explore More</span>
                            <span className="arrow-icon">&gt;</span>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                  <div
                    className="swiper-slide wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <SwiperSlide>
                      <div className="item">
                        <div className="cont mt-30">
                          <div className="fz-20 fw-500 pb-2">
                            <Link href="/">
                              Revolutionising The Practice of Retail Design With
                              AI
                            </Link>
                          </div>
                          <div>
                            <p>
                              In the ever-evolving landscape of retail where
                              incredible in-store experiences makes a lasting
                              impact on customers’ conscience, Artificial In...
                            </p>
                          </div>
                          <Link href="/" className="blog__section">
                            <span className="fz-12 text-u">Explore More</span>
                            <span className="arrow-icon">&gt;</span>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourthinking;
