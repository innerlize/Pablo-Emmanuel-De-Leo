$(document).ready(function() {
     $('#para1').addClass('onLoad2')
     $('#para2').addClass('onLoad3')
     $('.header-social').addClass('onLoad3')
})

$(window).on('load', function() {
     $(".loading-screen").fadeOut("slow");
})