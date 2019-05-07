<?php
/* template name: 查看评论
description: template for Git theme
*/ ?>
<style type="text/css">
    .com-cotent{
        width: 1000px;
        margin:auto;
        color: #333;
        padding-top: 60px;
    }
    .com-cotent h2{
        font-size: 24px;
        text-align: center;
        margin-bottom: 40px;
    }
    .com-cotent div{
        border: 1px solid #ddd;
        box-sizing: border-box;
        border-collapse: collapse;
        width: 100%;
        color: #333;
    }
    .com-cotent div ul {
        height: 40px;
        line-height: 40px;
        padding: 0;
        margin: 0;
        padding-right: 17px;
    }
    .com-cotent div ul li {
        font-weight: 500;
        text-align: center;
        box-sizing: border-box;
        list-style: none;
    }
    .com-cotent div ul li span{
        width: 16.6%;
        display: block;
        float: left;
        border-right: 1px solid #ddd;
        box-sizing: border-box;
        text-align: center;
    }
    .com-cotent div dl dd {
        height: 40px;
        line-height: 40px;
        border-top: 1px solid #ddd;
        margin: 0;
        padding: 0;
    }
    .com-cotent div dl dd span:last-child,.com-cotent div ul li span:last-child{
        border: none;
    }
    .com-cotent div dl{
        max-height: 700px;
        overflow-y: scroll;
        margin: 0;
        padding: 0;
    }
    .com-cotent div dl dd span {
        border-right: 1px solid #ddd;
        box-sizing: border-box;
        width: 16.6%;
        height: 40px;
        display: block;
        float: left;
        text-align: center;
    }
</style>
<div class="content">
    <div class="com-cotent">
        <h2>查看评论</h2>
        <div>
            <ul>
                <li>
                    <span>姓名</span>
                    <span>电话</span>
                    <span>邮箱</span>
                    <span>地址</span>
                    <span>留言</span>
                    <span>时间</span>
                </li>
            </ul>
            <dl class='append-com'>
            <?php
            $connn = @mysql_connect("127.0.0.1:3306","root","root");
            if (!$connn){
                die("错误" . mysql_error());
            }
            mysql_select_db("zhengdou", $connn);
            mysql_query("set character set 'utf8'");
            mysql_query("set names 'utf8'");

            date_default_timezone_set("PRC");

            $sql = "select * from content ORDER BY settime DESC";
            $result = mysql_query($sql,$connn);
            $userList = '';
            while($rs = mysql_fetch_array($result)){
                $userList[] = $rs;     }
            foreach ($userList as $user) {
                echo "             
            
                <dd>
                    <span>" . $user['s_name'] . "</span>
                    <span>" . $user['tel'] . "</span>
                    <span>" . $user['email'] . "</span>
                    <span>" . $user['addre'] . "</span>
                    <span>" . $user['content'] . "</span>
                    <span>" . $user['settime'] . "</span>
                </dd>
           
          ";
}
    ?>
            </dl>
        </div>
    </div>
</div>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/my-js/jquery.min.js"></script>
<!--<table border="1" cellspacing="0" cellpadding="0" id="userList" align="center" class="altrowstable">-->
<!--    <tr align="center">-->
<!--        <td>姓名</td>-->
<!--        <td>联系电话</td>-->
<!--        <td>联系邮箱</td>-->
<!--        <td>联系地址</td>-->
<!--        <td>留言内容</td>-->
<!--        <td>留言时间</td>-->
<!--    </tr>-->
<!--    --><?php
//    $connn = @mysql_connect("127.0.0.1:3306","root","root");
//    if (!$connn){
//        die("错误" . mysql_error());
//    }
//    mysql_select_db("zhengdou", $connn);
//    mysql_query("set character set 'utf8'");
//    mysql_query("set names 'utf8'");
//
//    date_default_timezone_set("PRC");
//
//    $sql = "select * from content";
//    $result = mysql_query($sql,$connn);
//    $userList = '';
//    while($rs = mysql_fetch_array($result)){
//        $userList[] = $rs;     }
//
//    foreach ($userList as $user){
//        echo "
//				<tr>
//				<td> ".$user['s_name']."</td>
//				<td> ".$user['tel']."</td>
//				<td> ".$user['email']."</td>
//				<td> ".$user['addre']."</td>
//				<td> ".$user['content']."</td>
//				<td> ".$user['settime']."</td>
//			</td>
//			</tr>
//			";
//    }
//
//    ?>
<!--</table>-->


