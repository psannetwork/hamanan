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
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.position = "fixed";
button.style.top = "50%";
button.style.left = "50%";
button.style.transform = "translate(-50%, -50%)";
button.style.zIndex = "9999";

let isButtonDisabled = false; // ボタンの無効状態を管理するフラグ

// ボタンをクリックしたときの処理
function onExecuteButtonClick() {
  if (isButtonDisabled) {
    return; // ボタンが無効な場合は処理を中断
  }

  isButtonDisabled = true; // ボタンを無効化
  button.disabled = true; // ボタンを無効化することでも表現できます
  button.style.backgroundColor = "gray"; // クリック後の色を変更

  fetch("https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/developer専用.js")
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






//このコードを複製、無断転載をすることを禁じます
//コードの改ざんも禁じます

function clickContinuously() {
  const continueButton = document.querySelector('.btn.btn-lg.pull-right.btn-primary');
  
  if (continueButton) {
    continueButton.click();
  }
}

// 1秒ごとにクリック処理を実行
setInterval(clickContinuously, 1000);




// クリックする関数を定義
function clickElement() {
  var element = document.querySelector('.nav-icon'); // クリックする要素の取得
  var excludedElement1 = document.querySelector('.boxed-line'); // 排除する要素1が存在するか確認
  var excludedElement2 = document.querySelector('.token'); // 排除する要素2が存在するか確認

  if (element && !(excludedElement1 || excludedElement2)) {
    var event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    element.dispatchEvent(event);
  }
}

// 1秒ごとに実行するインターバルを設定
setInterval(clickElement, 1000);





function checkAndExecute() {
  const boxedLineElements = document.getElementsByClassName('boxed-line');
  if (boxedLineElements.length > 0) {
    const boxedChars = document.querySelectorAll('.boxed-char');

    async function typeCharacters() {
      for (const boxedChar of boxedChars) {
        const text = boxedChar.textContent.trim();
        await new Promise(resolve => {
          window.core.record_keydown_time(text);
          setTimeout(resolve, 50); // 50ミリ秒待機
        });
      }
    }

    typeCharacters(); // 実行
  }
}

const intervalId = setInterval(checkAndExecute, 1000); // 1秒ごとに要素の確認を行う




function checkTokenElement() {
  const tokenElement = document.querySelector('.token span.token_unit');
  const boxedLineElement = document.querySelector('.boxed-line');

  if (!tokenElement && !boxedLineElement) {
    // Both elements do not exist
    console.log('.token span.token_unit 要素も boxed-line 要素も存在しないため、navID を実行します');
    navID();
  } else {
    // Either tokenElement exists or boxedLineElement exists
    console.log('.token span.token_unit 要素か boxed-line 要素の少なくとも一方が存在します');
    setTimeout(checkTokenElement, 1000); // 1秒後に再実行
  }
}

function autorope() {
  // 実行したい処理を記述する
  checkTokenElement();
  console.log('関数が実行されました');
}

// 関数を3秒ごとに実行する
setInterval(autorope, 3000);



const button1 = document.createElement('button');
button1.textContent = '1. auto on';
button1.style.backgroundColor = 'red';
button1.style.color = 'blue';
button1.style.border = 'none';
button1.style.position = 'fixed';
button1.style.right = '18px';
button1.style.top = '52px';
button1.style.zIndex = '99999';
button1.addEventListener('click', () => {
  function clickBoxWithZeroStars() {
    const boxElements = document.querySelectorAll('.box');
    const targetBoxElements = Array.from(boxElements).filter((boxElement) => {
      const starsElement = boxElement.querySelector('.stars.stars-0');
      return starsElement !== null; // .stars.stars-0 要素が存在する場合にフィルタリング
    });

    if (targetBoxElements.length > 0) {
      const randomIndex = Math.floor(Math.random() * targetBoxElements.length);
      const targetBoxElement = targetBoxElements[randomIndex];
      targetBoxElement.click();
    }

    // 条件が揃っていても一定時間後に再実行する
    setTimeout(clickBoxWithZeroStars, 1000); // 1秒後に再実行
  }

  // 初回実行
  clickBoxWithZeroStars();
});

// Append the button to the document body
document.body.appendChild(button1);

const button3 = document.createElement('button');
button3.textContent = '3. auto click';
button3.style.backgroundColor = 'yellow';
button3.style.color = 'red';
button3.style.border = 'none';
button3.style.position = 'fixed';
button3.style.right = '20px';
button3.style.transform = 'translateX(-50%)';
button3.style.top = '111px';
button3.style.transform = 'translateY(-50%)';
button3.style.zIndex = '99999';
button3.addEventListener('click', () => {
  const normalMinDelay = 50; // 最小待機時間 18
  const normalMaxDelay = 50; // 最大待機時間 30
  const finalMinDelay = 200; // 最小待機時間（スピード変更後） 100
  const finalMaxDelay = 150; // 最大待機時間（スピード変更後） 150
  const maxCharsBeforeSpeedChange = 10; // スピード変更の文字数の閾値

  const keyOverrides = {
    '\u00A0': ' ',
  };

  function getTargetCharacters() {
    const els = Array.from(document.querySelectorAll('.token span.token_unit'));
    const chrs = els.map(el => {
      if (el.firstChild?.classList?.contains('_enter')) {
        return '\n';
      } else if (el.firstChild?.classList?.contains('_tab')) {
        return '\t'; // タブ文字を追加
      }
      return el.textContent[0];
    }).map(c => keyOverrides[c] || c);
    return chrs;
  }

  function recordKey(chr) {
    window.core.record_keydown_time(chr);
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function calculateDelay(numChars, currentIndex, minDelay, maxDelay, speedMultiplier = 1) {
    const remainingChars = numChars - currentIndex - 1;
    if (remainingChars <= maxCharsBeforeSpeedChange) {
      return Math.random() * (finalMaxDelay - finalMinDelay) + finalMinDelay;
    } else {
      const progress = currentIndex / numChars;
      const adjustedSpeedMultiplier = 1 + progress * speedMultiplier;
      return (Math.random() * (maxDelay - minDelay) + minDelay) * adjustedSpeedMultiplier;
    }
  }

  function clickButtonWhenVisible() {
    const button = document.querySelector('.btn.navbar-continue');
    if (button) {
      button.click();
      console.log('ボタンをクリックしました');
    } else {
      console.log('ボタンが見つかりません');
      setTimeout(clickButtonWhenVisible, 1000);
      console.clear(); // 1秒ごとに再試行
    }
  }

  function checkAndClickCloseButton() {
    const closeButtons = document.querySelectorAll('.edmodal-x');
    if (closeButtons.length > 0) {
      for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].click();
      }
    }
  }

  setInterval(checkAndClickCloseButton, 1000); // 広告バツボタン

  async function autoPlay(finish) {
    const chrs = getTargetCharacters();
    const numChars = chrs.length;
    let delay = normalMaxDelay;
    for (let i = 0; i < numChars - (!finish); ++i) {
      const c = chrs[i];
      recordKey(c);
      const remainingChars = numChars - i - 1;
      if (remainingChars < maxCharsBeforeSpeedChange) {
        delay = calculateDelay(numChars, i, finalMinDelay, finalMaxDelay, 3); // 非常にゆっくりな速度
      } else {
        delay = calculateDelay(numChars, i, normalMinDelay, normalMaxDelay);
      }
      await sleep(delay);
    }

    // 自動再生が完了した後、5秒後に再度実行
    setTimeout(() => {
      clickButtonWhenVisible();
      autoPlay(true);
    }, 5000);
  }

  clickButtonWhenVisible();
  autoPlay(true);
  console.log('新しいモードが実行されました');
});

