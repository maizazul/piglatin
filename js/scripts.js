var piglatin = function(word) {
  if (word[0] === "a" || "e" || "o" || "u" || "i") {
    return word + "ay" ;
  }
}

$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    var word = $("input#word").val();
    var result = piglatin(word);

    $("#translated").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
