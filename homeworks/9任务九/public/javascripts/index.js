
var selectedItem;
var dataID = 1;
var newsTitle = "";
var newImg = "";
var newsContent = "";
var addTime = "";
$(function() {
    // 查询数据
    $(".click-data").bind('click', function() {
        selectedItem = $(this).attr('value');
        getMsg();
    });

    // 修改数据
    $("#mdfHide").click(function() {
        $("#modify").slideUp(1000);
    });

    $("#mdfUpDate").click(function() {
        // var mdfTable = $("#mdfTable").val();
        // var mdfId = $("#mdfId").val();
        // var mdfTitle = $("#mdfTitle").val();
        // var mdfSub = $("#mdfSub").val();
        // var mdfImg = $("#mdfImg").val();
        // var mdfCon = $("#mdfCon").val();
        // var mdfTime = $("#mdfTime").val();
        $.ajax({
            url: '/update',
            type: 'post',
            dataType: "json",
            data: {
                "style": $("#mdfTable").val(),
                "id": $("#mdfId").val(),
                "newstitle": $("#mdfTitle").val(),
                "subtitle": $("#mdfSub").val(),
                "picture": $("#mdfImg").val(),
                "content": $("#mdfCon").val(),
                "creattime": $("#mdfTime").val()
            },
            success: function(data) {
                $("#mdfInfo").text(data['result']);
                $("#modify").slideUp(1000);
                getMsg();
            }
        });
    });

    // 删除数据
    $("#deleteBtn").click(function() {
        $.ajax({
            url: '/delete',
            type: 'post',
            dataType: "json",
            data: {
                "id": dataID
            },
            success: function(data) {
                $("#info").text("信息删除成功");
                $("#delete").hide(1000);
                getMsg();
            }
        });
    });

    $("#cancelBtn").click(function() {
        $("#delete").hide();
    });

    // 增加数据
    $("#addSave").click(function() {
        var newsTitleAdd = $("#newsTitle").val();
        var newsSubAdd = $("#subTitle").val();
        var newImgAdd = $("#newImg").val();
        var newsContentAdd = $("#newsContent").val();
        var addTimeAdd = $("#addTime").val();
        //验证填写是否为空
        if (!newsTitleAdd) {
            alert("请输入标题");
            return;
        }
        if (!newsSubAdd) {
            alert("请输入简介");
            return;
        }

        if (!newImgAdd) {
            alert("请输入图片");
            return;
        }

        if (!newsContentAdd) {
            alert("请输入内容");
            return;
        }

        if (!addTimeAdd) {
            alert("请输入时间");
            return;
        }

        $.ajax({
            url: '/insert',
            type: 'post',
            dataType: "json",
            data: {
                "style": selectedItem,
                "newstitle": newsTitleAdd,
                "subtitle": newsSubAdd,
                "picture": newImgAdd,
                "content": newsContentAdd,
                "creattime": addTimeAdd
            },
            success: function(data) {
                $("#addInfo").text(data['result']);
                $("#add").hide(1000);
                getMsg();
            }
        });
    });

    $("#addBtn-face").click(function() {
        if (selectedItem) {
            $("#add").show();
            $("#addInfo").text("输入信息");
        }
    });

    $("#addCancel").click(function() {
        $("#add").slideUp(1000);
    });

});

//加载数据到列表
function getMsg() {
    dataID = '';
    $("#data").empty();
    $.ajax({
        url: '/select',
        type: 'post',
        dataType: "json",
        data: {
            "style": selectedItem,
            "dataID": ''
        },
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                var tr = $("<tr></tr>")
                var newsId = $("<td></td>").text(data[i]['id']);
                var newsTitle = $("<td></td>").text(data[i]['newstitle']);
                var addTime = $("<td></td>").text(data[i]['creattime'].substring(0, 10));
                var newsImg = $("<td></td>").text(data[i]['picture']);
                var newsContent = $("<td></td>").text('...');
                var addBtn = $("<button class='btn btn-warning'  onclick = 'showModify(this.value)'> 修改 </button>");//修改数据按钮
                addBtn.val(data[i]['id']);
                var dleBtn = $("<button class='btn btn-danger'  onclick = 'removeClick(this.value)'> 删除 </button>");//删除数据按钮
                dleBtn.val(data[i]['id']);
                tr.append(newsId);
                tr.append(newsTitle);
                tr.append(addTime);
                tr.append(newsImg);
                tr.append(newsContent);
                tr.append(addBtn);
                tr.append(dleBtn);
                $("#data").append(tr);
            }
        }
    });
}

// 显示修改界面
function showModify(obj) {
    $("#modify").slideDown(1000);
    dataID = obj;
    $.ajax({
        url: '/select',
        type: 'post',
        dataType: "json",
        data: {
            "style": selectedItem,
            "id": dataID
        },
        success: function(data) {
            $("#mdfId").val(data[0]['id']);
            $("#mdfTable").val(data[0]['style']);
            $("#mdfTitle").val(data[0]['newstitle']);
            $("#mdfSub").val(data[0]['subtitle']);
            $("#mdfImg").val(data[0]['picture']);
            $("#mdfTime").val(data[0]['creattime'].substring(0, 10));
            $("#mdfCon").text(data[0]['content']);
        }
    });
}

// 显示删除界面
function removeClick(str) {
    dataID = str;
    $("#delete").show();
    $("#info").text("确定要删除吗？");
}


