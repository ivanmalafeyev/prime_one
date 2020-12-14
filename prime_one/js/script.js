"use strict";

function testWebP(cb) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    cb(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;
var img = document.querySelectorAll(".ibg");
Array.prototype.forEach.call(img, function (value) {
  if (value.querySelector("img")) {
    value.style.backgroundImage = "url(" + value.querySelector("img").getAttribute("src") + ")";
  }
});
;
var w, h;
w = window.outerWidth;
h = window.outerHeight;

function resize() {
  adiptiveHeader("header-menu", "header-top-lang", "header-top");
  adiptiveHeader("header-menu", "header-bottom-menu", "header-bottom__column");
}

function adiptiveHeader(burgerMenuClass, elementClass, returnPointClass) {
  var burgerMenu = document.querySelector("." + burgerMenuClass);
  var elements = document.querySelectorAll("." + elementClass);
  var returnPoint = document.querySelector("." + returnPointClass);
  Array.prototype.forEach.call(elements, function (element) {
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
            returnPoint.parentNode.lastChild.previousSibling.appendChild(element);
          } else {
            returnPoint.appendChild(element);
          }
        }
      }
    }
  });
}

window.addEventListener("resize", function () {
  w = window.outerWidth;
  h = window.outerHeight;
  resize();
});
resize();
var wo, ho, wi, hi;
wo = window.outerWidth;
ho = window.outerHeight;
wi = window.innerWidth;
hi = window.innerHeight; // function resize() {
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

var menuIcon = document.querySelector(".header-menu__icon");
var menu = document.querySelector(".header-menu");
var links = document.querySelectorAll(".menu-header__link");
console.log(menu);
menuIcon.addEventListener("click", function () {
  function toggleClass(c) {
    menuIcon.classList.toggle(c);
    menu.classList.toggle(c);
    [].forEach.call(links, function (lnk) {
      lnk.classList.toggle("active");
    });
    document.body.classList.toggle("lock");
  }

  toggleClass("active");

  function linkCB() {
    toggleClass("active");
    [].forEach.call(links, function (l) {
      l.removeEventListener("click", linkCB);
    });
  }

  [].forEach.call(links, function (l) {
    l.addEventListener("click", linkCB);
  });
});
;
var PLACEHOLDER_OPACITY = 0.5;
var inputs = document.querySelectorAll(".input");

if (inputs) {
  [].forEach.call(inputs, function (e) {
    var dv = e.getAttribute("data-value");
    var isPlaceholder = true;
    e.isPlaceholder = isPlaceholder;

    if (dv) {
      e.style.color = "rgba(255, 255, 255, ".concat(PLACEHOLDER_OPACITY, ")");
      e.value = dv;
    }

    e.addEventListener("focus", function () {
      if (isPlaceholder) {
        e.value = "";
        isPlaceholder = false;
        e.isPlaceholder = isPlaceholder;
        e.style.color = "rgba(255, 255, 255, 1)";
      }
    });
    e.addEventListener("blur", function () {
      if (e.value === "") {
        e.value = dv;
        isPlaceholder = true;
        e.isPlaceholder = isPlaceholder;
        e.style.opacity = PLACEHOLDER_OPACITY;
      }
    });
  });
}

var form = document.querySelector(".form");

if (form) {
  form.addEventListener("submit", function (e) {
    if (formValidate(form) === 0) {//
    } else {
      e.preventDefault();
    }
  });
}

function formValidate() {
  var error = 0;
  var formReq = document.querySelectorAll(".req");
  [].forEach.call(formReq, function (e) {
    formRemoveError(e);

    if (e.classList.contains("email")) {
      if (emailTest(e)) {
        formAddError(e);
        error++;
      }
    } else if (e.getAttribute("type") === "checkbox" && e.checked === false) {
      formAddError(e);
      error++;
    } else {
      if (e.value === "" || e.isPlaceholder) {
        formAddError(e);
        error++;
      }
    }
  });
  return error;
}

function formAddError(input) {
  input.parentElement.classList.add("err");
  input.classList.add("err");
}

function formRemoveError(input) {
  input.parentElement.classList.remove("err");
  input.classList.remove("err");
}

function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

;

function initMap(n) {
  google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
    var map = this;
    var ov = new google.maps.OverlayView();

    ov.onAdd = function () {
      var proj = this.getProjection();
      var aPoint = proj.fromLatLngToContainerPixel(latlng);
      aPoint.x += offsetX;
      aPoint.y += offsetY;
      map.panTo(proj.fromContainerPixelToLatLng(aPoint)); // map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
    };

    ov.draw = function () {};

    ov.setMap(this);
  };

  var markers = new Array();
  var infoWindow = new google.maps.InfoWindow({// pixelOffset: new google.maps.Size(-230, 250)
  });
  var locations = [[new google.maps.LatLng(53.22756, 50.173902)]];
  var options = {
    zoom: 12,
    panControl: false,
    mapTypeControl: false,
    center: locations[0][0],
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.querySelector(".map"), options);
  var icon = {
    url: "",
    scaledSize: new google.maps.Size(18, 20),
    anchor: new google.maps.Point(9, 10)
  };

  for (var i = 0; i < locations.length; i++) {
    var marker = new google.maps.Marker({
      // icon: icon,
      position: locations[i][0],
      map: map
    });
    markers.push(marker);
  }
}

initMap();
;
var menuHeader = document.querySelector(".header"); //smooth scroll from first fullscreen to content

var gotos = document.querySelectorAll(".goto");

if (gotos) {
  [].forEach.call(gotos, function (e) {
    e.parentNode.addEventListener("click", function () {
      var link = e.getAttribute("href");

      if (link) {
        var box = document.querySelector("." + link.split("#")[1]).scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
} // $(document).ready(function () {
//   if ($(".team__row").length > 0) {
//     $(".team__row").slick({
//       // autoplay: true,
//       // infinite: false,
//       dots: true,
//       arrows: true,
//       accessibility: false,
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       autoplaySpeed: 3000,
//       adaptiveHeight: true,
//       nextArrow: "<button type='button' class='slick-next'></button>",
//       prevArrow: "<button type='button' class='slick-prev'></button>",
//       responsive: [
//         {
//           breakpoint: 767,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: false,
//           },
//         },
//       ],
//     });
//   }
// });