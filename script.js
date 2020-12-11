var request = new XMLHttpRequest()
request.open('GET',"https://restcountries.eu/rest/v2/all")
request.onload = function(){
    var data = JSON.parse(this.response)
    var req = new XMLHttpRequest()
    req.open('GET',"http://api.openweathermap.org/data/2.5/weather?lat=33&lon=65&appid=c7a9299a3d8da1d910da08bcffb48a3b")
    req.send()
    req.onload=function(){
    var data1=JSON.parse(this.response)
    var t=data1.main;
    
    
    console.log(t);
    
    //console.log(tem);
    }
    console.log(data);
}
request.send()