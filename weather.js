var request = require('request');
var APIId = '8357a79e0d8eb5ed4e5e7e5e06cfeb6a';
module.exports = function (location, callback) {

  var url = 'http://api.openweathermap.org/data/2.5/weather?q='+encodeURIComponent(location)+'&units=metric'+'&appid='+APIId;
  if(!location){
    return callback('No location provided!');
  }

  request({url: url, json: true}, function (error, response, body){
    if(error){
      console.log('Unable to fetch weather');
    }else{
      // console.log(JSON.stringify(body, null, 4));
      // var temp = body.main.temp.toString();
      // var temperature = Math.floor((Number(temp) - 273.16)*100) / 100;
      console.log('The temp at '+location +' is: ' + body.main.temp  + ' C');
    }

  });
}
