import React from "react";
import Image from "next/image";


const About = () => {
  return (
    <div>
      <section class="home about section-padding bg-gray1 h-100">
        <div class="container toponly">
          <div class="row">
            <div class="col-lg-4 valign">
              <div class="about-circle-crev md-hide text-center">
                <div class="circle-button">
                  <div class="rotate-circle fz-16 ls1 text-u about-rotate-circle">
                    <Image
                      class="home__d__image__bg"
                      src="https://www.dartdesign.in/assets/imgs/d-with-bg.webp"
                      alt="Brand Design Agency"
                      width="175"
                      height="175"
                    />
                    <svg class="textcircle about-svg" viewBox="0 0 500 500">
                      <defs>
                        <path
                          id="textcircle"
                          d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                        ></path>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7 valign">
              <div class="cont sec-lg-head">
                <div class="main-marq lrg">
                  <div class="st1">
                    <div class="box pb-20 justify-content-start">
                      <div class="item pl-0">
                        <div>ABOUT US</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-slideup wow">
                  <div class="sideup-text">
                    <div class="up-text" style={{fontSize:'18px'}}>
                      <h1 class="fz-35">BRAND DESIGN AGENCY</h1>{" "}
                      <span class="sub-font">
                        Conforming brands to the experiential future for the
                        connected consumers of tomorrow.
                      </span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="text mt-20">
                      <p>
                        Our designs cater to a constantly evolving world,
                        opening up new possibilities. We create these
                        possibilities for the people who interact with them and
                        deliver a story with every design that comes to life. We
                        shape up physical and abstract brand dimensions, taking
                        a panoramic view of culture, philosophy, vision, and
                        more. By delving in your unique side, our brand
                        consultancy forms a connection through design,
                        manufacturing, and more.
                      </p>
                    </div>
                    <div>
                      <a
                        href="https://www.dartdesign.in/about-us.php"
                        class="blog__section"
                      >
                        <span class="fz-12 text-u">Explore More</span>
                        <span class="arrow-icon">arrow</span>
                      </a>
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
