var text = ["黑色","蓝色","红色","黄色"];
var color = ["black","blue","red","yellow"];
var color1,color2;
var score = 0;

var getTextRandom = function(){
  var res = Math.floor(Math.random()*4);
  return res;
}

var getColorRandom = function(color){
  var res = Math.floor(Math.random()*7);
  if(res>3){
    return color;
  }
  return res;
}

var countDown = function(){

}

var setBox = function(){
    color1 = getTextRandom();
  $("#box1").html(text[color1]);

    $("#box2").html(text[getTextRandom()]);

    color2 = getTextRandom(color1);
    $("#box1").css("color",color[getTextRandom()]);
      $("#box2").css("color",color[color2]);
}

var msgBox = function(correct){
  var msg;
  if(correct){
    msg = "正确!!!";
  }else{
    msg = "错误!!!";
  }
  $("#msg").html(msg);
  $("#msg").show();
  $(".modal").show();
  setTimeout(hideMsg,500);
  setBox();
}

var hideMsg = function(){
  $("#msg").hide();
  $(".modal").hide();
}

var checkResult = function(result){
  if((color1==color2) == result){
    msgBox(true);
  }else{
    msgBox(false);
  }
}

$( document ).ready(function() {
  setBox();
  $("#btn_no").click(function(){
    checkResult(false);
  });
  $("#btn_yes").click(function(){
    checkResult(true);
  });
});
