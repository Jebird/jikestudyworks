
define(['jquery'], function ($) {
    //下拉加载图片方法
    $.checkScroll = function checkScroll() {
		var dataInt = {'data': [{'src': '1.jpg'},{'src': '2.jpg'},{'src': '3.jpg'},{'src': '4.jpg'},{'src': '5.jpg'},{'src': '6.jpg'},{'src': '7.jpg'},{'src': '8.jpg'},{'src': '9.jpg'},{'src': '10.jpg'},{'src': '11.jpg'},{'src': '12.jpg'},{'src': '13.jpg'},{'src': '14.jpg'},{'src': '15.jpg'}]};//定义添加图片数组
        $(window).on('scroll', function () {
            if (checkScrollSlide) {
                $.each(dataInt.data, function (key, value) {
                    var oBox = $('<div>').addClass('box').appendTo($('#main')); //追加div
                    var oPic = $('<div>').addClass('pic').appendTo($(oBox));
                    $('<img>').attr('src', 'img/' + $(value).attr('src')).appendTo($(oPic)); //追加img
                })
                $.waterfall(); //调用图片排列方法
            }
        })
    }
	
    //图片排列方法
    $.waterfall = function waterfall() {
        var boxs = $('#main>div'); //找到外边框div
        var w = boxs.eq(0).outerWidth(); //定义子div的宽度
        var cols = Math.floor($(window).width() / w); /*计算列数*/
        $('#main').width(w * cols).css('margin', '0 auto'); //定义外围容器宽度为子div的宽度乘以列数
        var hArr = [
        ]; //定义数组，用于承载图片
        boxs.each(function (index, value) {
            var h = boxs.eq(index).outerHeight(); //遍历box的外围高度
            if (index < cols) {
                hArr[index] = h; //将遍历的box高度储存在数组容器中
            } 
            else {
                var minH = Math.min.apply(null, hArr); //定义最小的box高度
                var minHIndex = $.inArray(minH, hArr); //定义高度最小的box的索引
                $(value).css({ //设置第二列第一张图片排列在第一列最矮的图片的下方
                    'position': 'absolute',
                    'top': minH + 'px',
                    'left': minHIndex * w + 'px'
                })
                hArr[minHIndex] += boxs.eq(index).outerHeight();
            }
        })
    }
	
    //该方法用于判断图片是否加载到屏幕下方，用于判断是否需要加载数组里的图片
    function checkScrollSlide() {
        var lastBox = $('#main>div').last(); //定义最后一张图片
        var lastBoxDis = lastBox.offset().top + Math.floor($lastBox.outerHeight() / 2); //定义最后一张图片距离顶部的距离
        var scrollTop = $(window).scrollTop(); //定义浏览器窗口的位置
        var documentH = $(window).height(); //定义浏览器窗口的高度
        return (lastBoxDis) //返回最后一张图片距离顶部的距离
    }
	//该方法用于页面刷新
	$.refreshWate= function refreshWate () {
		$(window).resize(function(){
			location.reload();
			})
		}
});
