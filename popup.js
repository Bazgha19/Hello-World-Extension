$(function(){
    $('#name').keyup(function(){
        $('#text').text('Hello '+ $('#name').val());
    })
})