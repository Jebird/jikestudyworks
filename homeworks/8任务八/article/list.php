<?php
	require_once('connect.php');
	$sql = "select * from news order by creattime desc";//查询列表并按时间倒序排列
	$query  = mysql_query($sql);
	if($query&&mysql_num_rows($query)){//验证查询结果是否有值
		while($row =mysql_fetch_assoc($query)){//循环查询将查询到的结果都列出来
			$data[] = $row;//将查询到的结果保存到数组里
		}
	}else{
		$data = array();
	}
?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>作业1：百度新闻</title>
<link rel="stylesheet" href="../css/bootstrap.min.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="../css/style.css" />
<!--[if lt IE 9]>
    <script src="js/html5.js"></script>
    <![endif]-->
</head>

<body>
<div class="wrapper"> 
  <!-- 头部 s -->
  <header>
  	<div class="header-padd">
      <div class="header-left">
          <a class="left-first" href="#" target="_self"></a>
          <a class="left-user" href="#" target="_self"></a>
      </div>
      <div class="header-right">
          <a class="right-creat" href="#" target="_self"></a>
          <a class="right-search" href="#" target="_self"></a>
      </div>
    </div>
  </header>
  <!-- 头部 e -->
  <!-- 内容 s -->
  <div class="content">
  	<ul class="title">
    	<li title="recommend" class="active"><a href="#">推荐</a></li>
        <li title="celebrity"><a href="#">百家</a></li>
        <li title="local"><a href="#">本地</a></li>
        <li title="picture"><a href="#">图片</a></li>
        <li title="entertainment"><a href="#">娱乐</a></li>
        <li title="social"><a href="#">社会</a></li>
    </ul>
    <div class="news">
    	<!-- 推荐内容 s -->
    	<div class="recommend on" id="recommend">
        	<!--<div class="banner">
               <div class="banner">
               <ul class="img">
                    <li><a href="#"><img src="img/1.jpg" /></a></li>
                    <li><a href="#"><img src="img/2.jpg" /></a></li>
                    <li><a href="#"><img src="img/3.jpg" /></a></li>
                </ul>
                <ul class="num">    	
                </ul>
            </div>
            </div>-->
            <?php 
		if(!empty($data)){
			foreach($data as $value){
				?>
            <div class="news-content">
        		<a href="#" target="_blank">
                  <div class="news-left">
                      <img src="img/news1.jpg" />
                  </div>
                  <div class="news-right">
                      <div class="news-title"><?php echo $value['newstitle']?></div>
                      <div class="news-second"><?php echo $value['newstitle']?></div>
                  </div>
            	</a>
        	</div>
            <?php
        		}
		}
        ?>
            <div class="news-content">
        		<a href="#" target="_blank">
                  <div class="news-left">
                      <img src="img/news2.jpg" />
                  </div>
                  <div class="news-right">
                      <div class="news-title">刘诗诗被指“装嫩” 导演:是活泼和纯真</div>
                      <div class="news-second">仍有部分观众对“那年青春”提出了质疑，比如像刘诗诗、郑恺这样30岁左右的演员扮高中生</div>
                  </div>
                  <div class="news-time">1天前</div>
            	</a>
        	</div>
             <div class="news-content">
        		<a href="#" target="_blank">
                  <div class="news-left">
                      <img src="img/news3.jpg" />
                  </div>
                  <div class="news-right">
                      <div class="news-title">曝情侣为狗买票占座不让老人坐 公交停驶15分钟</div>
                      <div class="news-second">一对情侣抱着“泰迪”犬乘坐55路公交车，给“泰迪”犬占座买票，不给老人让位置，公交停驶15分钟。</div>
                  </div>
                  <div class="news-time">1天前</div>
                  <div class="news-from">搜狐要闻</div>
            	</a>
        	</div>
             <div class="news-content">
        		<a href="#" target="_blank">
                  <div class="news-left">
                      <img src="img/news4.jpg" />
                  </div>
                  <div class="news-right">
                      <div class="news-title">雷洋家属向北京市检方报案 要求侦查涉事民警</div>
                      <div class="news-second">雷洋家属称，被举报人、北京市公安局昌平分局参加办理雷洋涉嫌“嫖娼”案件的相关警察、辅警“涉嫌故意打人</div>
                  </div>
                  <div class="news-time">1天前</div>
                  <div class="news-from">热点</div>
            	</a>
        	</div>
             <div class="news-content">
        		<a href="#" target="_blank">
                  <div class="news-left">
                      <img src="img/news5.jpg" />
                  </div>
                  <div class="news-right">
                      <div class="news-title">《看客》：委内瑞拉经济崩盘</div>
                      <div class="news-second">委内瑞拉境内一条被荒弃的中国高铁项目，已经成为经济崩塌的象征。</div>
                  </div>
                  <div class="news-time">16分钟前</div>
                  <div class="news-from">网易头条</div>
            	</a>
        	</div>
        </div>
        <!-- 推荐内容 e -->
        <!-- 百家内容 s -->
        <div class="celebrity" id="celebrity">222</div>
        <!-- 百家内容 e -->
        <!-- 本地内容 s -->
        <div class="local" id="local">333</div>
        <!-- 本地内容 e -->
        <!-- 图片内容 s -->
        <div class="picture" id="picture">444</div>
        <!-- 图片内容 e -->
        <!-- 娱乐内容 s -->
        <div class="entertainment" id="entertainment">555</div>
        <!-- 娱乐内容 e -->
        <!-- 社会内容 s -->
        <div class="social" id="social">6666</div>
        <!-- 社会内容 e -->
    </div>
  </div>
  <!-- 内容 e -->
</div>
<script src="../js/bootstrap.min.js" type="text/javascript"></script> <!--引用bootstrap.js文件-->
<script data-main="js/main" src="../js/require.js" type="text/javascript"></script> <!--引用require.js文件-->
</body>
</html>
