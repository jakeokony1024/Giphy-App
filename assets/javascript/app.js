//function on page load//
$(function(){
    createButtons(searchArr, "searchButton", "#buttons");
    console.log("page loaded")
})

var searchArr = ["Batman", "Superman", "Spider-Man", "Aqua-Man", "Robin", "Joker", "Lex Luthor", "Thor", "Hulk", "Captain America"];

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
    var type = $(this).data("type");
    console.log(type);

})


