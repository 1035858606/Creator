var limg=["images/loading_bg.png"];
var imgs = ["two/1.jpg","two/2.jpg","two/3.jpg","two/4.jpg","two/5.jpg","two/6.jpg","two/7.jpg","two/8.jpg","two/9.jpg","two/10.jpg","two/11.jpg","two/12.jpg","two/13.jpg","two/14.jpg","two/15.jpg","two/16.jpg","two/17.jpg","two/18.jpg","two/19.jpg","two/20.jpg","two/21.jpg","two/22.jpg","two/23.jpg","two/24.jpg","two/25.jpg","two/26.jpg","two/27.jpg","two/28.jpg","two/29.jpg","two/30.jpg","two/31.jpg","two/32.jpg","two/33.jpg","two/34.jpg","two/35.jpg","two/36.jpg","two/37.jpg","two/38.jpg","two/39.jpg","two/40.jpg","two/41.jpg","two/42.jpg","two/43.jpg","two/44.jpg","two/45.jpg","two/46.jpg","two/47.jpg","two/ww.png","two/www.png","bg.jpg","Cbg.jpg","one/l1.png","one/l2.png","one/l3.png","one/rr.png","one/re.png","one/hh.png","one/yy.png","one/qq.png","one/gg.png","one/dd.png","one/ccc.png","one/dda.png","one/pd.png","one/pr.png","one/pe.png","one/pm.png","one/maker.png","one/Cd.png","one/Cdd.png","one/Cddd.png","one/slide.png","three/img5.png","three/img-5.png","three/grounp4.png","three/group4.png","three/group2.png","three/group1.png","three/img4.png","three/img3.png","six/xwn.jpg","six/thc.jpg","six/wp.jpg","six/hp.jpg","six/gz.jpg","six/jd.jpg","six/t1.png","six/t2.png","six/t3.png","six/t4.png","six/t5.png","six/t6.png","six/t7.png","six/t8.png","six/ttw.png","seven/title.png","seven/t1.png","seven/t2.png","seven/t3.png","seven/t4.png","seven/t5.png","seven/t6.png","seven/line.png","eight/block6.png","eight/block.png","eight/block1.png","eight/block9.png","eight/block8.png","eight/mohu.png","eight/ellemen.png","eight/graduation.png","eight/36kr.png","eight/bank.png","eight/aiqiyi.png","nine/block8.png","nine/share.png","nine/good.png","nine/jb.png","nine/kind.png","nine/img5.png","nine/payfor.png","nine/111.gif","nine/ellemen1.png","music.png","musicoff.png","five/1.jpg","five/glass.jpg","five/2.jpg","five/3.jpg","five/4.jpg","five/5.jpg","five/6.jpg","five/7.jpg","five/8.jpg","five/9.jpg","five/10.jpg","five/01.jpg","five/fx.png","five/02.jpg","five/03.jpg","five/04.jpg","five/05.jpg","five/06.jpg","five/07.jpg","five/08.jpg","five/09.jpg","five/010.jpg","five/tap.png","four/pointlight.png","four/aluo.png","four/gy.png","four/madong.png","four/shenxiaohui.png","four/wangzhuang.png","four/wqg.png","four/wxf.png","four/x.png","four/aluo1.png","four/shenxiaohui1.png","four/liuyong1.png","four/gy1.png","/four/wangzhuang1.png","four/madong1.png","four/wxf1.png","four/wqg1.png"]
var swiper;
var imga = new Image();
imga.src=limg[0];
imga.onload = function  () {
    // console.log("end")
	var index = 0;
	for (var i = 0; i < imgs.length; i++) {
		var img = new Image();
		img.src = "images/"+imgs[i];
		img.onload = function  () {
			index++;
			var p = parseInt((index/imgs.length*100));
			$("#loading p").html(p+"%");
			if (index==imgs.length) {
                // setTimeout(function  () {
                    $("#loading").hide();
                    $(".swiper-container").removeClass("loading_img");
                    $("#music").show()
                // },1000)
				swiper = new Swiper('.swiper-container', {
				        direction: 'vertical',
                        noSwiping : true,
				        onSlideChangeEnd: function(swiper){
				            switch(swiper.activeIndex){
				                //页面2
				                case 1:earth();break;
                                //页面3
                                case 3:fourFn();break;
                                //页面5
                                case 4:fiveFn(afterClick);;break;
				                //页面6
				                case 5:sixFn();break;
				                // //页面7
				                case 6:seFn();break;
				                // //页面8
				                case 7:eightFn();break;

				            }
			        	}
				});
			};
		}
	};
	var bol = false;
	$("#music").on("touchend",function  () {
		if (bol) {
			$("#music>audio").get(0).play();
			$("#music").css({"backgroundImage":"url(images/music.png)"});
			// $("#music").addClass("music");
            $("#music").attr("class","music")
			bol = false;
		}else{
			$("#music>audio").get(0).pause();
			$("#music").css({"backgroundImage":"url(images/musicoff.png)"});
			// $("#music").removeClass("music");
            $("#music").attr("class","")
			bol = true;
		}
	})
}


