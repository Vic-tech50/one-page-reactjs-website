import img from './assets/images/banner-right-image.png';
import img2 from './assets/images/about-left-image.png';

export default function Body(){
          return(
          <>
          <div
  className="main-banner wow fadeIn"
  id="top"
  data-wow-duration="1s"
  data-wow-delay="0.5s"
>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div
              className="left-content header-text wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              <div className="row">
                <div className="col-lg-4 col-sm-4">
                  <div className="info-stat">
                    <h6>Agency Status:</h6>
                    <h4>Ready Work</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="info-stat">
                    <h6>Price:</h6>
                    <h4>$720/Month</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="info-stat">
                    <h6>Schedules</h6>
                    <h4>$450/Meeting</h4>
                  </div>
                </div>
                <div className="col-lg-12">
                  <h2>SEO &amp; Digital Marketing Agency</h2>
                </div>
                <div className="col-lg-12">
                  <div className="main-green-button scroll-to-section">
                    <a href="#contact">Get Your Quote</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="right-image wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="features" className="features section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="features-content">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="features-item first-feature wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                <div className="first-number number">
                  <h6>01</h6>
                </div>
                <div className="icon" />
                <h4>Reach Out</h4>
                <div className="line-dec" />
                <p>
                  This HTML5 template is based on Bootstrap 5 CSS. You are free
                  to customize anything.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="features-item second-feature wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="second-number number">
                  <h6>02</h6>
                </div>
                <div className="icon" />
                <h4>Develop a Strategy</h4>
                <div className="line-dec" />
                <p>
                  Lorem ipsum dolor sit ameter consectetur adipiscing li elit
                  sed do eiusmod.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="features-item first-feature wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                <div className="third-number number">
                  <h6>03</h6>
                </div>
                <div className="icon" />
                <h4>Implementation</h4>
                <div className="line-dec" />
                <p>
                  If this template is useful for your website, please consider
                  to{" "}
                  <a
                    rel="nofollow"
                    href="https://www.paypal.me/templatemo"
                    target="_blank"
                  >
                    support us
                  </a>{" "}
                  a little.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="features-item second-feature last-features-item wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
              >
                <div className="fourth-number number">
                  <h6>04</h6>
                </div>
                <div className="icon" />
                <h4>Analyze the result</h4>
                <div className="line-dec" />
                <p>
                  Below circular progress bar animation supports those CSS
                  values 10, 20, 30, till 100.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="skills-content">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="skill-item wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                <div className="progress" data-percentage={80}>
                  <span className="progress-left">
                    <span className="progress-bar" />
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar" />
                  </span>
                  <div className="progress-value">
                    <div>
                      80%
                      <br />
                      <span>HTML/CSS/JS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="skill-item wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="progress" data-percentage={60}>
                  <span className="progress-left">
                    <span className="progress-bar" />
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar" />
                  </span>
                  <div className="progress-value">
                    <div>
                      60%
                      <br />
                      <span>Wordpress</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="skill-item wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                <div className="progress" data-percentage={90}>
                  <span className="progress-left">
                    <span className="progress-bar" />
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar" />
                  </span>
                  <div className="progress-value">
                    <div>
                      90%
                      <br />
                      <span>Marketing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="skill-item last-skill-item wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
              >
                <div className="progress" data-percentage={70}>
                  <span className="progress-left">
                    <span className="progress-bar" />
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar" />
                  </span>
                  <div className="progress-value">
                    <div>
                      70%
                      <br />
                      <span>Photoshop</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="about" className="about-us section">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div
          className="left-image wow fadeInLeft"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <img src={img2} alt="" />
        </div>
      </div>
      <div
        className="col-lg-6 align-self-center wow fadeInRight"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="section-heading">
          <h6>About Us</h6>
          <h2>
            Top <em>marketing</em> agency &amp; consult your website{" "}
            <span>with us</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-4">
            <div className="about-item">
              <h4>750+</h4>
              <h6>projects finished</h6>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4">
            <div className="about-item">
              <h4>340+</h4>
              <h6>happy clients</h6>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4">
            <div className="about-item">
              <h4>128+</h4>
              <h6>awards</h6>
            </div>
          </div>
        </div>
        <p>
          <a
            rel="nofollow"
            href="https://templatemo.com/tm-563-seo-dream"
            target="_parent"
          >
            SEO Dream
          </a>{" "}
          is free digital marketing CSS template provided by TemplateMo website.
          You are allowed to use this template for your business websites.
          Please DO NOT redistribute this template ZIP file on any Free CSS
          collection websites. You may contact us for more information. Thank
          you.
        </p>
        <div className="main-green-button">
          <a href="#">Discover company</a>
        </div>
      </div>
    </div>
  </div>
</div>



          </>

          );
}
