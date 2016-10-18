/**
*使用了单例模式
*该模式只使用了一个实例，并且在该类内部创建了4个实例对象
*该模式增加了代码模块化，便于理解和修改
**/
$(document).ready(function() {
    var index = {
        init: function(argument) {
            var me = this;
            me.tabSwich();//实现tab切换效果
        },
        tabSwich: function() {
            var me = this;
            $(function() {
                $(".table-tab>ul > li").click(tab);
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
    };
    index.init();
});