//2
var timer;
var oImgArr = [];
var img_i = 0;
for (var i = 0; i < 47; i++) {
	var img = new Image();
    img.src = "images/"+imgs[i];
    oImgArr.push(img)
};
function earth () {
	var canvas = document.getElementById('canvas');
	var canCxt = canvas.getContext("2d");
	var w = canvas.width = document.documentElement.clientWidth;
    var h = canvas.height = document.documentElement.clientHeight;
    clearInterval(timer)
    img_i++;
    canCxt.drawImage(oImgArr[img_i],0,0,w,h);	    
    timer = setInterval(function  () {    	
	    canCxt.drawImage(oImgArr[img_i],0,0,w,h);
	    img_i++;
	    if (img_i>46) {
	    	img_i=0;
	    };
    },50)   
    $(".t_earth img").eq(0).show();  
    $(".t_earth img").eq(1).show();   
}

// fourFn()
//4
function fourFn () {
    var hx = $(window).width()/2;
    var hy = $(window).height()/2;
    $(".fo_word").addClass("fo_wordm");
    $(".fo_bg").addClass("fo_bgmo")
    for (var foi = 1; foi < 9; foi++) {
        $(".fo_tou li").eq(foi-1).addClass("fo_tm"+foi);
        $(".fo_tou li").css({opacity:1})
    };
    setTimeout(function  () {
        for (var i = 0; i < 8; i++) {
            var tx = $(".fo_tou li").eq(i).position().left+$(".fo_tou li").eq(i).width()/2;
            var ty = $(".fo_tou li").eq(i).position().top+$(".fo_tou li").eq(i).height()/2;
            var a = hx-tx;
            var b = hy-ty;
            var c = Math.sqrt(a*a + b*b); 

            var p=Math.PI;
            var d = -180*Math.asin(b/c)/p;
            if (tx<hx) {
                d = 180-d;
            };
            $(".fo_line li").eq(i).css({width:c,transform:"rotate("+d+"deg)"})
            $(".fo_line li").find("p").addClass("fo_lm")
        };
        $(".four").removeClass("swiper-no-swiping");
        datu()
    },5000)
    //大图
    function datu () {
        var swiper2 = new Swiper('.swiper-cont', {
            loop: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
        });
        var fmovebol = false;    
        $(".fo_tou li").each(function  (index,key) {
            $(key).on("touchstart",function() {
                fmovebol = false;
            })
            $(key).on("touchmove",function() {
                fmovebol = true;
            })
            $(key).on("touchend",function  () {
                if (fmovebol) {return};
                swiper.lockSwipes();
                var fow = $(".fo_tou li").width();
                $(".yuan").width(fow);
                $(".yuan").height(fow);
                $(".fo_tou li").find("img").hide();
                $(".yuan").show()
                $(".fo_bp").removeClass("fo_remo");
                $(".fo_bp").addClass("fo_addmo");
                var ind = Number($(this).attr("index"))+1;
                console.log(ind)
                swiper2.slideTo(ind)    
            })     
        })
        $(".fo_pic").on("click",function  () {
            swiper.unlockSwipes();
            $(".fo_bp").removeClass("fo_addmo");
            $(".fo_bp").addClass("fo_remo");
            $(".yuan").addClass("yuan_re");
            setTimeout(function  () {
                $(".yuan").hide()
                $(".fo_tou li").find("img").show(); 
                $(".yuan").removeClass("yuan_re");
            },1000)
                
            
            
            $(".four").removeClass("swiper-no-swiping");
        })
    }    
}


