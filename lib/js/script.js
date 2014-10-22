
(function($){

    window['scripts'] = {

        filter: function() {
            $('.dropdown-toggle').dropdown();
        },

        customSelect: function() {
            'use strict';

            $( document.body ).on( 'click', '.dropdown-menu li', function( event ) {

               var $target = $( event.currentTarget );

               $target.closest( '.dropdown' )
                  .find( '[data-bind="label"]' ).html( $target.html() )
                     .end()
                  .children( '.dropdown-toggle' ).dropdown( 'toggle' );

               return false;

            });

        },

        Toggle: function() {
            'use strict';

            var hover = 0;

            $(".mobile-toggle").click(function(e){
                var el = $(this),
                    id = el.data('id');
                $('#'+id+'-content').stop(true,true).slideToggle(500);
                e.stopPropagation();
            });

            $(".mobile-toggle-content").hover(function() {
                hover = 1;
            }, function() {
                hover = 0;
            });

            $('body').click(function(){
                if ( hover != 1 ) $(".mobile-toggle-content").stop(true,true).slideUp(300);
            });

        },

        contentFix: function() {
        	'use strict';

        	$('.site-main .fixed-content').fixTo('body',{
        		top: 20
        	});

        },

        popUP: function() {
            'use strict';

            $('.gallery-item').each(function(){
                $(this).find('.gallery-icon a').attr('title', $(this).find('.caption-image').text());
            });

            $( '.link-standard' ).fancybox({
                padding: 0,
                width: '90%',
                maxWidth: 840,
                helpers: {
                    overlay: {
                          css: { 'background': 'rgba(255, 255, 255, 0.9)' }
                    }
                },
                tpl : {
                    wrap     : '<div class="fancybox-wrap fancybox-image" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    closeBtn : '<a title="Close" class="fancybox-item fancybox-imageclose" href="javascript:;">schliessen</a>',
                    next     : '<a title="Next" class="fancybox-imagenav fancybox-imagenext" href="javascript:;"><i class="icon icon-singlenext icon-btn"></i></a>',
                    prev     : '<a title="Previous" class="fancybox-imagenav fancybox-imageprev" href="javascript:;"><i class="icon icon-singleprev icon-btn"></i></a>'
                }
            });

            $( '.link-image' ).fancybox({
                padding: 0,
                helpers: {
                    overlay: {
                          css: { 'background': 'rgba(255, 255, 255, 0.9)' }
                    }
                },
                tpl : {
                    wrap     : '<div class="fancybox-wrap fancybox-image" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    closeBtn : '<a title="Close" class="fancybox-item fancybox-imageclose" href="javascript:;">schliessen</a>',
                    next     : '<a title="Next" class="fancybox-imagenav fancybox-imagenext" href="javascript:;"><i class="icon icon-singlenext icon-btn"></i></a>',
                    prev     : '<a title="Previous" class="fancybox-imagenav fancybox-imageprev" href="javascript:;"><i class="icon icon-singleprev icon-btn"></i></a>'
                }
            });

            $( '.map-fancybox' ).click(function(){
                var content = $(this).next().html();

                $.fancybox({
                    padding     : 0,
                    maxWidth    : 620,
                    maxHeight   : 'auto',
                    type        : 'iframe',
                    autoSize    : false,
                    scrolling   : 'no',
                    content     : content,
                    helpers: {
                        overlay: {
                              css: { 'background': 'rgba(255, 255, 255, 0.9)' }
                        }
                    },
                    tpl : {
                        wrap     : '<div class="fancybox-wrap fancybox-map" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                        closeBtn : '<a title="Close" class="fancybox-item fancybox-imageclose" href="javascript:;">schliessen</a>',
                        next     : '<a title="Next" class="fancybox-imagenav fancybox-imagenext" href="javascript:;"><i class="icon icon-singlenext icon-btn"></i></a>',
                        prev     : '<a title="Previous" class="fancybox-imagenav fancybox-imageprev" href="javascript:;"><i class="icon icon-singleprev icon-btn"></i></a>'
                    }
                });
            });
        },

        ready: function() {
            'use strict';

            scripts.Toggle();
            scripts.contentFix();
            scripts.popUP();
            scripts.filter();
            scripts.customSelect();

        }

    };

    $(scripts.ready);
})( jQuery );