@@include("webp.js");
@@include("ibg.js");
@@include("responsive.js");
@@include("forms.js");
@@include("map.js");

const menuHeader = document.querySelector(".header");

//smooth scroll from first fullscreen to content
const gotos = document.querySelectorAll(".goto");
if (gotos) {
  [].forEach.call(gotos, (e) => {
    e.parentNode.addEventListener("click", () => {
      const link = e.getAttribute("href");
      if (link) {
        const box = document
          .querySelector("." + link.split("#")[1])
          .scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// $(document).ready(function () {
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
