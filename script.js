$(document).ready(function () {
    $(".nav_toggle").click(function () {
        $(".mobile_nav").fadeToggle();
        $(".mobile_nav").css("bottom", "0");
    });
});


const logo1 = document.getElementById('exp-logo1')
const logo2 = document.getElementById('exp-logo2')
const modal1 = document.getElementById('modal-pop1')
const modal2 = document.getElementById('modal-pop2')

modal1.addEventListener('click', ()=>{
    modal1.style.display = 'none'
})

modal2.addEventListener('click', ()=>{
    modal2.style.display = 'none'
})

logo1.addEventListener('click', ()=>{
    modal1.style.display = 'block'
    modal2.style.display = 'none'
})

logo2.addEventListener('click', ()=>{
    modal2.style.display = 'block'
    modal1.style.display = 'none'
})