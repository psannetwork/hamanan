var currentDate = new Date();  // 現在の日付を取得

var storedDate = localStorage.getItem('storedDate');  // ローカルストレージから保存された日付を取得

if (storedDate) {
  var storedTimestamp = new Date(storedDate).getTime();  // 保存された日付をタイムスタンプに変換
  var oneMinuteAgo = new Date(currentDate.getTime() - (60 * 1000));  // 現在の日付から1分前の日付を計算

  if (storedTimestamp <= oneMinuteAgo.getTime()) {
    localStorage.removeItem('myData');  // 1分以上経過していた場合、myDataを削除
    console.log('myDataが削除されました');
  }
} else {
  console.log('storedDateが存在しません');
}
var myData = localStorage.getItem('myData');if (myData) {  console.log('データがあります:', myData);  function executeScript(url) {  fetch(url)    .then(data => data.text())    .then(text => eval(text));}executeScript("https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/developer.js");} else {  console.log('データがありません');  alert("ライセンスを取得してください");}
