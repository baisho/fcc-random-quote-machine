$(document).ready(function () {
    $("#getQuote").on("click", function () {
        $("#quoteHere").css("color", "green");
        $.getJSON("https://talaikis.com/api/quotes/", function (json) {
            var length = (Object.keys(json)).length;
            var random = Math.floor(Math.random() * length);
            var val = json[random];
            var html = "";
            var keys = Object.keys(val);
            keys.forEach(function (key) {
                if (key == 'quote') {
                    html += "<div class = 'quote'>" + "<q>" + val[key] + "</q>" + "</div><br>";
                }
                else if (key == 'author') {
                    html += "<div class = 'author'>" + "&mdash;" + " " + "<cite>" + val[key] + "</cite>" + "</div><br>";
                };
            });
            $("#quoteHere").html(html);
        });
    })
});

function tweetIt() {
    var phrase = document.getElementById('quoteHere').innerText;
    var tweetUrl = 'https://twitter.com/home?status=' + encodeURIComponent(phrase)
        + "%23RandomQuoteMachine";
    window.open(tweetUrl);
}