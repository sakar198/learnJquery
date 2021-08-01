$("#toggle-btn").click(function () {
  $("#mobile-nav").animate({
    left: "0px",
    opacity: "1",
  });
});

$("#close-btn").click(function () {
  $("#mobile-nav").animate({
    left: "-100%",
    opacity: "0",
  });
});

$(".image-list").click(function () {
  $(".image-list").css({ border: "none", filter: "grayscale(80%)" });
  $(this).css("border", "5px solid #ffffff");
  $(this).css("filter", "grayscale(0%)");
  $("#image-container").attr("src", $(this).attr("src"));
  $("#count-img").text($(this).attr("data-id"));
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $(".scroll-top").show();
  } else {
    $(".scroll-top").hide();
  }
});

$(".question-box").click(function () {
  $(this).children(".pointer-icon").toggleClass("rotate");
  $(this).parent().children(".answer-box").slideToggle(100);
});
