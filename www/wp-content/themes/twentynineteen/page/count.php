<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
   <style>
   html{
	background-image:url(http://www.xylcgj.com/bg.jpg);
	background-size:100%;
}
   </style>
</head>
<body>
<?php
header("Content-type: text/html; charset=utf-8");
//数据库连接
//include('http://www.xylcgj.com/conn.php');
$connn = @mysql_connect("127.0.0.1:3306","root","root");
if (!$connn){
    die("错误" . mysql_error());
}
mysql_select_db("zhengdou", $connn);
mysql_query("set character set 'utf8'");
mysql_query("set names 'utf8'"); 
//引入配置文件
date_default_timezone_set("PRC");
//写入数据
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$addre = $_POST['addre'];
$content = $_POST['content'];
$time = date("Y-m-d H:i:s");
//信息传递整理
$sql = "INSERT INTO content(s_name, tel, email, addre, content,settime) VALUES ('$name','$tel','$email','$addre','$content','$time')";
if(mysql_query($sql,$connn)){
    echo "<script>alert('提交成功！');</script>";
    echo "<script>javascript:history.back(-1);</script>";
} else {
    echo "提交失败！";
    die("错误" . mysql_error());
}
?>
</body>
</html>