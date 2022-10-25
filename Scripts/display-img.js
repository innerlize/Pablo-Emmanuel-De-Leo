const img = $('.images-container img')
const imgDisplayed = $('.display-img img')

img.click(() => {
	$('.display-img').fadeIn('slow');
	$('.back').fadeIn('slow')
	$('.close-button').css('zIndex', '6000')
})

imgDisplayed.click(() => {
	$('.display-img').fadeOut('fast');
	$('.back').fadeOut('fast')
	$('.close-button').css('zIndex', '10000')
})