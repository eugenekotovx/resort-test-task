const btns = document.querySelectorAll(".js-choose__tab");
const tabContent = document.querySelectorAll(".js-choose-tab__content");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    addClassFunc(btns[i], "choose__tab--active");
    clearClassFunc(i, btns, "choose__tab--active");

    addClassFunc(tabContent[i], "choose-tab__content--active");
    clearClassFunc(i, tabContent, "choose-tab__content--active");
  });
}

function addClassFunc(elem, elemClass) {
  elem.classList.add(elemClass);
}

function clearClassFunc(index, elems, elemClass) {
  for (let i = 0; i < elems.length; i++) {
    if (i === index) {
      continue;
    }
    elems[i].classList.remove(elemClass);
  }
}
