<<<<<<< HEAD
$('.project').click(function() {
	$('#project-data-screen').show(300);
	$('#project-data-screen').animate({scrollTop: 0}, 'slow');
	$('#project-data-screen .video-container iframe').attr('src', 'https://www.youtube.com/embed/PchYGpWtBWk')
})

$('.close-button').click(function() {
	$('#project-data-screen').hide(300);
	$('#project-data-screen .video-container iframe').attr('src', '')
=======
$('.project').click(function() {
	$('#project-data-screen').show(300);
})

$('.close-button').click(function() {
	$('#project-data-screen').hide(300);
>>>>>>> 4871c9b54a5942abde0120c1d2f3401b76f89370
})