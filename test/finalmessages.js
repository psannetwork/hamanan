class MovingText {
    constructor(text, x, y, speed) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.color = "white";
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.text, this.x, this.y);
    }

    update() {
        this.y -= this.speed;
    }
}

const movingTexts = [];

function animateMovingTexts() {
    const texts = ["ほんとにありがとう", "またね"];
    texts.forEach((text, index) => {
        const newText = new MovingText(
            text,
            canvas.width / 2,
            canvas.height + 50 + index * 50,
            1,
        );
        movingTexts.push(newText);
    });

    function animationLoop() {
        movingTexts.forEach((text, index) => {
            text.draw();
            text.update();
            if (text.y < -50) {
                movingTexts.splice(index, 1);
            }
        });

        if (movingTexts.length > 0) {
            requestAnimationFrame(animationLoop);
        } else {
            console.log("finish");
            // perfects が true の場合にのみ画像を読み込んで表示する
            if (perfects === true) {
                // 画像を読み込む
                const img = new Image();
                img.onload = function () {
                    // 画像をキャンバスに描画する前に再度クリアする
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0);
                };
                img.src = "img.jpeg"; // 画像のパスを指定する
            }
        }
    }

    animationLoop();
}
