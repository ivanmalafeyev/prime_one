//Check mobile
const isMobile = {
  Android: () => {
    return !!navigator.userAgent.match(/Android/i);
  },
  BlackBerry: () => {
    return !!navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: () => {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: () => {
    return !!navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: () => {
    return !!navigator.userAgent.match(/IEMobile/i);
  },
  any: () => {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

//Set touch mode or mouse mode
if (isMobile.any()) {
  document.body.classList.add("touch");
  const arrows = document.querySelectorAll(".arrow");
  [].forEach.call(arrows, (e) => {
    const thisLink = e.previousElementSibling;
    const subMenu = e.nextElementSibling;
    thisLink.classList.add("parent");
    e.addEventListener("click", () => {
      subMenu.classList.toggle("open");
      e.classList.toggle("active");
    });
  });
} else {
  document.body.classList.add("mouse");
}
