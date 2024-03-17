
import React from "react";

const Hero = () => {
  return (
    <div>
      <header className="header-creative sub-bg">
          <div className="container toponly pt-50">
            <div className="row justify-content-center full-height">
              <div className="col-lg-12">
                <h2 className="fw-900  main__heading__home">
                  <span className="rotate-text">
                    We Create{" "}
                    <span className="hero__text__animation">PERCEPTION</span>
                  </span>
                  <span className="rotate-text">For Your EMOTIONS</span>
                </h2>
                <div className="home__second_title fw-600 pb-2">
                  We shoulder that perception by our tried-n-tested
                  transformation models.
                </div>
                <div className="img-vid">
                  <video
                    autoPlay=""
                    muted=""
                    loop=""
                    playsInline=""
                    className="home__hero__video lazy"
                    width={600}
                    poster="https://www.dartdesign.in/images/video/final.svg"
                    preload="none"
                  >
                    <source
                      src="https://www.dartdesign.in/images/video/final.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </header>
    </div>
  );
};

export default Hero;
