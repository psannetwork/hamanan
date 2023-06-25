// 新しい要素（四角形）を作成
const square = document.createElement('div');
square.style.width = '100vw'; // 画面幅いっぱいにする
square.style.height = '100vh'; // 画面高さいっぱいにする
square.style.backgroundImage = "url('https://sozaino.site/wp-content/uploads/2021/02/utyuu.jpg')";
square.style.backgroundSize = 'cover'; // 画像を要素に合わせて調整
square.style.backgroundPosition = 'center'; // 画像を中央に配置
square.style.position = 'fixed';
square.style.top = '0px';
square.style.right = '0px';
square.style.zIndex = '9990';

// テキスト要素の作成
const text = document.createElement('div');
text.textContent = 'This code is written by p.';
text.style.color = 'red';
text.style.fontSize = '14px';
text.style.position = 'fixed';
text.style.bottom = '0px';
text.style.left = '0px';
text.style.zIndex = '9998';

// スライドボタンの作成
const slideButton = document.createElement('button');
slideButton.textContent = 'Menu';
slideButton.style.backgroundColor = 'red';
slideButton.style.color = 'white';
slideButton.style.position = 'fixed';
slideButton.style.bottom = '0px'; // 上から80px下にずらす
slideButton.style.right = '0px';
slideButton.style.zIndex = '9999';

// ボタンの初期状態は非表示にする
square.style.display = 'none';
text.style.display = 'none';

// スライドボタンのクリックイベントの追加
slideButton.addEventListener('click', () => {
  if (square.style.display === 'none') {
    // 表示されていない場合は表示する
    square.style.display = 'block';
    text.style.display = 'block';
    button1.style.display = 'block';
    button2.style.display = 'block';
    button3.style.display = 'block';
    slideButton.textContent = 'Close';
  } else {
    // 表示されている場合は非表示にする
    square.style.display = 'none';
    text.style.display = 'none';
    button1.style.display = 'none';
    button2.style.display = 'none';
    button3.style.display = 'none';
    slideButton.textContent = 'Menu';
  }
});

// ボタン要素1の作成
const button1 = document.createElement('button');
button1.textContent = 'typing js';
button1.style.backgroundColor = 'red';
button1.style.color = 'white';
button1.style.position = 'fixed';
button1.style.top = '150px'; // 上から150px下にずらす
button1.style.left = '45%';
button1.style.zIndex = '9999';
button1.style.display = 'none'; // 初期状態では非表示
button1.style.width = '150px'; // ボタンの幅を200pxに設定
button1.style.height = '50px'; // ボタンの高さを50pxに設定

// ボタン1のクリックイベントの追加
button1.addEventListener('click', () => {
  fetch('https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/cheatcode.js')
    .then(response => response.text()) // テキストとして取得
    .then(data => {
      // GitHub上のコードを実行する処理
      console.log('ボタン1がクリックされました');
      eval(data); // 取得したコードを実行
    })
    .catch(error => {
      console.error('エラーが発生しました', error);
    });
});

// ボタン要素2の作成
const button2 = document.createElement('button');
button2.textContent = 'devmode';
button2.style.backgroundColor = 'green';
button2.style.color = 'white';
button2.style.position = 'fixed';
button2.style.top = '300px'; // 上から200px下にずらす
button2.style.left = '45%';
button2.style.zIndex = '9999';
button2.style.display = 'none'; // 初期状態では非表示
button2.style.width = '150px'; // ボタンの幅を200pxに設定
button2.style.height = '50px'; // ボタンの高さを50pxに設定

// ボタン2のクリックイベントの追加
button2.addEventListener('click', () => {
  fetch('https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/lately.js')
    .then(response => response.text()) // テキストとして取得
    .then(data => {
      // GitHub上のコードを実行する処理
      console.log('ボタン2がクリックされました');
      eval(data); // 取得したコードを実行
    })
    .catch(error => {
      console.error('エラーが発生しました', error);
    });
});

// ボタン要素3の作成
const button3 = document.createElement('button');
button3.textContent = 'dino';
button3.style.backgroundColor = 'blue';
button3.style.color = 'white';
button3.style.position = 'fixed';
button3.style.top = '450px'; // 上から450px下にずらす
button3.style.left = '45%';
button3.style.zIndex = '9999';
button3.style.display = 'none'; // 初期状態では非表示
button3.style.width = '150px'; // ボタンの幅を150pxに設定
button3.style.height = '50px'; // ボタンの高さを50pxに設定

// ボタン3のクリックイベントの追加
button3.addEventListener('click', () => {
  fetch('https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/dino_cheat.js')
    .then(response => response.text()) // テキストとして取得
    .then(data => {
      // GitHub上のコードを実行する処理
      console.log('ボタン3がクリックされました');
      eval(data); // 取得したコードを実行
    })
    .catch(error => {
      console.error('エラーが発生しました', error);
    });
});

// ボタンをドキュメントに追加
document.body.appendChild(slideButton);
document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);

// テキストをドキュメントに追加
document.body.appendChild(text);

// 要素をドキュメントに追加
document.body.appendChild(square);
