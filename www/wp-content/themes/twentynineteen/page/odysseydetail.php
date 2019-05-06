<?php
/* template name: 奥德赛之旅详情
description: template for Git theme
*/ get_header();?>
<link href="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.3.0/video-js.min.css" rel="stylesheet">
<div class="poj-conten-b">
    <div class="conten-b mb hover-blur">
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





