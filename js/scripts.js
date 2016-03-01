var piglatin = function(word) {
  var translatedword = word;
  if (word[0] === "a" || word[0] === "e" || word[0] === "o" || word[0] === "u" || word[0] === "i") {
    return word + "ay" ;
  }

  else if ((word[0] !== "a" || word[0] !== "e" || word[0] !== "o" || word[0] !== "u" || word[0] !== "i") && (word[1] !== "a" || word[1] !== "e" || word[1] !== "o" || word[1] !== "u" || word[1] !== "i")) {
    return word.slice(2) + word [0] + word [1] + "ay" ;
  }

  else {
    return word.slice(1) + word [0] + "ay" ;
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


// var  vowels = ['a','e','i','o','u']
