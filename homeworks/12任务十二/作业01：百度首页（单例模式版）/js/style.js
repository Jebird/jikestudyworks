/**
*使用了单例模式
*该模式只使用了一个实例，并且在该类内部创建了4个实例对象
*该模式增加了代码模块化，便于理解和修改
**/
$(document).ready(function() {
    var index = {
        init: function(argument) {
            var me = this;
            me.showMore();
            //用于鼠标滑过展现隐藏
            me.tabSwich();
            //实现tab切换效果
            me.showSkin();
            //用于皮肤切换点击展现隐藏
            me.skinChange();
            //用于更改背景图片，并写入cookie
            me.backTop();
            //用于返回顶部
        },
        showMore: function() {
            var me = this;
            me.btn = $('#more').hover(function() //获取鼠标经过事件
            {
                $('#more-product').show();
                //使更过产品页面展现
            })
            $('#more-product').on('mouseleave', function() //获取鼠标移开事件
            {
                $('#more-product').hide();
                //当鼠标移开时，更过产品页面隐藏
            });
        },
        tabSwich: function() {
            var me = this;
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
        },
        showSkin: function() {
            var me = this;
            $('#skin').click(function() //获取点击事件
            {
                $('#skinChoise').show();
                //使背景图片选择页面展现
            })
            $('#skinChoise').on('mouseleave', function() //鼠标移开时背景图片选择页面隐藏
            {
                $('#skinChoise').hide();
                //背景图片选择页面隐藏
            });
        },
        skinChange: function() {
            var me = this;
            me.btn = $(function() {
                var cookieSrc = getCookie("src");
                //读取需要缓存的对象
                $("#bgimg").attr("src", cookieSrc);
                //设置缓存
                $("#skinChoise img").each(function() {
                    $(this).click(function() {
                        var src = $(this).attr("src");
                        //保存当前获取的src属性值
                        $("#bgimg").attr("src", src, 30);
                        //吧获取到的src属性值附加给背景src
                        function SetCookie(name, value, day) //设置cookie的名字和值
                        {
                            var exp = new Date();
                            exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
                            document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
                        }
                        SetCookie("src", src, 30);
                        //设置cookie
                    })
                });
                function getCookie(name) //定义取cookies函数       
                {
                    var nameEQ = name + "=";
                    var ca = document.cookie.split(';');
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == ' ')
                            c = c.substring(1, c.length);
                        if (c.indexOf(nameEQ) == 0)
                            return c.substring(nameEQ.length, c.length);
                    }
                    return "img/4.jpg";
                    //没有cookie时，默认返回该值
                }
                ;
            });
        },
        backTop: function() {
            var me = this;
            $(window).scroll(function() {
                if ($(window).scrollTop() > 0) //判断距离顶部的距离是否大于0
                {
                    $("#backtop").fadeIn(100);
                }//距离顶部大于0的时候，返回图标展现，并控制展现的速度
                 
                
                else {
                    $("#backtop").fadeOut(100);
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
            });
        }
    };
    index.init();
});
