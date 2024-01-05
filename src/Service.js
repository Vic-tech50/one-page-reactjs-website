import icon1 from "./assets/images/service-icon-01.png";
import icon2 from "./assets/images/service-icon-02.png";
import icon3 from "./assets/images/service-icon-01.png";

export default function Service(){
          return(
                    <>
                    <div id="services" className="our-services section">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-3">
        <div
          className="section-heading wow bounceIn"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <h6>Our Services</h6>
          <h2>
            Discover What We Do &amp; <span>Offer</span> To Our <em>Clients</em>
          </h2>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-4">
        <div
          className="service-item wow bounceInUp"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
        >
          <div className="row">
            <div className="col-lg-4">
              <div className="icon">
                <img src={icon1} alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="right-content">
                <h4>Similar Websites</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dormque laudantium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div
          className="service-item wow bounceInUp"
          data-wow-duration="1s"
          data-wow-delay="0.4s"
        >
          <div className="row">
            <div className="col-lg-4">
              <div className="icon">
                <img src={icon2} alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="right-content">
                <h4>Website Trends</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dormque laudantium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div
          className="service-item wow bounceInUp"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <div className="row">
            <div className="col-lg-4">
              <div className="icon">
                <img src={icon3} alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="right-content">
                <h4>Traffic Analysis</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dormque laudantium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div
          className="service-item wow bounceInUp"
          data-wow-duration="1s"
          data-wow-delay="0.6s"
        >
          <div className="row">
            <div className="col-lg-4">
              <div className="icon">
                <img src={icon3} alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="right-content">
                <h4>Optimizing Keywords</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dormque laudantium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div
          className="service-item wow bounceInUp"
          data-wow-duration="1s"
          data-wow-delay="0.7s"
        >
          <div className="row">
            <div className="col-lg-4">
              <div className="icon">
                <img src={icon1} alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="right-content">
                <h4>Page Optimizations</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dormque laudantium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div
          className="service-item wow bounceInUp"
          data-wow-duration="1s"
          data-wow-delay="0.8s"
        >
          <div className="row">
            <div className="col-lg-4">
              <div className="icon">
                <img src={icon2} alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="right-content">
                <h4>Deep URL Analysis</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dormque laudantium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

                    </>
          );
}