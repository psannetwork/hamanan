// 新しい要素（四角形）を作成
const square = document.createElement('div');
square.style.width = '2000px';
square.style.height = '2000px';
square.style.backgroundColor = 'black';
square.style.position = 'fixed';
square.style.top = '0px'; // 上から50px下にずらす
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
slideButton.style.backgroundColor = 'blue';
slideButton.style.color = 'white';
slideButton.style.position = 'fixed';
slideButton.style.top = '80px'; // 上から80px下にずらす
slideButton.style.right = '20px';
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
    slideButton.textContent = 'Close';
  } else {
    // 表示されている場合は非表示にする
    square.style.display = 'none';
    text.style.display = 'none';
    button1.style.display = 'none';
    button2.style.display = 'none';
    slideButton.textContent = 'Menu';
  }
});

// ボタン要素1の作成
const button1 = document.createElement('button');
button1.textContent = 'Button 1';
button1.style.backgroundColor = 'blue';
button1.style.color = 'white';
button1.style.position = 'fixed';
button1.style.top = '150px'; // 上から150px下にずらす
button1.style.left = '20px';
button1.style.zIndex = '9999';
button1.style.display = 'none'; // 初期状態では非表示

// ボタン1のクリックイベントの追加
button1.addEventListener('click', () => {
  fetch('https://api.github.com/repos/ユーザー名/リポジトリ名/contents/ファイルパス')
    .then(response => response.json())
    .then(data => {
      // GitHub上のコードを実行する処理
      console.log('ボタン1がクリックされました');
      console.log(data);
      // ここにコードの実行
    })
    .catch(error => {
      console.error('エラーが発生しました', error);
    });
});

// ボタン要素2の作成
const button2 = document.createElement('button');
button2.textContent = 'Button 2';
button2.style.backgroundColor = 'green';
button2.style.color = 'white';
button2.style.position = 'fixed';
button2.style.top = '200px'; // 上から200px下にずらす
button2.style.left = '20px';
button2.style.zIndex = '9999';
button2.style.display = 'none'; // 初期状態では非表示

// ボタン2のクリックイベントの追加
button2.addEventListener('click', () => {
  fetch('https://api.github.com/repos/ユーザー名/リポジトリ名/contents/ファイルパス')
    .then(response => response.json())
    .then(data => {
      // GitHub上のコードを実行する処理
      console.log('ボタン2がクリックされました');
      console.log(data);
      // ここにコードの実行
    })
    .catch(error => {
      console.error('エラーが発生しました', error);
    });
});

// ボタンをドキュメントに追加
document.body.appendChild(slideButton);
document.body.appendChild(button1);
document.body.appendChild(button2);

// テキストをドキュメントに追加
document.body.appendChild(text);

// 要素をドキュメントに追加
document.body.appendChild(square);
