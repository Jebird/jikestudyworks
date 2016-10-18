<?php
	require_once("connect.php");//把传递过来的信息入库,在入库之前对所有的信息进行校验
	$newsType = $_GET["newsType"];//获取新闻类型
	$sql = "select * from news where style='$newsType'";//通过新闻类型筛选数据
	$query = mysql_query($sql);
	//获取新闻数据
	if($query && mysql_num_rows($query)){
		while ($row = mysql_fetch_assoc($query)) {
			$data[] = $row;
			}
		}
		else if (mysql_num_rows($query)==0){
			$data = "blank";
			}	
	$jsonData = json_encode($data,JSON_UNESCAPED_UNICODE);//将数据转化为json格式
	echo $jsonData;
?>





