var console = require('console');
var http = require('http');

module.exports.function = function SearchGoods(nname) {

  var base_url = 'https://openapi.naver.com/v1/search/shop';
  var NAVER_CLIENT_ID = 'hIAsGBmDzarXv5spV0Iw';
  var NAVER_CLIENT_SECRET = 'TCWfGz9TyM';


  console.log("name : " +nname); // title is undefined always
  let options = {
    format: 'json',
    headers: {
      'X-Naver-Client-Id': NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
    },
    query: {
      query : nname //Todo : replace this value using the parameter
    }
  };
  var response = http.getUrl(base_url,options);
  // result = http.getUrl(base_url, options);
  var result=[];
  var goods= new Object();

  for(var i=0;i<10;i++)
  {
    var qname = response.items[i].title;
    var idx=0;
    var tmp=""; var tmpname = "";
    console.log(qname);
    //<b> </b>를 지우는 함수
    for(var j=0;j<=qname.length;j++){
      if(qname[j]=='<'){
        tmp=qname.slice(idx,j);
        tmpname+=tmp;
        j+=3;
        idx=j;
      }
      if(qname[j]=='>'){
        j+=1;
        idx=j;
      }
      if(j==qname.length){
        tmp=qname.slice(idx,j);
        tmpname+=tmp;
      }
    }
    console.log(tmpname);
    //lprice 쉼표 표시
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
  //가격 내림차순으로 sorting
    result.sort(function(a,b){
      if(a.price.length==b.price.length){
        return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
      }
      else if(a.price.length>b.price.length){
        return 1;
      }
      else{
        return -1;
      }
  });
  console.log(nname);
  return result;
}