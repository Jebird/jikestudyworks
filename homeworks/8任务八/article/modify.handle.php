<?php
	require_once("connect.php");//把传递过来的信息入库,在入库之前对所有的信息进行校验
	/*if(!(isset($_POST['newstitle'])&&(!empty($_POST['newstitle'])))){
		echo "<script>alert('标题不能为空');window.location.href='add.php';</script>";
		}*/
	$id = $_POST['id'];
	$newstitle = $_POST['newstitle'];
	$subtitle = $_POST['subtitle'];
	$source = $_POST['source'];
	$content = $_POST['content'];
	$creattime = time();
	$style = $_POST['style'];
	$updatesql="update news set newstitle='$newstitle',subtitle='$subtitle',source='$source',content='$content',style='$style' where id=$id";
	if(mysql_query($updatesql)){
		echo "<script>alert('修改新闻成功');window.location.href='../manage.php';</script>";
		}else{
		echo "<script>alert('修改新闻失败');window.location.href='modify.php?id=$id';</script>";
			}
?>





