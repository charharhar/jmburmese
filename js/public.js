jQuery(function(){
//�厰★�㨃皛穃𢆡���揢�𡁶鍂
jQuery(function(){jQuery(".hoverTag .chgBtn").hover(function(){jQuery(this).parent().find(".chgBtn").removeClass("chgCutBtn");jQuery(this).addClass("chgCutBtn");var cutNum=jQuery(this).parent().find(".chgBtn").index(this);jQuery(this).parents(".hoverTag").find(".chgCon").hide();jQuery(this).parents(".hoverTag").find(".chgCon").eq(cutNum).show();})})

//�厰★�㨃�孵稬���揢�𡁶鍂
jQuery(function(){jQuery(".clickTag .chgBtn").click(function(){jQuery(this).parent().find(".chgBtn").removeClass("chgCutBtn");jQuery(this).addClass("chgCutBtn");var cutNum=jQuery(this).parent().find(".chgBtn").index(this);jQuery(this).parents(".clickTag").find(".chgCon").hide();jQuery(this).parents(".clickTag").find(".chgCon").eq(cutNum).show();})})

function autFun(){
	var mW=$(".mBan").width();
	var mBL=1200/800;
	$(".mBan .slideBox .bd").css("height",mW/mBL);
	$(".mBan .slideBox .bd img").css("width",mW);
	$(".mBan .slideBox .bd img").css("height",mW/mBL);
	//$("#MENU").css("height",mW/mBL);
}

function autFun2(){
	var mW2=$(".mBan2").width();
	var mBL2=1200/800;
	$(".mBan2 .slideBox .bd").css("height",mW2/mBL2);
	$(".mBan2 .slideBox .bd img").css("width",mW2);
	$(".mBan2 .slideBox .bd img").css("height",mW2/mBL2);
	
}
setInterval(autFun,1);
setInterval(autFun2,1);

$(".mbom_ul li:last").css("border","none");

})
//撅讛𤪖憿菟𢒰��躰秤
jQuery(window).error(function(){
  return true;
});
jQuery("img").error(function(){
  $(this).hide();
});