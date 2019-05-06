<?php
/*
Template Name: 项目详情模板
*/
?>

<?php get_header(); ?>
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
<div class="mb-code-fox">
    <span class="black"></span>
    <div class="code-info">
        <p>长按二维码关注公众号</p>
        <p>szzdkj_cubean</p>
        <img class="mb-code" src="<?php bloginfo('template_url'); ?>/images/project/common/code-hover.png"/>
        <p>回复关键字：<?php the_title(); ?></p>
        <p>即可了解项目全部信息</p>
    </div>
</div>
<?php get_footer(); ?>
