import ContactForm from "./contact/ContactForm";
import ContactUbi from "./contact/ContactUbi";

const ContactUs = () => {
  return (
    <section className="contact__us">
      <h2>Contact us</h2>
      <p>
        Need an experienced and skilled hand with custom IT projects? Fill out
        the form to get a free consultation.
      </p>
      <div className="contact__info">
        <ContactForm />
        <ContactUbi />
      </div>
    </section>
  );
};

export default ContactUs;