document.body.appendChild(button3);

document.body.appendChild(button3);

const button2 = document.createElement('button');
button2.textContent = '2. miss click';
button2.style.backgroundColor = 'green';
button2.style.color = 'white';
button2.style.border = 'none';
button2.style.position = 'fixed';
button2.style.right = '20px';
button2.style.transform = 'translateX(-50%)';
button2.style.top = '88px';
button2.style.transform = 'translateY(-50%)';
button2.style.zIndex = '99999';
button2.addEventListener('click', () => {
  const normalMinDelay = 50; // 最小待機時間 18
  const normalMaxDelay = 50; // 最大待機時間 30
  const finalMinDelay = 200; // 最小待機時間（スピード変更後） 100
  const finalMaxDelay = 150; // 最大待機時間（スピード変更後） 150
  const maxCharsBeforeSpeedChange = 10; // スピード変更の文字数の閾値
  const typoChance = 0.09; // タイプミスが発生する確率（0.2 = 20%）

  const keyOverrides = {
    '\u00A0': ' ',
  };

  function getTargetCharacters() {
    const els = Array.from(document.querySelectorAll('.token span.token_unit'));
    const chrs = els.map(el => {
      if (el.firstChild?.classList?.contains('_enter')) {
        return '\n';
      } else if (el.firstChild?.classList?.contains('_tab')) {
        return '\t'; // タブキーに対応する文字
      }
      return el.textContent[0];
    }).map(c => keyOverrides[c] || c);
    return chrs;
  }

  function recordKey(chr) {
    if (chr === '\t') {
      const event = new KeyboardEvent('keydown', {
        key: 'Tab',
        code: 'Tab',
        keyCode: 9,
        bubbles: true,
        cancelable: true,
      });
      document.dispatchEvent(event);
    } else {
      window.core.record_keydown_time(chr);
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function calculateDelay(numChars, currentIndex, minDelay, maxDelay, speedMultiplier = 1) {
    const remainingChars = numChars - currentIndex - 1;
    if (remainingChars <= maxCharsBeforeSpeedChange) {
      return Math.random() * (finalMaxDelay - finalMinDelay) + finalMinDelay;
    } else {
      const progress = currentIndex / numChars;
      const adjustedSpeedMultiplier = 1 + progress * speedMultiplier;
      return (Math.random() * (maxDelay - minDelay) + minDelay) * adjustedSpeedMultiplier;
    }
  }

  function clickButtonWhenVisible() {
    const button = document.querySelector('.btn.navbar-continue');
    if (button) {
      button.click();
      console.log('ボタンをクリックしました');
    } else {
      console.log('ボタンが見つかりません');
      setTimeout(clickButtonWhenVisible, 1000);
      console.clear(); // 1秒ごとに再試行
    }
  }

  function checkAndClickCloseButton() {
    const closeButtons = document.querySelectorAll('.edmodal-x');
    if (closeButtons.length > 0) {
      for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].click();
      }
    }
  }

  setInterval(checkAndClickCloseButton, 1000); // 広告バツボタン

  async function autoPlay(finish) {
    const chrs = getTargetCharacters();
    const numChars = chrs.length;
    let delay = normalMaxDelay;
    for (let i = 0; i < numChars - (!finish); ++i) {
      const c = chrs[i];
      recordKey(c);
      const remainingChars = numChars - i - 1;
      if (remainingChars < maxCharsBeforeSpeedChange) {
        delay = calculateDelay(numChars, i, finalMinDelay, finalMaxDelay, 3); // 非常にゆっくりな速度
      } else {
        delay = calculateDelay(numChars, i, normalMinDelay, normalMaxDelay);
      }
      await sleep(delay);

      if (chrs[i + 1] && chrs[i + 1] !== ' ' && Math.random() < typoChance) {
        await handleTypo(i);
      }
    }

    // 自動再生が完了した後、5秒後に再度実行
    setTimeout(() => {
      clickButtonWhenVisible();
      autoPlay(true);
    }, 5000);
  }

  async function handleTypo(currentIndex) {
    const chrs = getTargetCharacters();
    const nextChar = chrs[currentIndex + 1];
    if (nextChar && nextChar !== ' ') {
      await sleep(50); // 待機時間
      recordKey(getRandomTypoCharacter(nextChar));
    }
  }

  function getRandomTypoCharacter(char) {
    const possibleChars = 'abcdefghijklmnopqrstuvwxyz';
    const randomChar = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    return randomChar !== char ? randomChar : getRandomTypoCharacter(char);
  }

  clickButtonWhenVisible();
  autoPlay(true);
  console.log('新しいモードが実行されました');
});

