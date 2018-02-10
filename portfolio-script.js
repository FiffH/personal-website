$(document).ready(function() {
    $('.skills-content').hide();
    
    $('.drop-btn').click(function(event){
        $('#'+(event.target.id)+'-content').addClass("animated fadeInDown");
        $('#'+(event.target.id)+'-content').toggle();
        $(this).toggleClass("flip-btn");
    });
});