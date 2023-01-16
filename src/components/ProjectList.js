import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ props }) {
  console.log(props);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {props.map(project => 
        <ProjectItem key={props.id}
          name={props.name} 
          about={props.about} 
          technologies={props.technologies}/>)}
      </div>
    </div>
  );

}

export default ProjectList;


// import React from "react";
// import ProjectItem from "./ProjectItem";

// function ProjectList({ projects }) {
//   console.log(projects);
//   return (
//     <div id="projects">
//       <h2>My Projects</h2>
//       <div id="project-list">{/* render ProjectItem components here */}</div>
//     </div>
//   );
// }

// export default ProjectList;
