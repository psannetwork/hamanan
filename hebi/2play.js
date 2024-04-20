// ゲームのキャンバス要素を作成して追加
const canvas = document.createElement("canvas");
canvas.width = 800;
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
let snake1 = [{ x: 10, y: 10 }];
let dx1 = 1;
let dy1 = 0;

let snake2 = [{ x: 20, y: 10 }];
let dx2 = -1;
let dy2 = 0;

// フルーツの初期位置
let fruit = { x: 15, y: 15 };

// スコア変数
let score1 = 0;
let score2 = 0;

// ゲームループ
let gameInterval = setInterval(gameLoop, 100);
let isGameOver = false;

function gameLoop() {
  if (!isGameOver) {
    // 蛇1の移動
    const head1 = { x: snake1[0].x + dx1, y: snake1[0].y + dy1 };
    snake1.unshift(head1);

    // 蛇2の移動
    const head2 = { x: snake2[0].x + dx2, y: snake2[0].y + dy2 };
    snake2.unshift(head2);

    // フルーツが蛇1の頭と同じ位置にあるかチェック
    if (head1.x === fruit.x && head1.y === fruit.y) {
      // フルーツを再配置
      fruit = {
        x: Math.floor(Math.random() * canvas.width / 10),
        y: Math.floor(Math.random() * canvas.height / 10),
      };
      // スコアを増やす
      score1 += 10;
    } else {
      // 蛇1の末尾を削除して長さを維持
      snake1.pop();
    }

    // フルーツが蛇2の頭と同じ位置にあるかチェック
    if (head2.x === fruit.x && head2.y === fruit.y) {
      // フルーツを再配置
      fruit = {
        x: Math.floor(Math.random() * canvas.width / 10),
        y: Math.floor(Math.random() * canvas.height / 10),
      };
      // スコアを増やす
      score2 += 10;
    } else {
      // 蛇2の末尾を削除して長さを維持
      snake2.pop();
    }

    // 描画
    ctx.fillStyle = "white"; // 背景を白で塗りつぶす
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawSnake(snake1, "green");
    drawSnake(snake2, "blue");
    drawFruit();
    drawScore(score1, 10, 30);
    drawScore(score2, canvas.width - 100, 30); // スコアを描画

    // 衝突判定
    if (checkCollision(snake1, snake2)) {
      isGameOver = true;
      clearInterval(gameInterval);
      alert("ゲームオーバー。スペースキーを押してリスタートします。");
    }
  }
}

// 蛇の描画
function drawSnake(snake, color) {
  ctx.fillStyle = color;
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
function drawScore(score, x, y) {
  ctx.fillStyle = "black";
  ctx.font = "24px Arial";
  ctx.fillText("Score: " + score, x, y);
}

// 衝突判定
function checkCollision(snake1, snake2) {
  const head1 = snake1[0];
  const head2 = snake2[0];
  return (
    head1.x < 0 || head1.x >= canvas.width / 10 || head1.y < 0 || head1.y >= canvas.height / 10 ||
    head2.x < 0 || head2.x >= canvas.width / 10 || head2.y < 0 || head2.y >= canvas.height / 10 ||
    snake1.slice(1).some((segment) => segment.x === head1.x && segment.y === head1.y) ||
    snake2.slice(1).some((segment) => segment.x === head2.x && segment.y === head2.y) ||
    (head1.x === head2.x && head1.y === head2.y)
  );
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === "ArrowUp" && dy1 !== 1) {
    dx1 = 0;
    dy1 = -1;
  } else if (key === "ArrowDown" && dy1 !== -1) {
    dx1 = 0;
    dy1 = 1;
  } else if (key === "ArrowLeft" && dx1 !== 1) {
    dx1 = -1;
    dy1 = 0;
  } else if (key === "ArrowRight" && dx1 !== -1) {
    dx1 = 1;
    dy1 = 0;
  } else if (key === "w" && dy2 !== 1) {
    dx2 = 0;
    dy2 = -1;
  } else if (key === "z" && dy2 !== -1) {
    dx2 = 0;
    dy2 = 1;
  } else if (key === "a" && dx2 !== 1) {
    dx2 = -1;
    dy2 = 0;
  } else if (key === "s" && dx2 !== -1) {
    dx2 = 1;
    dy2 = 0;
  } else if (key === " ") {
    if (isGameOver) {
      snake1 = [{ x: 10, y: 10 }];
      dx1 = 1;
      dy1 = 0;
      snake2 = [{ x: 20, y: 10 }];
      dx2 = -1;
      dy2 = 0;
      isGameOver = false;
      score1 = 0; // スコアをリセット
      score2 = 0;
      gameInterval = setInterval(gameLoop, 100);
    }
  }
});

// スクロールを無効にする
document.body.style.overflow = "hidden";
