(function($){
	$('.index_left_s1').on('click', 'a', function(event) {
		$('.index_left_s1').removeClass('add_width2');
		$('#index_right_0').addClass('minu_width');
		$('.index_right_s1').addClass('add_width');
		$(this).addClass('act').siblings('a').removeClass('act');
	});
	$(window).on('click', function(event) {
		var e=event.target;
		if($(e).parents('.index_left_s1').length==0 && $(e).parents('.index_right_s1').length==0){
			$('.index_left_s1').removeClass('add_width2');
			$('#index_right_0').removeClass('minu_width');
			$('.index_right_s1').removeClass('add_width');
		}
	});
	// 鼠标移入导航链接时。。。。。。。。。。。。。
	$('#index_left_0').on('mouseenter','a',function(){
		$(this).css('opacity', '0.8');
	})
	$('#index_left_0').on('mouseleave','a',function(){
		$(this).css('opacity', '1');
	})
	// 鼠标移入导航栏时，显示导航title..............
	$('.index_left_s1').mouseenter(function(event) {
		$('.index_left_s1').addClass('add_width2');
		$('#index_right_0').addClass('minu_width');
	}).mouseleave(function(event) {
		if ($('.index_right_s1').hasClass('add_width')) {
			$('.index_left_s1').removeClass('add_width2');
		}else{
			$('.index_left_s1').removeClass('add_width2');
			$('#index_right_0').removeClass('minu_width');
		}
	});

	var onSampleResized = function(e){
		return columns = $(e.currentTarget).find("th");
	};	
	$("#sample2").colResizable({
		liveDrag:true, 
		gripInnerHtml:"<div class='grip'></div>",
		draggingClass:"dragging",
		resizeMode:'fit',
		disabledColumns:[0],
		onResize:onSampleResized
	});
})($)