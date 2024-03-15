import React from "react";

const Getintouch = () => {
  return (
    <div>
      <section
        class="contact-crev bg-gray1 section-padding"
        data-scroll-index="7"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="sec-lg-head md-mb80">
                <div class="dot-titl-non mb-10">Get In Touch</div>
                <div class="fz-50">Lets make your brand brilliant!</div>
                <p class="fz-15 mt-10">
                  If you would like to work with us or just want to get in
                  touch, we’d love to hear from you!
                </p>
              </div>
            </div>
            <div class="col-lg-6 offset-lg-1 valign z-99">
              <div class="full-width">
                <form method="post" action="https://www.dartdesign.in/contact">
                  <input
                    type="hidden"
                    name="_token"
                    value="HtbKQ0H6UE76e4jHXmFqrD2VDJF6sD1mB1kHyMRO"
                  />{" "}
                  <div class="messages"></div>
                  <div class="controls row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                          value=""
                        />
                        <span class="text-danger"></span>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required="required"
                          value=""
                        />
                        <span class="text-danger"></span>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          id="form_phone"
                          type="tel"
                          name="phone"
                          placeholder="Phone"
                          required="required"
                          value=""
                          minlength="9"
                        />
                        <span class="text-danger"></span>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group mb-20">
                        <input
                          id="form_subject"
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <textarea
                          id="form_message"
                          name="comment"
                          placeholder="Message"
                          rows="4"
                          required="required"
                        ></textarea>
                        <span class="text-danger"></span>
                      </div>
                      <input type="hidden" name="page" value="Home Page" />
                      <div
                        data-sitekey="6LeScNAmAAAAAPEJ-gx1MpjSpqWtn8K09MNur1Kk"
                        class="g-recaptcha"
                      ></div>
                      <div class="mt-30">
                        <button
                          type="submit"
                          class="butn butn-md butn-bord radius-30"
                        >
                          <span class="text">Lets Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                {/* <script>
// Function that loads recaptcha on form input focus
function reCaptchaOnFocus() {
var head = document.getElementsByTagName('head')[0]
var script = document.createElement('script')
script.type = 'text/javascript';
script.src = 'https://www.google.com/recaptcha/api.js'
head.appendChild(script);
// remove focus to avoid js error:
document.getElementById('form_name').addEventListener('focus', reCaptchaOnFocus);
document.getElementById('form_email').addEventListener('focus', reCaptchaOnFocus);
document.getElementById('form_phone').addEventListener('focus', reCaptchaOnFocus);
document.getElementById('form_subject').addEventListener('focus', reCaptchaOnFocus);
document.getElementById('form_message').addEventListener('focus', reCaptchaOnFocus);
};
// add initial event listener to the form inputs
document.getElementById('form_name').addEventListener('focus', reCaptchaOnFocus, false);
document.getElementById('form_email').addEventListener('focus', reCaptchaOnFocus, false);
document.getElementById('form_phone').addEventListener('focus', reCaptchaOnFocus, false);
document.getElementById('form_subject').addEventListener('focus', reCaptchaOnFocus, false);
document.getElementById('form_message').addEventListener('focus', reCaptchaOnFocus, false);
</script> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Getintouch;
