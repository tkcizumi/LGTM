var Page = function(){
};

Page.prototype.load = function(){
  var context = this;
  $(".image").each(function(){
    var image = $(this);
    $.getJSON("http://www.lgtm.in/g?" + Math.random(), function (data) {
      image.attr("src", data.imageUrl);
      image.click(function(){
        $("#message").show(500);
        setTimeout(function() { $("#message").hide(500) }, 1000);
        var clipboard = $("<input/>");
        $("body").append(clipboard);
        clipboard.val("![LGTM](" + image.attr("src") + ")").select();
        document.execCommand('copy');
        clipboard.remove();
      });
    });
  });
};

$(document).ready(function(){
  var page = new Page();
  page.load();
});
