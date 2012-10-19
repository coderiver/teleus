$(document).ready(function () {

/*tabs all*/
$('.tabs__content_all li:not(:first)').hide();
$('.tabs__link_all a').click(function() {
	$('.tabs__content_all li').hide();
	$('.tabs__link_all a').removeClass('active');
	link_attr = $(this).attr('href');
	$('#'+link_attr).show();
	$(this).addClass('active');
	return false;
});
/*tabs sb*/
$('.tabs__content_sb li:not(:first)').hide();
$('.tabs__link_sb a').click(function() {
	$('.tabs__content_sb li').hide();
	$('.tabs__link_sb a').removeClass('active');
	link_attr = $(this).attr('href');
	$('#'+link_attr).show();
	$(this).addClass('active');
	return false;
});

/*slider*/
$('.slider__wrap').scrollable({
  next:'.slider__next',
  prev:'.slider__prev'
}).navigator({
	navi: '.slider__navi'
})

/*popup*/
$('.enter').click(function() {
	$('.popup-bg, .popup_enter').fadeIn(300);
	return false;
});
$('.complaint').click(function() {
	$('.popup-bg, .popup_complaint').fadeIn(300);
	return false;
});
$('.close, .popup-bg').click(function() {
	$('.popup-bg, .popup_complaint, .popup_enter').fadeOut(300);
	return false;
});

});