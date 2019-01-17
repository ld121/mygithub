$(function(){
	$("#login_top").click(function(){
		console.log(123);
		$("#quickLogin2").show();
	})
	
	$("#closeLogin").click(function(){
		$("#quickLogin2").hide();
	})
	//账户、密码输入框 获得焦点
    $(".login_inpt input").on("focus", function () {
        $(this).parent().css("border-color", "#90c31f");
        $(this).css("boreder", "0px");
        $(this).css("background-color", "#fff");
    });

	//用户名清空
	$('.name_close').click(function(){
		$(".login_input input[class!=password_input]").val().focus();
		$(this).hide();
	})
	//验证码输入框 获得焦点
	$(".verify input").on("focus", function () {
        $(this).css("border-color", "#90c31f");
    });
    
    //记住密码、自动登录 复选框
    $(".remember i").click(function(){
    	if($(this).hasClass("on")){
    		if($(this).hasClass("remember_name_i")){
    			 $("i[class='auto_name_i on']").removeClass("on");
    		}
    		$("span[class=remember_remind]").html("");
            $(this).removeClass("on");
    	}
    	else{
    		if($(this).hasClass("auto_name_i")){
    			$("i[class='remember_name_i']").addClass("on");
                $("span[class=remember_remind]").html("请勿在公共电脑上启用");
    		}
    		 $(this).addClass("on");
    	}
    })
    
     	/*清空错误信息*/
        function clearErrorMsg() {
            $(".name_remind").html("");
            $(this).parent().css("border-color", "#ccc");
           
            $(".password_remind").html("");
            $(this).parent().css("border-color", "#ccc");
        }
        
        //账户输入框
		var LoginName;
        $("#LoginName").focus().blur(function(){
        	var username = $.trim($('#LoginName').val());
        	if(!username || username.length <= 0){
        		$(".name_remind").html('请输入账户名！');
        		$("#LoginName").css("border-color","#f60");
        		LoginName = false;

        	}else{
        		$(".name_remind").html('');
        		LoginName = true;

        	}
        })
        
        //密码输入框
		var LoginPwd;
        $("#LoginPwd").focus().blur(function(){
        	var pwd = $.trim($('#LoginPwd').val());
        	if(!pwd || pwd.length <= 0){
        		$(".password_remind").html("请输入密码！");
        		$("#LoginPwd").css("border-color","#f60");
        		LoginPwd = false;

        	}else{
        		LoginPwd = true;
        		$(".password_remind").html("");
        	}
        })
        
        //提交按钮
        // $(".login_btn").click(function(){
        // 	clearErrorMsg();
        //     	//判断是否存在该用户(匹配用户名和密码是否都一致)
        //     var users = $.cookie("users");
			// if (users) {
			// 	users = JSON.parse(users); //cookie中的所有注册过的用户
			// 	var isExists = false; //表示是否存在该用户
			// 	for (var i=0; i<users.length; i++) {
			// 		if ( users[i].name == $("#LoginName").val() && users[i].pwd == $("#LoginPwd").val()){
			// 			window.location.href = "dingdan.html";
			// 			isExists = true;
			//
			// 		}
			// 	}
			// 	if($.trim($('#LoginPwd').val()).length <= 0 ||$.trim($('#LoginName').val()).length <= 0){
			// 		alert("用户名、密码不能为空, 请重新输入!");
			// 	}
			//
			// 	if(!isExists) {
			// 		alert("用户名或密码错误, 请重新输入!");
			// 	}
			//
			// }
			// else {
			// 	window.location.href = "kede.html";
			// }
        //
        // })
		//提交
		$(".login_btn").click(function () {
			if (LoginName && LoginPwd){
				$("#fLogin").submit()
			}

        })

		var verify;
		$(".verify_txt").click(function(){
//        	产生随机验证码  包含数字和大写字母
			var ret="";
			for(var i=0;i<4;i++){
				var isTrue=parseInt(Math.random()*100)%3;//0 出现数字     1大写字母    2小写字母  
				if(isTrue==0){
					var num=parseInt(Math.random()*100)%10+48;
				}else if(isTrue==1){
					var num=parseInt(Math.random()*100)%26+65;
				}else{
					var num=parseInt(Math.random()*100)%26+97;
				}
				var s=String.fromCharCode(num);
				ret=ret.concat(s);
			}
			$(".verify_div").html(ret);
			
			$("#loginCode").focus().blur(function(){
				 var verifyCode = $("#loginCode").length > 0 ? $.trim($("#loginCode").val()) : "";
            if ($("#loginCode").length > 0 && (!verifyCode || verifyCode.length === 0)) {
                $(".verify_remind").html("请输入验证码");
                $("#loginCode").css("border-color", "#f60");
                verify = false;

            }
            else if ($("#loginCode").length > 0 && verifyCode.length != 4) {
                $(".verify_remind").html("验证码为4个字符长度");
                $("#loginCode").css("border-color", "#f60");
                verify = false;

            } else if(verifyCode != ret){
            	$(".verify_remind").html("验证码输入错误");
                $("#loginCode").css("border-color", "#f60");
                verify = false;
            }else if(verifyCode == ret){
				$('.verify_remind').html('');
				isTure_verify = true;
			}
			})
			
        }).triggerHandler('click');
        
})
