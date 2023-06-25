// 新しい要素（四角形）を作成
const square = document.createElement('div');
square.style.width = '2000px';
square.style.height = '1000px';
square.style.backgroundColor = 'black';
square.style.position = 'fixed';
square.style.top = '0px';
square.style.right = '0px';

// 要素をドキュメントに追加
document.body.appendChild(square);

// テキスト要素の作成
const text = document.createElement('div');
text.textContent = '新しいテキスト';
text.style.color = 'white';
text.style.fontSize = '24px';
text.style.position = 'fixed';
text.style.top = '200px';
text.style.left = '50px';
text.style.zIndex = '9999';

// テキストをドキュメントに追加
document.body.appendChild(text);

//gui menu

const button1 = document.createElement('button');
button1.textContent = 'クリック1';
button1.style.backgroundColor = 'blue';
button1.style.color = 'white';
button1.style.position = 'fixed';
button1.style.top = '300px';
button1.style.left = '100px';

// ボタンのクリックイベントの追加
button1.addEventListener('click', () => {
  console.log('ボタンがクリックされました');
});

// ボタン要素の作成
const button = document.createElement('button');
button.textContent = 'クリック';
button.style.backgroundColor = 'blue';
button.style.color = 'white';
button.style.position = 'fixed';
button.style.top = '350px';
button.style.left = '100px';

// ボタンのクリックイベントの追加
button.addEventListener('click', () => {
  console.log('ボタンがクリックされました');
});

// ボタンをドキュメントに追加
document.body.appendChild(button);
document.body.appendChild(button1);
