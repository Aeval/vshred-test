$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 116) {
			$('button').addClass('fixed-button');
		} else {
			$('button').removeClass('fixed-button');
		}
	});
});

$('.swatch').click(function () {
	var color = $(this).attr('data-color');
	$('.swatch').removeClass('active');
	$(this).addClass('active');
	$('#color-display').html(color);
});

$('.size-picker').click(function () {
	var size = $(this).attr('data-size');
	$('.size-picker').removeClass('active');
	$(this).addClass('active');
	$('#size-display').html(size);
});
