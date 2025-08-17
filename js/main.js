const themes = document.getElementsByClassName("theme");

Array.from(themes).forEach((theme) => {
  theme.addEventListener("click", (e) => {
    document
      .querySelector("body")
      .setAttribute("data-theme", e.target.dataset.theme);
    localStorage.setItem("theme", e.target.dataset.theme);
  });
});

function getThemeOnLoad() {
  const theme = localStorage.getItem("theme");

  if (theme) {
    document.querySelector("body").setAttribute("data-theme", theme);
  }
}

getThemeOnLoad();

const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button after scrolling down 200px
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

// Smooth scroll to top
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
