var projects = [
  {
    title: "Portfolio.",
    desc: "Personal Portfolio Site.",
    image: "trade.png",
    tech: ["HTML", "JavaScript", "CSS"],
    source_link: "",
    app_link: "",
  },
];

function build_project(title, desc, image, tech, s_link, a_link) {
  var tech_list = "";

  for (let i = 0; i < tech.length; i++) {
    tech_list += "<li>" + tech[i] + "</li>";
  }

  return '<div class="project">' + '<img src="static/projects/trade.png" alt="" />' + '<div class="project-info">' + '<h4 class="project-title">' + title + "</h4>" + '<p class="project-description">' + tech + "</p>" + '<ul class="project-tech">' + tech_list + "</ul>" + "</div>" + "</div>";
}

function add_projects() {}

window.onload = function () {
  add_projects();
};
