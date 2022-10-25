<<<<<<< HEAD
var skills = $('.about-content').offset().top;
var leader = $('.leaderDesk').offset().top;

if ($(window).width() >= 992) {
  window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    document.getElementById('para1').style.transform = `translateY(${distance * -.1}px)`;
  });

  window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    document.getElementById('para2').style.transform = `translateY(${distance * .1}px)`;
  });
}

// if (skills > $(window).scrollTop()) {
//   window.addEventListener("scroll", function() {
//     const distance = window.scrollY;
//     document.querySelector('.about-content').style.transform = `translateY(${distance * .1}px)`;
//   });
// }

// if (leader > $(window).scrollTop()) {
//   window.addEventListener("scroll", function() {
//     const distance = window.scrollY;
//     document.querySelector('.leaderDesk').style.transform = `translateY(${distance * .1}px)`;
//   });
=======
var skills = $('.about-content').offset().top;
var leader = $('.leaderDesk').offset().top;

if ($(window).width() >= 992) {
  window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    document.getElementById('para1').style.transform = `translateY(${distance * -.1}px)`;
  });

  window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    document.getElementById('para2').style.transform = `translateY(${distance * .1}px)`;
  });
}

// if (skills > $(window).scrollTop()) {
//   window.addEventListener("scroll", function() {
//     const distance = window.scrollY;
//     document.querySelector('.about-content').style.transform = `translateY(${distance * .1}px)`;
//   });
// }

// if (leader > $(window).scrollTop()) {
//   window.addEventListener("scroll", function() {
//     const distance = window.scrollY;
//     document.querySelector('.leaderDesk').style.transform = `translateY(${distance * .1}px)`;
//   });
>>>>>>> 4871c9b54a5942abde0120c1d2f3401b76f89370
// }