$(document).ready(function(){
/*
 * 公共对象
 */
/*蒙版热区捕获*/
$hotCover=$(".hotCover");
/*body 获取*/
$body=$("body")
/*个人中心*/
/*
 * 个人中心>个人信息
 */
//1.性别切换
$male=$("#sexMale");
$famale=$("#sexFemale");
//获取对象end
$($male).click(function(){
	$famale.removeClass("bgColorGreen");
	$(this).addClass("bgColorGreen");
})
$($famale).click(function(){
	$male.removeClass("bgColorGreen");
	$(this).addClass("bgColorGreen");
})
//执行操作 end

//2.喜欢分类的挑选 
//实现功能：各个喜欢分类项 选中高亮 与 取消高亮 状态的切换
//思路：获取所有喜欢分类项 当点击每个具体项时 判断是否具有某个class样式，有的话去掉，没有加上。前提，可供添删的class样式

$loveClasses=$("#loveClasses li");
//获取所有 喜欢分类项 end
$loveClasses.click(function(){
	if($(this).hasClass("loveBright")){
		$(this).removeClass("loveBright")//取消 高亮选中
	}else{
		$(this).addClass("loveBright")//添加 高亮选中
	}
})
//执行操作 end

//3.生日选择
var conmonAttr_dateSelectBox={
	mintop:-252,
	maxtop:0
}
//创建通用属性 end
$yearsSelectBox=$("#yearsSelectBox");
$monthsSelectBox=$("#monthsSelectBox");
$daysSelectBox=$("#daysSelectBox");
//console.log($yearsSelectBox)
//console.log($monthsSelectBox)
//console.log($daysSelectBox)
//获取 年 月 日 框 end

/*
 * 个人中心>修改密码
 */
$alert_passwordChange_page=$("#alert_passwordChange_page");
$finishPasswordChangeBtn=$("#finishPasswordChangeBtn");
$oldPassword=$("#oldPassword");
$newPassword=$("#newPassword");
$checkNewPassword=$("#checkNewPassword");
/*获取提示框 end*/
//console.log($oldPassword)
//console.log($newPassword)
//console.log($checkNewPassword)
/*功能实现*/
$finishPasswordChangeBtn.click(function(){
	//1.文本框内容为空时
	//警告提示：您有未填内容
	if($oldPassword.val().length==0 || $newPassword.val().length==0 || $checkNewPassword.val().length==0){
		$body.attr("hotCoverState","show");
		$alert_passwordChange_page.html("你有未填写内容");
		setTimeout(function(){
			$body.attr("hotCoverState","hide");
		},3000)
	}
	//2.文本内容不为空时
	//警告提示：旧密码不正确
	if($oldPassword.val().length!=0 && $newPassword.val().length!=0 && $checkNewPassword.val().length!=0){
		if($oldPassword.val()!="123456"){
				$body.attr("hotCoverState","show");
				$alert_passwordChange_page.html("旧密码错误，请重新输入");
				setTimeout(function(){
					$body.attr("hotCoverState","hide");
					$oldPassword.val("");
					$newPassword.val("");
					$checkNewPassword.val("")
				},3000)
			}
		//警告提示：新旧密码不一致
		if($checkNewPassword.val()!=$newPassword.val()){
			$body.attr("hotCoverState","show");
			$alert_passwordChange_page.html("新旧密码不一致");
			setTimeout(function(){
				$body.attr("hotCoverState","hide");
				$oldPassword.val("");
				$newPassword.val("");
				$checkNewPassword.val("")
			},3000)
		}
		//警告提示：密码修改完成 并与3秒后切换至个人中心
		if($oldPassword.val()=="123456" && $newPassword.val()=="123456" && $checkNewPassword.val()=="123456"){
			$body.attr("hotCoverState","show");
			$alert_passwordChange_page.html("密码修改完成");
			setTimeout(function(){
				$body.attr("hotCoverState","hide");
				$oldPassword.val("");
				$newPassword.val("");
				$checkNewPassword.val("")
				window.location.href="personalCenter_page.html";
			},3000)
		}
	}
})
/*
 * 个人中心>修改手机
 */	
 var $countDownTime=60;
 var $countDownTime2=60;
 /*预设变量*/
$checkInfoBtn=$("#checkInfo");
$alert_phoneChange_page=$("#alert_phoneChange_page");
/*获取按钮 end*/
/*功能实现*/
//1.点击按钮 发送验证码
$checkInfoBtn.click(function(){
	//禁按钮
	$checkInfoBtn.attr("disabled",true)
	//a.修改点击后的字体颜色
	$checkInfoBtn.css("color","#999999");
	//b.显示提示框 并锁定3s屏幕
	$body.attr("hotCoverState","show");
	$alert_phoneChange_page.html("验证码已发送");
	setTimeout(function(){
		$body.attr("hotCoverState","hide");
	},3000)
	//c.发送和倒计时
	var $countDownTimeBox=setInterval(function(){
		$countDownTime-=1;
		$checkInfoBtn.html($countDownTime+"秒后重发");
	},1000);
	//d.清除倒计时 并重置颜色 初始时间 按钮显示内容 恢复按钮
	setTimeout(function(){
		clearInterval($countDownTimeBox)
		$checkInfoBtn.css("color","#666666");
		$checkInfoBtn.html("重新发送");
		$countDownTime=60;
		$checkInfoBtn.attr("disabled",false)
	},60000);
})
//2.点击下一步 按钮
$nextStepBtn=$("#nextStepBtn");
$checkInfoInput=$("#checkInfoInput");
$statusContents=$("#statusContents");
//获取下一步按钮 验证码输入框 状态容器
$phoneNumInput=$("#phoneNumInput");
$2CheckInfoBtn=$("#2CheckInfoBtn");
$2CheckInfoInput=$("#2CheckInfoInput");
$checkBtn=$("#checkBtn");
//获取 手机号码输入框 第二个验证码发送按钮和输入框 确定按钮  end
/*功能实现*/
$nextStepBtn.click(function(){
	//a.未获取验证码(验证码输入为空时)
	if($checkInfoInput.val().length==0 && $checkInfoBtn.html()=="发送验证码"){
		$body.attr("hotCoverState","show");
		$alert_phoneChange_page.html("请先获取验证码");
		setTimeout(function(){
			$body.attr("hotCoverState","hide");
		},3000)
	//b.未输入验证码
	}else if($checkInfoInput.val().length==0 && $checkInfoBtn.html()!="发送验证码"){
		$body.attr("hotCoverState","show");
		$alert_phoneChange_page.html("请输入验证码");
		setTimeout(function(){
			$body.attr("hotCoverState","hide");
		},3000)
	//c.验证码输入不正确
	}else if($checkInfoInput.val()!="123456" &&$checkInfoInput.val().length!=0){
		$body.attr("hotCoverState","show");
		$alert_phoneChange_page.html("请输入正确验证码");
		setTimeout(function(){
			$body.attr("hotCoverState","hide");
			$checkInfoInput.val("")
		},3000)
	//验证码输入正确
	}else if($checkInfoInput.val()=="123456" && $checkInfoBtn.html()!="发送验证码"){
		$statusContents.css("left","-100%")
	}
})
//3.点击 第二个发送验证码按钮时
$2CheckInfoBtn.click(function(){
	//禁用按钮
	$2CheckInfoBtn.attr("disabled",true);
	$2CheckInfoBtn.css("color","#999999");
	//a.未输入手机号
	if($phoneNumInput.val().length==0){
		$body.attr("hotCoverState","show");
		$alert_phoneChange_page.html("请输入新的手机号");
		setTimeout(function(){
		$body.attr("hotCoverState","hide");
		$2CheckInfoBtn.attr("disabled",false);
		$2CheckInfoBtn.css("color","#666666");
		$2CheckInfoBtn.html("重新发送");
		},3000)
	//b.已输入手机号
	}else if($phoneNumInput.val().length!=0){
		//手机号不正确
		if($phoneNumInput.val().length>11 || $phoneNumInput.val().substring(0,1)!="1" || $phoneNumInput.val().length!=11){
			$body.attr("hotCoverState","show");
			$alert_phoneChange_page.html("手机号码格式不对");
			setTimeout(function(){
			$body.attr("hotCoverState","hide");
			$2CheckInfoBtn.attr("disabled",false);
			$2CheckInfoBtn.css("color","#666666");
			$2CheckInfoBtn.html("重新发送")
			},3000)
		//手机号输入正确>>号码已占用
		}else if($phoneNumInput.val().length==11 && $phoneNumInput.val().substring(0,1)=="1" && $phoneNumInput.val()=="12345678911"){
			$body.attr("hotCoverState","show");
			$alert_phoneChange_page.html("号码已占用");
			setTimeout(function(){
			$body.attr("hotCoverState","hide");
			$2CheckInfoBtn.attr("disabled",false);
			$2CheckInfoBtn.css("color","#666666");
			$2CheckInfoBtn.html("重新发送");
			},3000);
		//手机号输入正确>>号码可用
		}else if($phoneNumInput.val().length==11 && $phoneNumInput.val().substring(0,1)=="1"){
			$body.attr("hotCoverState","show");
			$alert_phoneChange_page.html("验证码已发送");
				//c.发送和倒计时
			var $countDownTimeBox2=setInterval(function(){
				$countDownTime2-=1;
				$2CheckInfoBtn.html($countDownTime2+"秒后重发");
				},1000);
			setTimeout(function(){
			$body.attr("hotCoverState","hide")
			},3000);
		}
		//d.清除倒计时 并重置颜色 初始时间 按钮显示内容 恢复按钮
		setTimeout(function(){
			clearInterval($countDownTimeBox2)
			$2CheckInfoBtn.css("color","#666666");
			$2CheckInfoBtn.html("重新发送");
			$countDownTime2=60;
			$2CheckInfoBtn.attr("disabled",false)
		},60000);
	}
})
//当点击 确定 按钮时
$checkBtn.click(function(){
	//电话号码是否已填写
	if($phoneNumInput.val().length==0){
		$body.attr("hotCoverState","show");
		$alert_phoneChange_page.html("请先填写手机号码");
		setTimeout(function(){
			$body.attr("hotCoverState","hide");
		},3000);
	}
	//电话号码已填写
	else if($phoneNumInput.val().length!=0){
		if($2CheckInfoInput.val().length==0){
			$body.attr("hotCoverState","show");
		 	$alert_phoneChange_page.html("验证码为空");
			setTimeout(function(){
				$body.attr("hotCoverState","hide");
			},3000);
		}else if($2CheckInfoInput.val()!="123456"){
			$body.attr("hotCoverState","show");
		 	$alert_phoneChange_page.html("验证码输入错误");
			setTimeout(function(){
				$body.attr("hotCoverState","hide");
			},3000);
		}else if($2CheckInfoInput.val()=="123456"){
			$body.attr("hotCoverState","show");
		 	$alert_phoneChange_page.html("修改完成");
			setTimeout(function(){
				$body.attr("hotCoverState","hide");
				window.location.href="personalCenter_page.html"
			},3000);
		}
		
	}
})

/*我的订单*/
/*
 * 我的订单>主页
 */
/*获取操作对象*/
$myOrderListNavTabs=$("#myOrderListNav li");//主页>导航栏
$listContainerPositionBox=$("#listContainerPositionBox")//主页>订单状态列表盒子
$listQuitBtns=$(".listQuitBtn")//主页>待付款 取消订单按钮
$alertBox2=$("#alertBox2")//主页>操作完成提示框
$closeListQuitBtn=$("#closeListQuitBtn")//主页>待付款>取消订单信息框>关闭按钮
$listQuitCheckBtn=$("#listQuitCheckBtn")//主页>取消订单信息框>确定取消按钮
$selectItems=$(".selectItem")//主页>取消订单信息框>原因选择项
$inTimePayBtns=$(".inTimePayBtn");//主页>立即付款按钮
$checkGoodsAddressBtns=$(".checkGoodsAddressBtn");//主页>查看物流
$checkGoodsArrivedBtns=$(".checkGoodsArrivedBtn");//主页>确认收货
$quitGoodsArrivedBtn=$("#quitGoodsArrivedBtn");//主页>待发货>确认收货提示框>取消按钮
$checkGoodsArrivedBtn=$("#checkGoodsArrivedBtn");//主页>待发货>确认收货提示框>确认按钮
$checkGoodsArrivedInfoBox=$(".checkGoodsArrivedInfoBox");//主页>确认收货提示框
$checkJudgmentBtn=$(".checkJudgmentBtn");//主页>已成功>查看评价 按钮
$buyAgainBtn=$(".buyAgainBtn");//主页>已成功>再次购买
$repeatBuyBtn=$(".repeatBuyBtn");//主页>已取消>重新购买
$delectListBtn=$(".delectListBtn");//主页>已取消>删除订单
/*功能动作*/
$myOrderListNavTabs.click(function(){
	//1.导航栏栏目 选中状态样式切换
	$(this).removeClass("colorId_Grey99");
	$(this).addClass("colorId_Green");
	$(this).addClass("scrollLineSize");
	$(this).addClass("borderColorRgba_Green");
	
	$(this).siblings().addClass("colorId_Grey99");
	$(this).siblings().removeClass("colorId_Green");
	$(this).siblings().removeClass("scrollLineSize");
	$(this).siblings().removeClass("borderColorRgba_Green");
	
	//2.订单状态列表 切换
	if($("#listContainerPositionBox").attr("listcontents")=="show"){
		if($(this).html()=="全部"){
			$listContainerPositionBox.css("left","0")
		}else if($(this).html()=="待付款"){
			$listContainerPositionBox.css("left","-100%")
		}else if($(this).html()=="待收货"){
			$listContainerPositionBox.css("left","-200%")
		}else if($(this).html()=="已完成"){
			$listContainerPositionBox.css("left","-300%")
		}else if($(this).html()=="已取消"){
			$listContainerPositionBox.css("left","-400%")
		}
	}else if($("#listContainerPositionBox").attr("listcontents")=="hide"){
		if($(this).html()=="全部"){
			$(".nolist").css("left","0");
			$listContainerPositionBox.css("left","0")
		}else if($(this).html()=="待付款"){
			$(".nolist").css("left","20%");
			$listContainerPositionBox.css("left","-100%")
		}else if($(this).html()=="待收货"){
			$(".nolist").css("left","40%");
			$listContainerPositionBox.css("left","-200%")
		}else if($(this).html()=="已完成"){
			$(".nolist").css("left","60%")
			$listContainerPositionBox.css("left","-300%")
		}else if($(this).html()=="已取消"){
			$(".nolist").css("left","80%");
			$listContainerPositionBox.css("left","-400%")
		}
	}
	})
//3.待付款 取消订单操作
	//a.点击取消订单，弹出取消订单信息操作框
	$listQuitBtns.click(function(){
		if($($selectItems[0]).hasClass("bgColorGreen")==false){
			$($selectItems[0]).addClass("bgColorGreen");
			$($selectItems[0]).parent().siblings().children(".selectItem").removeClass("bgColorGreen")
		}
		$body.attr("listState","show");
		$body.attr("hotCoverState","show");
	})
	//b.点击关闭按钮，关闭取消订单信息操作框
	$closeListQuitBtn.click(function(){
		$body.attr("listState","hide");
		$body.attr("hotCoverState","hide");
	})
	//c.点击确定按钮，关闭取消订单信息操作框，并弹出订单已取消信息提示
	$listQuitCheckBtn.click(function(){
		$body.attr("hotCoverState","delayshow");
		$body.attr("listState","hide");
		$alertBox2.html("订单已取消");
		setTimeout(function(){
			$body.attr("hotCoverState","hide");
		},2000)
	})
	//d.点击勾选原因
	$selectItems.click(function(){
		$(this).addClass("bgColorGreen");
		$(this).parent().siblings().children(".selectItem").removeClass("bgColorGreen")
	})
	//d.点击立即付款 ，跳转至 支付订单  界面
	$inTimePayBtns.click(function(){
		window.location.href="支付订单.html"
	})	
	//e.点击查看物流，跳转至 订单跟踪 界面
	$checkGoodsAddressBtns.click(function(){
		window.location.href="myOrderListFollowing_page.html"
	})
	//f.点击确认收货，弹出 是否确认收货提示框 
	$checkGoodsArrivedBtns.click(function(){
		$(".delectAlert").html("是否确定收货？")
		$body.attr("checkState","show");
		$body.attr("hotCoverState","show");
	})
	//f.点击 确认收货>取消 ，关闭 是否确认收货提示框  热区蒙版
	$quitGoodsArrivedBtn.click(function(){
		$body.attr("checkState","hide");
		$body.attr("hotCoverState","hide");
	})
	//f.点击 确认收货>确定 ，关闭 是否确认收货提示框  热区蒙版 弹出已确认收货
	$checkGoodsArrivedBtn.click(function(){
		if($(".delectAlert").html()=="是否确定删除订单？"){
			$body.attr("checkState","hide");
			$alertBox2.html("订单已删除");
			$body.attr("hotCoverState","delayshow");
			setTimeout(function(){
				$body.attr("hotCoverState","hide");
			},2000)
		}else if($(".delectAlert").html()=="是否确定收货？"){
			$body.attr("checkState","hide");
			$alertBox2.html("订单已签收");
			$body.attr("hotCoverState","delayshow");
			setTimeout(function(){
				$body.attr("hotCoverState","hide");
			},2000)
		}
	})
	//g.点击 主页>已成功>查看评价 按钮，跳转至 评价详情 界面
	$checkJudgmentBtn.click(function(){
		window.location.href="pingjiaxiangqing.html";
	})
	//h.点击 主页>已成功>再次购买 按钮，跳转至 购物车 界面
	$buyAgainBtn.click(function(){
		window.location.href="购物车.html";
	})
	//.点击 主页>已取消>重新购买 按钮，跳转至 购物车 界面
	$repeatBuyBtn.click(function(){
		window.location.href="购物车.html";
	})
	//j.点击 主页>已取消>删除订单 按钮，
	$delectListBtn.click(function(){
		$(".delectAlert").html("是否确定删除订单？")
		$body.attr("checkState","show");
		$body.attr("hotCoverState","show");
	})
	
	
	
	
	
/*
 * 应用 主页
 */
/*获取操作对象*/
$mainPageContentBox=$(".mainPageContentBox");//主页>小喇叭信息推送
/*操作区*/
var i=parseInt($mainPageContentBox.css("top"))-40;
console.log(i);
//进入 首页时
setInterval(function(){
	if(i<-120){
		i=-40;
	}else{
		if(i==-40){
			$mainPageContentBox.removeClass("transitionStyle");
		}else{
			$mainPageContentBox.addClass("transitionStyle");
		}
		$mainPageContentBox.css("top",i+"px");
		i=i-40;
	}
},2000)
//console.log($myOrderListNavTabs)
/*
 * 应用 主页>秒杀专区
 */

/*
 * 应用 主页>新鲜好物
 */

/*
 * 应用 主页>人气推荐
 */

/*
 * 应用 主页>专题精选
 */

/*
 * 应用 主页>猜你喜欢
 */
})


