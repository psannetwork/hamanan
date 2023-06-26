// 位置情報の取得
if (navigator.geolocation) {
  // ジオロケーションがサポートされている場合の処理
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
  // ジオロケーションがサポートされていない場合の処理
  console.log("ジオロケーションがサポートされていません。");
}

// 位置情報取得成功時のコールバック関数
function successCallback(position) {
  const latitude = position.coords.latitude; // 緯度
  const longitude = position.coords.longitude; // 経度
  console.log(`緯度: ${latitude}, 経度: ${longitude}`);
}

// 位置情報取得失敗時のコールバック関数
function errorCallback(error) {
  console.log(`ジオロケーションエラー: ${error.message}`);
}

// デバイスの情報取得
const userAgent = navigator.userAgent; // ユーザーエージェント
const screenWidth = window.screen.width; // 画面の幅
const screenHeight = window.screen.height; // 画面の高さ
console.log(`ユーザーエージェント: ${userAgent}`);
console.log(`画面の幅: ${screenWidth}px, 画面の高さ: ${screenHeight}px`);
