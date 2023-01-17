import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ props }) {
  console.log(ProjectList);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {props.map(projects => 

        <ProjectItem 

         key={props.id}

          name={props.name}

          about={props.about} 

          technologies={props.technologies}
          />
          )}
      </div>
    </div>
  );

}

export default ProjectList;



