import linkedIn from "../../Images/linked_icon.svg";
import gmail from "../../Images/gmail_icon.svg";
import github from "../../Images/github_icon.svg";
const Footer = (props) => {
  // const linkedIn = linkedIn;
  // const gmail = gmail;
  // const github = github;
  return (
    <div className="o-footer">
      <div className="o-footer-zone">
        <ul className="o-footer-social-zone">
          <li>
            <a
              href="https://github.com/markhov234"
              target="_blank"
              rel="noopener noreferrer"
              className="o-footer-social-link"
            >
              <img className="o-footer-icon" src={github} alt="Github icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/marc-antoine-hovington-043007206/"
              target="_blank"
              rel="noopener noreferrer"
              className="o-footer-social-link"
            >
              <img
                className="o-footer-icon"
                src={linkedIn}
                alt="Linked in icon"
              />
            </a>
          </li>
          <li>
            <a
              href="mailto:hovington234@gmail.com?subject=Prise de contact"
              target="_blank"
              rel="noopener noreferrer"
              className="o-footer-social-link"
            >
              <img className="o-footer-icon" src={gmail} alt="Gmail icon" />
            </a>
          </li>
        </ul>
        <small className="o-footer-small">
          Réalisé par Marc-Antoine Hovington
        </small>
      </div>
    </div>
  );
};

export default Footer;
