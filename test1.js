// $(document).ready(function () {
//     console.log("hello");
//     $('.animate').click(function(){
//      $("html,body").animate({ scrollTop: $('.service').offset().top} ,1000)
//     });
//     $('.animate1').click(function(){
//         $("html,body").animate({ scrollTop: $('."portfolio').offset().top} ,1000)
//     });
//     $('.animate2').click(function(){
//         $("html,body").animate({ scrollTop: $('.profile').offset().top} ,1000)
//     });
    
// });
// function createHeart(){
//     const heart = document.createElement("div");

//     heart.classList.add("heart");

//     heart.style.left = Math.random() * 100 + "vw";
//     heart.style.animationDuration = Math.random() * 2 + 3 + "s";

//     heart.innerText = "💛";

//     document.body.appendChild(heart);

//     setTimeout(() => {
//         heart.remove();
//     }, 5000);
// }

console.log("hello");
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menuLink = document.getElementsByClassName('menu')[0]

toggleButton.addEventListener('click', () => {
    menuLink.classList.toggle('active')
})


