<?php
/* template name: 项目流程
description: template for Git theme
*/ get_header();?>
<div class="content mb-height">

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
<?php get_footer(); ?>
<?php  ?>

