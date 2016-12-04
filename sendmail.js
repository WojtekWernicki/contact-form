/*
Function to showing error/success message
*/

$(function() {
   $("#submit").click(function() {
       $.ajax({
           type: "POST",
           url: "sendmail.php",
           data: $("form").serialize(),
           success: function() {
               $(".error").fadeOut(1000);
               $("form").fadeOut(1000);
               $(".success").fadeIn(1000);
           },
           error: function() {
               $(".error").fadeIn(1000);
           }
       });
       return false;
   });
});