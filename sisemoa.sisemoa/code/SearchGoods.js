var console = require('console');
var http = require('http');
var fail = require('fail');

module.exports.function = function SearchGoods(nname) {

  var base_url = 'https://openapi.naver.com/v1/search/shop';
  var NAVER_CLIENT_ID = 'hIAsGBmDzarXv5spV0Iw';
  var NAVER_CLIENT_SECRET = 'TCWfGz9TyM';


  let options = {
    format: 'json',
    headers: {
      'X-Naver-Client-Id': NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
    },
    query: {
      query : nname 
    }
  };
  //api 호출
  var response = http.getUrl(base_url,options);
  var result=[];
  var goods= new Object();
  // 상품이 존재하지 않을 때의 Error 처리
  if(response.total==0){
    throw fail.checkedError('상품이 존재하지 않습니다','ErrorNoGoods',{});
    return 'Error';
  }
  
  //상품 정보를 받아온다
  for(var i=0;i<10;i++)
  {
    var qname = response.items[i].title;
    var idx=0;
    var tmp=""; var tmpname = "";
    //<b> </b>를 지우는 함수
    for(var j=0 ;j<qname.length ;j++){
      if(qname[j]=='<' || j==qname.length - 1){
        tmp=qname.slice(idx,j);
        tmpname+=tmp;
      }
      if(qname[j]=='>'){
        idx=j+1;
      }
    }

    //lprice의 쉼표 표시
    var tmpprice=""; var finalprice="";
    tmpprice=response.items[i].lprice
    finalprice = tmpprice.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

    goods={
    name:tmpname,
    price:finalprice+"원",
    iimage:response.items[i].image,
    link:response.items[i].link
    }
    result.push(goods);
  }
  return result;
}