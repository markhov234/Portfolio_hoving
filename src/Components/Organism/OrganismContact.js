import React, { useState } from "react";
import ContactSvg from "../ReactHook/importContactSvg";
import { send } from "emailjs-com";
const OrganismContact = () => {
  const [formState, setFormState] = useState(null);
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send("service_gnqif47", "template_pq42ve6", toSend, "4YpfuHc4lDkTKZwnr")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormState(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setFormState(false);
      });
  };

  const formSendClass = () => {
    let optionClass = null;
    if (formState == null) {
      optionClass = "showNothing";
    } else {
      if (formState) {
        optionClass = "showPositive";
      } else {
        optionClass = "showNegative";
      }
    }
    return optionClass;
  };

  return (
    <main className="o-contact">
      <h1 className="o-contact-title a-title-h1">Me Contacter</h1>
      <div className="o-contact-zone">
        <img
          className="o-contact-div-up"
          src={ContactSvg.ContactDivUp}
          alt=""
        ></img>
        <section className="o-contact-content">
          <h2 className="o-contact-content-title">Informations</h2>
          <ul className="o-contact-content-list">
            <li className="o-contact-content-items">
              <span className="o-contact-content-icon"></span>
              Ville de Québec,QC.
            </li>
            <li className="o-contact-content-items">
              <span className="o-contact-content-icon"></span>
              418-230-9528
            </li>
            <li className="o-contact-content-items">
              <span className="o-contact-content-icon"></span>
              hovington234@gmail.com
            </li>
          </ul>
          <form
            className={`o-contact-form ${formSendClass()} `}
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <h3 className="o-contact-form-title">
              Quelques choses à me dire ?
            </h3>
            <fieldset className="o-contact-fieldset">
              <div className="o-contact-form-input">
                <label>
                  Adresse Courriel
                  <span className="o-contact-form-required">*</span>{" "}
                </label>
                <input
                  type="email"
                  name="reply_to"
                  value={toSend.reply_to}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="o-contact-form-input">
                <label>Nom Complet </label>
                <input
                  type="text"
                  name="from_name"
                  value={toSend.from_name}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="o-contact-form-input">
                <label>Message </label>
                <textarea
                  name="message"
                  value={toSend.message}
                  required
                  onChange={handleChange}
                />
              </div>
              <span className="o-contact-form-required">* obligatoire</span>
            </fieldset>
            <p className={formState ? "show" : "hidden"}> Message envoyé</p>
            <input
              className="o-contact-form-submit"
              type="submit"
              value="Envoyer"
            />
          </form>
        </section>
        <img
          className="o-contact-div-down"
          src={ContactSvg.ContactDivDown}
          alt=""
        ></img>
        <section className="--center"></section>
      </div>
    </main>
  );
};

export default OrganismContact;
