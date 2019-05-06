<?php
/* template name: 联系我们
description: template for Git theme
*/ get_header();?>
<div class="content height ">

        <section id="primary" class="content-area">
            <main id="main" class="site-main">

                <?php

                /* Start the Loop */
                while ( have_posts() ) :
                    the_post();

                    get_template_part( 'template-parts/content/content', 'page' );

                    // If comments are open or we have at least one comment, load up the comment template.
                    if ( comments_open() || get_comments_number() ) {
                        comments_template();
                    }

                endwhile; // End of the loop.
                ?>

            </main><!-- #main -->

        </section><!-- #primary -->

</div>
<script type="text/javascript" src="http://api.map.baidu.com/api?key=&v=1.1&services=true"></script>
<script type="text/javascript">
    //创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
    }

    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(114.101199,22.54401);//定义一个中心点坐标
        map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }

    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }

    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
    }


    initMap();//创建和初始化地图
</script>
<div class="footer ">
    <div class="footer-info">
        <a href="contact" target="_blank">联系我们</a>
        <em>/</em>
        <a href="join" target="_blank">加入我们</a>
        <em>/</em>
        <a  class="law">法律声明</a>
    </div>
</div>
<div class="right-fox right-fox-right">
    <div class="right-info">
        <h2>版权声明</h2>
        <p>本网站（www.szcubean.com）上为版权人所有的文件，在此并未作任何授权，本网站上的文件仅限于为信息和非商业或个人之目的使用，并且不得在任何网络计算机上复制或公布，也不得在任何媒体上传播。未经版权人许可，任何人不得擅自（包括不限于：以非法的方式复制、传播、展示、镜像、上传、下载）使用。否则版权人将依法追究其法律责任。</p>
        <p>免责声明：版权人拥有对本网站的内容进行随时更改之权利，事前将不会另行通知。版权人不保证或声明本网站展示的资料是否正确、全面或是最新教程。本网站的所有图片、模型、文字描述等、仅作为参考信息</p>
    </div>
</div>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/my-js/jquery.min.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/my-js/public.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/my-js/project.js"></script>
<?php ?>

