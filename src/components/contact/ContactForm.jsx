const ContactForm = () => {
  return (
    <form className="contact__form">
      <input type="text" placeholder="Your Company Name" />
      <input type="text" placeholder="Nature of Bussiness" />
      <div className="field__addres_code">
        <input type="text" placeholder="Address" />
        <input type="number" placeholder="Postcode" />
      </div>
      <input type="text" placeholder="Contact name" />
      <input type="tel" placeholder="Contact Phone" />
      <input type="email" placeholder="email@gmail" />
      <div className="field__check">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">
          I want to protect my data by signing an NDA
        </label>
      </div>

      <button type="button">Submit</button>
    </form>
  );
};

export default ContactForm;
