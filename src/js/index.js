// Set up button snap on scroll
$(function () {
	$(window).on('scroll', function () {
		if ($(window).width() < 769 && $(window).height() > 800 && $(window).scrollTop() >= 50) {
			$('button')[0].animate(
				{
					width: '90%',
					margin: '0 5%',
				},
				2000
			);
			$('button').addClass('fixed-button');
		} else if ($(window).width() < 769 && $(window).height() < 800 && $(window).scrollTop() >= 220) {
			$('button')[0].animate(
				{
					width: '90%',
					margin: '0 5%',
				},
				2000
			);
			$('button').addClass('fixed-button');
		} else {
			$('button')[0].animate(
				{
					width: '100%',
					margin: '0',
				},
				2000
			);
			$('button').removeClass('fixed-button');
		}
	});
});

// Color Picker Logic
$('.swatch').on('click', function () {
	var color = $(this).attr('data-color');
	$('.swatch').removeClass('active');
	$(this).addClass('active');
	$('#color-display').html(color);
});

// Size Picker Logic
$('.size-picker').on('click', function () {
	var size = $(this).attr('data-size');
	$('.size-picker').removeClass('active');
	$(this).addClass('active');
	$('#size-display').html(size);
});
