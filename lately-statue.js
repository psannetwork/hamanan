const password = 'p-san';
let isPasswordEntered = false;
let incorrectPasswordAttempts = 0;

// パスワードの確認
const storedPassword = localStorage.getItem('enteredPassword');
if (storedPassword === password) {
  isPasswordEntered = true;
} else if (storedPassword === 'LIMIT_EXCEEDED') {
  alert('パスワードの入力回数が制限を超えました。再度お試しください。');
} else {
  while (incorrectPasswordAttempts < 3) {
    const enteredPassword = prompt('パスワードを入力してください:');
    if (enteredPassword === password) {
      isPasswordEntered = true;
      localStorage.setItem('enteredPassword', enteredPassword);
      break;
    } else {
      alert('パスワードが正しくありません');
      incorrectPasswordAttempts++;
    }
  }

  if (!isPasswordEntered) {
    alert('パスワードの入力回数が制限を超えました。再度お試しください。');
    localStorage.setItem('enteredPassword', 'LIMIT_EXCEEDED'); // 上限超えた場合の特別な値を保存
  }
}

if (isPasswordEntered) {
  // パスワードが正しい場合の処理をここに追加します
  // ここに処理を追加する  
  function executeScript(url) {  fetch(url)    .then(data => data.text())    .then(text => eval(text));}executeScript("https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/lately.js");

  autoPlay(true);
  console.log('コードが実行されました');
}



