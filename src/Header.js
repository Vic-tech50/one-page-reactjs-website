// import logo from './logo.svg';
import logo from './assets/images/logo-icon.png';
import './App.css';


export default function Header() {
  return (
    
     
     <>
  {/* ***** Preloader Start ***** */}
  {/* <div id="js-preloader" className="js-preloader">
    <div className="preloader-inner">
      <span className="dot" />
      <div className="dots">
        <span />
        <span />
        <span />
      </div>
    </div>
  </div> */}
  {/* ***** Preloader End ***** */}
  {/* ***** Header Area Start ***** */}
  <header
    className="header-area header-sticky wow slideInDown"
    data-wow-duration="0.75s"
    data-wow-delay="0s"
  >
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            <a href="index.html" className="logo">
              <h4>
                SEO Dream <img src={logo} alt="" />
              </h4>
            </a>
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav">
              <li className="scroll-to-section">
                <a href="#top" className="active">
                  Home
                </a>
              </li>
              <li className="scroll-to-section">
                <a href="#features">Features</a>
              </li>
              <li className="scroll-to-section">
                <a href="#about">About Us</a>
              </li>
              <li className="scroll-to-section">
                <a href="#services">Services</a>
              </li>
              <li className="scroll-to-section">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="scroll-to-section">
                <a href="#contact">Contact Us</a>
              </li>
              <li className="scroll-to-section">
                <div className="main-blue-button">
                  <a href="#contact">Get Your Quote</a>
                </div>
              </li>
            </ul>
            <a className="menu-trigger">
              <span>Menu</span>
            </a>
            {/* ***** Menu End ***** */}
          </nav>
        </div>
      </div>
    </div>
  </header>
  {/* ***** Header Area End ***** */}
</>

  
  );
}


