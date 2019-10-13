module.exports.function = function httpCall (Title) {
  var http=require('http')
  var console=require('console')
  var result=[];

  let options={
      format:'json',
      headers:{
        'X-Naver-Client-Id:':'hIAsGBmDzarXv5spV0Iw',
        'X-Naver-Client-Secret:':'TCWfGz9TyM'
      },
      query: Title
  };

  result=http.getUrl("https://openapi.naver.com/v1/search/shop.json",options);
  console.log(result);
  

  return result
}

