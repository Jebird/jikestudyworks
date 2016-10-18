require.config({
    paths: {
        jquery: 'jquery-1.12.3.min'
    }
});
 
require(['jquery','style'], function($,style) {
	$.swich();//tab切换
	$.managementSwich();//后台tab切换
	$.getData();//前台获取数据
});
