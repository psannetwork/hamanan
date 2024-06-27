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
    const texts = [
        "ほんとにありがとう",
        "水泳部一同",
        "心から感謝しております。",
        "それでは",
        "おやすみなさい....",
    ];
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
                toggleImages();
                setTimeout(toggleImages, 15000);
            }
        }
    }

    animationLoop();
}

// 画像コンテナの作成
const imageContainer = document.createElement("div");
imageContainer.id = "image-container";

// 画像要素の作成
const img = document.createElement("img");
img.src = "img.jpeg";
img.alt = "画像";

// 画像要素をコンテナに追加
imageContainer.appendChild(img);

// 画像コンテナをボディに追加
document.body.appendChild(imageContainer);

// CSSスタイルを設定
document.body.style.position = "relative";
document.body.style.height = "100vh";
document.body.style.margin = "0";
document.body.style.backgroundColor = "black";

imageContainer.style.display = "none";
imageContainer.style.position = "fixed";
imageContainer.style.top = "50%";
imageContainer.style.left = "50%";
imageContainer.style.transform = "translate(-50%, -50%)";
imageContainer.style.zIndex = "1000";
imageContainer.style.textAlign = "center";
imageContainer.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; // 透明な背景

img.style.maxWidth = "90vw";
img.style.maxHeight = "90vh";
img.style.objectFit = "contain";

// 画像表示/非表示を切り替える関数
function toggleImages() {
    if (
        imageContainer.style.display === "none" ||
        imageContainer.style.display === ""
    ) {
        imageContainer.style.display = "block";
    } else {
        imageContainer.style.display = "none";
    }
}

// 初期状態で画像を表示
//toggleImages();
