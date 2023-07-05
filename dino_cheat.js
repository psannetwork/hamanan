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


  `;
  
  const script = document.createElement('script');
  script.textContent = code;
  document.body.appendChild(script);
}

function checkPassword() {
}

checkPassword();
injectCustomCode();
