import React, { useState } from "react";
import ProjectsData from "./../../BackEnd/data.json";
import allIcons from "../ReactHook/importIconsImg";
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
    <section className="o-contact max-width-1600px">
      <h2 className="o-contact-title a-title-h2">Me Contacter</h2>
      <div className="o-contact-zone">
        <section className="o-contact-content">
        <h3 className="o-contact-form-title">
              Quelques choses à me dire ?
            </h3>
          <form
            className={`o-contact-form ${formSendClass()} `}
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
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
        <section className="o-contact-medialink">
        <div>
  <h3 className="o-contact-medialink-title">Social Networks</h3>
  <ul className="o-contact-medialink-list">
    {ProjectsData.reseaux.map((reseau) => (
      <li className={`o-contact-medialink-item ${reseau.name}`} key={reseau.name}>
        <a target="_blank" rel="noopener noreferrer" href={reseau.url}>
          <p>{reseau.name}</p>
          <span className="o-contact-medialink-item-icons">
            <img draggable='false' src={allIcons[reseau.name]} alt="" />
          </span>
        </a>
      </li>
    ))}
  </ul>
</div>

        </section>
      </div>
    </section>
  );
};

export default OrganismContact;
