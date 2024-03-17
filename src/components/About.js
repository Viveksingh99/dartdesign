import React from "react";
import Image from "next/image";
import Link from "next/link";


const About = () => {
  return (
    <div>
      <section className="home about section-padding bg-gray1 h-100">
          <div className="container toponly">
            <div className="row">
              <div className="col-lg-5 valign">
                <div className="about-circle-crev md-hide text-center">
                  <div className="circle-button">
                    <div className="rotate-circle fz-16 ls1 text-u about-rotate-circle">
                      <Image
                        className="home__d__image__bg"
                        src="https://www.dartdesign.in/assets/imgs/d-with-bg.webp"
                        alt="Brand Design Agency"
                        width={175}
                        height={175}
                      />
                      <svg
                        className="textcircle about-svg"
                        viewBox="0 0 500 500"
                      >
                        <defs>
                          <path
                            id="textcircle"
                            d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                          ></path>
                        </defs>
                        <text>
                          <textPath xlinkHref="#textcircle" textLength={900}>
                            {" "}
                            BRAND DESIGN CONSULTANT - BRAND DESIGN COMPANY -{" "}
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 valign">
                <div className="cont sec-lg-head">
                  <div className="main-marq lrg">
                    <div className="st1">
                      <div className="box pb-20 justify-content-start">
                        <div className="item pl-0">
                          <div>ABOUT US</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-slideup wow animated" style={{visibility:"visible"}}>
                    <div className="sideup-text">
                      <div className="up-text" style={{ fontSize: 18 }}>
                        <h1 className="fz-35">BRAND DESIGN AGENCY</h1>{" "}
                        <span className="sub-font">
                          Conforming brands to the experiential future for the
                          connected consumers of tomorrow.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="text mt-20">
                        <p>
                          Our designs cater to a constantly evolving world,
                          opening up new possibilities. We create these
                          possibilities for the people who interact with them
                          and deliver a story with every design that comes to
                          life. We shape up physical and abstract brand
                          dimensions, taking a panoramic view of culture,
                          philosophy, vision, and more. By delving in your
                          unique side, our brand consultancy forms a connection
                          through design, manufacturing, and more.
                        </p>
                      </div>
                      <div>
                        <Link href="/" className="blog__section">
                          <span className="fz-12 text-u">Explore More</span>
                          <span className="arrow-icon">&gt;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default About;
