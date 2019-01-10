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
		var l_count = $('#lsl_input').val();
		var r_count = $('#rsl_input').val();
		var countToal =parseInt(l_count) +parseInt(r_count);
		$("#pf_right_5").text(countToal);
				
		var goodsId = $("#d_img1").attr('src'); //商品ID	
		console.log(goodsId);
		var goodsName = $(".details_top_name span").html(); //商品名称
		var goodsPrice  = $(".message_price span").text();//商品价格	
		
		var goodsList = $.cookie("cart") ? JSON.parse( $.cookie("cart") ) : [];
		
		
		//先判断购物车中是否存在我即将要添加的商品
		var isExists = false; //表示是否存在相同商品
		for (var i=0; i<goodsList.length; i++) {
			//如果存在相同的商品, 则把数量++, 不需要重新添加新的商品
			if (goodsId == goodsList[i].id) {
				goodsList[i].num++;
				isExists = true; //表示存在相同商品
			}
		}
		
		//如果不存在相同商品, 则添加新商品
		if (!isExists) {
			//添加一个新商品到购物车
			var goods = {
				id: goodsId,
				name: goodsName,				
				price: goodsPrice,
				num: countToal
			}
			goodsList.push(goods);
		}
		
		$.cookie("cart", JSON.stringify(goodsList), {expires:22, path:"/"});
		console.log( $.cookie("cart") );
		
		
	})
					
	
})


