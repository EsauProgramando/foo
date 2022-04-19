import imgMap from "../../assets/images/img-map.svg";

const ContactUbi = () => {
  return (
    <div className="contact__ubi">
      <h4>Office</h4>
      <p>
        United States <span>500 5th Avenue Suite 400, NY 10110</span>
      </p>
      <p>
        United Kingdom <span>High St, Bromley BR1 1DN</span>
      </p>
      <p>
        France <span>80 avenue des Terroirs de France, Paris</span>
      </p>

      <img src={imgMap} alt="Imagen Mapa" />
    </div>
  );
};

export default ContactUbi;
