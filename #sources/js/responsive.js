let w, h;
w = window.outerWidth;
h = window.outerHeight;

function resize() {
  adiptiveHeader("header-menu", "header-top-lang", "header-top");
  adiptiveHeader("header-menu", "header-bottom-menu", "header-bottom__column");
}

function adiptiveHeader(burgerMenuClass, elementClass, returnPointClass) {
  const burgerMenu = document.querySelector("." + burgerMenuClass);
  const elements = document.querySelectorAll("." + elementClass);
  const returnPoint = document.querySelector("." + returnPointClass);
  Array.prototype.forEach.call(elements, (element) => {
    if (w <= 768) {
      if (!element.classList.contains("done")) {
        element.classList.add("done");
        burgerMenu.appendChild(element);
      }
    } else {
      element = burgerMenu.querySelector("." + elementClass);
      if (element) {
        if (element.classList.contains("done")) {
          element.classList.remove("done");
          if (element.classList.contains(elementClass + "--right")) {
            returnPoint.parentNode.lastChild.previousSibling.appendChild(
              element
            );
          } else {
            returnPoint.appendChild(element);
          }
        }
      }
    }
  });
}

window.addEventListener("resize", () => {
  w = window.outerWidth;
  h = window.outerHeight;
  resize();
});

resize();
let wo, ho, wi, hi;
wo = window.outerWidth;
ho = window.outerHeight;
wi = window.innerWidth;
hi = window.innerHeight;

// function resize() {
// document.querySelector(".mainblock").style.minHeight = hi + "px";
// }

// window.addEventListener("resize", () => {
//   wo = window.outerWidth;
//   ho = window.outerHeight;
//   wi = window.innerWidth;
//   hi = window.innerHeight;
//   resize();
// });

// resize();

const menuIcon = document.querySelector(".header-menu__icon");
const menu = document.querySelector(".header-menu");
const links = document.querySelectorAll(".menu-header__link");
console.log(menu);

menuIcon.addEventListener("click", () => {
  function toggleClass(c) {
    menuIcon.classList.toggle(c);
    menu.classList.toggle(c);
    [].forEach.call(links, (lnk) => {
      lnk.classList.toggle("active");
    });
    document.body.classList.toggle("lock");
  }
  toggleClass("active");

  function linkCB() {
    toggleClass("active");
    [].forEach.call(links, (l) => {
      l.removeEventListener("click", linkCB);
    });
  }

  [].forEach.call(links, (l) => {
    l.addEventListener("click", linkCB);
  });
});
