import { useParams } from "react-router-dom";
import ProjectsData from "./../../BackEnd/data.json";
import Menu from "../Menu/Menu";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = ProjectsData.projets.find((p) => p.id === parseInt(id));

  if (!project) return <p>Projet introuvable</p>;

  return (
    <div className="project-detail">
      <Menu className="p-accueil-menu" />
      <div>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        {/* Add images, tech stack, etc. */}
      </div>
    </div>
  );
};

export default ProjectDetail;