//5
function fiveFn (cb) {
    setTimeout(function  () {
        $(".fi_title").animate({
            opacity:"1"
        });
        var fi = 9
        var timer = setInterval(function  () {
            setTimeout(function  () {
                if (fi<0) {
                    clearInterval(timer)
                    $(".five").removeClass("swiper-no-swiping")
                    cb();
                };
                $(".fi_mask").eq(fi).addClass("fi_maskd")
                $(".fi_tm").eq(fi).addClass("fi_tmd")
                $(".fi_ren").eq(fi).addClass("fi_rend")
                fi--;
                if (fi==3) {
                    $(".fi_dian").addClass("fi_diand")
                };
            },200)                
        },300)   
    },500)   
   
    
}
function afterClick() {
    var movebol = false;
    $(".fi_peo").each(function(index,key) {
        $(key).on("touchstart",function() {
            movebol = false;
        })
        $(key).on("touchmove",function() {
            movebol = true;
        })
        $(key).on("touchend",function() {   
            // alert(index);
            if (movebol) {return};
            $(".five").addClass("swiper-no-swiping")
            $(".fi_dian").hide()
            $(".fi_d"+(index+1)).removeClass("fremove"+(index+1));
            $(".fi_d"+(index+1)).addClass("fmove"+(index+1));
            $(".fi_mk").show();
             
        })
    })  
    $(".fi_d").each(function  (index,key) {
        $(key).on("touchend",function  () {
            $(".fi_d"+(index+1)).removeClass("fmove"+(index+1));
            $(".fi_d"+(index+1)).addClass("fremove"+(index+1));
    		$(".fi_mk").hide();
            $(".five").removeClass("swiper-no-swiping")
        })     
    })
    $(".fi_mk").on("touchstart",function  (ev) {
        ev.preventDefault();
    })
}


//6
function sixFn () {
    // $(".s_xz").addClass("ss");
    for (var si = 0; si < 8; si++) {
        if (si==0||si==1||si==5||si==6||si==7) {
            $(".ss img").eq(si).addClass("smove1");
        }else{
            $(".ss img").eq(si).addClass("smove2"); 
        }
    };    
    for (var i = 0; i < 6; i++) {
        $(".s_people img").eq(i).addClass("peo"+i)  
    };
    $(".s_wenzi img").eq(0).addClass("peo1");
    $(".s_ziti").addClass("peo2"); 
}

//7 
var a = 0;
var bol =true;
function seFn () {
	var h = $(".se_s").height();
	$(".se_ss img").height(h);
    setTimeout(function  () {
          $('.se_title').animate({opacity:1});
          setTimeout(function  () {
                $(".se_biaoti").animate({opacity:1});
                setTimeout(function  () {
                      $(".se_biaoti").animate({opacity:1});
                },800)
                
                var time = setInterval(function  () {
                if (bol) {
                	a +=1;
                };
                $(".se_ss").height(a+"%");
                if (a==18) {
                      $(".se_wo1").addClass("se_wo11")     
                };
                if (a==50) {
                     $(".se_wo2").addClass("se_wo22") 
                };
                if (a==80) {
                      $(".se_wo3").addClass("se_wo11") 
                };
                if (a>=100) {
                	bol = false;
                    clearInterval(time);
                };
                $(".se_ss").css("opacity",1)
                },20)
          },500)      
    },500)     
}


//8
function eightFn () {
    setTimeout(function  () {
	    $(".e_top img").addClass("e_t");
	    $(".e_top img").eq(0).css({"top": "6%","left": "-1.5%"});
	    $(".e_top img").eq(1).addClass("emove1");
	    $(".e_top img").eq(2).addClass("emove11");
	    $(".e_top img").eq(3).addClass("emove2");
	    $(".e_top img").eq(4).css({"top": "19%","left": "78%"});
        $(".e_top img").eq(5).css({"top": "-4%","left": "88%"});
        setTimeout(function  () {
            $(".e_top img").eq(11).addClass("emove4");
            $(".e_top img").eq(6).addClass("e_tt"); 
            setTimeout(function  () {
                $(".e_top img").eq(7).addClass("e_tt"); 
                setTimeout(function  () {
                    $('.e_top img').eq(8).addClass("emove3");
                    setTimeout(function  () {
                        $('.e_top img').eq(9).addClass("emove3"); 
                        setTimeout(function  () {
                            $('.e_top img').eq(10).addClass("emove3");
                         },500)
                    },500)
                },500)
            },800)
         },1000)
    },100)   
}