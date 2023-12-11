(function() {
    const canvas = document.createElement("canvas");
    updateCanvasSize(); // 初期化時にキャンバスサイズを設定

    function updateCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", function() {
        updateCanvasSize(); // ウィンドウサイズ変更時にキャンバスサイズを更新
    });

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "auto";
    document.body.appendChild(canvas);

    const context = canvas.getContext("2d");
    let currentColor = "red";
    context.lineWidth = 5;
    context.lineCap = "round";
    let isDrawing = false;
    let eraseMode = false;
    let eraserRadius = 30;

    canvas.addEventListener("touchmove", function(e) {
        e.preventDefault();
    });

    canvas.addEventListener("touchstart", function(e) {
        isDrawing = true;
        const touch = e.touches[0];
        draw(touch.clientX, touch.clientY);
    });

    canvas.addEventListener("touchend", function() {
        isDrawing = false;
        context.beginPath();
    });

    canvas.addEventListener("touchmove", function(e) {
        if (!isDrawing) return;
        const touch = e.touches[0];
        draw(touch.clientX, touch.clientY);
    });

    const colors = ["red", "black", "yellow", "blue"];
    const colorButtonsContainer = document.createElement("div");
    colorButtonsContainer.style.position = "fixed";
    colorButtonsContainer.style.top = "10px";
    colorButtonsContainer.style.left = "10px";
    colorButtonsContainer.style.zIndex = "9999";

    colors.forEach(function(color) {
        const colorButton = document.createElement("button");
        colorButton.innerText = color;
        colorButton.style.marginRight = "10px";
        colorButton.addEventListener("click", function() {
            currentColor = color;
            eraseMode = false;
        });
        colorButtonsContainer.appendChild(colorButton);
    });

    document.body.appendChild(colorButtonsContainer);

    const eraseButton = document.createElement("button");
    eraseButton.innerText = "Eraser";
    eraseButton.style.marginRight = "10px";
    eraseButton.addEventListener("click", function() {
        eraseMode = !eraseMode;
    });
    colorButtonsContainer.appendChild(eraseButton);

    // Reset button
    const resetButton = document.createElement("button");
    resetButton.innerText = "Reset";
    resetButton.style.marginRight = "10px";
    resetButton.style.backgroundColor = "#FF5733"; // Change the background color as needed
    resetButton.style.color = "white";
    resetButton.addEventListener("click", function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });
    colorButtonsContainer.appendChild(resetButton);

    // Screenshot button
    const screenshotButton = document.createElement("button");
    screenshotButton.innerText = "Screenshot";
    screenshotButton.style.marginRight = "10px";
    screenshotButton.style.backgroundColor = "#33AFFF"; // Change the background color as needed
    screenshotButton.style.color = "white";
    screenshotButton.addEventListener("click", function() {
        const timestamp = new Date().toISOString().replace(/[-:.]/g, "_");
        const screenshot = canvas.toDataURL();
        const screenshotLink = document.createElement("a");
        screenshotLink.href = screenshot;
        screenshotLink.download = `screenshot_${timestamp}.png`;
        screenshotLink.click();
    });
    colorButtonsContainer.appendChild(screenshotButton);

    function draw(x, y) {
        context.strokeStyle = eraseMode ? "transparent" : currentColor;
        if (eraseMode) {
            context.globalCompositeOperation = "destination-out";
            context.beginPath();
            context.arc(x, y, eraserRadius, 0, 2 * Math.PI);
            context.fill();
            context.globalCompositeOperation = "source-over";
        } else {
            context.lineTo(x, y);
            context.stroke();
            context.beginPath();
            context.arc(x, y, context.lineWidth / 2, 0, 2 * Math.PI);
            context.fill();
        }
        context.beginPath();
        context.moveTo(x, y);
    }
})();
