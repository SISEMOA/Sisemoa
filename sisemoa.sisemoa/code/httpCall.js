var console = require('console');
var http = require('http');

module.exports.function = function httpCall(title) {

  var base_url = 'https://openapi.naver.com/v1/search/shop';
  var NAVER_CLIENT_ID = 'hIAsGBmDzarXv5spV0Iw'
  var NAVER_CLIENT_SECRET = 'TCWfGz9TyM'

  var result = [];
  console.log("title : " +title); // title is undefined always
  let options = {
    format: 'json',
    headers: {
      'X-Naver-Client-Id': NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
    },
    query: {
      query : '아이패드' //Todo : replace this value using the parameter
    }
  };
  var response = http.getUrl(base_url,options);
  // result = http.getUrl(base_url, options);
   console.log(response.items[0]);

  return {
    Title: response.items[0].title,
    Lprice: response.items[0].lprice
  }
}
