<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>内容页</title>
<link rel="stylesheet" href="../css/bootstrap.min.css" type="text/css" />
<link rel="stylesheet" href="../css/style-management.css" type="text/css" />
<!--[if lt IE 9]>
    <script src="../js/html5.js"></script>
    <![endif]-->
</head>

<body>
<!--标题 s -->
<nav class="navbar navbar-inverse navbar-fixed-top ama-header">
  <div class="container">
    <div class="navbar-header">
      <h2 class="pull-left"> <span class="orange">AMA.</span> <span class="white">ADMIN</span> </h2>
      <i class="pull-left">后台管理系统</i> </div>
  </div>
</nav>
<!--标题 s --> 
<!--选项切换 s --> 

<!--选项切换 e --> 
<!--内容 s -->
<div class="container-fluid ama-menu">
  <div class="row"> 
    <!--左侧树状 s -->
    <div class="col-sm-2 col-xs-2 col-md-2 col-lg-2 table-tab">
      <ul class="nav nav-sidebar">
        <li class="active" title="release"><a href="#" target="_self"><span>发布新闻</span></a></li>
        <li title="list"><a href="#" target="_self"><span>新闻列表</span></a></li>
      </ul>
    </div>
    <!--左侧树状 e --> 
    <!--表格内容 s -->
    <div class="col-sm-10 col-xs-10 col-md-10 col-lg-10 table-content">
      <div id="release" class="release">
        <div class="news">
          <h2>发布新闻</h2>
          <form id="form1" name="form1" method="post" action="add.handle.php" enctype="multipart/form-data">
            <div class="margin-bottom-10">
              <span class="col-lg-1 col-md-1 col-sm-1">标题</span>
              <label for="newstitle"></label>
              <input class="col-lg-11 col-md-11 col-sm-11" type="text" name="newstitle" id="newstitle" />
            </div>
            <div class="margin-bottom-10">
              <span class="col-lg-1 col-md-1 col-sm-1">来源</span>
              <label for="source"></label>
              <input class="col-lg-11 col-md-11 col-sm-11" type="text" name="source" id="source" />
            </div>
            <div class="margin-bottom-10">
              <span class="col-lg-1 col-md-1 col-sm-1">图片</span>
              <label for="picture"></label>
              <input class="col-lg-11 col-md-11 col-sm-11" type="file" name="picture" id="picture" value="浏览" />
            </div>
            <div class="margin-bottom-10"> 
              <span class="col-lg-1 col-md-1 col-sm-1">类型</span>
              <select class="col-lg-11 col-md-11 col-sm-11"  name="style"  id="style" >
              	<option value="recommend">推荐</option>
                <option value="artists">百家</option>
                <option value="local">本地</option>
                <option value="picture">图片</option>
                <option value="recreation">娱乐</option>
                <option value="social">社会</option>
              </select>
            </div>
            <div> 
              <span class="col-lg-1 col-md-1 col-sm-1">简介</span>
              <label for="subtitle"></label>
              <textarea class="col-lg-11 col-md-11 col-sm-11" name="subtitle" id="subtitle" ></textarea>
            </div>
            <div> 
              <span class="col-lg-1 col-md-1 col-sm-1">内容</span>
              <textarea class="col-lg-11 col-md-11 col-sm-11"  name="content" id="content"></textarea>
            </div>
            <div class=" text-center">
              <input type="submit" name="button" id="button" value="提交" class="btn btn-danger btn-mine" />
            </div>
          </form>
        </div>
      </div>
      <div id="list" class="list">
        <div class="tatil">
          <h2>新闻列表</h2>
        </div>
        <h4><span>NEWS LISTS</span></h4>
        <div style="padding:0 10px;">
          <table class="table table-bordered">
            <tr>
              <th>新闻标题</th>
              <th>新闻简介</th>
              <th>新闻类型</th>
              <th>操作</th>
            </tr>
            <tr>
              <td>李克强会见法国外长</td>
              <td>国务院总理李克强16日在人民大会堂会见来华进行正式访问的法国外长艾罗。</td>
              <td>推荐</td>
              <td class="operation"><button type="submit" class="btn btn-danger" id="modify">修改</button><button type="submit" class="btn btn-danger" id="delete">删除</button></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!--表格内容 e --> 
</div>
<!--内容 e --> 
<script src="../js/bootstrap.min.js" type="text/javascript"></script> <!--引用bootstrap.js文件--> 
<script data-main="js/main" src="../js/require.js" type="text/javascript"></script> <!--引用require.js文件-->
</body>
</html>
