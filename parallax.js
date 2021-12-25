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
