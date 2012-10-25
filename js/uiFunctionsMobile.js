$(document).ready(function () {

    $('.widget').each(function (index, element) {
        var $element = $(element);
        var $commentArrow = $('.commentArrow');
        var $commentBackground = $('.commentBackground');

        $commentArrow.live('click', function (event) {

            event.stopPropagation();

            $target = $(event.target);
            $commentBackground.fadeIn(500);


            $(".commentSubmit").click(function (event) {

                var commentHtml = ('<hr />' + '<div class="commentWrapper">' +
									   '<p class="commentName">' + $('#commentName').val() + '</p>' +
									   '<p class="commentText">' + $('#commentText').val() + '</p>' + '</div>');

                //Stops the append happening more than once if the event has fired more than once before
                event.stopImmediatePropagation();

                $commentBackground.fadeOut(500);

                $target.parent($element).append(commentHtml);
                //$('.broadShoulderContainer').masonry('reload');

            });

        });
    });


    $('.alphaWrapper, .closeBtn').click(function () {
        $('.commentBackground').fadeOut();
    });

    $('.fixedHeader').click(function () {
        $('.sidebarHiddenContent').slideToggleWidth(1000);

        if ($('.sidebarHiddenContent:visible')) {
            $('.twitterFeedControls').fadeIn(500);
        }
        else {
            $('.twitterFeedControls').fadeOut(500);
        }


    });

    $('.addAnotherLink').click(function (event) {
        event.stopPropagation();
        var $clone = $('.searchTermInput:first').clone();
        $clone.val('');
        $clone.prependTo('.form-search');
    });


    $.fn.extend({
        slideRight: function () {
            return this.each(function () {
                $(this).animate({ width: 'show' });
            });
        },
        slideLeft: function () {
            return this.each(function () {
                $(this).animate({ width: 'hide' });
            });
        },
        slideToggleWidth: function () {
            return this.each(function () {
                var el = $(this);
                if (el.css('display') == 'none') {
                    el.slideRight();
                } else {
                    el.slideLeft();
                }
            });
        }
    });











});




