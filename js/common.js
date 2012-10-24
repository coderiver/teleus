$(document).ready(function () {

/*tabs all*/
$('.tabs__link a').click(function() {
	return false;
});
$('.tabs__content_all li:not(:first)').hide();
$('.tabs__link_all a').hover(
  function () {
    $('.tabs__content_all li').hide();
		$('.tabs__link_all a').removeClass('active');
		link_attr = $(this).attr('href');
		$('#'+link_attr).show();
		$(this).addClass('active');
		return false;
  },
  function () {}
);
/*tabs sb*/
$('.tabs__content_sb li:not(:first)').hide();
$('.tabs__link_sb a').hover(
  function () {
    $('.tabs__content_sb li').hide();
		$('.tabs__link_sb a').removeClass('active');
		link_attr = $(this).attr('href');
		$('#'+link_attr).show();
		$(this).addClass('active');
		return false;
  },
  function () {}
);

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

/*auto scroll*/
$(function(){
    $('.tape__container ul').liScroll();
});

/*text area*/
if ($('.add-comm__txt textarea').length>0) {
$('.add-comm__txt textarea').htmlarea({
    toolbar: [
	    ["bold", "italic", "underline", "strikethrough",
		    {
			    css: "quote",
			    text: "quote",
			    // The function to execute when the button is clicked
			    action: function(btn) {
			      this.pasteHTML("&laquo;"+this.getSelectedHTML()+"&raquo;");
		    	}
		    },
		  "link", "html"]
		]
});
};

});

$(document).keypress(function(e) {
	document_height = $(window).height();	
	document_height = document_height - 150;
	if ($('body').hasClass('no-space')) {
		if (e.which == 32) {
			body_top = $('body').scrollTop();			
			$('body').scrollTo(body_top+document_height, 500);
			return false;
		}
	};
});
