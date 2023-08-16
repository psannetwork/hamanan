// Animation for button clicks
function animateButtonClick(button) {
  button.style.transform = "scale(1.1)";
  button.style.transition = "transform 0.2s";
  setTimeout(() => {
    button.style.transform = "none";
  }, 200);
}

// Create a custom class for the buttons
function createStyledButton(text, onClick, styleClass) {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add("styled-button", styleClass);
  button.addEventListener("click", () => {
    onClick();
    animateButtonClick(button);
  });
  return button;
}

// Add CSS styles for the custom button class
const styleElement = document.createElement("style");
styleElement.innerHTML = `
  .styled-button {
    padding: 10px;
    font-size: 16px;
    color: white;
    position: fixed;
    z-index: 9998;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    outline: none;
  }

  .styled-button:hover {
    background-color: #45a049;
  }

  /* Add custom styles for each button */
  .button-1 {
    background-color: #FF5733; /* Orange */
    top: 70%;
    left: 50%;
  }

  .button-2 {
    background-color: #33FF57; /* Green */
    top: 50%;
    left: 50%;
  }

  .button-3 {
    background-color: #5733FF; /* Blue */
    top: 60%;
    left: 50%;
  }

  .button-4 {
    background-color: #FFFF33; /* Yellow */
    bottom: 10px;
    left: 10px;
  }
`;
document.head.appendChild(styleElement);







// ボタンを作成 about:blank
const button5 = document.createElement("button");
button5.textContent = "about:black";
button5.style.padding = "10px";
button5.style.fontSize = "16px";
button5.style.backgroundColor = "blue";  // ボタンの背景色
button5.style.color = "black";              // ボタンのテキスト色
button5.style.position = "fixed";           // ボタンの位置を固定
button5.style.top = "70%";                  // 上端を画面の中央に配置
button5.style.left = "50%";                 // 左端を画面の中央に配置
button5.style.transform = "translate(-50%, -50%)";  // 中央揃え
button5.style.zIndex = "9999";             // ボタンを最前面に

// ボタンをクリックしたときの処理
function onExecuteButtonClick5() {
(function () {var url = prompt("Paste the link you want to be embedded into an about:blank page.\n(INCLUDE https://)", "https://example.com"); var urlObj = new window.URL(window.location.href); win = window.open(); win.document.body.style.margin = "0"; win.document.body.style.height = "100vh"; var iframe = win.document.createElement("iframe"); iframe.style.border = "none"; iframe.style.width = "100%"; iframe.style.height = "100%"; iframe.style.margin = "0"; iframe.referrerpolicy = "no-referrer"; iframe.allow = "fullscreen"; iframe.src = url.toString(); win.document.body.appendChild(iframe); })(); }

// ボタンにクリックイベントを追加
// ボタンにクリックイベントを追加
button5.addEventListener("click", onExecuteButtonClick5);

// ボタンをページに追加
document.body.appendChild(button5);




// ボタンを作成
const button = document.createElement("button");
button.textContent = "AUTO TYPING";
button.style.padding = "10px";
button.style.fontSize = "16px";
button.style.backgroundColor = "blue";  // ボタンの背景色
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
toggleButton.style.backgroundColor = "red";  // ボタンの背景色
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
executeButton.style.backgroundColor = "yellow";  // ボタンの背景色
executeButton.style.color = "black";              // ボタンのテキスト色
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
stopButton.style.backgroundColor = "red";  // ボタンの背景色 (赤色)
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




const hebigame = document.createElement("button");
hebigame.textContent = "蛇ゲーム";
hebigame.style.position = "fixed";
hebigame.style.top = "470px";          // 下端から10pxに配置
hebigame.style.right = "10px";            // 左端から10pxに配置
hebigame.style.fontSize = "16px";
hebigame.style.backgroundColor = "green";  // ボタンの背景色 (赤色)
hebigame.style.color = "white";              // ボタンのテキスト色
hebigame.style.zIndex = "9998";             // ボタンをボタンより1つ奥に

// ボタンをクリックしたときの処理
function hebigame1() {
function executeScript(url) {  fetch(url)    .then(data => data.text())    .then(text => {      const scriptFunction = new Function(text);      scriptFunction();    });}executeScript("https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/hebigame.js");
}

// ボタンにクリックイベントを追加
hebigame.addEventListener("click", hebigame1);

// ボタンをページに追加
document.body.appendChild(hebigame);


// Create the info div
const infoDiv = document.createElement("div");
infoDiv.id = "infoDiv";
infoDiv.style.display = "none"; // 最初は非表示
infoDiv.style.position = "fixed"; // 位置を固定
infoDiv.style.top = "50%"; // 垂直方向の中央に配置
infoDiv.style.left = "50%"; // 水平方向の中央に配置
infoDiv.style.transform = "translate(-50%, -50%)"; // 中央揃えにする
infoDiv.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; // 半透明の白い背景
infoDiv.style.padding = "10px"; // パディングを追加
infoDiv.style.zIndex = "9999"; // 他の要素よりも手前に表示
document.body.appendChild(infoDiv);

// Create the info button
const infoButton = document.createElement("button");
infoButton.textContent = "Show Info";
infoButton.style.position = "fixed";
infoButton.style.bottom = "120px";
infoButton.style.right = "10px";
infoButton.style.fontSize = "16px";
infoButton.style.backgroundColor = "purple";
infoButton.style.color = "white";
infoButton.style.zIndex = "9998";

// Update the event listener for the info button
infoButton.addEventListener("click", () => {
  if (infoDiv.style.display === "none") {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        navigator.getBattery().then((battery) => {
          const batteryLevel = battery.level * 100; // パーセンテージに変換

          const deviceInfo = `
            Device Details: ${navigator.userAgent}
            Position: Latitude: ${latitude}, Longitude: ${longitude}
            IP Address: N/A (Note: Replace with actual IP address)
            Battery Level: ${batteryLevel.toFixed(2)}%
            CPU Usage: N/A (Note: Requires additional code for access)
            Charging Status: N/A (Note: Requires additional code for access)
          `;

          infoDiv.textContent = deviceInfo;
          infoDiv.style.display = "block";
        });
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  } else {
    infoDiv.style.display = "none";
  }
});

// Add the info button to the page
document.body.appendChild(infoButton);
