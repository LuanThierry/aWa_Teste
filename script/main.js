const $header = document.querySelector('header');
window.addEventListener('scroll', toggleHeader, false);
function toggleHeader (){
	if (window.pageYOffset > 0 && $header.classList.contains('max-header')){
		console.log('Menor');
		$header.classList.remove('max-header');
		$header.classList.add('min-header');
    } else if (window.pageYOffset == 0 && $header.classList.contains('min-header')) {
		console.log('MAIOR');
		$header.classList.add('max-header');
		$header.classList.remove('min-header');
	}
}
