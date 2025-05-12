// Scroll animations (basic fade-in on scroll)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
});

document.querySelectorAll('section').forEach(sec => {
  sec.classList.add('hidden');
  observer.observe(sec);
});
const themeToggle = document.getElementById("themeToggle");
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  // Change icon
  if (document.body.classList.contains("light-theme")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    icon.style.color = "#333";
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    icon.style.color = "#ffc107";
  }
});
