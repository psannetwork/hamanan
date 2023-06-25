// 画像要素の作成
const square = document.createElement('div');
square.style.width = '100vw';
square.style.height = '100vh';
square.style.position = 'fixed';
square.style.top = '0px';
square.style.right = '0px';
square.style.zIndex = '99998';
square.style.display = 'none';

// 画像の読み込みを試みる
const image = new Image();
image.src = 'https://sozaino.site/wp-content/uploads/2021/02/utyuu.jpg';
image.onload = () => {
  // 画像の読み込みに成功した場合
  square.style.backgroundImage = `url('${image.src}')`;
};

image.onerror = () => {
  // 画像の読み込みに失敗した場合（黒い四角にする）
  square.style.backgroundColor = '#202f55';
};

// テキスト要素の作成
const text = document.createElement('div');
text.textContent = 'This code is written by p.';
text.style.color = 'red';
text.style.fontSize = '14px';
text.style.position = 'fixed';
text.style.bottom = '0px';
text.style.left = '0px';
text.style.zIndex = '99999';
text.style.display = 'none';

// スライドボタンの作成
const slideButton = document.createElement('button');
slideButton.textContent = 'Menu';
slideButton.style.backgroundColor = 'red';
slideButton.style.color = 'white';
slideButton.style.position = 'fixed';
slideButton.style.bottom = '0px';
slideButton.style.right = '0px';
slideButton.style.zIndex = '99999';

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
    button4.style.display = 'block';
    slideButton.textContent = 'Close';
  } else {
    // 表示されている場合は非表示にする
    square.style.display = 'none';
    text.style.display = 'none';
    button1.style.display = 'none';
    button2.style.display = 'none';
    button3.style.display = 'none';
    button4.style.display = 'none';
    slideButton.textContent = 'Menu';
  }
});

// ボタン要素1の作成
const button1 = document.createElement('button');
button1.textContent = 'typing js';
button1.style.backgroundColor = 'red';
button1.style.color = 'white';
button1.style.position = 'fixed';
button1.style.top = '50%';
button1.style.left = '50%';
button1.style.transform = 'translate(-50%, -50%)';
button1.style.zIndex = '99999';
button1.style.display = 'none';
button1.style.width = '150px';
button1.style.height = '50px';

// ボタン1のクリックイベントの追加
button1.addEventListener('click', () => {
  fetch('https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/cheatcode.js')
    .then(response => response.text())
    .then(data => {
      console.log('ボタン1がクリックされました');
      const executeCode = new Function(data);
      executeCode();
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
button2.style.top = 'calc(50% + 60px)';
button2.style.left = '50%';
button2.style.transform = 'translate(-50%, -50%)';
button2.style.zIndex = '99999';
button2.style.display = 'none';
button2.style.width = '150px';
button2.style.height = '50px';

// ボタン2のクリックイベントの追加
button2.addEventListener('click', () => {
  fetch('https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/lately.js')
    .then(response => response.text())
    .then(data => {
      console.log('ボタン2がクリックされました');
      const executeCode = new Function(data);
      executeCode();
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
button3.style.top = 'calc(50% + 120px)';
button3.style.left = '50%';
button3.style.transform = 'translate(-50%, -50%)';
button3.style.zIndex = '99999';
button3.style.display = 'none';
button3.style.width = '150px';
button3.style.height = '50px';

// ボタン3のクリックイベントの追加
button3.addEventListener('click', () => {
  fetch('https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/dino_cheat.js')
    .then(response => response.text())
    .then(data => {
      console.log('ボタン3がクリックされました');
      const executeCode = new Function(data);
      executeCode();
    })
    .catch(error => {
      console.error('エラーが発生しました', error);
    });
});

// ボタン要素4の作成
const button4 = document.createElement('button');
button4.textContent = 'Stop Timers';
button4.style.backgroundColor = 'orange';
button4.style.color = 'white';
button4.style.position = 'fixed';
button4.style.top = 'calc(50% + 180px)';
button4.style.left = '50%';
button4.style.transform = 'translate(-50%, -50%)';
button4.style.zIndex = '99999';
button4.style.display = 'none';
button4.style.width = '150px';
button4.style.height = '50px';

// ボタン4のクリックイベントの追加
button4.addEventListener('click', () => {
  // 実行中のすべてのタイマーをクリア
  let timeoutId = window.setTimeout(null, 0);
  while (timeoutId >= 0) {
    window.clearTimeout(timeoutId);
    timeoutId--;
  }

  // 実行中のすべてのインターバルをクリア
  let intervalId = window.setInterval(null, 0);
  while (intervalId >= 0) {
    window.clearInterval(intervalId);
    intervalId--;
  }
});

// ボタンをドキュメントに追加
document.body.appendChild(slideButton);
document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
document.body.appendChild(button4);

// テキストをドキュメントに追加
document.body.appendChild(text);

// 要素をドキュメントに追加
document.body.appendChild(square);
