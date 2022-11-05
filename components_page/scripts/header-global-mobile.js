$("#my-menu").mmenu({
    "extensions": [
        "position-front"
        ]
});

var API = $("#my-menu").data( "mmenu" );
// открыть mmenu 
$("#my-button").click(function() {
    API.open();
});
// закрыть mmenu 
$(".close_mm_menu").click(function() {
    API.close();
    $(this).hide();
});

 // close button append in mmenu
 function addButton(){
    $(".mm-panel .mm-navbar").append("<button id='my-button-close'><img src='./components_page/img/header-icons/close_mob_hamburger.svg'></button>");
}addButton();

$(document).on('click',".mm-panel #my-button-close", function(){
    API.close();
});

