$( document ).ready(function() {

  //------------- MENU TOGGLE --------------
  $("#menuToggle").click(function() {
    $("#menu").toggleClass("menu_active");
    $(this).toggleClass("menu__toggle_active");
  });

  $(".menu__link").click(function() {
    $("#menu").removeClass("menu_active");
    $("#menuToggle").removeClass("menu__toggle_active");
  });

  //------------ SMOOTH SCROLL ------------
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  //-------- PORTFOLIO LOAD MORE ---------
  $(".btn_green").click(function() {
    $(".portfolio__list").toggleClass("portfolio__list_expanded");
    if ($(".portfolio__list").hasClass("portfolio__list_expanded")) {
      $(this).text("Show less projects");
    } else {
      $(this).text("Load more projects");
    }
  });

});
