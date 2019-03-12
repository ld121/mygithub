// $(function(){
//
// 		//点击免费注册，跳转到注册页面
// 		$('.register').click(function(){
// 			window.location.href = "register.html";
// 		})
//
//
//
//
// 		//获取cookie信息
// 		var goodsList = $.cookie("cart");
// 		var isExists = false; //表示是否存在相同商品
// 		var select = 0;
// 		var Tol_price = 0;
// 		var sum = 0;
// 		if (goodsList) {
// 			goodsList = JSON.parse(goodsList);
// 			for (var i=0; i<goodsList.length; i++) {
// 				var goods = goodsList[i];
//
// 				var div1 = $("<div></div>");
// 				div1.addClass('cart_product_item');
// 				div1.appendTo("#cartItemContainer");
//
// 				var ul = $("<ul></ul>");
// 				ul.addClass('cart_product_ul');
// 				ul.appendTo(div1);
//
// 				var li1 = $("<li></li>" );
// 				li1.addClass('product');
// 				var a = $('<a href = " + # +" + >' +'</a>');
// 				var imgs = $("<img src = " + goods.id + "/>");
// 				var lable = $("<lable>"+goods.name+"</lable>");
// 				lable.addClass('product_name');
//
// 				a.appendTo(li1);
// 				imgs.appendTo(a);
// 				lable.appendTo(li1);
// 				li1.appendTo(ul);
//
// 				var li2 = $("<li></li>" );
// 				li2.addClass('quantity');
// 				li2.appendTo(ul);
// 				var p1 = $("<p></p>");
// 				p1.addClass('minus');
// 				p1.text("-");
// 				var inputs = $("<input type='text' id= 'quantity_input' value='' />");
// 				inputs.addClass('quantity_input');
// 				inputs.val(goods.num);
// 				var p2 = $("<p></p>");
// 				p2.addClass('plus');
// 				p2.text("+");
// 				p1.appendTo(li2);
// 				inputs.appendTo(li2);
// 				p2.appendTo(li2);
//
// 				var li3 = $("<li></li>");
// 				li3.addClass('price');
// 				li3.text("￥");
// 				li3.appendTo(ul);
// 				var span1 = $("<span>" + goods.price +"</span>" );
// 				span1.addClass('item_line_height');
// 				span1.appendTo(li3);
//
// 				var li4 = $("<li></li>");
// 				li4.addClass('subtotal');
// 				li4.text("￥");
// 				li4.appendTo(ul);
// 				var span2 = $("<span>" + (parseFloat(goods.price) *parseInt(goods.num)).toFixed(2) +"</span>");
// 				span2.addClass('item_line_height');
// 				span2.appendTo(li4);
//
//
// 				var li5 = $("<li></li>");
// 				li5.addClass('operation');
// 				li5.appendTo(ul);
// 				var div3 = $("<div></div>");
// 				div3.addClass('item_line_height');
// 				div3.appendTo(li5);
// 				var p51 = $("<p></p>");
// 				p51.appendTo(div3);
// 				var a51 = $("<a href='#' class='save'></a>");
// 				a51.text("加入收藏夹");
// 				a51.appendTo(p51);
//
// 				var p52 = $("<p></p>");
// 				p52.appendTo(div3);
// 				var a52 = $("<a href='#' class='delete'></a>");
// 				a52.text("删除");
// 				a52.appendTo(p52);
//
//
// 				sum += goods.num;
// 				price_sum = parseInt(goods.num) * parseFloat(goods.price);
// 				Tol_price += price_sum;
// 				Tol_prices = parseFloat(Tol_price).toFixed(2);
//
//
// 			}
// 			$("#gwc_count").text(sum);
// 			$("#settlementQuantity").text(sum);
// 			$("#settlementTotalMoney").text( Tol_prices);
// 			$("#settlementRealTotalMoney").text(Tol_prices);
//
//
// 			//	数量的加减
// 			$(".plus").click(function(){
// 				var index = $(this).index('.plus');
// 				var count = $(this).parent().find("input");
// 		    	var value = parseInt(count.val()); //数目
// 		    	value = value +1;
// 				count.val(value);
//
// 				//加的数量保存到cookie
// 				var arr = [];
// 				$(".product img").each(function(){
// 					var ids = $(this).attr("src");
// 					arr.push(ids);
//
// 					for(var i =0;i<arr.length;i++){
// 						console.log(arr[i]);
// //						if(ids == arr[i]){
// //							goods.num++;
// //							console.log(goods.num)
// //							$.cookie("cart", JSON.stringify(goodsList), {expires:22, path:"/"});
// //	//						console.log($.cookie("cart"));
// //						}
// 					}
// 				})
//
//
//
// //				}
//
//
// 				select ++;
// 				var totalCount = select + sum;
//
// 				var price = $(this).parent().siblings('.price').find(' span');
// 				var total = (parseInt(count.val())*parseFloat(price.text()) ).toFixed(2);
//
//
// 				var subtotal = $(this).parent().siblings('.subtotal').find(' span');
// 				subtotal.text(total);
//
// 				//计算总和
// 				var sumTotal = 0;
// 				$('.subtotal span').each(function(){
// 					var subs = $(this).text();
// 					var ret = [];
// 					ret.push(parseFloat(subs));
//
// 					for(var j =0;j <ret.length;j++){
// 						sumTotal += ret[j];
// 					}
// 				})
//
// 				$("#gwc_count").text(totalCount);
// 				$("#settlementQuantity").text(totalCount);
//
// 				$("#settlementTotalMoney").text((sumTotal).toFixed(2));
// 				$("#settlementRealTotalMoney").text( (sumTotal).toFixed(2));
// 			})
//
//
//
// 			$(".minus").click(function(){
// 				var index = $(this).index('.minus');
// 				var count = $(this).parent().find("input");
// 		    	var value = parseInt(count.val())-1; //数目
//
// 				if(value == 0){
// 					$("#conform").show();
// 					$('.delect_false').click(function(){
// 						$("#conform").hide();
// 					})
// 					$('.delect_true').click(function(){
// 						$("#conform").hide();
// 						$(this).parent().siblings('#cartItemContainer').find(' .cart_product_item').eq(index).remove();
// 						var length = parseInt($('.cart_product_item').length);
// 						if(length == 0){
// 							$(".cart_null").show();
// 							$(".cart_explain").hide();
// 							$(".cart_continue").hide();
// 							$(".cart_meet").hide();
// 							$.cookie("cart", "", {expires:0, path:"/"});
// 						}
//
//
// 					})
// 				}else{
// 					count.val(value);
// 					select --;
// 					var totalCount = select + sum;
// 					var price = $(this).parent().siblings('.price').find(' span');
// 					var total =(parseInt(count.val()) * parseFloat( price.text())).toFixed(2);
// 					var subtotal = $(this).parent().siblings('.subtotal').find(' span');
// 					subtotal.text(total);
//
// 					var sumTotal = 0;
// 					$('.subtotal span').each(function(){
// 						var subs = $(this).text();
// 						var ret = [];
//
// 						ret.push(parseFloat(subs));
//
// 						for(var j =0;j <ret.length;j++){
// 							sumTotal += ret[j];
//
// 						}
// 					})
//
// 					$("#gwc_count").text(totalCount);
// 					$("#settlementTotalMoney").text( (sumTotal).toFixed(2));
// 					$("#settlementQuantity").text(totalCount);
// 					$("#settlementRealTotalMoney").text( (sumTotal).toFixed(2));
// 				}
// 			})
//
// 			//点击收藏
// 			$(".save").click(function(){
// 				$("#quickLogin2").show();
// 			})
//
// 			//点击删除
// 			$(".delete").click(function(){
// 				var index = $(this).index('.delete');
// 				$("#conform").show();
// 				$(".delect_title i").click(function(){
// 					$("#conform").hide();
// 				})
// 				$('.delect_false').click(function(){
// 					$("#conform").hide();
// 				})
// 				$('.delect_true').click(function(){
// 					$("#conform").hide();
// 					$(this).parent().siblings('#cartItemContainer').find('.cart_product_item').eq(index).remove();
// 					//计算总和
// 					var sumTotal = 0;
// 					$('.subtotal span').each(function(){
// 						var subs = $(this).text();
// 						var ret = [];
// 						ret.push(parseFloat(subs));
//
// 						for(var j =0;j <ret.length;j++){
// 							sumTotal += ret[j];
// 						}
// 					})
// 					$("#settlementTotalMoney").text((sumTotal).toFixed(2));
// 					$("#settlementRealTotalMoney").text( (sumTotal).toFixed(2));
//
// 					var length = parseInt($('.cart_product_item').length);
// 					console.log(length)
// 					if(length == 0){
// 						$(".cart_null").show();
// 						$(".cart_explain").hide();
// 						$(".cart_continue").hide();
// 						$(".cart_meet").hide();
// 						$.auth_group_permissionscookie("cart"," ", {expires:0, path:"/"});
// 					}
// 					console.log(goods.num);
// 				})
// 			})
//
// 	}
//
// 	if(goodsList == undefined){
// 		$(".cart_null").show();
// 		$(".cart_explain").hide();
// 		$(".cart_continue").hide();
// 		$(".cart_meet").hide();
// 	}
//
//
// })
$(function () {
	$('.minus').click(function () {
		var cartid = $(this).attr('cartid')
		data = {
			'id':cartid
		}
		$.get('/glassesweb/minus/',data,function () {
			window.location.reload()
        })
    })

	$('.plus').click(function () {
		var cartid = $(this).attr('cartid')
		data = {
			'id':cartid
		}
		$.get('/glassesweb/plus/',data,function () {
			window.location.reload()
        })
    })

	$('.delete').click(function () {

		$('#conform').show();
		var cartid = $(this).attr('cartid')
		$('.delect_true' ).click(function () {

            $.get('/glassesweb/delgoods/',{'id':cartid},function (response) {
                if (response.status){
                   $('#conform').hide();
                   window.location.reload();
                }
            })
        })
		$('.delect_title i' ).click(function () {
            $('#conform').hide();
        })
        $('.delect_false').click(function () {
            $('#conform').hide();
        })
    })

<<<<<<< HEAD
    $('#btnGoToSubmit')
=======
    $('#btnGoToSubmit').click(function () {

        var cartid = new Array();
        i = 0;
        $('.operation .delete').each(function () {
            cartid[i] = $(this).attr("cartid");
            i ++;
        })

        $.get('/glassesweb/addorder/',{'idlist':cartid},function (response) {
            if(response.status){
                window.open('order.html')
            }
        })
    })
>>>>>>> 42178b26d1a55432a336482e88301211aa086ddd
})
