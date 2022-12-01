import React, { useState } from "react";
import ContactSvg from "../ReactHook/importContactSvg";
const OrganismContact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  console.log(ContactSvg.ContactDivDown);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    alert(
      'A form was submitted with Name :"' +
        name +
        '" and Email :"' +
        email +
        '"' +
        '" and Description :"' +
        description +
        '"'
    );
    e.preventDefault();
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
            className="o-contact-form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <h3 className="o-contact-form-title">
              Quelques choses à me dire ?
            </h3>
            <fieldset className="o-contact-fieldset">
              <div className="o-contact-form-input">
                <label for="email">
                  Adresse Courriel
                  <span className="o-contact-form-required">*</span>{" "}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  required
                  onChange={(e) => {
                    handleEmailChange(e);
                  }}
                />
              </div>
              <div className="o-contact-form-input">
                <label>Nom Complet </label>
                <input
                  type="text"
                  value={name}
                  required
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div className="o-contact-form-input">
                <label>Message </label>
                <textarea
                  value={description}
                  required
                  onChange={(e) => {
                    handleDescriptionChange(e);
                  }}
                />
              </div>
              <span className="o-contact-form-required">* obligatoire</span>
            </fieldset>
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
