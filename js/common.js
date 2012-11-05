$(document).ready(function () {

/*calendar*/
if ($('.calendar').length>0) {
	$(function() {
    $('.calendar').datepicker({
      inline: true,
      monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
      'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
      monthNamesShort: ['Январь','Февраль','Март','Апрель','Май','Июнь',
      'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
      dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
      dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
      dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
      weekHeader: 'Не',
      dateFormat: 'dd.mm.yy',
      firstDay: 1,
      //isRTL: false,
      //showMonthAfterYear: false,
      maxDate: 0,
      hideIfNoPrevNext: true,
      changeMonth: true,
      changeYear: true,
      afterAdjustDate: function(){      	
        $('.ui-datepicker-month').wrap('<div class="month"></div>')
    	},
    	onSelect: function(){ alert(date); }
  });
});
};

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
$('.enter-open').click(function() {
	$('.popup-bg, .enter').fadeIn(300);
	return false;
});
$('.complaint-open').click(function() {
	$('.popup-bg, .complaint').fadeIn(300);
	return false;
});
$('.profile-open').click(function() {
	$('.popup-bg, .profile').fadeIn(300);
	return false;
});
$('.registration-open').click(function() {
	$('.popup-bg, .registration').fadeIn(300);
	$('.enter').fadeOut(300);
	return false;
});
$('.pic-load').click(function() {
	$('.pic-load img, .pic-load-title').hide();
	$('.pic-load-info, .pic-load input').show();
});
$('.profile .select').hover(
  function () {
    $(this).addClass('active');
  },
  function () {
  	$(this).removeClass('active');
  }
);
$('.select select').change(function() {
	select_val = $(this).val();
	$('.select span').html(select_val);
});

/*eye*/
$('.field-eye__text').hide();
$('.field-eye i').click(function() {
	val_text = $(this).prev().prev().val();
	val_pass = $(this).prev().val();
	if ($(this).parent().hasClass('field-eye_open')) {
		$(this).parent().removeClass('field-eye_open');
		$(this).prev().prev().hide();
		$(this).prev().show().val(val_text);
	}
	else {
		$(this).parent().addClass('field-eye_open');
		$(this).prev().hide();
		$(this).prev().prev().show().val(val_pass);
	}			
});
$('.profile__pass .field-eye i').dblclick(function() {
	return false;
});

/*pass change*/
$('.profile__pass a').click(function() {
	$(this).hide();
	$(this).next().show();
	return false;
});

/*btn orange*/
$('.profile__param, .select, .profile__pass a').click(function() {
	$('.profile__btn .btn-orange').show();
});

$('.popup-close, .popup-bg').click(function() {
	$('.popup-bg, .enter, .complaint, .profile, .registration').fadeOut(300);
	return false;
});

/*form validation*/
$('.registration').validate({
	rules : {
		username : "required",
		password : "required",
		captcha : "required",
		email: "required email"
	}
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

$(window).scroll(function() {
  if ($('body').scrollTop() > 60) {
  	$('.header-out').addClass('header-out_fixed');
  	$('.tape-out').css('padding-top', '140px');
  }
  else {
  	$('.header-out').removeClass('header-out_fixed');
  	$('.tape-out').css('padding-top', '0');
  }
});

});

$(document).keypress(function(e) {
	document_height = $(window).height();	
	document_height = document_height - 170;
	if ($('body').hasClass('no-space')) {
		if (e.which == 32) {
			body_top = $('body').scrollTop();			
			$('body').scrollTo(body_top+document_height, 500);
			return false;
		}
	};
});


