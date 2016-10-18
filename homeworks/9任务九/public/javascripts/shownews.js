$(function() {
	// 绑定导航条的点击事件
    $(".nav-btn").bind('click', function() {
        $(this).find('span').css('border-bottom','1px solid #fff');
        
        $(this).siblings().find('span').css('border-bottom','none');

        navClick($(this).attr('value'));
    });

    $("#show").click(function() {
    	// 显示或隐藏起始的隐藏项目
        $(".hddn").toggle();
        
        // 根据显示与否改变箭头的方向
        if ($(".hddn").css('display') == 'none') {
        	$("#triangle").addClass("down-triangle");
            $("#triangle").removeClass("up-triangle");
        }else{
        	$("#triangle").removeClass("down-triangle");
            $("#triangle").addClass("up-triangle");
        }
    });
});

// 点击对应条目时加载数据
function navClick(tableName) {
    $("#content").empty();
    $.ajax({
        url: '/select',
        type: 'post',
        dataType: "json",
        data: {
            "style": tableName
        },
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                var conDiv = $("<div class='container index-list'></div>")
                var h5 = $("<h5></h5>");
                h5.text(data[i]['newstitle']);
                conDiv.append(h5);

                var col4Div = $("<div class='col-xs-4 fit'></div>");
                var img =  $("<img>");
                img.attr('src',data[i]['picture']);
                var span = $("<span></span>");
                span.text(data[i]['creattime'].substring(0, 10));
                col4Div.append(img);
                col4Div.append(span);
                conDiv.append(col4Div);

                var col8Div = $("<div class='col-xs-8 fit'></div>");
                var pCon = $("<p></p>");
                pCon.text(data[i]['subtitle']);
                col8Div.append(pCon);
                conDiv.append(col8Div);
                $("#content").append(conDiv);
            }
        }
    });
}
