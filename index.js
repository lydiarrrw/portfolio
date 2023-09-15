const projects = [
  {
    id: 1,
    title: "🧘‍♀️ Restore Yoga",
    description: "UNDER CONSTRUCTION",
    tags: ["react.js", "next.js"],
    type: "work",
    github: "https://github.com/lydiarrrw",
    liveSite: "https://github.com/lydiarrrw",
  },
  {
    id: 2,
    title: "👩🏻‍🍳 Galette Builder",
    description: "UNDER CONSTRUCTION",
    tags: ["react.js"],
    type: "work",
    github: "https://github.com/lydiarrrw/galette-simple",
    liveSite: "https://github.com/lydiarrrw",
  },
  {
    id: 3,
    title: "🏫 Milburn Village Hall",
    description: "A community hall site I built",
    tags: ["react.js", "html", "css"],
    type: "work",
    github: "https://github.com/lydiarrrw/mvh",
    liveSite: "https://www.milburnvillagehall.org.uk/#/",
  },
  {
    id: 4,
    title: "🍗 BBQuestion? ",
    description: "Every day is a bbq day (nearly)",
    tags: ["react.js", "css"],
    type: "fun",
    github: "https://github.com/lydiarrrw/bbquestion",
    liveSite: "https://lydiarrrw.github.io/bbquestion/",
  },
  {
    id: 5,
    title: "👻 Roshman",
    description: "Pacman but not",
    tags: ["javascript", "html", "css"],
    type: "fun",
    github: "https://github.com/lydiarrrw/project-1",
    liveSite: "https://lydiarrrw.github.io/project-1/",
  },
  {
    id: 6,
    title: "🦖 REXFLIX",
    description: "Find a movie to watch using TMDB.",
    tags: ["javascript", "html", "css"],
    type: "fun",
    github: "https://github.com/lydiarrrw/project-2",
    liveSite: "https://lydiarrrw.github.io/project-2/",
  },
];

function displayItems(items) {
  let projectHtml = "";

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const tags = item.tags;
    const showLink = item.description !== 'UNDER CONSTRUCTION'; // Check if description is not 'UNDER CONSTRUCTION'

    projectHtml += `
      <div href="" class="projects__project">
        <div class="project__description project__hover--hidden">
          <h4>${item.title}</h4> 
        </div>
        <p class="project__hover--show project__hover--description">${
          item.description
        }</p>
        <div class="project__tags project__hover--hidden">
          ${tags
            .map((tag) => `<div class="project__tag">${tag}</div>`)
            .join("")}
        </div>
        <div class="project__hover--show project__see-more">
          <p>See more:</p>
          <div class="project__links__more">
            ${showLink ? `
              <a 
                href="${item.liveSite}" 
                class="project__links project__tag"
                target="_blank"
              >
                live
              </a>
            ` : ''}
            <a 
              href="${item.github}" 
              class="project__links project__tag"
              target="_blank"
            >
              code
            </a>
          </div>
        </div>
      </div>
    `;
  }

  document.getElementById(
    "projects__filtered__container"
  ).innerHTML = projectHtml;
}

let typefilteredProjects = projects;

function filterProjectsByType(type) {
  const filteredProjects = projects.filter((project) => project.type === type);
  const tag = "";
  if (type === "all") {
    typefilteredProjects = projects;
    tagClassAddRemove(tag);
  } else {
    typefilteredProjects = filteredProjects;
    tagClassAddRemove(tag);
  }

  const typeElements = document.querySelectorAll(".project__tag-type");

  typeElements.forEach((typeElement) => {
    if (typeElement) {
      typeElement.classList.remove("project-filter-selected");
    }
    if (typeElement.innerHTML.toLowerCase() === type) {
      typeElement.classList.add("project-filter-selected");
    }
  });

  displayItems(typefilteredProjects);
}

function filterProjectsByTag(tag) {
  let filteredProjects = typefilteredProjects;
  // console.log(filteredProjects)
  if (tag === "all") {
    filteredProjects = typefilteredProjects;
    // filteredProjects = projects;
  } else if (tag === "") {
    filteredProjects = projects;
  } else {
    filteredProjects = typefilteredProjects.filter((project) =>
      project.tags.includes(tag)
    );
  }

  tagClassAddRemove(tag);

  displayItems(filteredProjects);
}

function tagClassAddRemove(tag) {
  const tagElements = document.querySelectorAll(".project__tag-tag");

  tagElements.forEach((tagElement) => {
    if (tagElement) {
      tagElement.classList.remove("project-filter-selected");
    }
    if (tagElement.innerHTML.toLowerCase() === tag) {
      tagElement.classList.add("project-filter-selected");
    }
  });
}

displayItems(projects);
