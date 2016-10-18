<?php
	require_once('connect.php');//读取旧信息
	$id = $_GET['id'];
	$query = mysql_query("select * from news where id=$id");
	$data = mysql_fetch_assoc($query);
?>
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
        <li class="active" title="list"><a href="#" target="_self"><span>新闻列表</span></a></li>
        <li title="release"><a href="#" target="_self"><span>发布新闻</span></a></li>
      </ul>
    </div>
    <!--左侧树状 e --> 
    <!--表格内容 s -->
    <div class="col-sm-10 col-xs-10 col-md-10 col-lg-10 table-content">
      <div id="list" class="list">
        <div class="tatil">
          <h2>新闻列表</h2>
        </div>
        <h4><span>NEWS LISTS</span></h4>
      </div>
      <div id="release" class="release">
        <div class="news">
          <h2>发布新闻</h2>
          <form id="form1" name="form1" method="post" action="modify.handle.php">
            <input type="hidden" name="id" value="<?php echo $data['id'] ?>" />
            <div class="margin-bottom-10">
              <span class="col-lg-1 col-md-1 col-sm-1">标题</span>
              <label for="newstitle"></label>
              <input class="col-lg-11 col-md-11 col-sm-11" type="text" name="newstitle" id="newstitle" value="<?php echo $data['newstitle'] ?>" />
            </div>
            <div class="margin-bottom-10">
              <span class="col-lg-1 col-md-1 col-sm-1">来源</span>
              <label for="source"></label>
              <input class="col-lg-11 col-md-11 col-sm-11" type="text" name="source" id="source"  value="<?php echo $data['source'] ?>" />
            </div>
            <div class="margin-bottom-10">
              <span class="col-lg-1 col-md-1 col-sm-1">图片</span>
              <label for="picture"></label>
              <input class="col-lg-11 col-md-11 col-sm-11" type="file" name="picture" id="picture"  value="<?php echo $data['picture'] ?>" />
            </div>
            <div class="margin-bottom-10"> 
              <span class="col-lg-1 col-md-1 col-sm-1">类型</span>
              <select class="col-lg-11 col-md-11 col-sm-11"  name="style"  id="style" value="<?php echo $data['style'] ?>"  >
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
              <textarea class="col-lg-11 col-md-11 col-sm-11" name="subtitle" id="subtitle"><?php echo $data['subtitle'] ?></textarea>
            </div>
            <div> 
              <span class="col-lg-1 col-md-1 col-sm-1">内容</span>
              <textarea class="col-lg-11 col-md-11 col-sm-11"  name="content" id="content" ><?php echo $data['content'] ?></textarea>
            </div>
            <div class=" text-center">
              <input type="submit" id="button" name="button" value="提交" class="btn btn-danger btn-mine" />
            </div>
          </form>
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
