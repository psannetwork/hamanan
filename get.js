// GoogleドライブAPIの設定
const CLIENT_ID = '465800647048-00ne18p0veda8ele85lvlli6l2lbmrh3.apps.googleusercontent.com'; // OAuthクライアントID
const API_KEY = 'AIzaSyAOC9SpG4PhwPc2h8vz7Xh9UwfQNUGm7Rk'; // APIキー
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/drive.file';

// Google Maps Geocoding APIの設定
const GEOCODING_API_KEY = 'YOUR_GEOCODING_API_KEY'; // Geocoding APIキー

// IPと位置情報を取得してGoogleドライブに書き込む処理
function writeToDrive() {
  // IP情報を取得するAPIのエンドポイント
  const ipApiEndpoint = 'https://api.ipify.org?format=json';

  // IP情報を取得
  fetch(ipApiEndpoint)
    .then(response => response.json())
    .then(data => {
      const ipAddress = data.ip;
      
      // 位置情報を取得するAPIのエンドポイント
      const geocodingApiEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${ipAddress}&key=${GEOCODING_API_KEY}`;

      // 位置情報を取得
      fetch(geocodingApiEndpoint)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'OK') {
            const location = data.results[0].formatted_address;
            
            // Googleドライブに書き込む処理
            const fileContent = `IP: ${ipAddress}\nLocation: ${location}`;
            const fileName = 'ip_location.txt';

            const fileMetadata = {
              name: fileName,
              mimeType: 'text/plain'
            };

            const fileData = new Blob([fileContent], { type: 'text/plain' });
            const multipartRequestBody = new FormData();
            multipartRequestBody.append('metadata', new Blob([JSON.stringify(fileMetadata)], { type: 'application/json' }));
            multipartRequestBody.append('file', fileData);

            gapi.client.drive.files.create({
              resource: fileMetadata,
              media: {
                mimeType: 'text/plain',
                body: fileContent
              }
            }).then(response => {
              console.log('File created:', response);
            }).catch(error => {
              console.error('Error creating file:', error);
            });
          } else {
            console.error('Geocoding API error:', data.status);
          }
        })
        .catch(error => {
          console.error('Error fetching location:', error);
        });
    })
    .catch(error => {
      console.error('Error fetching IP:', error);
    });
}

// GoogleドライブAPIの初期化
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(() => {
    // GoogleドライブAPIの初期化が完了したら処理を開始
    writeToDrive();
  }).catch(error => {
    console.error('Error initializing Google Drive API:', error);
  });
}

// GoogleドライブAPIのスクリプトを読み込み、初期化
function loadDriveApi() {
  gapi.load('client:auth2', initClient);
}

// GoogleドライブAPIのスクリプトの読み込みが完了したら処理を開始
window.addEventListener('DOMContentLoaded', loadDriveApi);
