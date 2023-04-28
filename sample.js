function showHello() {
  console.log("hello");
}
function getSum(num1, num2) {
  return num1 + num2;
}
$("button").click(function () {
  $("h1").html("jQueryの練習です").addClass("red");
  $("ul").append("<li>項目3<li>");
  $("p").css("color", "green");
  $("p").text("テキストを上書きしました");
  $("p").attr("class", "red");
  $("img").slideToggle();
});
showHello();
getSum(3, 5);
const sum = getSum(3, 5);
console.log(sum);
const helloMyName = function (name) {
  return "こんにちは、" + name + "さん。";
}
// 呼び出すとき
helloMyName("一郎");
// コンソールに出力するとき
console.log(helloMyName("一郎"));
const result = $("h1").html();
console.log(result);
const pText = $("p").text();
console.log(pText);
const buttonName = $('button').attr('name');
console.log(buttonName);