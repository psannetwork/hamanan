function animateButtonClick(button) {
  button.style.transform = "scale(1.1)";
  button.style.transition = "transform 0.2s";
  setTimeout(() => {
    button.style.transform = "none";
  }, 200);
}

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

  .button-1 {
    background-color: #FF5733;
    top: 70%;
    left: 50%;
  }

  .button-2 {
    background-color: #33FF57;
    top: 50%;
    left: 50%;
  }

  .button-3 {
    background-color: #5733FF;
    top: 60%;
    left: 50%;
  }

  .button-4 {
    background-color: #FFFF33;
    bottom: 10px;
    left: 10px;
  }

  .psannetworks {
    display: block;
  }
`;
document.head.appendChild(styleElement);

const button5 = document.createElement("button");
button5.textContent = "about:black";
button5.style.padding = "10px";
button5.style.fontSize = "16px";
button5.style.backgroundColor = "blue";
button5.style.color = "black";
button5.style.position = "fixed";
button5.style.top = "70%";
button5.style.left = "50%";
button5.style.transform = "translate(-50%, -50%)";
button5.style.zIndex = "9999";
button5.classList.add("psannetworks");

function onExecuteButtonClick5() {
  (function () {
    var url = prompt("Paste the link you want to be embedded into an about:blank page.\n(INCLUDE https://)", "https://example.com");
    var urlObj = new window.URL(window.location.href);
    win = window.open();
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    var iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.margin = "0";
    iframe.referrerpolicy = "no-referrer";
    iframe.allow = "fullscreen";
    iframe.src = url.toString();
    win.document.body.appendChild(iframe);
  })();
}
button5.addEventListener("click", onExecuteButtonClick5);
document.body.appendChild(button5);

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
button.classList.add("psannetworks");

let isButtonDisabled = false;

function onExecuteButtonClick() {
  if (isButtonDisabled) {
    return;
  }

  isButtonDisabled = true;
  button.disabled = true;
  button.style.backgroundColor = "gray";

  fetch("https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/typing/typing.js")
    .then(response => response.text())
    .then(scriptText => {
      const scriptFunction = new Function(scriptText);
      scriptFunction();
    })
    .catch(error => {
      console.error('エラーが発生しました:', error);
    });
}
button.addEventListener("click", onExecuteButtonClick);
document.body.appendChild(button);

const toggleButton = document.createElement("button");
toggleButton.textContent = "MENU";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "10px";
toggleButton.style.right = "10px";
toggleButton.style.fontSize = "16px";
toggleButton.style.backgroundColor = "red";
toggleButton.style.color = "white";
toggleButton.style.zIndex = "9998";

function onToggleButtonClicked() {
  const elements = document.querySelectorAll(".psannetworks, #copyrightDiv");
  elements.forEach(el => {
    el.style.display = el.style.display === "none" ? "block" : "none";
  });
}
toggleButton.addEventListener("click", onToggleButtonClicked);
document.body.appendChild(toggleButton);

const executeButton = document.createElement("button");
executeButton.textContent = "スターカウントを実行";
executeButton.style.position = "fixed";
executeButton.style.bottom = "70px";
executeButton.style.left = "10px";
executeButton.style.fontSize = "16px";
executeButton.style.backgroundColor = "yellow";
executeButton.style.color = "black";
executeButton.style.zIndex = "9998";
executeButton.classList.add("psannetworks");

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
executeButton.addEventListener("click", onExecuteButtonClicked);
document.body.appendChild(executeButton);

const stopButton = document.createElement("button");
stopButton.textContent = "強制停止";
stopButton.style.position = "fixed";
stopButton.style.bottom = "10px";
stopButton.style.left = "10px";
stopButton.style.fontSize = "16px";
stopButton.style.backgroundColor = "red";
stopButton.style.color = "white";
stopButton.style.zIndex = "9998";
stopButton.classList.add("psannetworks");

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
stopButton.addEventListener("click", onStopButtonClicked);
document.body.appendChild(stopButton);

const hebigame = document.createElement("button");
hebigame.textContent = "蛇ゲーム";
hebigame.style.position = "fixed";
hebigame.style.top = "470px";
hebigame.style.right = "10px";
hebigame.style.fontSize = "16px";
hebigame.style.backgroundColor = "green";
hebigame.style.color = "white";
hebigame.style.zIndex = "9998";
hebigame.classList.add("psannetworks");

function hebigame1() {
  function executeScript(url) {
    fetch(url)
      .then(data => data.text())
      .then(text => {
        const scriptFunction = new Function(text);
        scriptFunction();
      });
  }
  executeScript("https://raw.githubusercontent.com/hirotomoki12345/hamanan/main/hebigame.js");
}
hebigame.addEventListener("click", hebigame1);
document.body.appendChild(hebigame);

const infoDiv = document.createElement("div");
infoDiv.id = "infoDiv";
infoDiv.style.display = "none";
infoDiv.style.position = "fixed";
infoDiv.style.top = "50%";
infoDiv.style.left = "50%";
infoDiv.style.transform = "translate(-50%, -50%)";
infoDiv.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
infoDiv.style.padding = "10px";
infoDiv.style.zIndex = "9999";
document.body.appendChild(infoDiv);

const infoButton = document.createElement("button");
infoButton.textContent = "Show Info";
infoButton.style.position = "fixed";
infoButton.style.bottom = "120px";
infoButton.style.right = "10px";
infoButton.style.fontSize = "16px";
infoButton.style.backgroundColor = "purple";
infoButton.style.color = "white";
infoButton.style.zIndex = "9998";
infoButton.classList.add("psannetworks");

infoButton.addEventListener("click", () => {
  if (infoDiv.style.display === "none") {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch("https://ipinfo.io?callback")
          .then((response) => response.json())
          .then((ipInfo) => {
            navigator.getBattery().then((battery) => {
              const batteryLevel = battery.level * 100;

              const deviceInfo = `
                Device Details: ${navigator.userAgent}
                Position: Latitude: ${latitude}, Longitude: ${longitude}
                IP Address: ${ipInfo.ip}
                Battery Level: ${batteryLevel.toFixed(2)}%
              `;

              infoDiv.textContent = deviceInfo;
              infoDiv.style.display = "block";
            });
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
document.body.appendChild(infoButton);


//コピーライト
const copyrightDiv = document.createElement("div");
copyrightDiv.id = "copyrightDiv";
copyrightDiv.style.position = "fixed";
copyrightDiv.style.bottom = "0";
copyrightDiv.style.left = "0";
copyrightDiv.style.width = "100%";
copyrightDiv.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
copyrightDiv.style.color = "white";
copyrightDiv.style.padding = "10px";
copyrightDiv.style.textAlign = "center";
copyrightDiv.style.zIndex = "9997";
copyrightDiv.innerHTML = `
  <p>&copy; 2024 Psannetwork. All rights reserved.</p>
  <p><a href="https://psannetwork.netlify.app">Home Page</a></p>
