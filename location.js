var url = 'http://ipinfo.io';
var request = require('request');

module.exports = function (callback) {
  // callback('here is the location of your computer!');

  request({url: url, json: true}, function (error, response, body){
    if(error){
      callback();
    }else{
      callback(body);
   }
  });
}
