$(document).ready(function () {
    $("a[href*='#']").on('click', function() {
        event.preventDefault();
        var $target = $(this).attr("href");
        $("#nav li a").removeClass("active");
        $(this).addClass("active");
        $("html, body").animate({ scrollTop: $($target).offset().top }, 1000);
    })
});