module.exports.function = function httpCall () {
//   var http=require('http')
//   var console=require('console')
//   var result=[];

//   let options={
//       format:'json',
//       headers:{
//         'X-Naver-Client-Id:':'hIAsGBmDzarXv5spV0Iw',
//         'X-Naver-Client-Secret:':'TCWfGz9TyM'
//       },
//       query: Title
//   };

//   result=http.getUrl("https://openapi.naver.com/v1/search/shop.json",options);
//   console.log(result);
  

//   return result
// }

var console = ('console')
// console.log('실행');

// var http = require('http');
var request = require('request');

const NAVER_CLIENT_ID     = 'hIAsGBmDzarXv5spV0Iw'
const NAVER_CLIENT_SECRET = 'TCWfGz9TyM'

const option = {
  query  :'아이패드'
}


request.get({
    uri:'https://openapi.naver.com/v1/search/shop',
    qs :option,
    headers:{
      'X-Naver-Client-Id':NAVER_CLIENT_ID,
      'X-Naver-Client-Secret':NAVER_CLIENT_SECRET
    }
  }, function(err, res, body) {
    let json = JSON.parse(body) //json으로 파싱
    // console.log(json)
  })

  return {
    title: 'test'
  };

}

