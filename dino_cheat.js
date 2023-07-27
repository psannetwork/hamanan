function injectCustomCode() {
  const code = `
    
    const score = prompt("スコアを入力してください:");
    if (score) {
      const distanceRan = parseFloat(score) / Runner.instance_.distanceMeter.config.COEFFICIENT;
      Runner.instance_.distanceRan = distanceRan;
    }
    
    const jumpVelocity = prompt("ジャンプ速度を入力してください:");
    if (jumpVelocity) {
      Runner.instance_.tRex.setJumpVelocity(parseFloat(jumpVelocity));
    }
    
    const invincibleMode = prompt("無敵モードを有効にしますか？（yes/no）");
    if (invincibleMode && invincibleMode.toLowerCase() === "yes") {
      Runner.prototype.gameOver = function() {}; 
    }
    // ユーザーに値を尋ねる
const speed = prompt("速度を入力してください（デフォルト値: 6）:");

// 入力された値を取得し、数値に変換する
const speedValue = parseInt(speed);

// Runner.instance_.setSpeed()メソッドを実行する
Runner.instance_.setSpeed(speedValue);
// ユーザーに値を尋ねる
const gravity = prompt("重力を入力してください（デフォルト値: 0.6）:");

// 入力された値を取得し、数値に変換する
const gravityValue = parseFloat(gravity);

// Runner.instance_.tRex.config.GRAVITYの値を設定する
Runner.instance_.tRex.config.GRAVITY = gravityValue;
//レーザー 
const confirmation = prompt("レーザー使う？（yes/no）");

if (confirmation === "yes") {
  let laserDrawn = false;

const soundURLs = [
  'https://github.com/hirotomoki12345/hirotomoki12345.github.io-flowy/raw/main/1.mp3',
  'https://github.com/hirotomoki12345/hirotomoki12345.github.io-flowy/raw/main/2.mp3'
];

window.addEventListener("keydown", event => {
  if (event.code === "KeyD" && !laserDrawn) {
    playSoundsAndDrawLine();
  }
});

originalClearCanvas = Runner.instance_.clearCanvas;

function drawline() {
  if (!laserDrawn && Runner.instance_.horizon.obstacles.length > 0) {
    Runner.instance_.clearCanvas = () => {};
    Runner.instance_.canvasCtx.strokeStyle = "red";
    Runner.instance_.canvasCtx.lineWidth = 10;
    Runner.instance_.canvasCtx.beginPath();
    Runner.instance_.canvasCtx.moveTo(Runner.instance_.tRex.xPos + 23, Runner.instance_.tRex.yPos + 20);
    Runner.instance_.canvasCtx.lineTo(Runner.instance_.horizon.obstacles[0].xPos + 10, Runner.instance_.horizon.obstacles[0].yPos + 10);
    Runner.instance_.canvasCtx.stroke();
    setTimeout(() => {
      Runner.instance_.clearCanvas = originalClearCanvas;
      Runner.instance_.clearCanvas();
      laserDrawn = false;
    }, 15);
    Runner.instance_.horizon.removeFirstObstacle();
    laserDrawn = true;
  }
}

function playSoundsAndDrawLine() {
  let loadedSounds = 0;
  const audio1 = new Audio(soundURLs[0]);
  const audio2 = new Audio(soundURLs[1]);

  audio1.addEventListener('loadeddata', () => {
    loadedSounds++;
    if (loadedSounds === 2) {
      audio1.play();
      audio2.play();
      drawline();
    }
  });

  audio2.addEventListener('loadeddata', () => {
    loadedSounds++;
    if (loadedSounds === 2) {
      audio1.play();
      audio2.play();
      drawline();
    }
  });
}

} else {
  console.log("コードの実行をキャンセルしました。");
}



  `;
  
  const script = document.createElement('script');
  script.textContent = code;
  document.body.appendChild(script);
}

function checkPassword() {
}

checkPassword();
injectCustomCode();






(function () {
  // 音声ファイルのURL
  const soundURL =
    'https://github.com/hirotomoki12345/hamanan/raw/main/y2meta.com%20-%20Super%20Mario%20Maker%202%20-%20Superball%20Flower%20theme%20%F0%9F%8E%B5%20(128%20kbps).mp3';

  let audio = null;

  function playAudio() {
    if (!audio) {
      audio = new Audio(soundURL);
      audio.loop = true;
      audio.play();
    } else if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function onKeyPress(event) {
    // スペースキーが押された場合
    if (event.code === 'Space') {
      // 音が再生されていない場合は音を再生
      if (!audio || audio.paused) {
        playAudio();
      }
    }
  }

  // キーボードのイベントを監視
  window.addEventListener('keydown', onKeyPress);
})();






javascript:// iキーが押されたときに実行する関数function onIKeyPressed() {  // 走行距離を計算して更新  const distanceRan = parseFloat(score) / Runner.instance_.distanceMeter.config.COEFFICIENT;  Runner.instance_.distanceRan = distanceRan;  // ジャンプ速度を設定  Runner.instance_.tRex.setJumpVelocity(parseFloat(jumpVelocity));  // ゲームの速度を設定  Runner.instance_.setSpeed(speedValue);  // 重力を設定  Runner.instance_.tRex.config.GRAVITY = gravityValue;}// キー入力を監視してiキーが押されたら関数を実行document.addEventListener("keydown", function(event) {  if (event.keyCode === 73) { // 73はiキーのキーコード    onIKeyPressed();  }});
