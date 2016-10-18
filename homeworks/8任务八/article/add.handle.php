<?php
	require_once("connect.php");//把传递过来的信息入库,在入库之前对所有的信息进行校验
	if(!(isset($_POST['newstitle'])&&(!empty($_POST['newstitle'])))){
		echo "<script>alert('标题不能为空');window.location.href='add.php';</script>";
		}
	$newstitle = $_POST['newstitle'];
	$subtitle = $_POST['subtitle'];
	$source = $_POST['source'];

	$content = $_POST['content'];
	$creattime = time();
	$style = $_POST['style'];
	$insertsql="insert into news(newstitle, subtitle, source, picture, content, creattime, style) values('$newstitle','$subtitle','$source','','$content','','$style')";
	if(mysql_query($insertsql)){
		echo "<script>alert('发布新闻成功');window.location.href='../manage.php';</script>";
		}else{
		echo "<script>alert('发布新闻失败');window.location.href='../manage.php';</script>";
			}
?>





