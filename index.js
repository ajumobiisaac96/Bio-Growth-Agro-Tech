function signup(){
    location.href = './pages/signup.html'
}

function login(){
    location.href = './pages/login.html' 
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

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn .icon');
const dropDownMenu = document.querySelector('.dropdown_menu');


dropDownMenu.style.display = 'none';

toggleBtn.onclick = function() {
    if (dropDownMenu.style.display === 'none') {
        dropDownMenu.style.display = 'block';
        toggleBtnIcon.className = 'fa-solid fa-xmark'; // Update icon to close
    } else {
        dropDownMenu.style.display = 'none';
        toggleBtnIcon.className = 'fa-solid fa-bars'; 
    }
};






