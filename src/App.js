// import logo from './logo.svg';
import './App.css';

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




      <Header />
      <Body />
      <Service />
      {/* <Portfolio /> */}
      <Footer />
    </div>
  );
}

export default App;
