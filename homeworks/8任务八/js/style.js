
define(['jquery'], function($) {
    
  //该方法实现tab切换效果
    $.swich = function swich() {
        $(function() {
            $(".title li").click(tab);
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
    //该方法实后台页面现tab切换效果
    $.managementSwich = function managementSwich() {
        $(function() {
            $(".nav-sidebar li").click(tab);
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
    
    
    //该方法用于展现前台数据
    $.getData = function getData() {
        var choise = {
            newsCode: 1,
            newsType: "local"
        };
        (function() {
            showNews();//调用展现数据方法
            getType();//调用获取新闻类型方法
        }());
        function showNews() {
         	$(".news-content").remove();//将前边读取的内容清空
            $.ajax({
                type: "GET",
                url: "./article/getdata.php",
                data: {
                    newsType: choise.newsType
                },
                dataType: "json",
                success: function(data) {
                    if (data == "blank") {
                        $("<div>").addClass("news-content").attr("style", "text-align:center").text("新闻为空").appendTo("#news");//读取不到新闻时，提示内容为空
                    } 
                    else {
                        $.each(data, function(index, value) {
                            var newsContent = $("<div>").addClass("news-content").appendTo("#news").on("", function() {
                                $(".news-title").text(value.newstitle);
                                $(".news-second").text(value.subtitle);
                                $(".news-from").text(value.source);
                                $(".news-time").text(value.creattime);
                            });
                            var right = $("<div>").addClass("news-right").appendTo(newsContent);
                            var title = $("<div>").addClass("news-title").text(value.newstitle).appendTo(right);
                            $("<div>").addClass("news-second").text(value.subtitle).appendTo(title);
                            $("<div>").addClass("news-time").text(value.creattime).appendTo(newsContent);
                            $("<div>").addClass("news-from").text(value.source).appendTo(newsContent);
                        });
                    }
                }
            })
        } 
        //获取新闻类型
        function getType() {
            $(".title li").each(function(index) {//遍历所有新闻类型
                $(this).on("click", function() {
                    choise.newsCode = index + 1;
                    switch (choise.newsCode) {
                    case 1:
                        choise.newsType = "recommend";
                        break;
                    case 2:
                        choise.newsType = "artists";
                        break;
                    case 3:
                        choise.newsType = "local";
                        break;
                    case 4:
                        choise.newsType = "picture";
                        break;
                    case 5:
                        choise.newsType = "recreation";
                        break;
                    case 6:
                        choise.newsType = "social";
                        break;
                    }
					showNews();//调用展现数据方法
                });
            });
        };
    }

});
