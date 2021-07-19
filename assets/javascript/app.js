//function on page load//
$(function(){
    createButtons(searchArr, "searchButton", "#buttons");
    
})

var searchArr = ["Batman", "Superman", "Spider-Man","Joker", "Hulk", "Captain America"];

//function to create buttons from array//
function createButtons(searchArr, classToAdd, addToArea){
    $(addToArea).empty();
    for (var i=0; i<searchArr.length;i++){
        var a = $("<button>");
        a.addClass(classToAdd);
        a.attr("data-type", searchArr[i]);
        a.text(searchArr[i]);
        $(addToArea).append(a);
    }
}

$(document).on("click", ".searchButton", function(){
    $("#searches").empty();
    var type = $(this).data("type");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+type + "&api_key=m9tSf30kxYQiLtxv4XPexvkHgzMwvhtN&limit=12";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        
        for (var i=0; i<response.data.length;i++){
           var searchDiv = $("<div class='search-item'>");
           var rating = response.data[i].rating;
           var p = $("<h1>").text("Rating: "+rating);
        //    p.toUpperCase();
           var animated = response.data[i].images.fixed_height.url;
           var still = response.data[i].images.fixed_height_still.url;
           var image = $("<img>");
           image.attr("src", still);
           image.attr("data-still",still);
           image.attr("data-animated", animated);
           image.attr("data-state", "still");
           image.addClass("searchImage");
           searchDiv.append();
           searchDiv.append(image);
           $("#searches").append(searchDiv);
            
        }

    })

})

$(document).on("click", ".searchImage", function(){
    var state = $(this).attr("data-state");
    if (state == "still"){
        $(this).attr("src", $(this).data("animated"));
        $(this).attr("data-state", "animated");
    } else {
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
    }
})

$("#addSearch").on("click", function(){
    
    var newSearch = $("input").eq(0).val();
    searchArr.push(newSearch);
    createButtons(searchArr, "searchButton", "#buttons");
    return false;
})


