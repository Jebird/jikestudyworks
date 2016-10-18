
define(['jquery'], function($) {
    
    //该方法用于鼠标滑过展现隐藏
    $.showMore = function showMore() {
        $('#more').hover(function() //获取鼠标经过事件
        {
            $('#more-product').show();
            //使更过产品页面展现
        })
        $('#more-product').on('mouseleave', function() //获取鼠标移开事件
        {
            $('#more-product').hide();
            //当鼠标移开时，更过产品页面隐藏
        })
    }
    //该方法实现tab切换效果
    $.tabSwich = function tabSwich() {
        $(function() {
            $("ul > li").click(tab);
            //获取到tab切换中的每一个li,并获取点击事件
            function tab() {
                $(this).addClass("active").siblings().removeClass("active");
                //点击后附加active这个class,改变tab点击后的样式
                var tab = $(this).attr("title");
                //获取到该tab的title值，与子页面的Id属性对应
                $("#" + tab).show().siblings().hide();
                //将该子页面展现和隐藏  
            }
            ;
        });
    }
    //该方法用于鼠标点击展现隐藏
    $.showSkin = function showSkin() {
        $('#skin').click(function() //获取点击事件
        {
            $('#skinChoise').show();
            //使背景图片选择页面展现
        })
        $('#skinChoise').on('mouseleave', function() //鼠标移开时背景图片选择页面隐藏
        {
            $('#skinChoise').hide();
            //背景图片选择页面隐藏
        })
    }
    
    //该方法用于标题鼠标滑过展现隐藏
    $.showItem = function showItem() {
        $('#headtitle').hover(function() //获取鼠标经过事件
        {
            $('#item').show();
            //使更过产品页面展现
        })
        $('#item').on('mouseleave', function() //获取鼠标移开事件
        {
            $('#item').hide();
            //当鼠标移开时，更过产品页面隐藏
        })
        $("#headtitle li").not(":first").hover(function() {
            $("#item>li:eq(" + $(this).index() + ")").addClass("item-bgcolor");
            $("#item .angle:eq(" + $(this).index() + ")").css('display', 'block');
        })
        $("#headtitle li").not(":first").on('mouseleave', function() {
            $("#item>li:eq(" + $(this).index() + ")").removeClass("item-bgcolor");
            $("#item .angle:eq(" + $(this).index() + ")").css('display', 'none');
        })
    }
    //该方法用于二级菜单显示隐藏
    $.showMenu = function showMenu() {
        $("#advert li").hover(function() {
            //获取鼠标滑过事件
            $(".advert-left-hide", this).show();
            //将获取到的元素展现
            $(".advert-tor", this).hide();
            //将获取到的元素隐藏
        })
        $("#advert li").mouseleave(function() {
            //获取鼠标移开事件
            $(".advert-left-hide", this).hide();
            //将获取到的元素隐藏
            $(".advert-tor", this).show();
            //将获取到的元素展现
        })
    }
    
    //该方法用于轮播图效果
    $.shuffling = function shuffling() {
        var i = 0;
        //定义一个循环变量
        var clone = $(".banner .img li").first().clone();
        //获取到第一个元素并将之复制
        $(".banner .img").append(clone);
        //将获取到的复制元素添加到img后边
        var size = $(".banner .img li").size();
        //定义一个变量为li的数量
        for (var j = 0; j < size - 1; j++) {
            $(".banner .num").append("<li></li>");
            //添加图片滚动时，数字的变化
        }
        $(".banner .num li").first().addClass("on");
        //添加class“on”,使滚动到该数值时，背景颜色改变
        /*鼠标划入圆点*/
        $(".banner .num li").hover(function() {
            var index = $(this).index();
            //定义索引
            i = index;
            //将索引值附加给变量 i
            $(".banner .img").stop().animate({
                left: -index * 560//当鼠标滑入式，停止滚动
            }, 500)
            $(this).addClass("on").siblings().removeClass("on")
        })
        /*自动轮播*/
        var t = setInterval(function() {
            i++;
            move()
        }, 2000)
        /*对banner定时器的操作*/
        $(".banner").hover(function() {
            clearInterval(t);
        }, function() {
            t = setInterval(function() {
                //设置自动轮播的速度
                i++;
                move();
            }, 10000)
        })
        /*向左的按钮*/
        $(".banner .btn_r").click(function() {
            i++;
            move();
        })
        /*向右的按钮*/
        $(".banner .btn_l").click(function() {
            i--;
            move();
        })
        function move() {
            if (i == size) {
                //当滚动到最后一个元素时，通过修改css调整距离，达到无缝联播的效果
                $(".banner  .img").css({
                    left: 0
                })
                i = 1;
                //将i值复位
            }
            if (i == -1) {
                //当滚动到第一个元素时，距离左边的距离计算如下
                $(".banner .img").css({
                    left: -(size - 1) * 560
                })
                i = size - 2;
            }
            $(".banner .img").stop().animate({
                //控制停止滚动
                left: -i * 560
            }, 500)
            
            if (i == size - 1) {
                //控制数值变化是背景颜色的改变
                $(".banner .num li").eq(0).addClass("on").siblings().removeClass("on")
            } else {
                $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
            }
        }
    }
    
    //该方法用于图片模块左右切换
    $.advand = function advand() {
        var i = 0;
        var clone = $(".advand .workflow").find("li:lt(3)").clone();
        //获取到前3个元素并复制
        $(".advand .workflow").append(clone);
        //将复制的元素添加到后边
        var size = $(".advand .workflow li").size();
        /*向左的按钮*/
        $(".advand .btn_l").click(function() {
            i++;
            move();
        })
        /*向右的按钮*/
        $(".advand .btn_r").click(function() {
            i--;
            move();
        })
        /*滚动事件*/
        function move() {
            if (i == size - 2) {
                $(".advand  .workflow").css({
                    left: 0
                });
                i = 0;
            }
            if (i == -1) {
                $(".advand .workflow").css({
                    left: -(size - 3) * 186.5
                })
                i = size - 4;
            }
            $(".advand .workflow").stop().animate({
                left: -i * 186.5
            }, 500)
        }
    }
    
    
    //该方法用于选课程模块左右切换
    $.choiseClass = function choiseClass() {
        var i = 0;
        var clone = $(".choise-class-box .choise-class-box-ul").find("li:lt(4)").clone();
        //获取到前4个元素并复制
        $(".choise-class-box .choise-class-box-ul").append(clone);
        //将复制的元素添加到后边
        var size = $(".choise-class-box .choise-class-box-ul li").size();
        /*向左的按钮*/
        $(".choise-class-box .btn_l").click(function() {
            i++
            move();
        })
        /*向右的按钮*/
        $(".choise-class-box .btn_r").click(function() {
            i--
            move()
        })
        function move() {
            if (i == size - 3) {
                $(".choise-class-box  .choise-class-box-ul li").css({
                    left: 0
                });
                i = 0;
            }
            if (i == -1) {
                $(".choise-class-box .choise-class-box-ul li").css({
                    left: -(size - 4) * 250
                })
                i = size - 5;
            }
            $(".choise-class-box .choise-class-box-ul li").stop().animate({
                left: -i * 250
            }, 500)
        }
        //显示隐藏当前Li
        $(".choise-class-box-ul li").each(function(i) {
            //获取元素，并遍历
            $(this).hover(function() {
                $(".choise-class-box-ul .class-time:eq(" + i + ")").hide();
                $(".choise-class-box-ul .class-desc:eq(" + i + ")").show();
            });
            $(this).mouseleave(function() {
                $(".choise-class-box-ul .class-time:eq(" + i + ")").show();
                $(".choise-class-box-ul .class-desc:eq(" + i + ")").hide();
            });
        });
    
    }
    
    //该方法实现tab切换效果
    $.classSwich = function classSwich() {
        $(function() {
            $("#course-tab ul > li").hover(tab);
            //获取到tab切换中的每一个li,并获取点击事件
            function tab() {
                $(this).addClass("course-tab-li-on").siblings().removeClass("course-tab-li-on");
                //点击后附加active这个class,改变tab点击后的样式
                var tab = $(this).attr("positionid");
                //获取到该tab的title值，与子页面的Id属性对应
                $("#" + tab).show().siblings().hide();
                //将该子页面展现和隐藏  
            }
            ;
        });
        $(".course .course-conten-ul").each(function(i) {
            //控制元素显示隐藏事件，并遍历元素
            $(".course-conten-li,this").each(function(j) {
                //控制当前元素显示隐藏事件，并遍历元素
                $(this).hover(function() {
                    //添加鼠标滑过事件
                    $(".class-player:eq(" + j + ")").show();
                    $(".hot-class-bottom p:eq(" + j + ")").show();
                    $(".curse-time:eq(" + j + ")").hide();
                    $(".hot-class-bottom:eq(" + j + ")").css('height', '150');
                });
                $(this).mouseleave(function() {
                    //添加鼠标移开事件
                    $(".class-player:eq(" + j + ")").hide();
                    $(".hot-class-bottom p:eq(" + j + ")").hide();
                    $(".curse-time:eq(" + j + ")").show();
                    $(".hot-class-bottom:eq(" + j + ")").css('height', '88');
                });
            })
        });
    }
    $.knowShow = function knowShow() {
        $(".knowledge .knowledge-content .knowledge-flip a").hover(function() {
            $(".know-show").hide();
            $(".know-hide").show();
        })
    }
    
    //该方法用于合作企业模块左右切换
    $.company = function company() {
        var i = 0;
        var clone = $(".commany-banner .img").find("li:lt(6)").clone();
        //获取到前6个元素并复制
        $(".commany-banner .img").append(clone);
        //将复制的前6个元素添加到 img后边
        var size = $(".commany-banner .img li").size();
        /*向左的按钮*/
        $(".commany-content .btn_l").click(function() {
            i++;
            move();
        })
        /*向右的按钮*/
        $(".commany-content .btn_r").click(function() {
            i--;
            move();
        })
        /*滚动事件*/
        function move() {
            if (i == size - 5) {
                $(".commany-banner  .img").css({
                    left: 0
                })
                i = 0;
            }
            if (i == -1) {
                $(".commany-banner .img").css({
                    left: -(size - 6) * 161
                })
                i = size - 7;
            }
            $(".commany-banner .img").stop().animate({
                left: -i * 161
            }, 500)
        }
    }
    //该方法用于合作院校模块左右切换
    $.school = function school() {
        var i = 0;
        var clone = $(".school-banner .img").find("li:lt(8)").clone();
        //遍历查找前8个元素，并且将之复制
        $(".school-banner .img").append(clone);
        //将复制的8个元素添加到图片列表后面
        var size = $(".school-banner .img li").size();
        /*向左的按钮*/
        $(".school-content .btn_l").click(function() {
            i++;
            move();
        })
        /*向右的按钮*/
        $(".school-content .btn_r").click(function() {
            i--;
            move();
        })
        function move() {
            if (i == size - 7) {
                $(".school-banner .img").css({
                    left: 0
                })
                i = 0;
            }
            if (i == -1) {
                $(".school-banner .img").css({
                    left: -(size - 8) * 120
                })
                i = size - 9;
            }
            $(".school-banner .img").stop().animate({
                left: -i * 120
            }, 500)
        }
    }
    //该方法用于媒体报道模块左右切换
    $.media = function media() {
        var i = 0;
        var clone = $(".media-banner .img").find("li:lt(6)").clone();
        //遍历查找前6个元素，并且将之复制
        $(".media-banner .img").append(clone);
        //将复制的6个元素添加到图片列表后面
        var size = $(".media-banner .img li").size();
        /*向左的按钮*/
        $(".media-content .btn_l").click(function() {
            i++;
            move();
        })
        /*向右的按钮*/
        $(".media-content .btn_r").click(function() {
            i--;
            move();
        })
        function move() {
            if (i == size - 5) {
                $(".media-banner .img").css({
                    left: 0
                })
                i = 0;
            }
            if (i == -1) {
                $(".media-banner .img").css({
                    left: -(size - 6) * 161
                })
                i = size - 7;
            }
            $(".media-banner .img").stop().animate({
                left: -i * 161
            }, 500)
        }
    }
    
    //该方法用于返回顶部
    $.backTop = function backTop() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 0) //判断距离顶部的距离是否大于0
            {
                $(".fadein").fadeIn(100);
            }//距离顶部大于0的时候，返回图标展现，并控制展现的速度
             
            
            
            else {
                $(".fadein").fadeOut(100);
            }
            //距离顶部等于0的时候，返回图标隐藏，并控制隐藏的速度
        })
        $("#backtop").click(function() //控制点击事件
        {
            $("body,html").animate({
                scrollTop: 0
            }, 100);
            //返回顶部，并控制返回的速度
            return false;
        })
        $(".fadein .weixin").hover(function() {
            //控制微信鼠标滑过展现二维码事件
            $(".fadein .erweima").toggle();
        })
        $(".fadein .kefu").hover(function() {
            //控制客服鼠标滑过展现客服详细内容事件
            $(".fadein .kefu-content").toggle();
        })
    }

});