`;
document.body.appendChild(copyrightDiv);

function onToggleButtonClicked() {
  const elements = document.querySelectorAll(".psannetworks, #copyrightDiv");
  elements.forEach(el => {
    el.style.display = el.style.display === "none" ? "block" : "none";
  });
}
toggleButton.addEventListener("click", onToggleButtonClicked);





const newButton = document.createElement("button");
newButton.textContent = "NEW BUTTON";
newButton.classList.add("psannetworks");
newButton.style.position = "fixed";
newButton.style.bottom = "80px";
newButton.style.right = "10px";
newButton.style.fontSize = "16px";
newButton.style.backgroundColor = "orange";
newButton.style.color = "white";
newButton.style.zIndex = "9997";

newButton.addEventListener("click", () => {
  const newDiv = document.createElement("div");
  newDiv.style.position = "fixed";
  newDiv.style.top = "10px";
  newDiv.style.right = "10px";
  newDiv.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  newDiv.style.padding = "20px";
  newDiv.style.zIndex = "9998";
  newDiv.innerHTML = `
    <input type="text" placeholder="テキストを入力してください" id="inputText">
    <button id="fetchButton">データ取得</button>
    <div id="result"></div>
    <button id="closeButton">閉じる</button>
  `;

  const existingDiv = document.getElementById("newDiv");
  if (existingDiv) {
    existingDiv.remove();
  }

  newDiv.id = "newDiv";
  document.body.appendChild(newDiv);

  const fetchButton = document.getElementById("fetchButton");
  fetchButton.addEventListener("click", () => {
    const texter = document.getElementById("inputText").value.trim();
    const resultDiv = document.getElementById("result");

    if (texter) {
      const url = `https://script.google.com/macros/s/AKfycbwEFF-V0jBJGcMFC_dbKTGzY-HeiUvF3QKFv_ETfTRFO1qwszYriL3_HjsalvFEm0sK/exec?text=${texter}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const responseNo = data.responseno;
          resultDiv.textContent = `responseno の値は: ${responseNo}`;
        })
        .catch(error => {
          console.error('データを取得できませんでした:', error);
          resultDiv.textContent = 'データを取得できませんでした';
        });
    } else {
      alert('テキストが入力されていません');
    }
  });

  const closeButton = document.getElementById("closeButton");
  closeButton.addEventListener("click", () => {
    newDiv.remove();
  });
});

document.body.appendChild(newButton);

