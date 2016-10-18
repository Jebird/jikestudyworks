<?php
	require_once("connect.php");//把传递过来的信息入库,在入库之前对所有的信息进行校验
	$id = $_GET['id'];
	$deletesql = "delete from news where id=$id";
	if(mysql_query($deletesql)){
		echo "<script>alert('删除新闻成功');window.location.href='../manage.php';</script>";
	}else{
		echo "<script>alert('删除新闻失败');window.location.href='../manage.php';</script>";
	}
?>





