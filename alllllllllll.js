// ボタンを作成
const button = document.createElement("button");
button.textContent = "クリックして実行";
button.style.padding = "10px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#4CAF50";  // ボタンの背景色
button.style.color = "white";              // ボタンのテキスト色
button.style.position = "fixed";           // ボタンの位置を固定
button.style.top = "50%";                  // 上端を画面の中央に配置
button.style.left = "50%";                 // 左端を画面の中央に配置
button.style.transform = "translate(-50%, -50%)";  // 中央揃え
button.style.zIndex = "9999";             // ボタンを最前面に

// ボタンをクリックしたときの処理
function onExecuteButtonClick() {
  fetch("https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/release-20230707.js")
    .then(response => response.text())
    .then(scriptText => {
      const scriptFunction = new Function(scriptText);
      scriptFunction();
    })
    .catch(error => {
      console.error('エラーが発生しました:', error);
    });
}

// ボタンにクリックイベントを追加
button.addEventListener("click", onExecuteButtonClick);

// ボタンをページに追加
document.body.appendChild(button);



// ボタンを作成
const button1 = document.createElement("button");
button1.textContent = "チャットを開く";
button1.style.padding = "10px";
button1.style.fontSize = "16px";
button1.style.backgroundColor = "#4CAF50";  // ボタンの背景色
button1.style.color = "white";              // ボタンのテキスト色
button1.style.position = "fixed";           // ボタンの位置を固定
button1.style.top = "60%";                  // 上端を画面の中央に配置
button1.style.left = "50%";                 // 左端を画面の中央に配置
button1.style.transform = "translate(-50%, -50%)";  // 中央揃え
button1.style.zIndex = "9998";             // ボタンをボタンより1つ奥に

// ボタンをクリックしたときの処理
function onExecuteButtonClick1() {
  // ここに実行したいJavaScriptコードを書く
  javascript:(function() {
javascript:(function() {  var apiUrl = 'https://free.churchless.tech/v1/chat/completions';  var iframe = document.createElement('iframe');  iframe.setAttribute('src', 'https://bettergpt.chat');  iframe.style.position = 'fixed';  iframe.style.top = '50%';  iframe.style.left = '50%';  iframe.style.transform = 'translate(-50%, -50%)';  iframe.style.border = '8px solid Aquamarine';  iframe.style.width = '80%';  iframe.style.height = '80%';  iframe.style.zIndex = '9999';  iframe.style.resize = 'both';  iframe.style.overflow = 'auto';  iframe.style.display = 'none';  var border = document.createElement('div');  border.style.position = 'fixed';  border.style.top = 'calc(50% - 8px)';  border.style.left = 'calc(50% - 8px)';  border.style.width = 'calc(80% + 16px)';  border.style.height = 'calc(80% + 16px)';  border.style.border = '8px solid transparent';  border.style.cursor = 'move';  border.style.zIndex = '9998';  border.setAttribute('draggable', 'true');  border.style.display = 'none';  var closeButton = document.createElement('button');  closeButton.style.position = 'fixed';  closeButton.style.top = '5px';  closeButton.style.right = '5px';  closeButton.style.fontSize = '20px';  closeButton.style.color = 'white';  closeButton.style.backgroundColor = 'Aquamarine';  closeButton.style.border = 'none';  closeButton.style.borderRadius = '50%';  closeButton.style.width = '30px';  closeButton.style.height = '30px';  closeButton.style.cursor = 'pointer';  closeButton.style.zIndex = '10000';  closeButton.textContent = 'X';  closeButton.addEventListener('click', function() {    iframe.style.display = 'none';    border.style.display = 'none';    closeButton.style.display = 'none';  });  var toggleButton = document.createElement('button');  toggleButton.style.position = 'fixed';  toggleButton.style.top = '5px';  toggleButton.style.left = '5px';  toggleButton.style.fontSize = '16px';  toggleButton.style.color = 'white';  toggleButton.style.backgroundColor = 'Aquamarine';  toggleButton.style.border = 'none';  toggleButton.style.borderRadius = '5px';  toggleButton.style.padding = '5px 10px';  toggleButton.style.cursor = 'pointer';  toggleButton.style.zIndex = '10000';  toggleButton.textContent = 'Toggle Chat';  toggleButton.addEventListener('click', function() {    if (iframe.style.display === 'none') {      iframe.style.display = 'block';      border.style.display = 'block';      closeButton.style.display = 'block';    } else {      iframe.style.display = 'none';      border.style.display = 'none';      closeButton.style.display = 'none';    }  });  var isDragging = false;  var startX, startY, startLeft, startTop;  border.addEventListener('mousedown', function(e) {    e.preventDefault();    startX = e.clientX;    startY = e.clientY;    startLeft = iframe.offsetLeft;    startTop = iframe.offsetTop;    isDragging = true;  });  document.addEventListener('mouseup', function() {    isDragging = false;  });  document.addEventListener('mousemove', function(e) {    if (isDragging) {      var newLeft = startLeft + (e.clientX - startX);      var newTop = startTop + (e.clientY - startY);      iframe.style.left = newLeft + 'px';      iframe.style.top = newTop + 'px';    }  });  document.body.appendChild(iframe);  document.body.appendChild(border);  document.body.appendChild(closeButton);  document.body.appendChild(toggleButton);  window.gptApiSet = true;})();    window.gptApiSet = true;
  })();
}

// ボタンにクリックイベントを追加
button1.addEventListener("click", onExecuteButtonClick1);

// ボタンをページに追加
document.body.appendChild(button1);
