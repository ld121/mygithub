$(function(){
//	鼠标移入,显示下拉菜单
	$('.main_left h3').mouseenter(function(){
		$('.left_menu').show();
	})
	
	$('.main_left').mouseleave(function(){
		$('.left_menu').hide();
	})
	
//	分享模块
	$(".share_s a i").mouseover(function(){
		this.myTitle = this.title;
		this.title = "";
		var s_tip = "<div id = 's_tip'>" + this.myTitle + "</div>";
		$(this).parent().append(s_tip);	
		
		$("#s_tip").css({
			"top":(parseInt($(this).position().top +30))+"px",
			"left":(parseInt($(this).position().left +20))+ "px"
		})
	}).mouseout(function(){
		this.title = this.myTitle;
		$(s_tip).remove();
	})
	
	$('.weixin').mouseenter(function(){
		$('.weixin_twocode').show();
	})
	$('.weixin').mouseleave(function(){
		$('.weixin_twocode').hide();
	})
	
   //	可得价部分的显示
	$(".message_member_price").mouseover(function(){
		$(".message_member_price .i").css({"background-position":"-10px -911px"});
		$(".message_member_prices").show();
	})
	
	$(".message_member_price").mouseout(function(){
		$(".message_member_price .i").css({"background-position":"0px -911px"});
		$(".message_member_prices").hide();
	})
	
	
	
	//点击加入购物车
	$('#appendCart').click(function(){
		$.get('/glassesweb/appendCart/')
	})
					
	
})


