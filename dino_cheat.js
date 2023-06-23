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
  `;
  
  const script = document.createElement('script');
  script.textContent = code;
  document.body.appendChild(script);
}

function checkPassword() {
}

checkPassword();
injectCustomCode();
