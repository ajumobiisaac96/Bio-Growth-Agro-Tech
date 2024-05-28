function signup(){
    location.href = '../Auth-Page/signup.html'
}

function login(){
    location.href = '../Auth-Page/login.html' 
}

let accordions = document.querySelectorAll(".accordion-wrapper .accordion");
accordions.forEach((acco) => {
  acco.onclick = () => {
    accordions.forEach((subcontent) => {
      subcontent.classList.remove("active");
    });
    acco.classList.add("active");
  };
});

document.addEventListener('DOMContentLoaded', function() {
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showNextSlide() {
      // Calculate the new position
      currentIndex = (currentIndex + 1) % slides.length;
      const offset = currentIndex * -100; // Adjust the offset based on the current slide

      // Apply the new transform value to slides container
      slidesContainer.style.transform = `translateX(${offset}%)`;
  }

  // Automatically change slide every 3 seconds
  setInterval(showNextSlide, 5000);
});












// function changer(){
//     let firstTestimonial = document.getElementById('slide-active');
//     let secondTestimonial = document.getElementById('slide');
//     secondTestimonial.style.display ='flex';
//     firstTestimonial.style.display = 'none';
// }

//  setInterval(changer, 2000);





// document.addEventListener('DOMContentLoaded', () => {
//   const slides = document.querySelectorAll('.testimonial-slider .slide');
//   let currentIndex = 0;
//   const intervalTime = 1000;

//   function showSlide(index) {
//       slides.forEach((slide, i) => {
//           slide.classList.toggle('active', i === index);
//       });
//   }

//   function nextSlide() {
//       currentIndex = (currentIndex + 1) % slides.length;
//       showSlide(currentIndex);
//   }

//   setInterval(nextSlide, intervalTime);

//   showSlide(currentIndex);
// });




