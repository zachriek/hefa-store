// event saat di klik
$('.page-scroll').on('click', function(e) {
	// ambil isi href
	let tujuan = $(this).attr('href');

	// tangkap elemen yang bersangkutan
	let elemenTujuan = $(tujuan);

	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 500, 'easeInOutExpo');

	e.preventDefault();
});

const navLink = document.querySelectorAll('.nav-item');

navLink.forEach(nav => nav.addEventListener('click', function() {
	navLink.forEach(nav => nav.classList.remove('active'));
	nav.classList.add('active');
}));