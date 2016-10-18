require.config({
    paths: {
        jquery: 'jquery-1.12.3.min'
    }
});
 
require(['jquery','style'], function($,style) {
	$.waterfall();//调用图片排列方法
	$.checkScroll();//调用图片加载方法
	$.refreshWate();//调用页面刷新方法
});
