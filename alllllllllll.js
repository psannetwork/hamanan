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
  javascript:function executeScript(url) {
    fetch(url)
      .then(data => data.text())
      .then(text => {
        const scriptFunction = new Function(text);
        scriptFunction();
      });
  }
  executeScript("https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/GPT.js");
}

// ボタンにクリックイベントを追加
button1.addEventListener("click", onExecuteButtonClick1);

// ボタンをページに追加
document.body.appendChild(button1);




// 表示・非表示を切り替えるボタンを作成
const toggleButton = document.createElement("button");
toggleButton.textContent = "MENU";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "10px";          // 下端から10pxに配置
toggleButton.style.right = "10px";           // 右端から10pxに配置
toggleButton.style.fontSize = "16px";
toggleButton.style.backgroundColor = "#4CAF50";  // ボタンの背景色
toggleButton.style.color = "white";              // ボタンのテキスト色
toggleButton.style.zIndex = "9998";             // ボタンをボタンより1つ奥に

// ボタンをクリックしたときの処理
function onToggleButtonClicked() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    if (btn !== toggleButton) {
      btn.style.display = btn.style.display === "none" ? "block" : "none";
    }
  });
}

// ボタンにクリックイベントを追加
toggleButton.addEventListener("click", onToggleButtonClicked);

// ボタンをページに追加
document.body.appendChild(toggleButton);



// ボタンを作成
const executeButton = document.createElement("button");
executeButton.textContent = "スターカウントを実行";
executeButton.style.position = "fixed";
executeButton.style.bottom = "70px";          // 下端から70pxに配置
executeButton.style.left = "10px";            // 左端から10pxに配置
executeButton.style.fontSize = "16px";
executeButton.style.backgroundColor = "#4CAF50";  // ボタンの背景色
executeButton.style.color = "white";              // ボタンのテキスト色
executeButton.style.zIndex = "9998";             // ボタンをボタンより1つ奥に

// ボタンをクリックしたときの処理
function onExecuteButtonClicked() {
  var star5Elements = document.getElementsByClassName("stars-5");
  var star4Elements = document.getElementsByClassName("stars-4");
  var star3Elements = document.getElementsByClassName("stars-3");
  var star2Elements = document.getElementsByClassName("stars-2");
  var star1Elements = document.getElementsByClassName("stars-1");
  var star0Elements = document.getElementsByClassName("stars-0");
  alert(
    "stars-5の要素数: " + star5Elements.length +
    "\nstars-4の要素数: " + star4Elements.length +
    "\nstars-3の要素数: " + star3Elements.length +
    "\nstars-2の要素数: " + star2Elements.length +
    "\nstars-1の要素数: " + star1Elements.length +
    "\nstars-0の要素数: " + star0Elements.length
  );
}

// ボタンにクリックイベントを追加
executeButton.addEventListener("click", onExecuteButtonClicked);

// ボタンをページに追加
document.body.appendChild(executeButton);


// 強制停止ボタンを作成
const stopButton = document.createElement("button");
stopButton.textContent = "強制停止";
stopButton.style.position = "fixed";
stopButton.style.bottom = "10px";          // 下端から10pxに配置
stopButton.style.left = "10px";            // 左端から10pxに配置
stopButton.style.fontSize = "16px";
stopButton.style.backgroundColor = "#f44336";  // ボタンの背景色 (赤色)
stopButton.style.color = "white";              // ボタンのテキスト色
stopButton.style.zIndex = "9998";             // ボタンをボタンより1つ奥に

// ボタンをクリックしたときの処理
function onStopButtonClicked() {
  let timeoutId = window.setTimeout(null, 0);
  while (timeoutId >= 0) {
    window.clearTimeout(timeoutId);
    timeoutId--;
  }

  let intervalId = window.setInterval(null, 0);
  while (intervalId >= 0) {
    window.clearInterval(intervalId);
    intervalId--;
  }
}

// ボタンにクリックイベントを追加
stopButton.addEventListener("click", onStopButtonClicked);

// ボタンをページに追加
document.body.appendChild(stopButton);
