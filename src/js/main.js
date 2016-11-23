$(window).ready(function() {
    $('.countuper').each(function() {
        var el = $(this);
        var t = Number(el.data('target'));

        setTimeout(function() {
            setInterval(function() {
                if (Number(el.html()) == t) {
                    clearInterval(this);
                } else {
                    el.html(Number(el.html()) + 1);
                }
            }, 4);
        }, 1000);
    });
});
