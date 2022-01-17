let button = document.querySelectorAll('.button')

button.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
	})
})