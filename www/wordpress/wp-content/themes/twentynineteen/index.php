<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

?>
 <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/public.css" type="text/css" media="screen" />
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/index.css" type="text/css" media="screen" />

		 <div class="home-content ">
            <div class="contenter pc-contenter">
                <!--加载动画-->
                <div class="load">
                    <div class="load-bg">
                        <div class="load-info">
                            <span>l</span>
                            <span>o</span>
                            <span>a</span>
                            <span>d</span>
                            <span>i</span>
                            <span>n</span>
                            <span>g</span>
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                        </div>
                        <img class="load-img" src="<?php bloginfo('template_directory'); ?>/images/home/pc-home/load-bg.png">
                    </div>

                </div>
                <!--页面动画-->
                <div class="ani-fixed ">
                    <div class="meteor">
                        <span class="meteor-a"></span>
                        <span class="meteor-b"></span>
                        <span class="meteor-c"></span>
                    </div>
                    <div class="ani-conten calc-ani hidden">
                            <div class="star-off">
                                <div class="star-position">
                                    <a></a>
                                    <div class="star-img">
                                        <div class="eye-ani" id="eye">
                                            <span class="eye-img"></span>
                                        </div>
                                        <span class="ball-a"></span>
                                        <span class="ball-b"></span>
                                        <span class="ball-c"></span>
                                        <span class="ball-d"></span>
                                        <span class="ball-e"></span>
                                        <span class="ball-f"></span>
                                        <span class="ball-g"></span>
                                        <span class="ball-h"></span>
                                        <span class="ball-i"></span>
                                        <span class="ball-j"></span>
                                    </div>
                                    <div class="project-bg">
                                        <ul class="project-nav">
                                            <p>关于正豆</p>
                                            <li>
                                                <a href="survey" target="_blank">正豆概况</a>
                                            </li>
                                            <li>
                                                <a href="projectflow" target="_blank">项目流程</a>
                                            </li>
                                            <li>
                                                <a href="projectflow" target="_blank">联系我们</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        <div class="roller-hover sne-ani">
                            <div class="position">
                                <a></a>
                                <div class="roller-img animg"></div>
                                <div class="project-bg">
                                    <ul class="project-nav">
                                        <p>经典项目</p>
                                        <li>
                                            <a href="happyValley" target="_blank">欢乐世界</a>
                                        </li>
                                        <li>
                                            <a href="odyssey" target="_blank">奥德赛之旅</a>
                                        </li>
                                        <li>
                                            <a href="europa" target="_blank">穿越欧罗巴</a>
                                        </li>
                                        <li>
                                            <a href="playground" target="_blank">室内儿童乐园</a>
                                        </li>
                                        <li>
                                            <a href="magicHouse" target="_blank">惊悚魔幻屋</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="rivers-hover sne-ani">
                            <div class="position">
                                <a></a>
                                <div class="rivers-img animg"></div>
                                <div class="project-bg">
                                    <ul class="project-nav">
                                        <p>主体项目</p>
                                        <li>
                                            <a href="rain" target="_blank">暴雨山洪</a>
                                        </li>
                                        <li>
                                            <a href="matching" target="_blank">商业配套乐园</a>
                                        </li>
                                        <li>
                                            <a href="waterPark" target="_blank">水上乐园</a>
                                        </li>
                                        <li>
                                            <a href="crystal" target="_blank">水晶万花筒</a>
                                        </li>
                                        <li>
                                            <a href="maze" target="_blank">奇幻迷宫</a>
                                        </li>
                                        <li>
                                            <a href="marineMuseum" target="_blank">奇幻海洋世界</a>
                                        </li>
                                        <li>
                                            <a href="monomer" target="_blank">单体主题包装</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="horn-hover sne-ani">
                            <div class="position">
                                <a></a>
                                <div class="horn-img animg"></div>
                                <div class="ani-muen">
                                    <a class="img-a"  href="news" target="_blank">
                                        <em>新闻动态</em>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="ufo-hover sne-ani">
                            <div class="position">
                                <a></a>
                                <div class="ufo-img animg"></div>
                                <div class="ani-muen ">
                                    <a class="img-a"  href="creative" target="_blank">
                                        <em>正豆科技</em>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="pond-hover sne-ani">
                            <div class="position">
                                <a></a>
                                <div class="pond-img animg"></div>
                                <div class="ani-muen ">
                                    <a class="img-a"  href="join" target="_blank">
                                        <em>正豆招聘</em>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ani-bg">
                   <!-- <img class="ani-img" src="images/home/ani-bg-b.png">-->
                    <div class="law-img">
                        <a class="img-a"  href="law-pc" target="_blank">
                            <em>法律声明</em>
                        </a>
                    </div>
                    <div class="contact-img">
                        <a class="img-a" href="contact" target="_blank" >
                            <em>联系我们</em>
                        </a>
                    </div>
                    <a class="sun-img"></a>
                    <div class="code-fox">
                        <div class="code-ani">
                            <div class="rocket-ani">
                                <a class="rocket-img"></a>
                            </div>
                            <a class="code-img"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-home mb-contenter">
                    <div class="mb-bg index-mb">  </div>
                <div class="top-muen">
                    <span class="mb-muen"></span>
                </div>
                <div class="mb-page fir">
                    <div class="top-muen">
                        <span class="black" ></span>
                    </div>
                    <div class="mb-page-conten">
                        <div class="page-cpnten">
                            <img src="<?php bloginfo('template_directory'); ?>/images/home/mb-home/mb-poj-1.png"/>
                        </div>
                        <div  class="mb-page-nav" >
                            <ul id="nav">
                                <li class="page-open" name="classic">
                                    <a>经典项目</a>
                                </li>
                                <li class="page-open" name="monomer">
                                    <a>主体项目</a>
                                </li>
                                <li>
                                    <a href="creative" target="_blank">创意科技</a>
                                </li>
                                <li>
                                    <a  href="news" target="_blank">新闻动态</a>
                                </li>
                                <li class="page-open" name="about">
                                    <a>关于正豆</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mb-footer">
                            <div class="foot-info">
                                <a href="contact" target="_blank">联系我们</a>
                                <em>/</em>
                                <a href="join" target="_blank">加入我们</a>
                                <em>/</em>
                                <a class="law">法律声明</a>
                           </div>
                        </div>
                    </div>
                </div>
                <div class="mb-page monomer other-page">
                    <div class="top-muen">
                        <span class="black" ></span>
                    </div>
                    <div class="mb-page-conten">
                        <p class="nav-title">主体项目</p>
                        <div class="page-cpnten">
                            <img src="<?php bloginfo('template_directory'); ?>/images/home/mb-home/mb-poj-3.png"/>
                        </div>
                        <div  class="mb-page-nav" >
                            <ul >
                                <li>
                                    <a href="rain" target="_blank">暴雨山洪</a>
                                </li>
                                <li>
                                    <a href="matching" target="_blank">商业配套乐园</a>
                                </li>
                                <li>
                                    <a  href="waterPark" target="_blank">水上乐园</a>
                                </li>
                                <li>
                                    <a href="crystal" target="_blank">水晶万花筒</a>
                                </li>
                                <li>
                                    <a href="maze" target="_blank">奇幻迷宫</a>
                                </li>
                                <li>
                                    <a href="marineMuseum" target="_blank">奇幻海洋馆</a>
                                </li>
                                <li>
                                    <a href="monomer" target="_blank">单体主题包装</a>
                                </li>

                            </ul>
                        </div>
                        <div class="mb-footer">
                            <div class="foot-info">
                                <a href="contact" target="_blank">联系我们</a>
                                <em>/</em>
                                <a href="join" target="_blank">加入我们</a>
                                <em>/</em>
                                <a class="law">法律声明</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-page classic other-page">
                    <div class="top-muen">
                        <span class="black" ></span>
                    </div>
                    <div class="mb-page-conten">
                        <p class="nav-title">经典项目</p>
                        <div class="page-cpnten">
                            <img src="<?php bloginfo('template_directory'); ?>/images/home/mb-home/mb-poj-2.png"/>
                        </div>
                        <div  class="mb-page-nav" >
                            <ul >
                                <li>
                                    <a href="happyValley" target="_blank">欢乐世界</a>
                                </li>
                                <li>
                                    <a href="odyssey" target="_blank">奥德赛之旅</a>
                                </li>
                                <li>
                                    <a href="europa" target="_blank">穿越欧罗马</a>
                                </li>
                                <li>
                                    <a href="playground" target="_blank">室内儿童乐园</a>
                                </li>
                                <li>
                                    <a href="magicHouse" target="_blank">惊悚魔幻屋</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mb-footer">
                            <div class="foot-info">
                                <a href="contact" target="_blank">联系我们</a>
                                <em>/</em>
                                <a href="join" target="_blank">加入我们</a>
                                <em>/</em>
                                <a class="law">法律声明</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-page about other-page">
                    <div class="top-muen">
                        <span class="black" ></span>
                    </div>
                    <div class="mb-page-conten">
                        <div class="page-cpnten">
                            <img src="<?php bloginfo('template_directory'); ?>/images/home/mb-home/mb-poj-1.png"/>
                        </div>
                        <div  class="mb-page-nav" >
                            <ul >
                                <li >
                                    <a href="survey" target="_blank">正豆概况</a>
                                </li>
                                <li>
                                    <a href="projectflow" target="_blank">项目流程</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mb-footer">
                            <div class="foot-info">
                                <a href="contact" target="_blank">联系我们</a>
                                <em>/</em>
                                <a href="join" target="_blank">加入我们</a>
                                <em>/</em>
                                <a class="law">法律声明</a>
                            </div>
                        </div>
                    </div>
                </div>

        <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/my-js/jquery.min.js"></script>
       <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/my-js/public.js"></script>
       <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/my-js/index.js"></script>
            </main><!-- .site-main -->
        </section><!-- .content-area -->

        </div>
<?php

