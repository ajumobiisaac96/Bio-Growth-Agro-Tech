function signup(){
    location.href = '../Auth-Page/signup.html'
}

function login(){
    location.href = '../Auth-Page/login.html' 
}

var FAQ = document.getElementById("faq-1")
FAQ.addEventListener(onclick, function(){
    FAQ.style.color = 'red'
})