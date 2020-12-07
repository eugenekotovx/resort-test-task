const links = document.querySelectorAll(".menu__link");
const toggle = document.querySelector("#menu__toggle");
for (link of links) {
  link.addEventListener("click", () => {
    toggle.checked = false;
  });
}
