const nav = $('#nav')
$(() => {
    if ($(document).scrollTop() < 900) {
        nav.hide()
    }

    $(document).scroll(() => {
        let y = $(this).scrollTop()
        if (y > 900) {
            nav.fadeIn()
        } else {
            nav.fadeOut()
        }
    })
})