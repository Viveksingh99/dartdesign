import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
    <div id="navi" className=" topnav navlit ">
      <div className="container align-items-center">
        <div className="logo icon-img-120">
          <Link href="/">
            <Image
              src="https://www.dartdesign.in/images/media/dart-white1.png"
              width={200}
              height={30}
              alt="D'Art Design"
              title="D'Art Design"
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </div>
        <div className="menu-icon cursor-pointer">
          <span className="icon">
            <i />
            <i />
          </span>
        </div>
      </div>
    </div>
      <div className="hamenu">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="menu-text">
              <div className="text">
                <div>Menu</div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="menu-links">
              <ul className="main-menu">
                <li>
                  <div className="o-hidden">
                    <Link href="/" className="link">
                      <span className="fill-text" data-text="Home">
                        Home
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="o-hidden">
                    <Link href="/" className="link">
                      <span className="fill-text" data-text="Who We Are">
                        Who We Are
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="o-hidden">
                    <Link href="/" className="link">
                      <span className="fill-text" data-text="What We Do">
                        What We Do
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="o-hidden">
                    <Link
                      href="https://www.dartdesign.in/portfolio.php"
                      className="link"
                    >
                      <span className="fill-text" data-text="Case Studies">
                        Case Studies
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="o-hidden">
                    <div className="link cursor-pointer dmenu">
                      <span className="fill-text" data-text="Thinking">
                        Thinking
                      </span>{" "}
                      <i />
                    </div>
                  </div>
                  <div className="sub-menu">
                    <ul>
                      <li>
                        <Link href="/" className="sub-link">
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className="sub-link">
                          Insights
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="o-hidden">
                    <Link href="/" className="link">
                      <span className="fill-text" data-text="Contact">
                        Contact
                      </span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-end">
            <div className="cont-info full-width">
              <div className="item">
                <div className="fz-20 fw-500 mb-15">Get In Touch</div>
                <p>
                  504 5th Floor, SRS Tower, Sector - 31,Mathura Road,
                  Faridabad, Haryana - 121003
                </p>
                <p className="underline main-color mt-5 mb-5">
                  <Link href="/">info@dartdesign.in</Link>
                </p>
                <p>
                  <strong>Business Enquiry:</strong>{" "}
                  <Link
                    className="underline main-color mt-5 mb-5"
                    href="tel:+911292986401"
                  >
                    +91 129 298 6401
                  </Link>
                </p>
                <p>
                  <strong>Head Office:</strong>{" "}
                  <Link
                    className="underline main-color mt-5 mb-5"
                    href="tel:+917503475038"
                  >
                    +91-7503475038
                  </Link>
                </p>
              </div>
              <ul className="rest social-text d-flex mt-50 fz-13">
                <li className="mr-20">
                  <Link
                    href="https://www.facebook.com/dartpvtltd/"
                    className="hover-this"
                    rel="nofollow"
                    target="_blank"
                    title="Follow Us on Facebook"
                  >
                    <span className="hover-anim">Facebook</span>
                  </Link>
                </li>
                <li className="mr-20">
                  <Link
                    href="https://www.instagram.com/dartpvtltd/"
                    className="hover-this"
                    rel="nofollow"
                    target="_blank"
                    title="Follow Us on Instagram"
                  >
                    <span className="hover-anim">Instagram</span>
                  </Link>
                </li>
                <li className="mr-20">
                  <Link
                    href="https://twitter.com/Dartpvtltd"
                    className="hover-this"
                    rel="nofollow"
                    target="_blank"
                    title="Follow Us on Twitter"
                  >
                    <span className="hover-anim">Twitter</span>
                  </Link>
                </li>
                <li className="mr-20">
                  <Link
                    href="https://www.linkedin.com/company/dart-pvt-ltd/"
                    className="hover-this"
                    rel="nofollow"
                    target="_blank"
                    title="LinkedIn"
                  >
                    <span className="hover-anim">LinkedIn</span>
                  </Link>
                </li>
                <li className="mr-20">
                  <Link
                    href="http://www.youtube.com/c/DArtDesign?sub_confirmation=1"
                    className="hover-this"
                    rel="nofollow"
                    target="_blank"
                    title="Subscribe D'ART on YouTube"
                  >
                    <span className="hover-anim">YouTube</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
