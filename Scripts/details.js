$('.project').click(function() {
	$('#project-data-screen').show(300);
	$('#project-data-screen').animate({scrollTop: 0}, 'slow');
	$('#project-data-screen .video-container iframe').attr('src', 'https://www.youtube.com/embed/PchYGpWtBWk')
})

$('.close-button').click(function() {
	$('#project-data-screen').hide(300);
	$('#project-data-screen .video-container iframe').attr('src', '')
})