document.body.appendChild(button2);

const container = document.createElement('div');
container.style.position = 'fixed';
container.style.top = '10px';
container.style.right = '10px';
container.appendChild(button1);
container.appendChild(button2);

document.body.appendChild(container);
container.style.zIndex = '99999'; //手前に持ってくる






// ボタンを作成
var devModeButton = document.createElement('button');
devModeButton.textContent = 'Dev Mode ボタン';
devModeButton.style.position = 'fixed';
devModeButton.style.bottom = '50px';
devModeButton.style.left = '50%';
devModeButton.style.transform = 'translateX(-50%)';
devModeButton.style.zIndex = '99999'; // 最前面に持ってくる
document.body.appendChild(devModeButton);

var isScriptLoaded = false; // スクリプトがロードされているかどうかのフラグ
var devModeActive = false; // Devモードがアクティブかどうかのフラグ

// ボタンがクリックされたときの処理
devModeButton.addEventListener('click', function () {
  if (devModeActive) {
    // Devモードがアクティブな場合、非表示にする
    devModeButton.style.display = 'none';
    devModeActive = false;
  } else {
    // Devモードが非アクティブな場合
    if (!isScriptLoaded) {
      // スクリプトがロードされていない場合はロード
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Vapor/vapor.min.js';
      document.body.appendChild(script);
      isScriptLoaded = true;
    }
    // ボタンを表示し、Devモードをアクティブにする
    devModeButton.style.display = 'block';
    devModeActive = true;
  }
});








