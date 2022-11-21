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
            <img
              className="o-profil-information-picture"
              alt=""
              src="https://fakeimg.pl/550/"
            ></img>
            <div className="o-profil-information-description">
              <p className="o-profil-information-name">
                Marc-Antoine Hovington
              </p>
              <div className="o-profil-information-text">
                Eiusmod nostrud ullamco incididunt irure non duis in id ex
                voluptate elit pariatur. Qui amet dolore excepteur anim laborum
                ex nisi elit nostrud ut. Ad ad dolore irure est pariatur.
                Laboris nisi labore exercitation voluptate est non consectetur.
                Lorem id nisi cupidatat consequat mollit sit eiusmod eiusmod
                enim officia nisi exercitation est pariatur. Dolor quis
                voluptate dolor est laboris tempor mollit do veniam.
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
