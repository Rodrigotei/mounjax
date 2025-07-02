var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      loop: true,
      autoplay: true,
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints:{
        0:{
          slidesPerView: 1
        },
        450:{
          slidesPerView: 2
        }
      }
    });
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear().toString().substr(-2);
  document.getElementById('date').innerText = `${day}/${month}/${year}`;


  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });

// var swiper = new Swiper(".mySwiper", {
//   watchSlidesProgress: true,
//   slidesPerView: 3,
//   autoplay: true,
//   spaceBetween: 50,
//   loop: true,
//   speed: 500,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     600:{
//         slidesPerView: 2
//     },
//     900:{
//         slidesPerView: 3
//     }
//   }
// });



// var swiper = new Swiper(".mySwiper1", {
//   watchSlidesProgress: true,
//   slidesPerView: 3,
//   autoplay: true,
//   spaceBetween: 30,
//   loop: true,
//   speed: 500,
//   // ADICIONE ISSO:
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     400: { 
//       slidesPerView: 2,
//     },
//     800:{
//       slidesPerView:3
//     },
//     900: {
//         slidesPerView: 4
//     }
//   }
// });

// var swiper = new Swiper(".mySwiper2", {
//       pagination: {
//         el: ".swiper-pagination",
//       },
//       loop:true,
//       spaceBetween: 30,
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//       breakpoints: {
//         0: {
//           slidesPerView: 1,
//         },
//         800:{
//           slidesPerView: 2,
//         }
//       }
//     });

//   document.querySelectorAll('.faq-question').forEach(button => {
//     button.addEventListener('click', () => {
//       const answer = button.nextElementSibling;

//       if (answer.style.display === 'block') {
//         answer.style.display = 'none';
//       } else {
//         answer.style.display = 'block';
//       }
//     });
//   });


// //   document.getElementById("year").textContent = new Date().getFullYear();