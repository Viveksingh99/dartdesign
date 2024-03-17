import React from "react";

const Getintouch = () => {
  return (
    <div>
      <section
          className="contact-crev bg-gray1 section-padding"
          data-scroll-index={7}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="sec-lg-head md-mb80">
                  <div className="dot-titl-non mb-10">Get In Touch</div>
                  <div className="fz-50">Lets make your brand brilliant!</div>
                  <p className="fz-15 mt-10">
                    If you would like to work with us or just want to get in
                    touch, we’d love to hear from you!
                  </p>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 valign z-99">
                <div className="full-width">
                  <form
                    method="post"
                    action="https://www.dartdesign.in/contact"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="hos7ZzF2JfjLLpXzCxPr2qBzkxCJ3STOpv4EffCx"
                    />{" "}
                    <div className="messages" />
                    <div className="controls row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required="required"
                            defaultValue=""
                          />
                          <span className="text-danger" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                            defaultValue=""
                          />
                          <span className="text-danger" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            id="form_phone"
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            required="required"
                            defaultValue=""
                            minLength={9}
                          />
                          <span className="text-danger" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb-20">
                          <input
                            id="form_subject"
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            id="form_message"
                            name="comment"
                            placeholder="Message"
                            rows={4}
                            required="required"
                            defaultValue={""}
                          />
                          <span className="text-danger" />
                        </div>
                        <input
                          type="hidden"
                          name="page"
                          defaultValue="Home Page"
                        />
                        <div
                          data-sitekey="6LeScNAmAAAAAPEJ-gx1MpjSpqWtn8K09MNur1Kk"
                          className="g-recaptcha"
                        />
                        <div className="mt-30">
                          <button
                            type="submit"
                            className="butn butn-md butn-bord radius-30"
                          >
                            <span className="text">Lets Talk</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Getintouch;
