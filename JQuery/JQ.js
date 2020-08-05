
$(document).ready(function() {
    $( ".divanimation" ).click(function() {
        $( ".divanimation" ).animate({
            width: "toggle",
            height: "toggle"
        }, {
            duration: 2500,
            specialEasing: {
                width: "easeInOutSine",
                height: "easeInOutSine",

            },
            complete: function() {
                console.log( "Animation complete!" );
            }
        });
    });

});
$(document).ready(function(){
    $("#runani").click(function(){
        var newWidth = $("#width").val();
        $(".divanimation").width(newWidth);
        var newHeight = $("#height").val();
        $(".divanimation").height(newHeight);
        var newRate = $("#Rate").val();
        $(".divanimation").duration(newRate);

    });
});