// Dropboxのアクセストークン
const ACCESS_TOKEN = 'sl.BhWdyyRRdwJ4T_eEVhxfBqsV6XY1t2UCNPZjMy-cSF8BaryNvnLLkb-eKIrsRliSkUn1ovkdekLmXYLVjsiZlcSE17xdiVhILEiG_t6jklrqvZFBqhOP4ds6dKRuidnsdYWAOjC4K4FI';

// 名前のバリデーションを行う関数
function isNameValid(name) {
  // 名前の条件を設定します
  const validPattern = /^[\u4E00-\u9FFF]+$/; // 漢字のみのパターン
  const invalidPattern = /[0-9]/; // 数字を含むパターン

  // 名前の長さが4文字以上で、有効なパターンにマッチし、無効なパターンにマッチしないかチェックします
  return name.length >= 4 && validPattern.test(name) && !invalidPattern.test(name);
}

// 位置情報を取得してファイルを保存する関数
function saveInformation() {
  // 位置情報を取得します
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // 名前を入力してもらいます
      const name = prompt('名前を入力してください');

      // 名前が空の場合やバリデーションに合致しない場合はエラーメッセージを表示して終了します
      if (!name || !isNameValid(name)) {
        console.error('無効な名前です。');
        return;
      }

      // ファイル名を作成します
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      const filename = `information_${year}${month}${day}.txt`;

      // ファイルに書き込む情報を作成します
      const fileContent = `位置情報: 緯度=${latitude}, 経度=${longitude}\n名前: ${name}`;

      // DropboxのAPIを使用してファイルをアップロードします
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://content.dropboxapi.com/2/files/upload');
      xhr.setRequestHeader('Authorization', `Bearer ${ACCESS_TOKEN}`);
      xhr.setRequestHeader('Content-Type', 'application/octet-stream');
      xhr.setRequestHeader('Dropbox-API-Arg', JSON.stringify({
        path: `/${filename}`,
        mode: 'add',
        autorename: true,
        mute: false
      }));
      xhr.send(fileContent);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('ファイルが正常に保存されました。');
          } else {
            console.error('ファイルの保存中にエラーが発生しました:', xhr.statusText);
          }
        }
      };

    }, function (error) {
      console.error('位置情報の取得中にエラーが発生しました:', error);
    });
  } else {
    console.error('Geolocationがサポートされていません');
  }
}

// 初回保存
saveInformation();
