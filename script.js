// ///

$('.toggle').click(function () {
    $('.menu-box').slideToggle('fast', function () {
        if ($(this).is(':visible'))
            $(this).css('display', 'flex');
    });
});