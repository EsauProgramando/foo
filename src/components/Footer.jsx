import iconshape from "../assets/images/icon-shape.svg";
import iconfacebook from "../assets/images/icon-facebook.svg";
import icontwitter from "../assets/images/icon-twitter.svg";
import iconhistagram from "../assets/images/icon-histagram.svg";
import barra from "../assets/images/barra.svg";
import rectangle from "../assets/images/rectangle.svg";
const Footer = () => {
  const Services = [
    "Services",
    "Email Marketing",
    "Campaigns",
    "Branding",
    "Offline",
  ];
  const About = ["About", "Our Story", "Benefits", "Team", "Careers"];
  const Help = ["Help", "FAQs", "Contact Us"];
  return (
    <footer className="container__footer">
      <div className="container__footer-icon">
        <div className="container__footer-icon-shape">
          <img src={iconshape} alt="icon shape" />
        </div>
      </div>
      <div className="barra"></div>
      <div className="container__footer-body">
        <div className="container__footer-Subscribe">
          <p>Subscribe to our newsletter</p>
          <input type="text" placeholder="Email address"></input>
          <div className="container__footer-Subscribe-pie">
            <div className="barra-input"></div>
            <div className="rectangulo">
              <img src={rectangle} alt="rectangulo" />
            </div>
          </div>
        </div>
        <div className="container__footer-Services">
          <ul>
            {Services.map((el, index) => {
              return <li key={index}>{el}</li>;
            })}
          </ul>
        </div>
        <div className="container__footer-About">
          <ul>
            {About.map((el, index) => {
              return <li key={index}>{el}</li>;
            })}
          </ul>
        </div>
        <div className="container__footer-Help">
          <ul>
            {Help.map((el, index) => {
              return <li key={index}>{el}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="container__footer-abajo">
        <div className="container__footer-left">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
        <div className="container__footer-rigth">
          <img src={iconfacebook} alt="Facebook" />
          <img src={icontwitter} alt="Twitter" />
          <img src={iconhistagram} alt="Histagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
