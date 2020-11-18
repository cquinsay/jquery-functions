$(document).ready(function(){
    $('.click button').click(function(){
        alert("Hi everyone! I'm Frenchie! Click the buttons to see the tricks I can do!");
    });
    $('#hide').click(function(){
        $('.hide-and-seek img').hide();
    });
    $('#here-i-am, .hide-and-seek h3').hide();
    $('#find').click(function(){
        $('#here-i-am, .hide-and-seek h3').show();
    });
    $('.toggle button').click(function(){
        $('.toggle img').toggle('slow');
    });
    $('#peeka-btn').click(function(){
        $('#boo').slideUp();
    });
    $('#peek-a').hide();
    $('#boo-btn').click(function(){
        $('#peek-a').slideDown();
    });



    
    
    
    
    
});