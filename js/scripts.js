var piglatin = function(word) {
  var vowels = ['a','e','i','o','u'];
  for (var i = 0; i < vowels.length; i++) {
    if(word[0] === vowels[i]) {

      var startsWithVowel = true;
      break;
    }
  }

  if (startsWithVowel) {
    var translatedWord = word;
  } else {
    var translatedWord = word.slice(1) + word [0];
  }
  return translatedWord + "ay" ;
};


$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    var word = $("input#word").val();
    var result = piglatin(word);

    $("#translated").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
