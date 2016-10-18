require.config({
    paths: {
        jquery: 'jquery-1.12.3.min'
    }
});
 
require(['jquery','style'], function($,style) {
	$.showMore();//鼠标滑过显示内容
	$.showItem();//展示头部职业课程等内容
	$.showMenu();//二级菜单展现
	$.shuffling();//轮播图效果
	$.advand();//菜单部分图片模块左右切换
	$.choiseClass();//课程选择模块左右切换
	$.classSwich();//热门课程模块tab切换效果
	$.company();//合作企业左右切换
	$.school();//学校轮播左右切换
	$.media();//媒体报导模块左右切换效果
	$.backTop();//返回顶部
});
