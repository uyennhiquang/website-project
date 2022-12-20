const sidebar = document.querySelector("aside");
const sidebarToggle = document.querySelector(".toggle");

sidebarToggle.addEventListener("click", function () {
  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
  } else {
    sidebar.classList.add("hidden");
  }
});
