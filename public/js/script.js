
$("#audioControl").on("click", function(e) {
    document.getElementById('player').play();
    $("#welcome").addClass('hidden');
    $("#container").addClass('fade-in')
  });

$("#singleleaf").on("click", function(e) {
    $("#singleleaf").addClass('apply-shake');
    document.getElementById('leafEffect').play();
    setTimeout(function(){  $("#singleleaf").removeClass("apply-shake"); }, 1000);
})

$("#welcomeMonkey").on("click", function(e) {
    $("#welcomeMonkey").addClass('apply-bounce');
    document.getElementById('leafEffect').play();
    setTimeout(function(){  $("#welcomeMonkey").removeClass("apply-bounce"); }, 1000);
})