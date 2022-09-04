function burgerMenu(selector) {
    let menu = $(selector)
    let button = menu.find('.burger-menu_button', '.burger-menu_lines')
    let links = menu.find('.burger-menu_link')
    let overlay = menu.find('.burger-menu_overlay')

    button.on('click', (e) => {
        e.preventDefault()
        toggleMenu()
    })

    links.on('click', () => toggleMenu())
    overlay.on('click', () => toggleMenu())

    function toggleMenu() {
        menu.toggleClass('burger-menu_active')

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overlow', 'hidden')
        } else {
            $('body').css('overlow', 'visible')
        }
    }
}
burgerMenu('.burger-menu')

window.addEventListener('DOMContentLoaded', function () {
    ;[].forEach.call(document.querySelectorAll('.tel'), function (input) {
        var keyCode
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode)
            var pos = this.selectionStart
            if (pos < 2) event.preventDefault()
            var matrix = '+998 (__) ___ __ __',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, ''),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                })
            i = new_value.indexOf('_')
            if (i != -1) {
                i < 5 && (i = 3)
                new_value = new_value.slice(0, i)
            }
            var reg = matrix
                .substr(0, this.value.length)
                .replace(/_+/g, function (a) {
                    return '\\d{1,' + a.length + '}'
                })
                .replace(/[+()]/g, '\\$&')
            reg = new RegExp('^' + reg + '$')
            if (!reg.test(this.value) || this.value.length < 3 || (keyCode > 47 && keyCode < 58)) this.value = new_value
            if (event.type == 'blur' && this.value.length < 3) this.value = ''
        }

        input.addEventListener('input', mask, false)
        input.addEventListener('focus', mask, false)
        input.addEventListener('blur', mask, false)
        input.addEventListener('keydown', mask, false)
    })
})

window.onload = function () {
    document.body.classList.add('loaded_hiding')
    window.setTimeout(function () {
        document.body.classList.add('loaded')
        document.body.classList.remove('loaded_hiding')
    }, 5)
}

var swiper = new Swiper('.mySwiper', {
    autoplay: true,
    speed: 650,
    breakpoints: {
        1200: {
            autoplay: false,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
var swiper = new Swiper('.mySwipermin', {
    pagination: {
        el: '.swiper-paginationmin',
        clickable: true,
    },
})
var swiper = new Swiper('.mySwipermin2', {
    pagination: {
        el: '.swiper-paginationmin2',
        clickable: true,
    },
})
var swiper = new Swiper('.mySwipermin3', {
    pagination: {
        el: '.swiper-paginationmin3',
        clickable: true,
    },
})
var swiper = new Swiper('.mySwiperp', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    speed: 1000,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 4,
        },
    },
    pagination: {
        el: '.swiper-paginationmin3',
    },
})

var counterAnimateContainer = $('.counter-animate-container') || null
$(window).on('scroll.animate', function () {
    if (counterAnimateContainer.length && !counterAnimateContainer.hasClass('counter-animate-started') && scrolledDiv(counterAnimateContainer)) {
        counterAnimateContainer.addClass('counter-animate-started')
        setTimeout(function () {
            $('.number').map(function (i, el) {
                var el = $(el)
                var num = el.text() * 1
                if (isNaN(num)) return
                var cnt = 0
                el.text(cnt)
                var interval = setInterval(function () {
                    el.text(Math.round((cnt += num / (2 * 25))))
                    if (cnt >= num) {
                        clearInterval(interval)
                        el.text(num)
                    }
                }, 60)
            }, 3000)
        })
    }
})
function scrolledDiv(el) {
    try {
        var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elTop = $(el).offset().top + 100,
            elBottom = elTop + $(el).height() / 1.8
    } catch (err) {
        console.error()
    }

    return elBottom <= docViewBottom && elTop >= docViewTop
}
