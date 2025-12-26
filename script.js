// Sticky navbar highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Dark mode toggle
// const toggleBtn = document.getElementById("themeToggle");

// toggleBtn.addEventListener("click", () => {
//   const html = document.documentElement;
//   const theme = html.getAttribute("data-theme");

//   if (theme === "dark") {
//     html.removeAttribute("data-theme");
//   } else {
//     html.setAttribute("data-theme", "dark");
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("themeToggle");
    const html = document.documentElement;

    toggleBtn.addEventListener("click", () => {
      const isDark = html.getAttribute("data-theme") === "dark";

      if (isDark) {
        html.removeAttribute("data-theme");
        toggleBtn.textContent = "🌙 Dark Mode";
      } else {
        html.setAttribute("data-theme", "dark");
        toggleBtn.textContent = "☀️ Light Mode";
      }
    });
  });

