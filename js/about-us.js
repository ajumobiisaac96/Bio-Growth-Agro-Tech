function signup(){
    location.href = '../pages/signup.html'
}

function login(){
    location.href = '../pages/login.html' 
}

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
