var ClickHam = document.querySelector('.ham-menu');
var NavItems = document.querySelector(".nav-items");

ClickHam.addEventListener('click', ()=>{
    ClickHam.classList.toggle('active');
    NavItems.classList.toggle('action');
    NavItems.classList.add('animation');

})


