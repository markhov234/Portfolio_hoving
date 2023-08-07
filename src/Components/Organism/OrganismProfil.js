import ProjectsData from "./../../BackEnd/data.json";
import allIcons from "../ReactHook/importIconsImg";

const OrganismProfil = () => {
  const listTechno = ProjectsData.profil[0];

  // console.log(listTechno);
  return (
    <main className="o-profil">
      <h2 className="o-profil-mainTitle">Mon profil</h2>
      <section className="o-profil-information">
        <div className="bleed --center">
          <h3 className="o-profil-information-title a-title-h3">
            À propos de moi
          </h3>
          <div className="o-profil-information-presentation">
          <div className="o-profil-information-presentation-picture">

            <img
              className="o-profil-information-picture"
              alt=""
              src="/images/profil_square.jpg"
            ></img>
             </div>
            <div className="o-profil-information-description">
              <p className="o-profil-information-name">
                Marc-Antoine Hovington
              </p>
              <div className="o-profil-information-text">
                <p> Je m'appelle Marc-Antoine Hovington, développeur front-end et travailleur autonome. </p>
                <p> J'ai une véritable passion pour la nature et les relations humaines.
                  En tant que développeur, je suis constamment motivé à améliorer mes compétences et à rester à jour avec les dernières technologies et tendances du secteur.</p>
<p>J'apprécie également les défis et je suis capable de travailler de manière autonome pour atteindre mes objectifs.
Si vous êtes à la recherche d'une personne passionnée et dévouée, n'hésitez pas à me contacter. Je serais ravi de discuter de mes compétences et de voir comment je pourrais contribuer à votre entreprise.</p>
    
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="o-profil-competence">
        <div className="o-profil-competence-zone --center">
          <h3 className="o-profil-competence-title a-title-h3">
            Mes compétences
          </h3>
          <ul className="o-profil-competence-techno">
            {listTechno.technologie.map((technologie, index) => (
              <li key={index} className="o-profil-competence-techno-item">
                <span className="o-profil-competence-techno-item-icon">
                  {" "}
                  <img src={allIcons[technologie.techno]} alt="" />
                </span>
                <div className="o-profil-competence-techno-zone">
                  <p className="o-profil-competence-techno-item-description">
                    {technologie.techno}
                  </p>
                  <span
                    className={
                      "o-profil-competence-techno-item-level" +
                      technologie.level
                    }
                  ></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="o-profil-passion">
        <div className="o-profil-passion-zone --center">
          <h3 className="o-profil-passion-title a-title-h3"> Mes passions</h3>
          <span className="o-profil-passion-icon"></span>
          <ul className="o-profil-passion-list">
            {listTechno.passion.map((passion, index) => (
              <li key={index} className="o-profil-passion-item">
                {passion}
              </li>
            ))}
          </ul>
        </div>
        {/* https://www.linkedin.com/posts/folks-hr_le-bon-coup-du-mois-dao%C3%BBt-est-d%C3%A9cern%C3%A9-%C3%A0-activity-6839520571651371008-l3Zz?utm_source=share&utm_medium=member_desktop */}
      </section>
    </main>
  );
};

export default OrganismProfil;
