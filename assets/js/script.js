

//-----------------------------------------------------------

$(document).ready(function(){
    $("#btn-main").click(function(){
        $("#form-1").fadeIn(1000);
    });
});

$(document).ready(function(){
    $("#btn-1").click(function(){
        $("#form-1").fadeOut(1000);
        $("#form-2").fadeIn(1000);
    });
});

$(document).ready(function(){
    $("#btn-2").click(function(){
        $("#form-2").fadeOut(1000);
        $("#form-3").fadeIn(1000);
    });
});

$(document).ready(function(){
    $("#btn-3").click(function(){
        $("#form-3").fadeOut(1000);
        $("#form-last").fadeIn(1000);
    });
});


// animated css -------------------------------------------------------------

$(function() {
    var welcomeSection = $('.welcome-section'),
        enterButton = welcomeSection.find('.btn');

        setTimeout(function(){
            welcomeSection.removeClass('content-hidden');
        },800);
});


//  ----------------------------------------------------

$(document).ready(function () {
    $("#btn-3").click(function(){
        $("#popup").fadeOut(2000);
    });  
});

$(document).ready(function () {
    $("#btn-3").click(function(){
        $("#form-1").fadeIn(2000);
    });  
});
 
// btn-activate ----------------------------------------------------

$("#form-1").on("change", "input[type=radio]", function(){
    $("#btn-1").css("visibility", "visible");
});

$("#form-2").on("change", "input[type=radio]", function(){
    $("#btn-2").css("visibility", "visible");
});

$("#form-3").on("change", "input[type=radio]", function(){
    $("#btn-3").css("visibility", "visible");
});

// send-form ----------------------------------------------------


$(document).ready(function() {

    //E-mail Ajax Send
    $("#form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            window.location.replace("success.html");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});

