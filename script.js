const projects = [
  {
    title: "✨ Portfolio Page",
    description: "My very first project — clean, elegant, and simple.",
    link: "https://jasnoor-kaur1501.github.io/My-Portfolio/"
  },
  {
    title: "🩷 Productivity Room",
    description: "A pastel-themed productivity app with affirmations and a timer.",
    link: "https://jasnoor-kaur1501.github.io/Productivity-Room/"
  },
  {
    title: "💡 Coming Soon",
    description: "More creative projects and ideas on the way!",
    link: "#"
  }
];

const container = document.getElementById("projects");

projects.forEach(proj => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${proj.title}</h3>
    <p>${proj.description}</p>
    <a href="${proj.link}" target="_blank">View Project</a>
  `;
  container.appendChild(card);
});
