$(document).ready(function(){
    $('trackWeather').click(function(){
        var location = $("#location").val();
        if(location != ''){
            $.ajax({url:"http://api.openweathermap.org/data/2.5/weather?q=" + location),
            type: "GET",
            success: function(data){
                console.log(data);
            }
            
        }
    });
})