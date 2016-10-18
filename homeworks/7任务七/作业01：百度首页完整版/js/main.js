require.config({
    paths: {
        jquery: 'jquery-1.12.3.min'
    }
});
 
require(['jquery','style'], function($,style) {
	$.showMore();//鼠标滑过显示内容
	$.tabSwich();//tab切换
	$.showSkin();//点击展现皮肤选择
	$.skinChange();//更改背景图片，并写入cookie
	$.backTop();//返回顶部
});
