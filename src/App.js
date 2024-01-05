// import logo from './logo.svg';
import './App.css';
// import './vendor/jquery/jquery.min.js';
//  import './vendor/bootstrap/js/bootstrap.bundle.min.js';
// //  import './assets/js/owl-carousel.js';
// //  import './assets/js/animation.js';
//  import './assets/js/imagesloaded.js';
// //  import './assets/js/custom.js';
// import ScriptTag from 'react-script-tag';
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-seo-dream.css";
import "./assets/css/animated.css";
import "./assets/css/owl.css";



import Header from './Header';
import Body from './Body';
import Service from './Service';
import Portfolio from './Portfolio';
import Footer from './Footer';


function App() {

  
  return (
    
    <div className="App">




      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <Body />
      <Service />
      {/* <Portfolio /> */}
      <Footer />
    </div>
  );
}

export default App;
