<?php
/* template name: 奥德赛之旅详情
description: template for Git theme
*/ get_header();?>
<title>奥德赛之旅详情</title>
<link href="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.3.0/video-js.min.css" rel="stylesheet">
<div class="poj-conten-b">
    <div class="conten-b mb hover-blur">
        <div class="poj-top-bg">
            <img class="mb-img" src="<?php bloginfo('template_url'); ?>/images/project/odyssey/mb/bg-detail.png">
            <img class="pc-img" src="<?php bloginfo('template_url'); ?>/images/project/odyssey/pc/bg-detail.png">
            <div class="left-info">
                <h2>欢乐谷·奥德赛之旅</h2>
                <p>建筑面积：3000---6000㎡</p>
                <p>体验时间：6---10分钟</p>
                <p>地点：北京</p>
                <div class="code">
                    <div class="code-fox">
                        <span class="font-color">项目详情</span>
                        <img class="code-img" src="<?php bloginfo('template_url'); ?>/images/project/common/code.png"/>
                        <img class="hover-code" src="<?php bloginfo('template_url'); ?>/images/project/common/code-hover.png"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="poj-body">
            <div class="poj-title-fox">
                <h1 class="poj-sen-title purple">项目解析</h1>
                <p class="font-deful">2017年正豆与北京欢乐谷联手改造魔幻激流勇进项目</p>
            </div>
            <div class="poj-tab purple">
                <div class="tab-item">
                    <div class="tab-list">
                        <span class="active" name="fri">
                            <em class="tab-num">01</em>
                            <em class="tan-title">思路</em>
                        </span>
                        <span name="sen">
                            <em class="tab-num">02</em>
                            <em class="tan-title">概念</em>
                        </span>
                        <span name="thid">
                            <em class="tab-num">03</em>
                            <em class="tan-title">建造</em>
                        </span>
                        <span name="fuor">
                            <em class="tab-num">04</em>
                            <em class="tan-title">展现</em>
                        </span>
                    </div>
                    <em class="line"></em>
                </div>
            </div>
            <div class="poj-characteristic">
                <div class="fri-char">
                    <div class="list-char ody">
                        <ul>
                            <li>
                                <span class="icon-char icon1"></span>
                                <h3 class="title-char">神话</h3>
                                <p class="introduce-char">编写一个神秘主题</p>
                            </li>
                            <li>
                                <span class="icon-char icon2"></span>
                                <h3 class="title-char">创造</h3>
                                <p class="introduce-char"> 打造一项经典项目</p>
                            </li>
                            <li>
                                <span class="icon-char icon3"></span>
                                <h3 class="title-char">科技</h3>
                                <p class="introduce-char">用科技讲述故事</p>
                            </li>
                            <li>
                                <span class="icon-char icon4"></span>
                                <h3 class="title-char">音效</h3>
                                <p class="introduce-char">多维度塑造体验感</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="sen-char hidden">
                    <img class="set-2-img" src="<?php bloginfo('template_url'); ?>/images/project/odyssey/pc/set-2.png"/>
                </div>
                <div class="thid-char hidden">
                    <img class="set-2-img" src="<?php bloginfo('template_url'); ?>/images/project/odyssey/pc/set-3.png"/>
                </div>
                <div class="fuor-char hidden">
                    <!-- <img class="set-2-img" src="../../images/project/odyssey/pc/set-4.png"/>-->
                    <div class="ste-left"> <img class="set-2-img" src="<?php bloginfo('template_url'); ?>/images/project/odyssey/pc/set-4-b.png"/></div>
                    <div class="ste-right">
                        <video id="example_video_1" class="video-js vjs-default-skin vjs-big-play-centered" controls preload="none" poster="<?php bloginfo('template_url'); ?>/images/project/odyssey/pc/video.png">
                            <source src="<?php bloginfo('template_url'); ?>/images/project/odyssey/pc/ody.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="mb-code-fox">
    <span class="black"></span>
    <div class="code-info">
        <p>长按二维码关注公众号</p>
        <p>szzdkj_cubean</p>
        <img class="mb-code" src="<?php bloginfo('template_url'); ?>/images/project/common/code-hover.png"/>
        <p>回复关键字：奥德赛之旅</p>
        <p>即可了解项目全部信息</p>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.3.0/video.min.js"></script>
<script type="text/javascript">
    var offsetWid = document.documentElement.clientWidth;

    if(offsetWid > 1370){
        var player = videojs('example_video_1',{
            muted: true,
            controls : true/false,
            height:684,
            width:390,
            loop : true,

        });
    }
    if(offsetWid < 1370){
        var player = videojs('example_video_1',{
            muted: true,
            controls : true/false,
            height:586,
            width:390,
            loop : true,

        });
    }
    if(offsetWid < 1030){
        var player = videojs('example_video_1',{
            muted: true,
            controls : true/false,
            height:400,
            width:390,
            loop : true,

        });
    }
    if(offsetWid < 500){
        var player = videojs('example_video_1',{
            muted: true,
            controls : true/false,
            height:200,
            width:390,
            loop : true,

        });
    }



</script>
<?php get_footer(); ?>





