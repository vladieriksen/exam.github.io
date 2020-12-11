$("#start").click(function () {
  $(this).toggleClass("started");
  $(this).toggleClass("stopped");
  if ($(this).hasClass("started")) {
    $(this)
      .find("span")
      .fadeOut(250, function () {
        $(this)
          .siblings("div")
          .fadeIn(250, function () {});
      });
  } else
    $(this)
      .find("div")
      .fadeOut(250, function () {
        $(this).siblings("span").fadeIn();
      });
});
