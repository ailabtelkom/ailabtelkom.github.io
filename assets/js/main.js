$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $("#navbar").removeClass("navbar-dark");
    $("#navbar").removeClass("bg-transparent");
    $("#navbar").addClass("bg-white");
    $("#navbar").addClass("navbar-light");
  } else {
    $("#navbar").removeClass("bg-white");
    $("#navbar").removeClass("navbar-light");
    $("#navbar").addClass("bg-transparent");
    $("#navbar").addClass("navbar-dark");
  }
});
$(".carousel").carousel({
  interval: 3000
});
