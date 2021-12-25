window.onload = () => {
  document.getElementById('first-button').click();
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "inline-block";
  evt.currentTarget.className += " active";
}

$(document).ready(function(){
  $('.team-slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      arrows:false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 2
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
});

$('.burger-lines').on('click', function(){
$('.burger-menu').toggleClass('active');
});

$(window).scroll(function(){
  var headSticky = $('.header'),
      scroll = $(window).scrollTop();

  if (scroll >= 50) headSticky.addClass('addShadow');
  else headSticky.removeClass('addShadow');
});