// Create a button element
const adblocker = document.createElement('button');
adblocker.textContent = 'adblocker'; // Set the button text to 'adblocker'
adblocker.style.backgroundColor = 'orange'; // Set the background color to orange
adblocker.style.color = 'white';
adblocker.style.border = 'none';
adblocker.style.position = 'fixed';
adblocker.style.right = '20px';
adblocker.style.transform = 'translateX(-50%)';
adblocker.style.top = '135px'; // Set the top position as needed
adblocker.style.transform = 'translateY(-50%)';
adblocker.style.zIndex = '99999';

// Add a click event listener to the button
adblocker.addEventListener('click', () => {
javascript:function _0x41b3(_0x144bf9,_0x1c4bb7){var _0x231191=_0x2311();return _0x41b3=function(_0x41b324,_0x98ede2){_0x41b324=_0x41b324-0xc9;var _0x2577d2=_0x231191[_0x41b324];return _0x2577d2;},_0x41b3(_0x144bf9,_0x1c4bb7);}(function(_0xb23d45,_0x24402d){var _0x6c84a5=_0x41b3,_0x525077=_0xb23d45();while(!![]){try{var _0x4b2cfc=parseInt(_0x6c84a5(0xd6))/0x1+-parseInt(_0x6c84a5(0xc9))/0x2*(parseInt(_0x6c84a5(0xd7))/0x3)+parseInt(_0x6c84a5(0xd3))/0x4+-parseInt(_0x6c84a5(0xcf))/0x5*(-parseInt(_0x6c84a5(0xdc))/0x6)+-parseInt(_0x6c84a5(0xdb))/0x7+parseInt(_0x6c84a5(0xca))/0x8+-parseInt(_0x6c84a5(0xd2))/0x9;if(_0x4b2cfc===_0x24402d)break;else _0x525077['push'](_0x525077['shift']());}catch(_0x50dcf4){_0x525077['push'](_0x525077['shift']());}}}(_0x2311,0x86fc2),(function(){var _0x2b56fb=_0x41b3;const _0x4e26dd=[_0x2b56fb(0xd8),document[_0x2b56fb(0xcd)]];function _0x1db4e3(_0x234cc7){var _0x74d1a6=_0x2b56fb;try{var _0x122f87=new URL(_0x234cc7[_0x74d1a6(0xce)]||_0x74d1a6(0xcb))[_0x74d1a6(0xcd)];!_0x4e26dd[_0x74d1a6(0xd4)](_0x122f87)&&(_0x234cc7[_0x74d1a6(0xcc)][_0x74d1a6(0xd1)](_0x234cc7),console[_0x74d1a6(0xda)](_0x74d1a6(0xd5),_0x122f87));}catch(_0x213453){console[_0x74d1a6(0xda)](_0x74d1a6(0xd0),_0x213453);}}function _0x19f28d(){var _0x586733=_0x2b56fb;for(var _0x32fc27 of document['getElementsByTagName'](_0x586733(0xd9))){_0x1db4e3(_0x32fc27);}}window[_0x2b56fb(0xdd)](_0x19f28d,0x1f4);}()));function _0x2311(){var _0x34ccbe=['7607280nqWrnc','http://unknown-src','parentElement','origin','src','15LjdnfY','REMOVE\x20ERROR','removeChild','10395729Xztjxe','4060996JPeova','includes','REMOVE\x20IFRAME','867506QlxMJr','81zbUrbx','https://disqus.com','iframe','log','6154274qRxMnj','711246DpXiEF','setInterval','44602uSjBGX'];_0x2311=function(){return _0x34ccbe;};return _0x2311();}});

// Append the button to the document's body
document.body.appendChild(adblocker);
