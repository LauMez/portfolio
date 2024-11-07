document.addEventListener("DOMContentLoaded", loadProjects);

function loadProjects() {
  const projects = [
    { name: "Tetris", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt aperiam consectetur maiores odio ", icon: "folder" },
    { name: "Blog", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt aperiam consectetur maiores odio ", icon: "computer" },
    { name: "Landing", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt aperiam consectetur maiores odio ", icon: "smartphone" }
  ];
  
  const projectsContainer = document.getElementById("projectsContainer");
  projectsContainer.innerHTML = ""; // Limpiar contenedor

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    projectDiv.innerHTML = `
      <span class="material-icons project-icon">${project.icon}</span>
      <div class="project-details">
        <h2>${project.name}</h2>
        <p>${project.description}</p>
      </div>
    `;

    projectsContainer.appendChild(projectDiv);
  });
}
