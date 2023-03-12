function countDown(class_) {
  let timer = document.querySelector(class_);
  if (localStorage.getItem("sec" + class_) && localStorage.getItem(
      "min" + class_
    ))
    var a = localStorage.getItem("min" + class_),
      b = localStorage.getItem("sec" + class_);
  else
    a = timer.getAttribute("data-minutes"),
    b = timer.getAttribute("data-seconds");
  var d = setInterval(function () {
    0 <= parseInt(a) && -1 !== parseInt(b) && (
      0 === parseInt(b) && 0 !== parseInt(a) && (a--, b = 59),
      timer.innerText = (
        10 > a ?
        "0" + a :
        a
      ) + ":" + (
        10 > b ?
        "0" + b :
        b
      ),
      0 === parseInt(b) && 0 === parseInt(a) && (a--, b = 0, timer.innerText = "00:00", clearInterval(d)),
      b--,
      localStorage.setItem(
        "sec" + class_,
        b
      ),
      localStorage.setItem("min" + class_, a)
    )
  }, 1E3)
}
// countDown('.time');

if (parseInt(localStorage.getItem('shown__'))) {
  countDown('.time.accent')
}

$(".btn--submit").click(function () {
  countDown('.time.accent')
});

/*wheel */
var resultWrapper = document.querySelector('.order');
var wheel = document.querySelector('.prize-wheel');
$('.wheel__cursor').click(function () {
  if (!wheel.classList.contains('rotated')) {
    wheel.classList.add('spin');
    setTimeout(function () {
      $('.prize').fadeOut();
      $('.order').fadeIn();
    }, 8000);
    wheel.classList.add('rotated');
  }

});

$(function () {
  $('a[href^="#"]').on('click', function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    /*
     * sc - в переменную заносим информацию о том, к какому блоку надо перейти
     * dn - определяем положение блока на странице
     */

    $('html, body').animate({
      scrollTop: dn
    }, 1000);

    /*
     * 1000 скорость перехода в миллисекундах
     */
  });
});

