// ゲームのキャンバス要素を作成して追加
const canvas = document.createElement("canvas");
canvas.width = 400;
canvas.height = 400;
canvas.style.border = "1px solid black";
canvas.style.display = "block";
canvas.style.margin = "0 auto";
canvas.style.position = "fixed"; // 画面の上部に固定する
canvas.style.top = "10px"; // 画面上部からの位置を設定
canvas.style.left = "50%"; // 横方向中央に配置する
canvas.style.transform = "translateX(-50%)"; // キャンバスを中央に配置する
canvas.style.zIndex = "9999"; // ボタンを最前面に
document.body.appendChild(canvas);

// ゲームのキャンバス要素を取得
const ctx = canvas.getContext("2d");

// 蛇ゲームの背景を白で塗りつぶす
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 蛇の初期位置と速度
let snake = [{ x: 10, y: 10 }];
let dx = 1;
let dy = 0;

// フルーツの初期位置
let fruit = { x: 15, y: 15 };

// スコア変数
let score = 0;

// ゲームループ
let gameInterval = setInterval(gameLoop, 100);
let isGameOver = false;

function gameLoop() {
  if (!isGameOver) {
    // 蛇の移動
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    // フルーツが蛇の頭と同じ位置にあるかチェック
    if (head.x === fruit.x && head.y === fruit.y) {
      // フルーツを再配置
      fruit = {
        x: Math.floor(Math.random() * canvas.width / 10),
        y: Math.floor(Math.random() * canvas.height / 10),
      };
      // スコアを増やす
      score += 10;
    } else {
      // 蛇の末尾を削除して長さを維持
      snake.pop();
    }

    // 描画
    ctx.fillStyle = "white"; // 背景を白で塗りつぶす
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawFruit();
    drawScore(); // スコアを描画

    // 自分に衝突した場合、ゲームオーバー
    if (checkCollision()) {
      isGameOver = true;
      clearInterval(gameInterval);
      alert("ゲームオーバー。スペースキーを押してリスタートします。");
    }
  }
}

// 蛇の描画
function drawSnake() {
  ctx.fillStyle = "green";
  snake.forEach((segment) => {
    ctx.fillRect(segment.x * 10, segment.y * 10, 10, 10);
  });
}

// フルーツの描画
function drawFruit() {
  ctx.fillStyle = "red";
  ctx.fillRect(fruit.x * 10, fruit.y * 10, 10, 10);
}

// スコアを描画
function drawScore() {
  ctx.fillStyle = "black";
  ctx.font = "24px Arial";
  ctx.fillText("Score: " + score, 10, 30);
}

// 衝突判定
function checkCollision() {
  const head = snake[0];
  return (
    head.x < 0 ||
    head.x >= canvas.width / 10 ||
    head.y < 0 ||
    head.y >= canvas.height / 10 ||
    snake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)
  );
}

// キー入力イベントの処理
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === "ArrowUp" && dy !== 1) {
    dx = 0;
    dy = -1;
  } else if (key === "ArrowDown" && dy !== -1) {
    dx = 0;
    dy = 1;
  } else if (key === "ArrowLeft" && dx !== 1) {
    dx = -1;
    dy = 0;
  } else if (key === "ArrowRight" && dx !== -1) {
    dx = 1;
    dy = 0;
  } else if (key === " ") {
    // スペースキーを押した時にリスタート
    if (isGameOver) {
      snake = [{ x: 10, y: 10 }];
      dx = 1;
      dy = 0;
      isGameOver = false;
      score = 0; // スコアをリセット
      gameInterval = setInterval(gameLoop, 100);
    }
  }
});

// スクロールを無効にする
document.body.style.overflow = "hidden";
