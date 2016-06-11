$(function(){

    var $ulPic=$('ul.pic'),
    $ulPage=$('ul.page'),
    _liPicHtml=$ulPic.html(),//��𡃏ㄐ�𢒰��蝝䭾�枏枂靘�
    _width=$('#ad').width(),
	nowIndex=0,
	timer,
	speed=5000,//��𢲈anner�����
	picLen=$ulPic.find('li').length;

	//---------------------------------------------------------------------

	//��笔枂page dot
	$ulPic.find('li').each(function(){
		$ulPage.append('<li></li>');
	})
	$ulPage.css({width:$('ul.page li').outerWidth(true)*picLen});//outerWidth(true)=margin+padding
	
	//---------------------------------------------------------------------

	//��𠰴�𣇉���𠵆ouble
	$ulPic.html(_liPicHtml+_liPicHtml);//��𠰴�澆�鮋�脣縧
	picLen=$('ul.pic li').length;//�𧋦靘�4撘萄�� �𣶹�銁霈�8撘萎�

	//init
	dot();
	timer=setTimeout(bannerMove,speed)

	//---------------------------------------------------------------------

	//��匧椰�𢰧
	$('#ad p.btn_left').click(function(){
		bannerMove();
	})
	$('#ad p.btn_right').click(function(){

		clearTimeout(timer);

		//$ulPic����梶宏��訫�銝剝��
		if(nowIndex<=0){
				$ulPic.css({left:picLen/2*_width*-1});
				nowIndex=picLen/2;
			}

		nowIndex=(nowIndex-1+picLen)%picLen;//銝𠹺�撘萄�㚚�娍�閙��誘

		//��硋�穃椰蝘餃��
		$ulPic.animate({left:nowIndex*_width*-1},500,function(){
			timer=setTimeout(bannerMove,speed)
		});

		dot();
	})


	//��𣇉��宏���
	function bannerMove(){

		clearTimeout(timer);
		nowIndex=(nowIndex+1)%picLen;//銝衤�撘萄�㚚�娍�閙��誘

		//��硋�穃椰蝘餃��
		$ulPic.animate({left:nowIndex*_width*-1},500,function(){
			//$ulPic����梶宏��訫���撌阡��
			if(nowIndex>=picLen/2){
				$ulPic.css({left:0});
				nowIndex=0;
			}
			timer=setTimeout(bannerMove,speed)
		});
		
		dot();
	}

	function dot(){
		//dot change color
		$ulPage.find('li').removeClass('DotColor').eq(nowIndex).addClass('DotColor');
		if(nowIndex==4){
			$ulPage.find('li').eq(0).addClass('DotColor');
		}
	}
	


})// JavaScript Document