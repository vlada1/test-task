$(function() {

    var nav = $(".page-nav");

    var sections = $(".tracked");
    var navigation_links = $(".page-nav a");

    sections.waypoint({
        handler: function(event, direction) {

            var active_section;
            active_section = $(this);
            if (direction === "up") active_section = active_section.prev();

            var active_link = $('.page-nav a[href="#' + active_section.attr("id") + '"]');
            navigation_links.removeClass("active");
            active_link.addClass("active");

        },
        offset: '99px'
    });


    navigation_links.click(function(event) {

        $.scrollTo(
            $(this).attr("href"), {
                duration: 600,
                offset: {
                    'left': 0,
                    'top': -0.15 * $(window).height()
                }
            }
        );
    });


});
