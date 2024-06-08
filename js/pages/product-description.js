document.addEventListener('DOMContentLoaded', (event) => {
    const numberDisplay = document.getElementById('numberDisplay');
    const increaseButton = document.getElementById('increaseButton');
    const decreaseButton = document.getElementById('decreaseButton');
    
    let count = 0;
    
    increaseButton.addEventListener('click', () => {
        count++;
        numberDisplay.textContent = count;
    });
    
    decreaseButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
            numberDisplay.textContent = count;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

let accordions = document.querySelectorAll(".accordion-wrapper .accordion");
accordions.forEach((acco) => {
  acco.onclick = () => {
    accordions.forEach((subcontent) => {
      subcontent.classList.remove("active");
    });
    acco.classList.add("active");
  };
});

let cartInfo = document.querySelectorAll(".purchase-button");
let productDescription = document.querySelectorAll(".product-description")

cartInfo.addEventListener('click', () => {
    cartInfo.style.display = "block"
    productDescription.style.display = "none";
});
