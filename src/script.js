document.addEventListener("DOMContentLoaded", loadProjects);

// Redirigir a la página de agregar proyecto
function goToAddProject() {
  window.location.href = "add-project.html";
}

// Cargar proyectos desde localStorage
function loadProjects() {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  const projectsContainer = document.getElementById("projectsContainer");
  projectsContainer.innerHTML = ""; // Limpiar contenedor

  projects.forEach((project, index) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    // Asignar un ícono aleatorio para cada proyecto
    const icons = ["folder", "computer", "smartphone"];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    projectDiv.innerHTML = `
      <span class="material-icons project-icon">${randomIcon}</span>
      <div class="project-details">
        <h2>${project.name}</h2>
        <p>${project.description}</p>
      </div>
      <div class="project-actions">
        <span class="material-icons edit-icon" onclick="editProject(${index})">edit</span>
        <span class="material-icons delete-icon" onclick="deleteProject(${index})">delete</span>
      </div>
    `;

    projectsContainer.appendChild(projectDiv);
  });
}

// Eliminar proyecto
function deleteProject(index) {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  projects.splice(index, 1);
  localStorage.setItem("projects", JSON.stringify(projects));
  loadProjects();
}

// Editar proyecto
function editProject(index) {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  const project = projects[index];

  const newName = prompt("Editar nombre del proyecto:", project.name);
  const newDescription = prompt("Editar descripción del proyecto:", project.description);

  if (newName && newDescription) {
    projects[index] = { ...project, name: newName, description: newDescription };
    localStorage.setItem("projects", JSON.stringify(projects));
    loadProjects();
  }
}
