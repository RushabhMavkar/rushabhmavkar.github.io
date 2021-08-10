var certificates = {
  visible: [
    {
      title: "Problem Solving Using Computational Thinking",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate deleniti similique ex minima atque incidunt dolorem natus sequi iure voluptatem.",
      date: "June 2021",
      credential_id: "QV27VQQU5SGD",
      credential_url: "https://www.coursera.org/account/accomplishments/certificate/QV27VQQU5SGD",
      issuing_org: "Coursera | University of Michigan",
      skills: ["Problem Solving"],
    },
    {
      title: "SQL for Data Science",
      desc: "",
      date: "July 2020",
      credential_id: "C2G66WF8ZZBA",
      credential_url: "https://www.coursera.org/account/accomplishments/certificate/C2G66WF8ZZBA",
      issuing_org: "Coursera | University of California, Davis",
      skills: ["SQL"],
    },
    {
      title: "Python Data Structures",
      desc: "",
      date: "June 2020",
      credential_id: "9RU6CE39FRUV",
      credential_url: "https://www.coursera.org/account/accomplishments/certificate/9RU6CE39FRUV",
      issuing_org: "Coursera | University of Michigan",
      skills: ["Data Structures"],
    },
    {
      title: "Interactivity with JavaScript",
      desc: "",
      date: "July 2020",
      credential_id: "VQ3U6FPWNFK4",
      credential_url: "https://www.coursera.org/account/accomplishments/certificate/VQ3U6FPWNFK4",
      issuing_org: "Coursera | University of Michigan",
      skills: ["JavaScript"],
    },
    {
      title: "Web Application Technologies and Django",
      desc: "",
      date: "July 2020",
      credential_id: "UT9GS8LSK7JR",
      credential_url: "https://www.coursera.org/account/accomplishments/certificate/UT9GS8LSK7JR",
      issuing_org: "Coursera | University of Michigan",
      skills: ["Python", "Django"],
    },
    {
      title: "Introduction to AWS Identity and Access Management",
      desc: "",
      date: "July 2021",
      credential_id: "LUHUDZHWQXL7",
      credential_url: "https://www.coursera.org/account/accomplishments/certificate/LUHUDZHWQXL7",
      issuing_org: "Coursera | Amazon Web Services",
      skills: ["AWS", "IAM"],
    },
  ],
  invisible: [
    {
      title: "Crash Course on Python",
      desc: "",
      date: "July 2020",
      credential_id: "YU44FUTRSCCE",
      credential_url: "https://www.coursera.org/account/accomplishments/certificate/YU44FUTRSCCE",
      issuing_org: "Coursera | Google",
      skills: ["Python", "Object Oriented Programming"],
    },
    {
      title: "Python (Basic)",
      desc: "",
      date: "",
      credential_id: "",
      credential_url: "",
      issuing_org: "HackerRank",
      skills: ["Python"],
    },
    {
      title: "Introduction to Git and GitHub",
      desc: "",
      date: "August 2020",
      credential_id: "7WCDJJRGVB8L",
      credential_url: "https://www.coursera.org/account/accomplishments/certificate/7WCDJJRGVB8L",
      issuing_org: "Coursera | Google",
      skills: ["Git", "GitHub"],
    },
    {
      title: "Introduction to Relational Database and SQL",
      desc: "",
      date: "July 2020",
      credential_id: "27TQRJWXBFX6",
      credential_url: "https://www.coursera.org/account/accomplishments/certificate/27TQRJWXBFX6",
      issuing_org: "Coursera | Coursera Project Network",
      skills: ["SQL"],
    },
    {
      title: "Using Python to Access Web Data",
      desc: "",
      date: "October 2020",
      credential_id: "ZUKCKW6LFQQV",
      credential_url: "https://www.coursera.org/account/accomplishments/certificate/ZUKCKW6LFQQV",
      issuing_org: "Coursera | University of Michigan",
      skills: ["Python", "Web Scraping"],
    },
  ],
};

function build_certificate(title, desc, date, c_id, c_url, org, skills) {
  var skill_list = "";

  for (let i = 0; i < skills.length; i++) {
    skill_list += "<li>" + skills[i] + "</li>";
  }
  return (
    '<div class="certificate">' +
    '<div class="cert-head">' +
    "<a href=" +
    c_url +
    ' target="_blank">' +
    '<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>View Certificate</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>' +
    "</a>" +
    "</div>" +
    '<h4 class="cert-title">' +
    title +
    "</h4>" +
    '<small class="cert-semi">' +
    org +
    "</small>" +
    '<p class="cert-desc">' +
    desc +
    "</p>" +
    '<ul class="cert-highlights">' +
    skill_list +
    "</ul>" +
    "</div>"
  );
}

function add_certifications() {
  var cert = certificates;

  var visible_cert_holder = document.getElementById("visible_certificates");
  var visible_cert = cert["visible"];

  var hidden_cert_holder = document.getElementById("hidden_certificates");
  var hidden_cert = cert["invisible"];

  for (let i = 0; i < visible_cert.length; i++) {
    cert_data = build_certificate((title = visible_cert[i]["title"]), (desc = visible_cert[i]["desc"]), (date = visible_cert[i]["date"]), (c_id = visible_cert[i]["credential_id"]), (c_url = visible_cert[i]["credential_url"]), (org = visible_cert[i]["issuing_org"]), (skills = visible_cert[i]["skills"]));
    visible_cert_holder.innerHTML += cert_data;
  }

  for (let i = 0; i < hidden_cert.length; i++) {
    cert_data = build_certificate((title = hidden_cert[i]["title"]), (desc = hidden_cert[i]["desc"]), (date = hidden_cert[i]["date"]), (c_id = hidden_cert[i]["credential_id"]), (c_url = hidden_cert[i]["credential_url"]), (org = hidden_cert[i]["issuing_org"]), (skills = hidden_cert[i]["skills"]));
    hidden_cert_holder.innerHTML += cert_data;
  }
}

window.onload = function () {
  add_certifications();
};
